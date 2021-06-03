import { act, screen } from '@testing-library/react';
import { ExperienceBar } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

jest.useFakeTimers();

describe('ExperienceBar component', () => {
  it('should render correctly with initial animation delay', () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        currentExperience: 50,
        experienceToNextLevel: 100,
      }
    }

    renderWithChallengesContext(<ExperienceBar />, { wrapper: themeWrapper, providerProps });

    expect(screen.getByText(/50/)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();


    act(() => {
      jest.runAllTimers();

      expect(screen.getByTestId('percentToNextLevel').style.width).toBe('50%');
      expect(screen.getByTestId('currentExperience').style.left).toBe('50%');
    })
  })
})
