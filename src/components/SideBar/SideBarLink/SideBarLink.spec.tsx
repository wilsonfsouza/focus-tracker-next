import { screen, render } from '@testing-library/react';
import React from 'react';
import { FiHome } from 'react-icons/fi';
import { SideBarLink } from '.';
import { renderWithTheme } from '../../../tests/helpers/renderWithTheme';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('SideBarLink component', () => {
  it('should render a non-activable link correctly', async () => {
    const providerProps = {
      themeName: 'light'
    }

    renderWithTheme(<SideBarLink title="Test" icon={FiHome} />, { providerProps })

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render an activable link that is active correctly', async () => {
    const providerProps = {
      themeName: 'light'
    }

    renderWithTheme(<SideBarLink title="Test" icon={FiHome} isActivable={true} href="/" />, { providerProps })

    expect(screen.getByTestId('active-bar')).toBeInTheDocument();
  });
})
