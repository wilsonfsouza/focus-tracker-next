import { screen } from '@testing-library/react';
import { Countdown } from '.';
import { renderWithTheme } from '../../tests/helpers/renderWithTheme';
import { wrapWithCountdownContext } from '../../tests/helpers/wrapWithCountdownContext';

describe('Countdown component', () => {
  it('should render the countdown with initial time when it is not active', async () => {
    const themeProviderProps = {
      themeName: 'light'
    }

    const countdownProviderProps = {
      value: {
        minutes: 25,
        seconds: 0,
        hasFinished: false,
        isActive: false,
        resetCountDown: jest.fn(),
        startCountDown: jest.fn()
      }
    }

    renderWithTheme(
      wrapWithCountdownContext(<Countdown />, { providerProps: countdownProviderProps }),
      { providerProps: themeProviderProps }
    );

    expect(screen.getByTestId('minuteLeft').textContent).toBe('2');
    expect(screen.getByTestId('minuteRight').textContent).toBe('5');
    expect(screen.getByText(/:/)).toBeInTheDocument();
    expect(screen.getByTestId('secondLeft').textContent).toBe('0');
    expect(screen.getByTestId('secondRight').textContent).toBe('0');
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('should render the countdown with its finished state', async () => {
    const themeProviderProps = {
      themeName: 'light'
    }

    const countdownProviderProps = {
      value: {
        minutes: 0,
        seconds: 0,
        hasFinished: true,
        isActive: false,
        resetCountDown: jest.fn(),
        startCountDown: jest.fn()
      }
    }

    renderWithTheme(
      wrapWithCountdownContext(<Countdown />, { providerProps: countdownProviderProps }),
      { providerProps: themeProviderProps }
    );

    expect(screen.getByTestId('minuteLeft').textContent).toBe('0');
    expect(screen.getByTestId('minuteRight').textContent).toBe('0');
    expect(screen.getByText(/:/)).toBeInTheDocument();
    expect(screen.getByTestId('secondLeft').textContent).toBe('0');
    expect(screen.getByTestId('secondRight').textContent).toBe('0');
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
})
