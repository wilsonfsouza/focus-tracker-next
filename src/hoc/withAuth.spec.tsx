import { fireEvent, screen } from '@testing-library/react';
import { useSession, signIn } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { renderWithTheme } from '../tests/helpers/renderWithTheme';
import Home from '../pages/index';

jest.mock('next-auth/client');

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('withAuth high order component', () => {
  it('should render the login page for a non authenticated user', async () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    renderWithTheme(<Home />, { providerProps: { themeName: 'light' } });

    expect(screen.getByText('Welcome')).toBeInTheDocument();
    expect(screen.getByText('Sign in with your GitHub to start')).toBeInTheDocument();

    const signInButton = screen.getByText('Sign in')
    expect(signInButton).toBeInTheDocument();
  });

  it('should attempt to login when a not authenticated user tries to sign in', async () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false]);

    const signInMocked = mocked(signIn);

    renderWithTheme(<Home />, { providerProps: { themeName: 'light' } });

    const signInButton = screen.getByText('Sign in');

    fireEvent.click(signInButton);

    expect(signInMocked).toHaveBeenCalledTimes(1);
  });

  it('should render the loading page when veryfing user credentials', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'Jane Doe', email: 'janedoe@example.com' },
        expires: 'fake-expires'
      }
      , true]);

    renderWithTheme(<Home />, { providerProps: { themeName: 'light' } });

    expect(screen.getByTestId('loadingLogo')).toBeInTheDocument();
    expect(screen.getByTestId('loadingBar')).toBeInTheDocument();
  });

  it('should render the dashboard page when user has valid credentials', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'Jane Doe', email: 'janedoe@example.com' },
        expires: 'fake-expires'
      }
      , false]);

    renderWithTheme(<Home />, { providerProps: { themeName: 'light' } });

    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
  });
})
