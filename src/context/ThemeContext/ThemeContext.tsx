import { createContext, useCallback, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "../../theme";

import type {
  ThemeContextType,
  ThemeProviderProps,
} from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = useCallback(() => setIsDarkMode((val) => !val), []);

  const currentTheme = theme[isDarkMode ? "dark" : "light"];

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
