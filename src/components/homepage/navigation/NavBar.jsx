import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <div className="navigation">
      <header>
        <a href="#" className="logo">
          <div className="logo__name">
            <h1 className="logo__name-primary">
              V <span className="dot">&#11044; </span> ID
            </h1>
          </div>
        </a>

        <ul className={menu ? "navbar open" : "navbar"}>
          <li>
            <a href="#home" className="active">
              Home.
            </a>
          </li>
          <li>
            <a href="#about"> About.</a>
          </li>
          <li>
            <a href="#projects">Projects.</a>
          </li>
          <li>
            <a href="#blog">Blog.</a>
          </li>
          <li>
            <a href="#contact">Connect.</a>
          </li>
        </ul>

        <div className="main">
          <Link to="/contact" className="main__donation">
            Contact me
          </Link>
          <div
            className={!menu ? "bx bx-menu" : "bx bx-x"}
            id="menu-icon"
            onClick={() => {
              setMenu(!menu);
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
