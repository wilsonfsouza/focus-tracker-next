import React from 'react';

import { Container, LoadingContainer, LoadingBar } from '../../styles/components/Loader';
import Logo from '../../assets/focus-logo.svg';

const Loader: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo />
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    </Container>
  );
}

export default Loader;
