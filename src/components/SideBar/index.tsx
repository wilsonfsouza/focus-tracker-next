import React from 'react';

import { useRouter } from 'next/router';

import LogoIcon from '../../assets/focus-logo.svg';
import { FiHome, FiAward, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import ThemeButton from '../ThemeButton';
import SideBarLink from '../SideBarLink';

import { Container, TabSection, LogoutSection } from '../../styles/components/SideBar';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

const SideBar: React.FunctionComponent = () => {
  const { signOut } = useAuth();
  const { asPath } = useRouter();
  const { themeName, toggleTheme } = useTheme();

  return (
    <Container>
      <LogoIcon />

      <TabSection>
        <SideBarLink href="/" icon={FiHome} isActivable isActive={asPath === '/' ? true : false} />
        <SideBarLink style={{ cursor: 'not-allowed' }} icon={FiAward} isActivable isActive={false} />
        {themeName === 'light' ? (
          <ThemeButton icon={FiSun} onClick={toggleTheme} />
        ) : (
          <ThemeButton icon={FiMoon} onClick={toggleTheme} />
        )}
      </TabSection>

      <LogoutSection>
        <SideBarLink href="/login" icon={FiLogOut} onClick={signOut} isActivable={false} />
      </LogoutSection>
    </Container>
  );
}

export default SideBar;
