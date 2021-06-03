import { fireEvent, screen } from '@testing-library/react';
import { LevelUpModal } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

describe('LevelUpModal component', () => {
  it('should render correctly when user level up', () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        level: 1,
        handleCloseLevelUpModal: jest.fn(),
      }
    }

    renderWithChallengesContext(<LevelUpModal />, { wrapper: themeWrapper, providerProps });

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Congratulations')).toBeInTheDocument();
    expect(screen.getByText('You reached a new level')).toBeInTheDocument();
  });

  it('should fire a function to close modal when pressing the x button', () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        level: 1,
        handleCloseLevelUpModal: jest.fn(),
      }
    }

    renderWithChallengesContext(<LevelUpModal />, { wrapper: themeWrapper, providerProps });

    const closeModalButton = screen.getByTestId('close-button-modal');

    fireEvent.click(closeModalButton);

    expect(providerProps.value.handleCloseLevelUpModal).toHaveBeenCalledTimes(1);
  });
})
