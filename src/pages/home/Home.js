import { Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-scroll";
import RocketAnimation from "../../components/rocketAnimation/RocketAnimation";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        display={"flex"}
        padding={0}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        maxWidth={"100%"}
        height={"90vh"}
        bg={"transparent"}
      >
        <Container
          display={"flex"}
          padding={0}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          paddingLeft={{ md: "100px" }}
          flexDirection={"row"}
          maxWidth={"100%"}
          className="date-line"
        >
          <Button
            colorScheme="none"
            backgroundColor={"#353535"}
            border={"1px solid yellow"}
            color={"white"}
            leftIcon={<MdDateRange color="yellow" />}
          >
            18 January 2024 - 19 January 2024
          </Button>
        </Container>
        <Container
          marginTop={{ base: "40px", md: "1px" }}
          flexDirection={{ base: "column", md: "row" }}
          display={"flex"}
          padding={0}
          maxWidth={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          className="second-container"
        >
          <Container
            flexDirection={"column"}
            display={"flex"}
            padding={0}
            maxWidth={"100%"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            className="first-part"
          >
            <Container
              display={"flex"}
              padding={0}
              maxWidth={"100%"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              paddingLeft={{ md: "100px" }}
              className="cog"
            >
              <Text
                className="charusat"
                color={"white"}
                textAlign={"center"}
                fontSize={{ base: "40px", md: "80px" }}
                fontWeight={"bold"}
              >
                Cognizance 2023
              </Text>
            </Container>
            <Container
              display={"flex"}
              padding={0}
              maxWidth={"100%"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              paddingLeft={{ md: "100px" }}
            >
              <Text
                color={"white"}
                textAlign={"center"}
                fontSize={{ base: "20px", md: "50px" }}
                fontWeight={"bold"}
              >
                Charusat University
              </Text>
            </Container>
            <Container
              display={"flex"}
              padding={0}
              maxWidth={"100%"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              paddingLeft={{ md: "100px" }}
              gap={10}
              flexDirection={{ base: "column", md: "row" }}
              marginTop={"50px"}
            >
              <Button
                width={{ base: "80%", md: "30%" }}
                variant={"solid"}
                onClick={() => navigate(`/register`)}
              >
                Register
              </Button>
              <Button width={{ base: "80%", md: "30%" }} variant={"solid"}>
                <Link to="footer-section" smooth="true">
                  Contact Us
                </Link>
              </Button>
            </Container>
          </Container>
          <Container
            display={"flex"}
            padding={0}
            maxWidth={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            className="second-part"
          >
            <RocketAnimation />
          </Container>
        </Container>
      </Container>
    </>
  );
}
