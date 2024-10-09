import type { HTMLAttributes } from "react";
import type {
  FlexboxProps,
  PositionProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";

import { ThemeBackgroundProps, ThemeColorsProps } from "../../theme";

export type BoxElement = HTMLDivElement;

export interface BoxProps
  extends Omit<HTMLAttributes<BoxElement>, "color">,
    ThemeBackgroundProps,
    ThemeColorsProps,
    FlexboxProps,
    PositionProps,
    SpaceProps,
    TextAlignProps {}
