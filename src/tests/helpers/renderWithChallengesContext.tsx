import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

interface renderWithChallengesContextParams extends RenderOptions {
  providerProps?: any;
}

export const renderWithChallengesContext = (children: ReactNode, { providerProps, ...renderOptions }: renderWithChallengesContextParams) => {
  return render(
    <ChallengesContext.Provider {...providerProps}>{children}</ChallengesContext.Provider>,
    renderOptions
  )
}
