import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { AuthProvider } from './auth';
import { Session } from 'next-auth/client';

interface AppProviderProps {
  children: ReactNode;
  sessionProps?: Session;
}

const AppProvider: React.FunctionComponent<AppProviderProps> = ({ children, sessionProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider session={sessionProps}>
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}

export default AppProvider;
