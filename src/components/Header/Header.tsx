import { useTheme } from "../../hooks";
import { Box } from "../Box";

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <Box mb={20}>
      <button onClick={toggleTheme}>Переключить тему</button>
    </Box>
  );
};
