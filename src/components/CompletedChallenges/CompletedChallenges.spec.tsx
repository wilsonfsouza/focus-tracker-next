import { screen } from '@testing-library/react';
import { CompletedChallenges } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

describe('Completed Challenges', () => {
  it('should render the number of completed challenges', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        challengesCompleted: 0
      }
    }

    renderWithChallengesContext(<CompletedChallenges />, { wrapper: themeWrapper, providerProps });

    expect(screen.getByText(/0/)).toBeInTheDocument();
  })
})
