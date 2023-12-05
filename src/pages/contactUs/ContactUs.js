import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import "./Contact.css";
import { Box, Container, Image, Text } from "@chakra-ui/react";
export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="photo-gallery-parent-container"
        style={{ minHeight: "100vh" }}
      >
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
              <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
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
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    Pratik Suthar
                  </Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    +91 7698362613
                  </Text>
                </Container>
                <Container textAlign={"center"}>
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    Ketan Tiwari
                  </Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    +91 7069312561
                  </Text>
                </Container>
              </Container>
            </div>

            <div className="contact-card">
              <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
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
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    Srushti Gajjar
                  </Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    +91 94095 47741
                  </Text>
                </Container>
              </Container>
            </div>
            <div className="contact-card">
              <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
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
                  <Text fontSize={{ base: "16px", md: "20px" }}>Jay Shah</Text>
                  <Text fontSize={{ base: "16px", md: "20px" }}>
                    +91 820007 78757
                  </Text>
                </Container>
              </Container>
            </div>
            <div className="contact-card">
              <Text fontSize={"20px"} textAlign={"center"} fontWeight={"700"}>
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
                  <Text fontSize={{ base: "16px", md: "20px" }} width={"100%"}>
                    cognizance@charusat.edu.in
                  </Text>
                </Container>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
