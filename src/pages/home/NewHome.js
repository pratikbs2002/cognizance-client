import { Button, Container, Text, Image, Card } from "@chakra-ui/react";
import React from "react";
import { MdDateRange } from "react-icons/md";
import RocketAnimation from "../../components/rocketAnimation/RocketAnimation";
import { useNavigate } from "react-router-dom";
import CSPIT from "../../assets/CSPIT_Final.png";
import DEPSTAR from "../../assets/depstar.png";
import CHARUSAT from "../../assets/CHARUSAT_RGTD_LOGO.webp";
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
        bg={"transparent"}
        marginBottom={"50px"}
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
          marginTop={"30px"}
        >
          <Button
            fontSize={"20px"}
            padding={"25px"}
            colorScheme="none"
            backgroundColor={"#353535"}
            border={"1px solid yellow"}
            color={"white"}
            leftIcon={<MdDateRange color="yellow" />}
          >
            January 18-19, 2024
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
              justifyContent={{
                base: "center",
                md: "flex-start",
              }}
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
                Cognizance 24
              </Text>
            </Container>
            <Container
              display={"flex"}
              padding={0}
              paddingTop={10}
              maxWidth={"100%"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{
                base: "center",
                md: "flex-start",
              }}
              textAlign={"center"}
              paddingLeft={{ md: "100px" }}
            >
              <Text
                color={"white"}
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "20px", md: "50px" }}
                fontWeight={"bold"}
              >
                Charotar University of Science and Technology
              </Text>
            </Container>
            <Container
              display={"flex"}
              padding={0}
              maxWidth={"100%"}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{
                base: "center",
                md: "flex-start",
              }}
              paddingLeft={{ md: "100px" }}
              gap={10}
              flexDirection={{ base: "column", md: "row" }}
              marginTop={"30px"}
            >
              <Button
                width={{ base: "80%", md: "30%" }}
                variant={"solid"}
                onClick={() => navigate(`/register`)}
              >
                Register Now
              </Button>
            </Container>
          </Container>
          <Container
            display={"flex"}
            padding={0}
            width={{ base: "100%", md: "60%" }}
            maxWidth={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            className="second-part"
          >
            <RocketAnimation />
          </Container>
        </Container>

        <Container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          maxW={"100%"}
          width={"100%"}
          marginTop={"30px"}
        >
          <Card
            backgroundColor={"rgba(0, 0, 0, 0.442)"}
            maxW={"100%"}
            width={"100%"}
            padding={"20px"}
          >
            <Container
              maxW={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"30px"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Image
                src={CHARUSAT}
                height={"9vh"}
                borderRadius={5}
                padding={1}
                backgroundColor={"white"}
                alt="sds"
                aspectRatio={"auto"}
                objectFit={"cover"}
              />
              <Image
                src={CSPIT}
                width="10vh"
                alt="sds"
                border={"solid"}
                borderWidth={5}
                borderColor={"white"}
                backgroundColor={"white"}
                aspectRatio={"auto"}
                objectFit={"cover"}
                borderRadius={5}
              />
              <Image
                src={DEPSTAR}
                width="10vh"
                alt="sds"
                aspectRatio={"auto"}
                objectFit={"cover"}
                borderRadius={5}
              />
            </Container>
          </Card>
        </Container>
      </Container>
    </>
  );
}
