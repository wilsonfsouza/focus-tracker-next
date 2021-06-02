import { ReactNode } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

interface WrapWithCountdownContextParams {
  providerProps?: any;
}

export const wrapWithCountdownContext = (children: ReactNode, { providerProps }: WrapWithCountdownContextParams) => {
  return (
    <CountdownContext.Provider {...providerProps}>
      {children}
    </CountdownContext.Provider>
  )
}
