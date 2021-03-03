import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { AuthProvider } from './auth';

interface AppProviderProps {
  children: ReactNode;
  sessionProps?: any;
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
