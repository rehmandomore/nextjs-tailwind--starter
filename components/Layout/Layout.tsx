import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Jami Partners" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
