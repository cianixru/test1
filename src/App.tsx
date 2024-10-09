import { ListProvider, ThemeProvider } from "./context";
import { Header, Layout, NestedList } from "./components";

export const App = () => (
  <ThemeProvider>
    <ListProvider>
      <Layout>
        <Header />
        <NestedList />
      </Layout>
    </ListProvider>
  </ThemeProvider>
);
