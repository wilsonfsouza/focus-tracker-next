import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import DoneIcon from '../../assets/icons/check_circle.svg';

import { TimeProgressBar } from '../TimeProgressBar';
import { Container, CountdownContainer, CountdownButton } from '../../styles/components/Countdown';

export function Countdown() {
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
          <span data-testid="minuteLeft">{minuteLeft}</span>
          <span data-testid="minuteRight">{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span data-testid="secondLeft">{secondLeft}</span>
          <span data-testid="secondRight">{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton disabled>
          Done
          <DoneIcon />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton isActive type="button" style={{ overflow: 'hidden', position: 'relative' }} onClick={resetCountDown}>
              Stop
              <TimeProgressBar />
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
