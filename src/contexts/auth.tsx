import React, { createContext, FormEvent, ReactNode, useCallback, useContext } from 'react';
import {
  Provider,
  signIn as handleOAuthLogin,
  signOut as handleOAuthLogout
} from 'next-auth/client';

export interface AuthContextData {
  signIn: (event: FormEvent) => void;
  signOut: (event: FormEvent) => void;
}

interface AuthProviderProps {
  session: any;
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ session, children }) => {
  const signIn = useCallback((event: FormEvent) => {
    event.preventDefault();
    handleOAuthLogin('github');
  }, []);

  const signOut = useCallback((event: FormEvent) => {
    event.preventDefault();
    handleOAuthLogout({ callbackUrl: process.env.NEXTAUTH_URL });
  }, []);
  return (
    <Provider session={session}>
      <AuthContext.Provider value={{ signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }

  return context;
}

export { AuthProvider, useAuth }