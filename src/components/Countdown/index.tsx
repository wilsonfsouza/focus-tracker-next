import React, { useCallback, useState, useEffect } from 'react';

import { Container, CountdownContainer, CountdownButton } from '../../styles/components/Countdown';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FunctionComponent = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountDown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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
