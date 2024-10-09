import type { Theme as StyledSystemTheme } from "styled-system";

import colors, { type Colors } from "./colors";

export type ThemeVariants = keyof typeof colors;

export interface CustomTheme {
  colors: Colors;
}

export declare type Theme = StyledSystemTheme &
  CustomTheme & {
    [K: string]: Theme;
  };

export type ThemeType = Record<
  ThemeVariants,
  {
    colors: Colors;
  }
>;
