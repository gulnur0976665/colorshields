import { ReactNode } from "react";
import LayoutClient from "../layout.client";

const layout = ({ children }: { children: ReactNode }) => {
  return <LayoutClient>{children}</LayoutClient>;
};

export default layout;
