import React, { useCallback, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
  ChallengeActiveMain,
  ChallengeActiveFooter
} from '../../styles/components/ChallengeBox';

const ChallengeBox: React.FunctionComponent = () => {
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

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Win {activeChallenge.amount} xp</header>
          <ChallengeActiveMain>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge" />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </ChallengeActiveMain>

          <ChallengeActiveFooter>
            <ChallengeButton
              type="button"
              fail
              onClick={handleChallengeFailed}
            >
              Failed
            </ChallengeButton>
            <ChallengeButton
              type="button"
              success
              onClick={handleChallengeSucceeded}
            >
              Succeeded
            </ChallengeButton>
          </ChallengeActiveFooter>
        </ChallengeActive>
      ) : (
          <ChallengeNotActive>
            <strong>
              Complete a new cycle to receive your next challenge
        </strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Level up by completing challenges.
        </p>
          </ChallengeNotActive >
        )}
    </Container >
  );
}

export default ChallengeBox;
