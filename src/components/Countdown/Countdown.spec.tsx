import { fireEvent, screen } from '@testing-library/react';
import { Countdown } from '.';
import { renderWithTheme } from '../../tests/helpers/renderWithTheme';
import { wrapWithCountdownContext } from '../../tests/helpers/wrapWithCountdownContext';

describe('Countdown component', () => {
  it('should render the countdown with initial time when it is not active', () => {
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

    const countdownButton = screen.getByText('Start');
    expect(countdownButton).toBeInTheDocument();

    fireEvent.click(countdownButton);

    expect(countdownProviderProps.value.startCountDown).toHaveBeenCalledTimes(1);
  });

  it('should render the countdown with its finished state', () => {
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
    expect(screen.getByTestId('secondLeft').textContent).toBe('0');
    expect(screen.getByTestId('secondRight').textContent).toBe('0');

    const countdownButton = screen.getByText('Done')
    expect(countdownButton).toBeInTheDocument();
    expect(countdownButton).toHaveAttribute('disabled', '');
  });

  it('should render the countdown with its active state', () => {
    const themeProviderProps = {
      themeName: 'light'
    }

    const countdownProviderProps = {
      value: {
        minutes: 20,
        seconds: 25,
        hasFinished: false,
        isActive: true,
        resetCountDown: jest.fn(),
        startCountDown: jest.fn()
      }
    }

    renderWithTheme(
      wrapWithCountdownContext(<Countdown />, { providerProps: countdownProviderProps }),
      { providerProps: themeProviderProps }
    );

    expect(screen.getByTestId('minuteLeft').textContent).toBe('2');
    expect(screen.getByTestId('minuteRight').textContent).toBe('0');
    expect(screen.getByTestId('secondLeft').textContent).toBe('2');
    expect(screen.getByTestId('secondRight').textContent).toBe('5');

    const countdownButton = screen.getByText('Stop');
    expect(countdownButton).toBeInTheDocument();

    fireEvent.click(countdownButton);

    expect(countdownProviderProps.value.resetCountDown).toHaveBeenCalledTimes(1);
  });
})
