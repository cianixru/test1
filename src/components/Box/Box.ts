import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  shadow,
  opacity,
  textAlign,
} from "styled-system";

import type { BoxProps } from "./Box.types";

const styleProps = compose(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  shadow,
  opacity,
  textAlign
);

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<BoxProps>({ boxSizing: "border-box" }, styleProps);
