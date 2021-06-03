import { screen } from '@testing-library/react';
import { Profile } from '.';
import { ThemeProvider } from '../../hooks/theme';
import { renderWithChallengesContext } from '../../tests/helpers/renderWithChallengesContext';

describe('Profile component', () => {
  it('should render correctly when user has logged in', () => {
    const themeWrapper = ({ children }) => <ThemeProvider themeName="light">{children}</ThemeProvider>

    const providerProps = {
      value: {
        level: 1
      }
    }

    const user = {
      name: 'Jane Doe',
      imageUrl: 'fake-imageUrl'
    }

    renderWithChallengesContext(<Profile user={user} />, { wrapper: themeWrapper, providerProps });

    const userImage = screen.getByAltText(user.name);

    expect(screen.getByText(user.name)).toBeInTheDocument();

    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', user.imageUrl);

    expect(screen.getByText(/1/)).toBeInTheDocument();
  });
})
