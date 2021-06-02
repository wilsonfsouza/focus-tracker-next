import { ReactNode } from 'react';
import { ThemeProvider, ThemeOptions } from '../hooks/theme';
import { Session } from 'next-auth/client';

interface AppProviderProps {
  children: ReactNode;
  sessionProps?: Session;
  theme: ThemeOptions;
}

export default function AppProvider({ children, theme }: AppProviderProps) {
  return (
    <ThemeProvider themeName={theme}>
      {children}
    </ThemeProvider>
  )
}
