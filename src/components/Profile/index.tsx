import React from 'react';

import { Container } from '../../styles/components/Profile';

const Profile: React.FunctionComponent = () => {
  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/21347383?s=460&u=fdb399c92e369762d45d6495cbd2e87eef9e4d65&v=4" alt="Wilson Franca" />
      <div>
        <strong>Wilson Franca</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
}

export default Profile;