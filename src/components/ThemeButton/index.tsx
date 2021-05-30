import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../hooks/theme';
import { Container, Content } from '../../styles/components/ThemeButton';

export function ThemeButton() {
  const { themeName, toggleTheme } = useTheme();

  if (themeName === 'dark') {
    return (
      <Container type="button" onClick={toggleTheme} tabIndex={0}>
        <Content>
          <FiMoon size={32} title="Dark" aria-hidden="false" />
        </Content>
      </Container>
    );
  }

  return (
    <Container type="button" onClick={toggleTheme} tabIndex={0}>
      <Content>
        <FiSun size={32} title="Light" aria-hidden="false" />
      </Content>
    </Container>
  );
}
