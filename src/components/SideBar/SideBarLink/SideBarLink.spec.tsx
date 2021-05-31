import { screen } from '@testing-library/react';
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
    renderWithTheme(<SideBarLink title="Test" icon={FiHome} />, { themeName: 'light' })

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render an activable link that is active correctly', async () => {
    renderWithTheme(<SideBarLink title="Test" icon={FiHome} isActivable={true} href="/" />, { themeName: 'light' })

    expect(screen.getByTestId('active-bar')).toBeInTheDocument();
  });
})
