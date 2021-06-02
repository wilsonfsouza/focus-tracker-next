import { useCallback, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import LevelUpIcon from '../../assets/icons/level-up.svg';
import BodyIcon from '../../assets/icons/body.svg';
import EyeIcon from '../../assets/icons/eye.svg';

import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
  ChallengeActiveMain,
  ChallengeActiveFooter
} from '../../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, handleResetChallenge, handleCompleteChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = useCallback(() => {
    handleCompleteChallenge();
    resetCountDown();
  }, [handleCompleteChallenge, resetCountDown]);

  const handleChallengeFailed = useCallback(() => {
    handleResetChallenge();
    resetCountDown();
  }, [handleResetChallenge, resetCountDown]);

  if (activeChallenge) {
    return (
      <Container>
        <ChallengeActive>
          <header>Win {activeChallenge.amount} xp</header>
          <ChallengeActiveMain>
            {activeChallenge.type === 'body' ? (<BodyIcon data-testid="bodyIcon" />) : (<EyeIcon data-testid="eyeIcon" />)}

            <strong>New Challenge</strong>

            <p>{activeChallenge.description}</p>
          </ChallengeActiveMain>

          <ChallengeActiveFooter>
            <ChallengeButton
              type="button"
              fail
              onClick={handleChallengeFailed}
              tabIndex={0}
            >
              Failed
            </ChallengeButton>
            <ChallengeButton
              type="button"
              success
              onClick={handleChallengeSucceeded}
              tabIndex={0}
            >
              Succeeded
            </ChallengeButton>
          </ChallengeActiveFooter>
        </ChallengeActive>
      </Container>
    )
  }

  return (
    <Container>
      <ChallengeNotActive>
        <strong>
          Complete a new cycle to receive your next challenge
        </strong>
        <p>
          <span>
            <LevelUpIcon />
          </span>
          Level up by completing challenges.
        </p>
      </ChallengeNotActive>
    </Container>
  );
}
