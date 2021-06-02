import React, { ReactNode } from 'react';
import { ThemeProvider, ThemeOptions } from '../hooks/theme';
import { Session } from 'next-auth/client';

interface AppProviderProps {
  children: ReactNode;
  sessionProps?: Session;
  theme: ThemeOptions;
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({ children, theme }) => {
  return (
    <ThemeProvider themeName={theme}>
      {children}
    </ThemeProvider>
  )
}

export default AppProvider;
