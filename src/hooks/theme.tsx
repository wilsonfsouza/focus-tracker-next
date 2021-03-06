import { createContext, useEffect, useCallback, useState, useContext, ReactNode } from 'react';

import Cookies from 'js-cookie';

import Themes from '../styles/theme';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeOptions = 'light' | 'dark';

interface ThemeContextData {
  theme: typeof Themes.light | typeof Themes.dark;
  themeName: ThemeOptions;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  themeName?: ThemeOptions;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function ThemeProvider({ children, ...rest }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeOptions>(rest.themeName || 'light');

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
  }, [themeName]);

  const theme = Themes[themeName];

  useEffect(() => {
    Cookies.set('theme', themeName)
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{
      theme,
      themeName,
      toggleTheme
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context
}
