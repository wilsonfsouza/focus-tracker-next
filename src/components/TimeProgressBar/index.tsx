import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container } from '../../styles/components/TimeProgressBar';

export function TimeProgressBar() {
  const {
    time,
    challengeTime,
  } = useContext(CountdownContext);

  const progressBarPercentage = 100 - (Math.round(time * 100) / challengeTime);

  return (
    <Container>
      <div />
      <div style={{ width: `${progressBarPercentage}%` }} />
    </Container>
  );
};
