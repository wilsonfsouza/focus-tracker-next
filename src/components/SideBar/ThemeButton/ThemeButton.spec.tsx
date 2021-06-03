import { fireEvent, screen, render } from '@testing-library/react';
import { renderWithTheme } from '../../../tests/helpers/renderWithTheme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from '../../../hooks/theme';
import Themes from '../../../styles/theme';
import { ThemeButton } from '.';

describe('ThemeButton component', () => {
  it('should render correctly when the light theme is selected', () => {
    const providerProps = {
      themeName: 'light'
    }

    renderWithTheme(<ThemeButton />, { providerProps });

    expect(screen.getByText('Light')).toBeInTheDocument();
  });

  it('should render correctly when the dark theme is selected', () => {
    const providerProps = {
      themeName: 'dark',
    }

    renderWithTheme(<ThemeButton />, { providerProps });

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should fire toggleTheme function when button is clicked', () => {
    const themeName = 'light';
    const theme = Themes.light;
    const toggleTheme = jest.fn();

    render(
      <ThemeContext.Provider value={{
        theme,
        themeName,
        toggleTheme
      }}>
        <StyledThemeProvider theme={theme}>
          <ThemeButton />
        </StyledThemeProvider>
      </ThemeContext.Provider>
    )

    const themeButton = screen.getByText('Light');

    fireEvent.click(themeButton);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
})
