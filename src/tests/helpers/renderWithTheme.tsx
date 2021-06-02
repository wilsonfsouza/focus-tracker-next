import { render, RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";
import { ThemeProvider } from "../../hooks/theme";

interface renderWithThemeParams extends RenderOptions {
  providerProps?: any;
}

export const renderWithTheme = (children: ReactNode, { providerProps, ...renderOptions }: renderWithThemeParams) => {
  return render(<ThemeProvider {...providerProps}>{children}</ThemeProvider>,
    renderOptions);
}
