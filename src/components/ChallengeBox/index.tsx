import React, { useCallback, useContext } from 'react';
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
            {activeChallenge.type === 'body' ? (<BodyIcon />) : (<EyeIcon />)}

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
              <div>
                <LevelUpIcon />
              </div>
          Level up by completing challenges.
        </p>
          </ChallengeNotActive >
        )}
    </Container >
  );
}

export default ChallengeBox;
