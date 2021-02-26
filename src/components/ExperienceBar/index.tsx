import React from 'react';

import { Container } from '../../styles/components/ExperienceBar';

const ExperienceBar: React.FunctionComponent = () => {
  return (
    <Container>
      <span>0 px</span>
      <div>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>300px</span>
      </div>
      <span>600 xp</span>
    </Container>
  );
};

export default ExperienceBar;
