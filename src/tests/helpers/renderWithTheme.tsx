import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "../../hooks/theme";

type renderWithThemeOptions = {
  themeName?: 'light' | 'dark';
}

export const renderWithTheme = (children: ReactNode, options?: renderWithThemeOptions) => {
  if (options) {
    return render(<ThemeProvider themeName={options.themeName}>{children}</ThemeProvider>);
  }

  return render(<ThemeProvider themeName='light'>{children}</ThemeProvider>);
}

