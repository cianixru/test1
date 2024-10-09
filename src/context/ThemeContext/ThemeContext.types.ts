import { ReactNode } from "react";

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
