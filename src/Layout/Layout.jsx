import React from "react";

import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  return <div className="Main">{children}</div>;
};

export default Layout;
