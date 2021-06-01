import { renderHook, act } from '@testing-library/react-hooks';
import { ThemeProvider, useTheme } from './theme';

describe('Theme hook', () => {
  it('should toggle theme between light and dark mode', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    expect(result.current.themeName).toBe('light');

    act(() => {
      result.current.toggleTheme();
    })

    expect(result.current.themeName).toBe('dark');
    expect(result.current.theme.type).toBe('dark');
  });
})
