import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from '../../styles/components/CompletedChallenges';

const CompletedChallenges: React.FunctionComponent = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges;
