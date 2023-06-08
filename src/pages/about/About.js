import {
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import aboutImage from "../../assets/background.png";
import { HiDownload } from "react-icons/hi";
import count_icon from "../../assets/count_icon.png";
import SponsorMarquee from "./SponsorMarquee";
import Count from "../../components/Count";
export default function About() {
  const date = new Date();
  return (
    <>
      <Container
        id="event-section"
        marginTop={"20px"}
        height={"100%"}
        maxWidth={"100%"}
      >
        <Heading
          textAlign={{ base: "center", md: "left" }}
          paddingStart={"25px"}
          paddingTop={1}
          paddingBottom={1}
          color="white"
          size={{ base: "3xl", md: "4xl" }}
        >
          About the Event
        </Heading>
        <Stack direction={{ base: "column", md: "row" }}>
          <Container maxW={{ base: "100%", md: "50%" }}>
            <VStack padding={{ base: "2px", md: "10px" }}>
              <Image src={aboutImage} alt="About Image"></Image>
            </VStack>
          </Container>
          <Container maxW={{ base: "100%", md: "70%" }}>
            <Stack gap={{ base: 10, md: 6 }} direction={"column"}>
              <Container
                padding={{ base: "2px", md: "10px 0" }}
                margin={0}
                maxWidth="100%"
              >
                <Heading
                  color={"#eeeeee"}
                  fontSize={{ base: "1.5rem", md: "2rem" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Event Date : {date.getDate()}/{date.getMonth()}/
                  {date.getFullYear()}
                </Heading>
              </Container>

              <Text color={"#eeeeee"} align={"justify"}>
                A technical festival is an event that brings together technology
                enthusiasts, students, and professionals to showcase the latest
                advancements and innovations in the field of science,
                engineering, and technology. These events often feature
                competitions, workshops, seminars, and exhibitions aimed at
                fostering learning, creativity, and collaboration among
                attendees.
              </Text>
              <Container maxWidth={"100%"} alignItems={"center"} marginTop={10}>
                <Stack
                  maxWidth={"100%"}
                  justifyContent="space-around"
                  alignItems={"center"}
                  direction={{ base: "column", md: "row" }}
                  gap={{ base: 2, md: 10 }}
                >
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      backgroundColor="#54cadd"
                      // color="#a33aa3"
                      // variant={"solid"}
                    >
                      Magazine
                    </Button>
                  </a>
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      backgroundColor="#54cadd"
                      variant={"solid"}
                    >
                      Brochure
                    </Button>
                  </a>
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      backgroundColor="#54cadd"
                      variant={"solid"}
                    >
                      Banner
                    </Button>
                  </a>
                </Stack>
              </Container>
              <Container maxWidth={"100%"} marginTop={10}>
                <Stack
                  justifyContent={{ base: "center", md: "space-around" }}
                  alignItems="center"
                  maxWidth={"100%"}
                  padding={0}
                  direction={{ base: "column", md: "row" }}
                >
                  <Container
                    padding={0}
                    margin="0"
                    maxWidth={{ base: "100%", md: "300px" }}
                  >
                    <Stack padding={0} direction={"row"}>
                      <Container
                        padding={0}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Card>
                          <Stack direction={"row"}>
                            <Image
                              borderRadius="full"
                              boxSize="100px"
                              src={count_icon}
                              alt="count icon"
                            />
                            <Stack
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              direction={"column"}
                            >
                              <Count countValue={1000} />
                              <Text>Total Visitors</Text>
                            </Stack>
                          </Stack>
                        </Card>
                      </Container>
                    </Stack>
                  </Container>
                  <Container
                    padding={0}
                    maxWidth={{ base: "100%", md: "300px" }}
                  >
                    <Stack padding={0} direction={"row"}>
                      <Container
                        padding={0}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Card>
                          <Stack direction={"row"}>
                            <Image
                              borderRadius="full"
                              boxSize="100px"
                              src={count_icon}
                              alt="count icon"
                            />
                            <Stack
                              justifyContent={"center"}
                              alignItems={"flex-start"}
                              direction={"column"}
                            >
                              <Count countValue={10000} />
                              <Text>Total Registration</Text>
                            </Stack>
                          </Stack>
                        </Card>
                      </Container>
                    </Stack>
                  </Container>
                </Stack>
              </Container>
            </Stack>
          </Container>
        </Stack>
        <Container
          paddingBottom={10}
          bg={"blackAlpha.100"}
          marginTop={"50px"}
          maxWidth="100%"
        >
          <Heading
            marginTop={"50px"}
            paddingTop={"20px"}
            paddingBottom="20px"
            textAlign={"center"}
            color="white"
            size="lg"
          >
            Sponsors
          </Heading>
          <SponsorMarquee />
        </Container>
      </Container>
    </>
  );
}
