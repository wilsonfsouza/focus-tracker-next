import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from '../../styles/components/ExperienceBar';

const ExperienceBar: React.FunctionComponent = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const [percentToNextLevel, setPercentToNextLevel] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentToNextLevel(Math.round(currentExperience * 100) / experienceToNextLevel)
    }, 100);
  }, [currentExperience]);

  return (
    <Container>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
