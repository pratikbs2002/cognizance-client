import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import "./Contact.css";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import address from "../../assets/footer/adderss.png";
import { RiMapPinRangeLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";

export default function ContactUs() {
    const navigate = useNavigate();
    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div className="photo-gallery-back-button" onClick={() => navigate(`/`)}>
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
                        backgroundColor: "rgba(0, 0, 0, 0.442)"
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
                        marginTop: "100px"
                    }}
                >
                    <div className="contact-card-container">
                        <div className="contact-card">
                            <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
                                Registrations queries
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
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Dhyan Patel</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>+91 73836 37444</Text>
                                </Container>
                                <Container textAlign={"center"}>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Rahul Mistry</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>+91 95583 53148</Text>
                                </Container>
                            </Container>
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
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Dhairya Bhavsar</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>+91 90994 39337</Text>
                                </Container>
                                <Container textAlign={"center"}>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Khushi Kathiriya</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>+91 80005 06433</Text>
                                </Container>
                            </Container>
                        </div>

                        <div className="contact-card">
                            <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
                                Accomodation & Transport queries
                            </Text>
                            <Container
                                display={"flex"}
                                alignItems={"center"}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                gap={"30px"}
                                textAlign={"center"}
                                marginTop={"30px"}
                            >
                                <Container textAlign={"center"}>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Prof. Srushti Gajjar</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Prof. Vaibhavi Patel</Text>
                                    {/* </Container>
                                <Container textAlign={"center"}> */}
                                    <Text
                                        marginTop={"10px"}
                                        fontSize={{ base: "16px", md: "20px" }}
                                        onClick={() => {
                                            window.open("mailto:accommodation.cogni@charusat.edu.in");
                                        }}
                                    >
                                        accommodation.cogni@charusat.edu.in
                                    </Text>
                                </Container>
                                <Container display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                                    <Text fontSize={{ base: "12px", md: "16px" }}>For more information:</Text>
                                    <Button
                                        color="black"
                                        bg="white"
                                        size="sm"
                                        leftIcon={<HiDownload />}
                                        fontSize={"12px"}
                                    >
                                        Download PDF
                                    </Button>
                                </Container>
                            </Container>
                        </div>
                        <div className="contact-card">
                            <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
                                General queries
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
                                    <Text fontSize={{ base: "16px", md: "20px" }}>Jay Shah</Text>
                                    <Text fontSize={{ base: "16px", md: "20px" }}>+91 82007 78757</Text>
                                    <Text marginTop={"30px"} fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
                                        Email
                                    </Text>
                                    <Text
                                        fontSize={{ base: "16px", md: "20px" }}
                                        width={"100%"}
                                        onClick={() => {
                                            window.open("mailto:cognizance@charusat.edu.in");
                                        }}
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
                                marginBottom: "50px"
                            }}
                        >
                            <div
                                className="card_logo_container"
                                style={{
                                    marginBottom: "20px"
                                }}
                            >
                                <RiMapPinRangeLine fontSize={25} color="#00b2d2" />
                                <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
                                    Event Venue
                                </Text>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.458099229622!2d72.81789177603518!3d22.59936243198752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1701723489178!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowfullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="venue"
                                style={{
                                    borderRadius: "10px"
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
