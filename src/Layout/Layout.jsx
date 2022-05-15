import React from "react";

// router
import { useLocation } from "react-router-dom";

// components
import Navbar from "../components/Shared/Navbar";

// css
import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  let location = useLocation();

  return (
    <React.Fragment>
      {location.pathname === "/home" || location.pathname === "/profile" ? (
        <Navbar />
      ) : (
        ""
      )}
      <div className="Main">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
