import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Container, Image, Text } from "@chakra-ui/react";
import CzMainLogo from "../../assets/cz-final-logo.jpg";
import charusat from "../../assets/logos/charusat.png";
import { Link, Outlet } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import GAuth from "../GAuth";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isLogin, setIsLogin] = useState(sessionStorage.getItem("token") ? true : false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="navbar-container">
                <div
                    className="navbar-logo"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        aspectRatio: "auto",
                        alignItems: "center",
                        background: "blue !important"
                        // width: "100%"
                    }}
                    // flexDirection={{ base: "row", sm: "row" }}
                >
                    <Container
                        // bg="pink.400"
                        // width="100%"
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent="center"
                        alignItems="center"
                        gap="40px"
                        placeItems={"center"}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Image src={CzMainLogo} width="120px" alt="sds" aspectRatio={"auto"} objectFit={"cover"} />
                        {/* <Text color={"whitesmoke"} fontSize={{ base: "xl", md: "2xl" }} width="120%">
                            Charotar University of Science and Technology
                        </Text> */}
                        <Image
                            src={charusat}
                            width={{ base: "80%", md: "50%" }}
                            alt="sds"
                            aspectRatio={"auto"}
                            objectFit={"cover"}
                            bg="white"
                            p={2}
                            
                            borderRadius={{ base: 4, md: 7 }}
                        />
                    </Container>
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
                                      listStyle: "none"
                                  }
                                : {
                                      display: "flex",
                                      gap: "10px",
                                      padding: "2px",
                                      flexDirection: "column",
                                      textDecoration: "none",
                                      listStyle: "none",
                                      alignItems: "center",
                                      width: "100%"
                                  }
                        }
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="committee">Committee</Link>
                        </li>
                        <li>
                            <Link to="register">Events</Link>
                        </li>
                        <li>
                            <Link to="gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="contact-us">Contact Us</Link>
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
