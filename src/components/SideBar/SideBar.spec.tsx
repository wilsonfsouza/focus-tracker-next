import { screen } from '@testing-library/react';
import { SideBar } from '.';
import { renderWithTheme } from '../../tests/helpers/renderWithTheme';

const mockedSignOut = jest.fn();

jest.mock('../../hooks/auth', () => {
  return {
    useAuth() {
      return {
        signOut: mockedSignOut
      }
    }
  }
});

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
    renderWithTheme(<SideBar />, { themeName: 'light' });

    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  })
})
