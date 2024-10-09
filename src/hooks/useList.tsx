import { useContext } from "react";

import { ListContext } from "../context";

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList должен использоваться внутри ListProvider");
  }

  return context;
};
