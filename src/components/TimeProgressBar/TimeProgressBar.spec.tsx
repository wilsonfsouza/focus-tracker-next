import { screen } from '@testing-library/react';
import { TimeProgressBar } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

describe('TimeProgressBar component', () => {
  it('should render correctly when time and challenge time are provided by the challenges context', () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        time: 1,
        challengeTime: 10,
      }
    }

    renderWithChallengesContext(<TimeProgressBar />, { wrapper: themeWrapper, providerProps });

    const progressBar = screen.getByTestId('progressBar');

    expect(progressBar).toBeInTheDocument();
  });
})
