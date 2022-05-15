import React, { useState } from "react";

// css
import "../../styles/components/Navbar.css";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Navbar">
        <span className="nav-logo">LookCoin-ups</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/home">Coins</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
