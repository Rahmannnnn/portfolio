'use client';
import { IProjectDetail } from '@/constants/PROJECT_DETAIL';
import React, {
  createRef,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './index.module.scss';

import * as THREE from 'three';
import { NavigationContext, PAGE } from '@/contexts/NavigationContext';
import { Project, PROJECTS } from '@/constants/PROJECTS';

let current = 0;
let target = 0;
let ease = 0.075;

type Props = {
  images: string[];
  project_slug: string;
  projectDetail: IProjectDetail;
};

const EffectCanvas = ({ project_slug, projectDetail }: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [imageRefs] = useState<RefObject<HTMLImageElement>[]>(() =>
    Array(projectDetail.images.length)
      .fill(null)
      .map((_) => createRef())
  );

  const lerp = (f0: number, f1: number, t: number) => {
    return (1 - t) * f0 + t * f1;
  };

  const smoothScroll = () => {
    if (scrollableRef.current) {
      target = window.scrollY;
      current = lerp(current, target, ease);
      scrollableRef.current.style.transform = `translate3d(0,${-current}px,0)`;
    }
  };

  const {
    toPage,
    clone,
    setClone,
    createCloneElement,
    cloneBack,
    setCloneBack,
  } = useContext(NavigationContext);

  const getCloneBack = () => {
    if (cloneBack.index === -1 || !cloneBack.from.source) {
      // get index
      let index = PROJECTS.findIndex(
        (item) => item.project_slug === project_slug
      );

      // get from
      if (index !== -1) {
        const ref = imageRefs[0];
        if (ref.current) {
          const { width, height, top, left } =
            ref.current.getBoundingClientRect();
          const { src } = ref.current;

          setCloneBack({
            ...cloneBack,
            index,
            from: {
              width,
              height,
              top,
              left,
              source: src,
            },
          });
        }
      }
    }
  };

  useEffect(() => {
    window.scroll(0, 1);
  }, []);

  useEffect(() => {
    if (imageRefs[0]) {
      if (imageRefs[0].current) {
        const { top, left } = imageRefs[0].current.getBoundingClientRect();
        const { src: source, clientHeight, clientWidth } = imageRefs[0].current;

        setClone({
          ...clone,
          to: {
            source,
            top,
            left,
            width: clientWidth,
            height: clientHeight,
          },
        });
      }
    }
  }, [imageRefs[0].current]);

  useEffect(() => {
    getCloneBack();

    window.addEventListener('popstate', () => {
      const { from } = cloneBack;
      if (from.source) {
        createCloneElement(PAGE.DETAIL);
      }
    });

    return () => window.removeEventListener('popstate', () => {});
  }, [cloneBack]);

  const init = () => {
    getCloneBack();
    if (scrollableRef.current) {
      document.body.style.height = `calc(${
        scrollableRef.current.getBoundingClientRect().height
      }px + 70vh)`;
    }
  };

  type MeshParentConstructor = {
    container: RefObject<HTMLDivElement>;
    scrollable: RefObject<HTMLDivElement>;
    images: RefObject<HTMLImageElement>[];
  };

  class MeshParent {
    // Ref
    container: RefObject<HTMLDivElement>;
    scrollable: RefObject<HTMLDivElement>;
    images: RefObject<HTMLImageElement>[];

    // Mesh Items
    meshItems: MeshItem[] = [];

    // THREE
    scene: THREE.Scene = new THREE.Scene();
    camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

    constructor(obj: MeshParentConstructor) {
      this.container = obj.container;
      this.scrollable = obj.scrollable;
      this.images = obj.images;

      this.setupCamera();
      this.createMeshItems();
      this.render();
    }

    get viewport() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let aspectRatio = width / height;
      return {
        width,
        height,
        aspectRatio,
      };
    }

    setupCamera() {
      window.addEventListener('resize', this.onWindowResize.bind(this), false);
      this.scene = new THREE.Scene();
      let perspective = 1000;

      const fov =
        (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI; // see fov image for a picture breakdown of this fov setting.
      this.camera = new THREE.PerspectiveCamera(
        fov,
        this.viewport.aspectRatio,
        1,
        1000
      );

      this.camera.position.set(0, 0, perspective); // set the camera position on the z axis.

      this.renderer = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(this.viewport.width, this.viewport.height); // uses the getter viewport function above to set size of canvas / renderer
      this.renderer.setPixelRatio(window.devicePixelRatio);
      if (this.container.current) {
        this.container.current.appendChild(this.renderer.domElement); // append the canvas to the main element
      }
    }

    onWindowResize() {
      init();
      this.camera.aspect = this.viewport.aspectRatio; // readjust the aspect ratio.
      this.camera.updateProjectionMatrix(); // Used to recalulate projectin dimensions.
      this.renderer.setSize(this.viewport.width, this.viewport.height);
    }

    createMeshItems() {
      this.images.forEach((image) => {
        let meshItem = new MeshItem(image, this.scene);
        this.meshItems.push(meshItem);
      });
    }

    render() {
      init();
      smoothScroll();
      for (let i = 0; i < this.meshItems.length; i++) {
        this.meshItems[i].render();
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render.bind(this));
    }
  }

  class MeshItem {
    element: RefObject<HTMLImageElement>;
    scene: THREE.Scene;

    offset: THREE.Vector2;
    sizes: THREE.Vector2;

    geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry();
    imageTexture: THREE.Texture = new THREE.Texture();
    material: THREE.Material = new THREE.Material();
    uniforms: THREE.ShaderMaterialParameters = { uniforms: {} };
    mesh: THREE.Mesh = new THREE.Mesh();

    naturalWidth: number = 0;
    naturalHeight: number = 0;

    constructor(element: RefObject<HTMLImageElement>, scene: THREE.Scene) {
      this.element = element;
      this.scene = scene;

      this.offset = new THREE.Vector2(0, 0);
      this.sizes = new THREE.Vector2(0, 0);
      this.createMesh();
    }

    getDimensions() {
      if (this.element.current) {
        const { width, height, top, left } =
          this.element.current.getBoundingClientRect();

        this.offset.set(
          left - window.innerWidth / 2 + width / 2,
          -top + window.innerHeight / 2 - height / 2
        );
        this.sizes.set(width, height);
      }
    }

    createMesh() {
      if (this.element.current) {
        this.geometry = new THREE.PlaneGeometry(1, 1, 100, 100);
        this.imageTexture = new THREE.TextureLoader().load(
          this.element.current.src,
          (item) => {
            if (item.image) {
              this.naturalHeight = item.image.naturalHeight;
              this.naturalWidth = item.image.naturalWidth;
            }

            return item;
          }
        );
        this.uniforms = {
          uniforms: {
            uTexture: {
              //texture data
              value: this.imageTexture,
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(0.0, 0.0),
            },
            uAlpha: {
              //opacity
              value: 1.0,
            },
          },
        };

        const fragmentShader = `
          precision highp float;
          uniform sampler2D uTexture;

          uniform float uAlpha;
          uniform vec2 uOffset;
          
          varying vec2 vUv;
          
          vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
            float r = texture2D(textureImage,uv + offset).r;
            vec2 gb = texture2D(textureImage,uv).gb;
            return vec3(r,gb);
          }
          
          void main() {
            vec3 color = rgbShift(uTexture,vUv,uOffset);
            gl_FragColor = vec4(color,uAlpha);
          }
        `;

        const vertexShader = `
          uniform sampler2D uTexture;
          uniform vec2 uOffset;
          varying vec2 vUv;
  
          float M_PI = 3.1415926535897932384626433832795;
  
          vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
            position.x = position.x + (sin(uv.y * M_PI) * offset.x);
            position.y = position.y + (sin(uv.x * M_PI) * offset.y);
            return position;
          }
  
          void main() {
            vUv = uv;
            vec3 newPosition = deformationCurve(position, uv, uOffset);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
          }
        `;

        this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms.uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          side: THREE.DoubleSide,
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

        this.scene.add(this.mesh);
      }
    }

    render() {
      this.getDimensions();
      this.mesh.position.set(this.offset.x, this.offset.y, 0);
      this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

      if (this.uniforms.uniforms) {
        this.uniforms.uniforms.uOffset.value.set(
          this.offset.x * 0.0,
          (target - current) * 0.0003
        );
      }
    }
  }

  useEffect(() => {
    init();
    new MeshParent({
      container: mainRef,
      scrollable: scrollableRef,
      images: imageRefs,
    });
  }, []);

  const [nextProject] = useState<Project>(() => {
    let index = PROJECTS.findIndex(
      (item) => item.project_slug === project_slug
    );

    if (index === -1) {
      return PROJECTS[0];
    }

    return index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];
  });

  const handleNextProject = () => {
    toPage(PAGE.DETAIL, nextProject.project_slug);
  };

  return (
    <div ref={mainRef} className={`main ${styles.main}`}>
      <div ref={scrollableRef} className={`scrollable ${styles.scrollable}`}>
        <div className={`container ${styles.container}`}>
          {projectDetail.images.map((item, index) => {
            return (
              <div
                key={`mesh-item-${index}`}
                className={`${styles.container__image}`}
              >
                <img ref={imageRefs[index]} src={item} alt="" />
              </div>
            );
          })}
        </div>

        <div className={styles.next} onClick={handleNextProject}>
          <p>Next Project</p>
          <h1>{nextProject.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default EffectCanvas;
