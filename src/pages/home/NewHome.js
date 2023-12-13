import { Button, Container, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";
import { MdDateRange } from "react-icons/md";
import RocketAnimation from "../../components/rocketAnimation/RocketAnimation";
import { useNavigate } from "react-router-dom";
// import CSPIT from "../../assets/logos/cspit.png";
// import DEPSTAR from "../../assets/logos/depstar.png";
// import CHARUSAT from "../../assets/logos/charusat.png";
export default function NewHome() {
    const navigate = useNavigate();
    return (
        <>
            {/* <Container
        display={"flex"}
        padding={0}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        maxWidth={"100%"}
        // bg={"transparent"}
        marginBottom={"50px"}
        p={4}
        bg="pink.600"
      >

        <Container
        bg="yellow"
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
            bg="pink"
          >
            <Container
          // display={"flex"}
          padding={0}
          // alignItems={{ base: "center", md: "flex-start" }}
          // justifyContent={{ base: "center", md: "flex-start" }}
          // paddingLeft={{ md: "100px" }}
          // flexDirection={"row"}
          maxWidth={"100%"}
          className="date-line"
          marginTop={"30px"}
          bg="lime"
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
            padding={{ base: "5px", md: "20px" }}
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
                height={{md:"9vh", base:"8vh"}}
                p={1}
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

                border={"solid"}
                borderWidth={5}
                borderColor={"white"}
                backgroundColor={"white"}
                aspectRatio={"auto"}
                objectFit={"cover"}
                borderRadius={5}
              />
            </Container>
          </Card>
        </Container>
      </Container> */}

            <Container
                py="8"
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                // p="3"
                gap={{ base: "0", md: "8" }}
                maxWidth={{ base: "100%", md: "90%" }}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Container
                    p="2"
                    maxW="100%"
                    gap="7"
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Container
                        display={"flex"}
                        padding={0}
                        alignItems={{ base: "center", md: "flex-start" }}
                        justifyContent={{ base: "center", md: "flex-start" }}
                        // paddingLeft={{ md: "100px" }}
                        flexDirection={"row"}
                        maxWidth={"100%"}
                        className="date-line"
                        marginTop={"30px"}
                        // bg="lime"
                    >
                        <Button
                            fontSize={{ base: "20px", md: "25px" }}
                            padding={{base:"25px", md: "30px" }}
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
                        display={"flex"}
                        padding={0}
                        // paddingTop={10}
                        maxWidth={"100%"}
                        alignItems={{ base: "center", md: "flex-start" }}
                        justifyContent={{
                            base: "center",
                            md: "flex-start"
                        }}
                        textAlign={"center"}
                        // paddingLeft={{ md: "100px" }}
                    >
                        <Text
                            color={"white"}
                            textAlign={{ base: "center", md: "left" }}
                            fontSize={{ base: "20px", md: "40px" }}
                            fontWeight={"bold"}
                        >
                            Steps for the registration process
                            <OrderedList
                            // color={"white"}
                            // textAlign={{ base: "center", md: "left" }}
                            // fontSize={"md"}
                            // fontWeight={"bold"}
                            >
                                <ListItem onClick={()=>navigate("/register")} style={{cursor:"pointer"}}>1. Select the desired Event</ListItem>
                                <ListItem>2. Login with Google</ListItem>
                                <ListItem>3. Update your details info</ListItem>
                                <ListItem>4. Register for the events.</ListItem>
                                <ListItem onClick={()=>navigate("/register")} style={{cursor:"pointer"}}>5. Pay the fees.</ListItem>
                                {/* </Text> */}
                            </OrderedList>
                        </Text>
                    </Container>

                    <Container
                        display={"flex"}
                        padding={0}
                        maxWidth={"100%"}
                        alignItems={{ base: "center", md: "flex-start" }}
                        justifyContent={{
                            base: "center",
                            md: "flex-start"
                        }}
                        // paddingLeft={{ md: "100px" }}
                        gap={10}
                        flexDirection={{ base: "column", md: "row" }}
                        marginBottom={"30px"}
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
                    // bg="red.200"
                    p="5"
                    display={"flex"}
                    // padding={0}
                    width={{ base: "100%", md: "60%" }}
                    maxWidth={"100%"}
                    alignItems={"center"}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    margin={{ base: "-50px", md: "0" }}
                    // className="second-part"
                >
                    <RocketAnimation />
                </Container>
            </Container>
        </>
    );
}
