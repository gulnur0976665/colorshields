"use client";
import React, { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./LayoutSite.module.scss";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
