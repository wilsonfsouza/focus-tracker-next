import { fireEvent, screen } from '@testing-library/react';
import { ChallengeBox } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';
import { wrapWithCountdownContext } from '../../tests/helpers/wrapWithCountdownContext';

describe('ChallengeBox component', () => {
  it('should render a container with instructions on how to level up when a challenge is not active', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const challengesContextProviderProps = {
      value: {
        activeChallenge: null,
        handleResetChallenge: jest.fn(),
        handleCompleteChallenge: jest.fn()
      }
    }

    const countdownContextProviderProps = {
      value: {
        resetCountDown: jest.fn(),
      }
    }

    renderWithChallengesContext(
      wrapWithCountdownContext(<ChallengeBox />, { providerProps: countdownContextProviderProps }),
      { wrapper: themeWrapper, providerProps: challengesContextProviderProps });

    expect(screen.getByText('Complete a new cycle to receive your next challenge')).toBeInTheDocument();
    expect(screen.getByText('Level up by completing challenges.')).toBeInTheDocument();
  });

  it('should render a container with a body challenge when the cycle is completed', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const challengesContextProviderProps = {
      value: {
        activeChallenge: {
          type: 'body',
          description: 'fake-challenge-description',
          amount: 100,
        },
        handleResetChallenge: jest.fn(),
        handleCompleteChallenge: jest.fn()
      }
    }

    const countdownContextProviderProps = {
      value: {
        resetCountDown: jest.fn(),
      }
    }

    renderWithChallengesContext(
      wrapWithCountdownContext(<ChallengeBox />, { providerProps: countdownContextProviderProps }),
      { wrapper: themeWrapper, providerProps: challengesContextProviderProps });

    expect(screen.getByText(/100/)).toBeInTheDocument();
    expect(screen.getByTestId('bodyIcon')).toBeInTheDocument();
    expect(screen.getByText('fake-challenge-description')).toBeInTheDocument();
    expect(screen.getByText('Failed')).toBeInTheDocument();
    expect(screen.getByText('Succeeded')).toBeInTheDocument();
  });

  it('should render a container with an eye challenge when the cycle is completed', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const challengesContextProviderProps = {
      value: {
        activeChallenge: {
          type: 'eye',
          description: 'fake-challenge-description',
          amount: 100,
        },
        handleResetChallenge: jest.fn(),
        handleCompleteChallenge: jest.fn()
      }
    }

    const countdownContextProviderProps = {
      value: {
        resetCountDown: jest.fn(),
      }
    }

    renderWithChallengesContext(
      wrapWithCountdownContext(<ChallengeBox />, { providerProps: countdownContextProviderProps }),
      { wrapper: themeWrapper, providerProps: challengesContextProviderProps });

    expect(screen.getByText(/100/)).toBeInTheDocument();
    expect(screen.getByTestId('eyeIcon')).toBeInTheDocument();
    expect(screen.getByText('fake-challenge-description')).toBeInTheDocument();
    expect(screen.getByText('Failed')).toBeInTheDocument();
    expect(screen.getByText('Succeeded')).toBeInTheDocument();
  });

  it('should fire functions to reset the challenge and the counter when clicking on Failed Button', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const challengesContextProviderProps = {
      value: {
        activeChallenge: {
          type: 'eye',
          description: 'fake-challenge-description',
          amount: 100,
        },
        handleResetChallenge: jest.fn(),
        handleCompleteChallenge: jest.fn()
      }
    }

    const countdownContextProviderProps = {
      value: {
        resetCountDown: jest.fn(),
      }
    }

    renderWithChallengesContext(
      wrapWithCountdownContext(<ChallengeBox />, { providerProps: countdownContextProviderProps }),
      { wrapper: themeWrapper, providerProps: challengesContextProviderProps });

    const failedButton = screen.getByText('Failed');

    fireEvent.click(failedButton);

    expect(challengesContextProviderProps.value.handleResetChallenge).toHaveBeenCalledTimes(1);
    expect(countdownContextProviderProps.value.resetCountDown).toHaveBeenCalledTimes(1);
  });

  it('should fire functions to add experience and reset the counter when clicking on Succeeded Button', async () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const challengesContextProviderProps = {
      value: {
        activeChallenge: {
          type: 'eye',
          description: 'fake-challenge-description',
          amount: 100,
        },
        handleResetChallenge: jest.fn(),
        handleCompleteChallenge: jest.fn()
      }
    }

    const countdownContextProviderProps = {
      value: {
        resetCountDown: jest.fn(),
      }
    }

    renderWithChallengesContext(
      wrapWithCountdownContext(<ChallengeBox />, { providerProps: countdownContextProviderProps }),
      { wrapper: themeWrapper, providerProps: challengesContextProviderProps });

    const succeededButton = screen.getByText('Succeeded');

    fireEvent.click(succeededButton);

    expect(challengesContextProviderProps.value.handleCompleteChallenge).toHaveBeenCalledTimes(1);
    expect(countdownContextProviderProps.value.resetCountDown).toHaveBeenCalledTimes(1);
  });
})
