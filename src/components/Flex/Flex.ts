import styled from "styled-components";
import { compose, style } from "styled-system";

import { Box } from "../Box";

import type { FlexProps } from "./Flex.types";

const gap = style({
  prop: "gap",
  cssProperty: "gap",
});

export const Flex = styled(Box)<FlexProps>(compose(gap), { display: "flex" });
