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
import aboutImage from "../assets/background.png";
import { HiDownload } from "react-icons/hi";
import count_icon from "../assets/count_icon.png";
import SponsorMarquee from "./SponsorMarquee";
export default function About() {
  const date = new Date();
  return (
    <>
      <Container marginTop={"20px"} maxWidth={"100%"}>
        <Heading
          // textAlign={"center"}
          paddingStart={"50px"}
          color="#1c4980"
          size="lg"
        >
          About the Event
        </Heading>
        <Stack direction={{ base: "column", md: "row" }}>
          <Container maxW={{ base: "100%", md: "50%" }}>
            <VStack padding={6}>
              <Image src={aboutImage} alt="About Image"></Image>
            </VStack>
          </Container>
          <Container maxW={{ base: "100%", md: "70%" }}>
            <Stack gap={10} direction={"column"}>
              <Container maxWidth="100%">
                <HStack justifyContent="space-between">
                  <Text>Event Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                </HStack>
              </Container>

              <Text>
                A technical festival is an event that brings together technology
                enthusiasts, students, and professionals to showcase the latest
                advancements and innovations in the field of science,
                engineering, and technology. These events often feature
                competitions, workshops, seminars, and exhibitions aimed at
                fostering learning, creativity, and collaboration among
                attendees.
              </Text>
              <Container alignItems={"center"} marginTop={10}>
                <Stack
                  direction={{ base: "row", md: "row" }}
                  gap={{ base: 2, md: 10 }}
                >
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      colorScheme="blue"
                      variant={"solid"}
                    >
                      Magazine
                    </Button>
                  </a>
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      colorScheme="blue"
                      variant={"solid"}
                    >
                      Brochure
                    </Button>
                  </a>
                  <a href="pdfs/banner.pdf" target="_blank" download>
                    <Button
                      width={"150px"}
                      leftIcon={<HiDownload />}
                      colorScheme="blue"
                      variant={"solid"}
                    >
                      Banner
                    </Button>
                  </a>
                </Stack>
              </Container>
              <Container>
                <Stack direction={"row"}>
                  <Container>
                    <Card>
                      <Stack direction={"row"}>
                        <Image
                          borderRadius="full"
                          boxSize="100px"
                          src={count_icon}
                          alt="count icon"
                        />
                      </Stack>
                    </Card>
                  </Container>
                </Stack>
              </Container>
            </Stack>
          </Container>
        </Stack>
      </Container>
      <SponsorMarquee />
    </>
  );
}
