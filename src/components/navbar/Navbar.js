import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Image } from "@chakra-ui/react";
import CzMainLogo from "../../assets/cog-new-logo.png";
import { Link as CurrentPath, animateScroll as scroll } from "react-scroll";
import { Link, Outlet } from "react-router-dom";
import mainbg from "../../assets/main-bg.jpg";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="Container">
                <div className="navbar-logo">
                    <Image src={CzMainLogo} width="100px" alt="sd" />
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
                            <CurrentPath
                                activeClass="active"
                                to="Home-section"
                                smooth={true}
                                duration={10}
                            >
                                Home
                            </CurrentPath>
                        </li>
                        <li>
                            <CurrentPath to="event-section" smooth={true}>
                                Event
                            </CurrentPath>
                        </li>
                        {/* <li>
              <CurrentPath to="section1" smooth={true}>
                Workshops
              </CurrentPath>
            </li> */}
                        <li>
                            <CurrentPath to="committee-section" smooth={true}>
                                Committee
                            </CurrentPath>
                        </li>
                        <li>
                            <CurrentPath to="footer-section" smooth={true}>
                                Contact Us
                            </CurrentPath>
                        </li>
                        <li>
                            <Link to="gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link style={{ color: "inherit" }} to="register">
                                <Button variant={"outline"}>Register</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
