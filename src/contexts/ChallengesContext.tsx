import React, { createContext, useCallback, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

interface IChallenge {
  type: string;
  description: string;
  amount: number;
};

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
  handleLevelUp: () => void;
  handleStartNewChallenge: () => void;
  handleResetChallenge: () => void;
  handleCompleteChallenge: () => void;
  handleCloseLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext<ChallengesContextData>({} as ChallengesContextData);

const ChallengesProvider: React.FunctionComponent<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState<IChallenge>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const handleLevelUp = useCallback(() => {
    setLevel(level => level + 1);
    setIsLevelUpModalOpen(true);
  }, []);

  const handleStartNewChallenge = useCallback(() => {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('New Challenge 🎉', {
        body: `Award ${challenge.amount}xp!`
      })
    }
  }, []);

  const handleResetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const handleCompleteChallenge = useCallback(() => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(state => state + 1);
  }, [activeChallenge, currentExperience, experienceToNextLevel, handleLevelUp, setActiveChallenge, setChallengesCompleted]);

  const handleCloseLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        handleLevelUp,
        handleStartNewChallenge,
        handleResetChallenge,
        handleCompleteChallenge,
        handleCloseLevelUpModal
      }}
    >
      {children}
      {isLevelUpModalOpen && (<LevelUpModal />)}
    </ChallengesContext.Provider>
  );
}

export { ChallengesProvider }
