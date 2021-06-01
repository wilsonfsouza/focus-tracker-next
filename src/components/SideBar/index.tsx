import { FiHome, FiAward, FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/client';
import { ThemeButton } from './ThemeButton';
import { SideBarLink } from './SideBarLink';
import { Container, TabSection, LogoutSection } from '../../styles/components/SideBar';
import LogoIcon from '../../assets/focus-logo.svg';

export function SideBar() {
  return (
    <Container>
      <LogoIcon data-testid='sidebar-logo' />

      <TabSection>
        <SideBarLink title="Home" href="/" icon={FiHome} isActivable={true} />
        <SideBarLink title="Stats" style={{ cursor: 'not-allowed' }} icon={FiAward} isActivable={true} />
        <ThemeButton />
      </TabSection>

      <LogoutSection>
        <SideBarLink title="Logout" href="/login" icon={FiLogOut} onClick={() => signOut()} />
      </LogoutSection>
    </Container>
  );
}
