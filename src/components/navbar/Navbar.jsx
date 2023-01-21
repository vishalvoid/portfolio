import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src="images/M-logo.png" alt="logo" />
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Achievement</li>
            <li>Blogging</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
