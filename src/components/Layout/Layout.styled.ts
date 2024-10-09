import styled from "styled-components";
import css from "@styled-system/css";

import { Box } from "../Box";

export const Layout = styled(Box)(
  css({
    bg: "background",
    borderColor: "text",
    color: "text",
    padding: "20px 10px",
  })
);
