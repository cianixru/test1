import type { RequiredTheme, ResponsiveValue } from "styled-system";
import type { BoxElement, BoxProps } from "../Box";

export type FlexElement = BoxElement;

export type FlexProps = BoxProps & {
  gap?: ResponsiveValue<string | number, RequiredTheme> | undefined;
};
