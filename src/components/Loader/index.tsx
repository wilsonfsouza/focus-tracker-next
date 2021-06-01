import { Container, LoadingContainer, LoadingBar } from '../../styles/components/Loader';
import Logo from '../../assets/focus-logo.svg';

export default function Loader() {
  return (
    <Container>
      <Logo />
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    </Container>
  );
}
