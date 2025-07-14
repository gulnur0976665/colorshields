import LayoutSite from "@/components/layout/LayoutSite";
import ReduxProvider from "@/providers/ReduxProvider";
import React, { ReactNode } from "react";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ReduxProvider>
        <LayoutSite>{children}</LayoutSite>
      </ReduxProvider>
    </div>
  );
};

export default LayoutClient;
