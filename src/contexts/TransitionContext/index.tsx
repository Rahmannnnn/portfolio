import { gsap } from 'gsap';
import { createContext, ReactNode, useState } from 'react';

type transitionContextType = {
  timeline: GSAPTimeline;
};

const transitionContextDefaultValues: transitionContextType = {
  timeline: gsap.timeline({ paused: true }),
};

const TransitionContext = createContext<transitionContextType>(
  transitionContextDefaultValues
);

type Props = {
  children: ReactNode;
};

const TransitionProvider = ({ children }: Props) => {
  const [timeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider
      value={{
        timeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionProvider };
