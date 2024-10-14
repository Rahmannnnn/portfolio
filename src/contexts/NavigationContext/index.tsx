import { PROJECTS } from '@/constants/PROJECTS';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  CSSProperties,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { TransitionContext } from '../TransitionContext';

export enum PAGE {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  NOT_FOUND = 'NOT FOUND',
}

interface CloneImageInterface {
  top: number;
  left: number;
  width: number;
  height: number;
  source: string;
}

interface IClone {
  from: CloneImageInterface;
  to: CloneImageInterface;
  index: number;
}

type NavigationContextType = {
  currentPage: PAGE;
  getCurrentPage: () => void;
  toPage: (menu: PAGE, link: string) => void;

  showModal: boolean;
  setShowModal: (m: boolean) => void;

  cloneElement: JSX.Element;
  setCloneElement: (c: JSX.Element) => void;
  createCloneElement: (c: PAGE) => void;

  clone: IClone;
  setClone: (c: IClone) => void;

  cloneBack: IClone;
  setCloneBack: (c: IClone) => void;
};

export const INITIAL_CLONE_IMAGE: CloneImageInterface = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  source: '',
};

export const INITIAL_CLONE: IClone = {
  from: INITIAL_CLONE_IMAGE,
  to: INITIAL_CLONE_IMAGE,
  index: -1,
};

const INITIAL_CONTEXT: NavigationContextType = {
  currentPage: PAGE.HOME,
  getCurrentPage: () => {},
  toPage: () => {},

  showModal: false,
  setShowModal: () => {},
  cloneElement: <></>,

  setCloneElement: (c: JSX.Element) => {},
  createCloneElement: (c: PAGE) => {},

  clone: INITIAL_CLONE,
  setClone: () => {},
  cloneBack: INITIAL_CLONE,
  setCloneBack: () => {},
};

const NavigationContext = createContext<NavigationContextType>(INITIAL_CONTEXT);

type Props = {
  children: ReactNode;
};

const NavigationProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<PAGE>(PAGE.HOME);

  const [clone, setClone] = useState<IClone>(INITIAL_CLONE);
  const [cloneBack, setCloneBack] = useState<IClone>(INITIAL_CLONE);

  const pathname = usePathname();
  const getCurrentPage = () => {
    let path = pathname.replace('/', '');

    if (path) {
      let index = PROJECTS.findIndex((item) => item.project_slug === path);
      setCurrentPage(index !== -1 ? PAGE.DETAIL : PAGE.NOT_FOUND);
      return;
    }

    setCurrentPage(PAGE.HOME);
  };

  const { timeline } = useContext(TransitionContext);
  const router = useRouter();
  const toPage = (destination: PAGE, link: string) => {
    if (currentPage === destination) return;

    let duration = timeline.duration();
    if (duration) {
      timeline.play().then(() => {
        timeline.seek(1).pause().clear();
        setCurrentPage(destination);
        router.push(link);
      });
    } else {
      setCurrentPage(destination);
      router.push(link);
    }
  };

  const [cloneElement, setCloneElement] = useState<JSX.Element>(<></>);
  const createCloneElement = (c: PAGE) => {
    const from = c === PAGE.HOME ? clone.from : cloneBack.from;
    const { left, top, width, height, source } = from;
    if (source) {
      const style: CSSProperties = {
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,

        width: `${width}px`,
        height: `${height}px`,
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

      const styleImg: CSSProperties = {
        objectFit: 'cover',
        position: 'relative',
        height: '100%',
        width: '100%',
      };

      const element = (
        <div style={style} className={`clone`}>
          <img style={styleImg} src={source} className="clone__image" alt="" />
        </div>
      );

      setCloneElement(element);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        getCurrentPage,

        toPage,

        showModal,
        setShowModal,

        cloneElement,
        setCloneElement,
        createCloneElement,

        clone,
        setClone,

        cloneBack,
        setCloneBack,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
