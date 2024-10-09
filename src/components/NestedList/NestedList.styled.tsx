import styled from "styled-components";
import css from "@styled-system/css";

import { Box } from "../Box";

export const ListItem = styled(Box)`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Input = styled("input")(
  css({
    bg: "background",
    borderColor: "text",
    color: "text",
    border: "1px solid",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    fontSize: "16px",
    maxWidth: "350px",
    "::placeholder": {
      color: "text",
    },
  })
);
