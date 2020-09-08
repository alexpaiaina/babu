import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/Contact">
          <li >Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
