import { fireEvent, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signOut } from 'next-auth/client';
import { SideBar } from '.';
import { renderWithTheme } from '../../tests/helpers/renderWithTheme';

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

describe('SideBar component', () => {
  it('should render correctly', async () => {
    const providerProps = {
      themeName: 'light',
    }

    renderWithTheme(<SideBar />, { providerProps });

    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('signOut')).toBeInTheDocument();
  });

  it('should fire signOut function when the user presses signOut', async () => {
    const mockedSignOut = mocked(signOut);

    const providerProps = {
      themeName: 'light',
    }

    renderWithTheme(<SideBar />, { providerProps });

    const signOutButton = screen.getByTestId('signOut')

    fireEvent.click(signOutButton);

    expect(mockedSignOut).toHaveBeenCalledTimes(1);
  });
});
