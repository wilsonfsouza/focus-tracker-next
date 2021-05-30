import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "../../hooks/theme";

type renderWithThemeOptions = {
  themeName?: 'light' | 'dark';
}

export const renderWithTheme = (children: ReactNode, options: renderWithThemeOptions) => {
  return render(<ThemeProvider themeName={options.themeName}>{children}</ThemeProvider>);
}

