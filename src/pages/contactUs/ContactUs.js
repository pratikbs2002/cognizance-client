import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import "./Contact.css";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import address from "../../assets/footer/adderss.png";
import { RiMapPinRangeLine } from "react-icons/ri";

export default function ContactUs() {
    const navigate = useNavigate();
    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div
                        className="photo-gallery-back-button"
                        onClick={() => navigate(`/`)}
                    >
                        <IoIosArrowBack />
                        Back
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        fontSize: "40px",
                        fontWeight: "800",
                        color: "white",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.442)",
                    }}
                >
                    Contact Us
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "100px",
                    }}
                >
                    <div className="contact-card-container">
                        <div className="contact-card">
                            <Text
                                fontSize={"20px"}
                                textAlign={"center"}
                                fontWeight={"700"}
                            >
                                Registrations related queries
                            </Text>
                            <Container
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"30px"}
                                textAlign={"center"}
                                marginTop={"30px"}
                                flexDirection={{ base: "column", md: "row" }}
                            >
                                <Container textAlign={"center"}>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        Pratik Suthar
                                    </Text>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        +91 7698362613
                                    </Text>
                                </Container>
                                <Container textAlign={"center"}>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        Ketan Tiwari
                                    </Text>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        +91 7069312561
                                    </Text>
                                </Container>
                            </Container>
                        </div>

                        <div className="contact-card">
                            <Text
                                fontSize={"20px"}
                                textAlign={"center"}
                                fontWeight={"700"}
                            >
                                Accomodation & Transport related queries
                            </Text>
                            <Container
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"30px"}
                                textAlign={"center"}
                                marginTop={"30px"}
                            >
                                <Container textAlign={"center"}>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        Srushti Gajjar
                                    </Text>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        +91 94095 47741
                                    </Text>
                                </Container>
                            </Container>
                        </div>
                        <div className="contact-card">
                            <Text
                                fontSize={"20px"}
                                textAlign={"center"}
                                fontWeight={"700"}
                            >
                                Any other queries
                            </Text>
                            <Container
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"30px"}
                                textAlign={"center"}
                                marginTop={"30px"}
                            >
                                <Container textAlign={"center"}>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        Jay Shah
                                    </Text>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                    >
                                        +91 820007 78757
                                    </Text>
                                </Container>
                            </Container>
                        </div>
                        <div className="contact-card">
                            <Text
                                fontSize={"20px"}
                                textAlign={"center"}
                                fontWeight={"700"}
                            >
                                Email
                            </Text>
                            <Container
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"30px"}
                                textAlign={"center"}
                                marginTop={"30px"}
                            >
                                <Container width={"100%"} textAlign={"center"}>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                        width={"100%"}
                                    >
                                        cognizance@charusat.edu.in
                                    </Text>
                                </Container>
                            </Container>
                        </div>

                        <div
                            className="card"
                            style={{
                                height: "50vh",
                                width: "83%",
                                marginLeft: "",
                            }}
                        >
                            <div
                                className="card_logo_container"
                                style={{
                                    marginBottom: "20px",
                                }}
                            >
                                <RiMapPinRangeLine
                                    fontSize={25}
                                    color="#00b2d2"
                                />
                                <Text
                                    fontSize={"20px"}
                                    textAlign={"center"}
                                    fontWeight={"700"}
                                >
                                    Event Venue
                                </Text>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.458099229622!2d72.81789177603518!3d22.59936243198752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1701723489178!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="venue"
                                style={{
                                    borderRadius: "10px",
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
