import React, { createContext, useCallback, useState, ReactNode, useContext, useEffect, useMemo } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  challengeTime: number;
  time: number;
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;


const CountdownProvider: React.FunctionComponent<CountdownProviderProps> = ({ children }) => {
  const { handleStartNewChallenge } = useContext(ChallengesContext);
  const challengeTime = useMemo(() => 25 * 60, []);

  const [time, setTime] = useState(challengeTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountDown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(challengeTime);
    setHasFinished(false);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      handleStartNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        challengeTime,
        time,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export { CountdownProvider, CountdownContext }
