import { useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import { type ITheme } from "./types";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>({ mode: "light" });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
