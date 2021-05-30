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
        <SideBarLink href="/" icon={FiHome} isActivable isActive={asPath === '/' ? true : false} />
        <SideBarLink style={{ cursor: 'not-allowed' }} icon={FiAward} isActivable isActive={false} />
        <ThemeButton />
      </TabSection>

      <LogoutSection>
        <SideBarLink href="/login" icon={FiLogOut} onClick={signOut} isActivable={false} />
      </LogoutSection>
    </Container>
  );
}

export default SideBar;
