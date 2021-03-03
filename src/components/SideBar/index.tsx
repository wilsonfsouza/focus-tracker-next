import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoIcon from '../../assets/focus-logo.svg';
import { FiHome, FiAward, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import SideBarButton from '../SideBarButton';

import { Container, TabSection, LogoutSection } from '../../styles/components/SideBar';
import { useAuth } from '../../contexts/auth';

const SideBar: React.FunctionComponent = () => {
  const { signOut } = useAuth();
  const { asPath } = useRouter();

  return (
    <Container>
      <LogoIcon />

      <TabSection>
        <Link href="/" passHref>
          <SideBarButton icon={FiHome} isActivable isActive={asPath === '/' ? true : false} />
        </Link>
        <SideBarButton icon={FiAward} isActivable isActive={false} />
        <SideBarButton icon={FiSun} isActivable={false} />
      </TabSection>

      <LogoutSection>
        <Link href="/login">
          <SideBarButton icon={FiLogOut} onClick={signOut} isActivable={false} />
        </Link>
      </LogoutSection>
    </Container>
  );
}

export default SideBar;
