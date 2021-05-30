import React from 'react';

import { useRouter } from 'next/router';

import LogoIcon from '../../assets/focus-logo.svg';
import { FiHome, FiAward, FiLogOut } from 'react-icons/fi';
import { ThemeButton } from '../ThemeButton';
import SideBarLink from '../SideBarLink';

import { Container, TabSection, LogoutSection } from '../../styles/components/SideBar';
import { useAuth } from '../../hooks/auth';

const SideBar: React.FunctionComponent = () => {
  const { signOut } = useAuth();
  const { asPath } = useRouter();

  return (
    <Container>
      <LogoIcon />

      <TabSection>
        <SideBarLink title="Home" href="/" icon={FiHome} isActivable={true} isActive={asPath === '/' ? true : false} />
        <SideBarLink title="Stats" style={{ cursor: 'not-allowed' }} icon={FiAward} isActivable={true} isActive={false} />
        <ThemeButton />
      </TabSection>

      <LogoutSection>
        <SideBarLink title="Logout" href="/login" icon={FiLogOut} onClick={signOut} />
      </LogoutSection>
    </Container>
  );
}

export default SideBar;
