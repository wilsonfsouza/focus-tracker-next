import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Overlay, Container } from '../../styles/components/LevelUpModal';
import CloseIcon from '../../assets/icons/close.svg';

export function LevelUpModal() {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You reached a new level</p>

        <button type="button" onClick={handleCloseLevelUpModal} tabIndex={0}>
          <CloseIcon />
        </button>
      </Container>
    </Overlay>
  );
}
