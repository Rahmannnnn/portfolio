import { createContext, ReactNode, useState } from 'react';

type NavigationContextType = {
  showModal: boolean;
  setShowModal: (m: boolean) => void;
};

const INITIAL_CONTEXT: NavigationContextType = {
  showModal: false,
  setShowModal: () => {},
};

const NavigationContext = createContext<NavigationContextType>(INITIAL_CONTEXT);

type Props = {
  children: ReactNode;
};

const NavigationProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };
