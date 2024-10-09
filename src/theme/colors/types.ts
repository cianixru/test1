import { BackgroundProps } from "styled-system";
import { light } from "./colors.json";

export type Colors = typeof light;

export type ColorsPropNames = keyof Colors;

export type ThemeColors =
  | null
  | Array<ColorsPropNames | null>
  | ColorsPropNames;

export interface ThemeColorsProps {
  color?: ThemeColors;
  bg?: ThemeColors;
  backgroundColor?: ThemeColors;
}

export interface ThemeBackgroundProps
  extends Omit<BackgroundProps, "background"> {
  background?: ThemeColors;
}
