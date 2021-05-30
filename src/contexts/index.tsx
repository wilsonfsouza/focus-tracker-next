import React, { ReactNode } from 'react';
import { ThemeProvider, ThemeOptions } from '../hooks/theme';
import { AuthProvider } from '../hooks/auth';
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
