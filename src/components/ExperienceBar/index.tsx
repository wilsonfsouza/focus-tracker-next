import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from '../../styles/components/ExperienceBar';

export function ExperienceBar() {
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
        <div data-testid="percentToNextLevel" style={{ width: `${percentToNextLevel}%` }} />
        <span data-testid="currentExperience" style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};
