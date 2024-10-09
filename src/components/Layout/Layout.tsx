import * as S from "./Layout.styled";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => (
  <S.Layout>{children}</S.Layout>
);
