import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Jami Partners" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <main>{children}</main>
  </div>
);

export default Layout;
