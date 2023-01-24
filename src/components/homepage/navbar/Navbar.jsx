import React from "react";
import "./Navbar.css";
import Home from "../home/Home";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src="images/M-logo.png" alt="logo" />
        <ul>
          <li>Contact Me</li>
          <li>Blogging</li>
          <li>Achievement</li>
          <li>Projects</li>
          <li>Home</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
