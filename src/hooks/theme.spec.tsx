import { renderHook, act } from '@testing-library/react-hooks';
import Cookies from 'js-cookie';
import { ThemeProvider, useTheme } from './theme';


describe('Theme hook', () => {
  it('should store themeName in Cookies', async () => {
    const spyOnCookies = jest.spyOn(Cookies, 'set');

    const wrapper = ({ children }) => <ThemeProvider themeName="dark">{children}</ThemeProvider>

    renderHook(() => useTheme(), {
      wrapper
    });

    expect(spyOnCookies).toHaveBeenCalledTimes(1);
    expect(spyOnCookies).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should be able to toggle from light to dark theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    });

    expect(result.current.themeName).toBe('light');

    act(() => {
      result.current.toggleTheme()
    });

    expect(result.current.themeName).toBe('dark');
    expect(result.current.theme.type).toBe('dark');
  });

  it('should be able to toggle from dark to light theme', async () => {
    const wrapper = ({ children }) => <ThemeProvider themeName="dark">{children}</ThemeProvider>

    const { result } = renderHook(() => useTheme(), {
      wrapper
    });

    act(() => {
      result.current.toggleTheme()
    });

    expect(result.current.themeName).toBe('light');
  });
})
