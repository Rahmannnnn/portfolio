import { ICONS } from '@/constants/ICONS';
import { FaCss3Alt, FaFigma, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoVue } from 'react-icons/io5';
import {
  SiGoogleforms,
  SiJest,
  SiNextdotjs,
  SiPostman,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const getIcon = (keyword: ICONS) => {
  switch (keyword) {
    case ICONS.NEXTJS:
      return <SiNextdotjs />;

    case ICONS.REACTJS:
      return <FaReact />;

    case ICONS.CSS:
      return <FaCss3Alt />;

    case ICONS.SCSS:
      return <FaSass />;

    case ICONS.FIGMA:
      return <FaFigma />;

    case ICONS.GOLANG:
      return <FaGolang />;

    case ICONS.HTML:
      return <FaHtml5 />;

    case ICONS.JAVASCRIPT:
      return <IoLogoJavascript />;

    case ICONS.JEST:
      return <SiJest />;

    case ICONS.POSTMAN:
      return <SiPostman />;

    case ICONS.VSCODE:
      return <VscVscode />;

    case ICONS.VUEJS:
      return <IoLogoVue />;

    case ICONS.GOOGLEFORMS:
      return <SiGoogleforms />;

    case ICONS.TYPESCRIPT:
      return <SiTypescript />;

    default:
      return <></>;
  }
};
