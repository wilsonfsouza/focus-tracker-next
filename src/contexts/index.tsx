import React, { ReactNode } from 'react';
// import { ThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeOptions } from '../contexts/theme';

// import theme from '../styles/theme';
import { AuthProvider } from './auth';
import { Session } from 'next-auth/client';

interface AppProviderProps {
  children: ReactNode;
  sessionProps?: Session;
  theme: ThemeOptions;
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({ children, sessionProps, theme }) => {
  return (
    <ThemeProvider themeName={theme}>
      <AuthProvider session={sessionProps}>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}

export default AppProvider;
