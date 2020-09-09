import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: 'white'
  }
  return (
    <nav>
      <ul className="nav-bar">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li >Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
