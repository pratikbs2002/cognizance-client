import React, { useState } from "react";
import "./Navbar.css"; // assuming you have a CSS file for Temp component
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Link } from "@chakra-ui/react";
import logo from "../assets/cognizance_logo.png";

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
                                    gap: "100px",
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
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Workshops
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Committee
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="section1"
                            // smooth onClick={() => scrollTo('section1')}
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
