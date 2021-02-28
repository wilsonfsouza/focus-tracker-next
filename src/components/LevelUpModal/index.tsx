import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Overlay, Container } from '../../styles/components/LevelUpModal';

const LevelUpModal: React.FunctionComponent = () => {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You reached a new level</p>

        <button type="button" onClick={handleCloseLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal" />
        </button>
      </Container>
    </Overlay>
  );
}

export default LevelUpModal;
