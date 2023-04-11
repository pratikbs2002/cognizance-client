import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import logo from "../../assets/cognizance_logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="Container">
        <div className="navbar-logo">
          <img src={logo} width="200px" alt="sd" />
        </div>
        <div className="navbar-toggle-button" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-menu ${showMenu ? "active" : ""}`}>
          <ul
            style={
              !showMenu
                ? {
                    display: "flex",
                    gap: "60px",
                    padding: "2px",
                    flexDirection: "row",
                    textDecoration: "none",
                    listStyle: "none",
                  }
                : {
                    display: "flex",
                    gap: "10px",
                    padding: "2px",
                    flexDirection: "column",
                    textDecoration: "none",
                    listStyle: "none",
                  }
            }
          >
            <li>
              <Link
                activeClass="active"
                to="Home-section"
                smooth={true}
                duration={10}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={10}>
                Event
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={10}>
                Workshops
              </Link>
            </li>
            <li>
              <Link to="committee-section" smooth={true} duration={10}>
                Committee
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={10}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={10}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="section1" smooth={true} duration={10}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
