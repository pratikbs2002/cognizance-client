import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Image } from "@chakra-ui/react";
import CzMainLogo from "../../assets/cog-new-logo.png";
import { Link as CurrentPath, animateScroll as scroll } from "react-scroll";
import { Link, Outlet } from "react-router-dom";
import mainbg from "../../assets/main-bg.jpg";

import { googleLogout } from "@react-oauth/google";
import GAuth from "../GAuth";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isLogin, setIsLogin] = useState(
        sessionStorage.getItem("token") ? true : false
    );
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="Container">
                <div
                    className="navbar-logo"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        aspectRatio: "auto",
                        // alignItems: "center"
                    }}
                >
                    <Image
                        src={CzMainLogo}
                        width="100px"
                        alt="sds"
                        aspectRatio={"auto"}
                        objectFit={"cover"}
                    />
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
                            <Link to="contact-us">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="register">WorkShops</Link>
                        </li>
                        <li>
                            {!isLogin ? (
                                <GAuth setIsLogin={setIsLogin} />
                            ) : (
                                <Button
                                    style={{ color: "inherit" }}
                                    variant={"outline"}
                                    onClick={() => {
                                        sessionStorage.removeItem("token");
                                        googleLogout();
                                        setIsLogin(false);
                                    }}
                                >
                                    Logout
                                </Button>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
