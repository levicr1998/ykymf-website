// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="header-image" src="./homepage-image.png" alt="ykymf logo" />
      <div className="links">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
