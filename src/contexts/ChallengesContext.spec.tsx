import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';
import { ThemeProvider } from '../hooks/theme';
import { ChallengesContext, ChallengesProvider } from './ChallengesContext';

describe('ChallengesContext', () => {
  it('should render initial state correctly', async () => {
    const wrapper = ({ children }) => <ChallengesProvider>{children}</ChallengesProvider>

    const { result } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    expect(result.current.level).toBe(1);
    expect(result.current.currentExperience).toBe(0);
    expect(result.current.challengesCompleted).toBe(0);
  });

  it('should render initial state with given props correctly', async () => {
    const initialProps = {
      level: 5,
      currentExperience: 1000,
      challengesCompleted: 10
    }

    const wrapper = ({ children }) => <ChallengesProvider {...initialProps}>{children}</ChallengesProvider>

    const { result } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    expect(result.current.level).toBe(5);
    expect(result.current.currentExperience).toBe(1000);
    expect(result.current.challengesCompleted).toBe(10);
  });

  it('should increase level and experience to next level when user level up', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0
    }

    const wrapper = ({ children }) => <ThemeProvider><ChallengesProvider {...initialProps}>{children}</ChallengesProvider></ThemeProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleLevelUp();
    });

    await waitFor(() => { });

    expect(result.current.level).toBe(2);
    expect(result.current.experienceToNextLevel).toBe(144);
  });

  it('should be able to close the level up modal', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0
    }

    const wrapper = ({ children }) => <ThemeProvider><ChallengesProvider {...initialProps}>{children}</ChallengesProvider></ThemeProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleLevelUp();
    });

    await waitFor(() => { });

    const spyOnItem = jest.spyOn(result.current, 'handleCloseLevelUpModal');

    act(() => {
      result.current.handleCloseLevelUpModal();
    });

    expect(spyOnItem).toHaveBeenCalledTimes(1);
  });

  it('should start a new challenge after completing a session', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0
    }

    const wrapper = ({ children }) => <ChallengesProvider {...initialProps}>{children}</ChallengesProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleStartNewChallenge()
    });

    await waitFor(() => { })

    expect(result.current.activeChallenge).toBeTruthy();
  });

  it('should return to previous stats if failed', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0
    }

    const wrapper = ({ children }) => <ChallengesProvider {...initialProps}>{children}</ChallengesProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleResetChallenge()
    });

    await waitFor(() => { })

    expect(result.current.level).toBe(1);
    expect(result.current.currentExperience).toBe(0);
    expect(result.current.challengesCompleted).toBe(0);
  });

  it('should increase experience but not level after a challenge is completed', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    }

    const wrapper = ({ children }) => <ThemeProvider><ChallengesProvider {...initialProps}>{children}</ChallengesProvider></ThemeProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleStartNewChallenge()
    });

    await waitFor(() => { })

    act(() => {
      result.current["activeChallenge"]["amount"] = 50;
      result.current.handleCompleteChallenge()
    })

    expect(result.current.level).toBe(1);
    expect(result.current.currentExperience).toBe(50)
    expect(result.current.challengesCompleted).toBe(1);
  });

  it('should increase experience and level after a challenge is completed if active challenge amount is greater than the amount needed', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    }

    const wrapper = ({ children }) => <ThemeProvider><ChallengesProvider {...initialProps}>{children}</ChallengesProvider></ThemeProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleStartNewChallenge()
    });

    await waitFor(() => { })

    act(() => {
      result.current["activeChallenge"]["amount"] = 100;
      result.current.handleCompleteChallenge()
    })

    expect(result.current.level).toBe(2);
    expect(result.current.currentExperience).toBeGreaterThan(0)
    expect(result.current.challengesCompleted).toBe(1);
  });

  it('should not increase experience after a challenge is completed if there is no active challenge', async () => {
    const initialProps = {
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    }

    const wrapper = ({ children }) => <ThemeProvider><ChallengesProvider {...initialProps}>{children}</ChallengesProvider></ThemeProvider>

    const { result, waitFor } = renderHook(() => useContext(ChallengesContext), {
      wrapper,
    });

    act(() => {
      result.current.handleStartNewChallenge()

      result.current["activeChallenge"] = null;

      result.current.handleCompleteChallenge()
    });

    await waitFor(() => { });

    expect(result.current.challengesCompleted).toBe(0);
  });
})
