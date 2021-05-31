import { screen } from '@testing-library/react';
import { LevelUpModal } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

describe('LevelUpModal component', () => {
  it('should render correctly when user level up', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        level: 1,
        handleCloseLevelUpModal: jest.fn(),
      }
    }

    renderWithChallengesContext(<LevelUpModal />, { wrapper: themeWrapper, providerProps })

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Congratulations')).toBeInTheDocument();
    expect(screen.getByText('You reached a new level')).toBeInTheDocument();
  })
})
