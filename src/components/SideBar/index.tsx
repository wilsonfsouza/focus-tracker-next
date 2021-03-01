import React from 'react';

// import Link from 'next/link';
import LogoIcon from '../../assets/focus-logo.svg';
import { FiHome, FiAward, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import SideBarButton from '../SideBarButton';

import { Container, TabSection, LogoutSection } from '../../styles/components/SideBar';

const SideBar: React.FunctionComponent = () => {
  return (
    <Container>
      <LogoIcon />

      <TabSection>
        <SideBarButton href="/" icon={FiHome} isActivable isActive={true} />
        <SideBarButton icon={FiAward} isActivable isActive={false} />
        <SideBarButton icon={FiSun} isActivable={false} />
      </TabSection>

      <LogoutSection>
        <SideBarButton href="/" icon={FiLogOut} isActivable={false} />
      </LogoutSection>
    </Container>
  );
}

export default SideBar;
