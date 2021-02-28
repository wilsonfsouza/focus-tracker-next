import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, CountdownContainer, CountdownButton } from '../../styles/components/Countdown';

const Countdown: React.FunctionComponent = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton disabled>
          Done
          <img src="icons/check_circle.svg" alt="Completed Cycle" />
        </CountdownButton>
      ) : (
          <>
            {isActive ? (
              <CountdownButton isActive type="button" onClick={resetCountDown}>
                Stop
              </CountdownButton>
            ) : (
                <CountdownButton type="button" onClick={startCountDown}>
                  Start
                </CountdownButton>
              )}
          </>
        )}
    </Container>
  );
}

export default Countdown;
