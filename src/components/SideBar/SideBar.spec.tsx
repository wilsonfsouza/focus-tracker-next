import { screen } from '@testing-library/react';
import { SideBar } from '.';
import { renderWithTheme } from '../../tests/helpers/renderWithTheme';

jest.mock('next-auth/client', () => {
  return {
    signOut: jest.fn(),
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
    const providerProps = {
      themeName: 'light',
    }

    renderWithTheme(<SideBar />, { providerProps });

    expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  })
});
