import { PROJECTS } from '@/constants/PROJECTS';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useState } from 'react';
import { TransitionContext } from '../TransitionContext';

export enum PAGE {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  NOT_FOUND = 'NOT FOUND',
}

type NavigationContextType = {
  currentPage: PAGE;
  getCurrentPage: () => void;
  toPage: (menu: PAGE, link: string) => void;

  showModal: boolean;
  setShowModal: (m: boolean) => void;
};

const INITIAL_CONTEXT: NavigationContextType = {
  currentPage: PAGE.HOME,
  getCurrentPage: () => {},
  toPage: () => {},

  showModal: false,
  setShowModal: () => {},
};

const NavigationContext = createContext<NavigationContextType>(INITIAL_CONTEXT);

type Props = {
  children: ReactNode;
};

const NavigationProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<PAGE>(PAGE.HOME);

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

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        getCurrentPage,

        toPage,

        showModal,
        setShowModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
