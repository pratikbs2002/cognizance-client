import { Container, Text, Card, Stack, HStack, VStack, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import SponsorLogo from "../SponsorMarquee";
import CommitteeMembers from "./CommitteeMembers";
export default function Committee() {
  return (
    <>
      <Container padding={10} maxW={"100%"}>
        <Card padding={"0 0 40px 0"} align="flex-start" bg="white">
          <CardHeader maxW={"100%"} fontSize={30} alignSelf={"center"}>
            <Heading
              color="#1c4980"
              size="lg"
            >
              Committee
            </Heading>
          </CardHeader>
          <Container maxW={{ base: "100%", md: "60%" }}>
            <Card padding={"30px 30px 0px 30px"}>
              <VStack>
                <CommitteeMembers />
                <CardHeader>
                  <Heading
                    color="#1c4980"
                    size="sm"
                  >
                    Core Team
                  </Heading>
                </CardHeader>
              </VStack>
            </Card>
          </Container>
          <Container marginTop={10} maxW={{ base: "100%", md: "60%" }}  >
            <Card padding={"30px 30px 0px 30px"}>
              <VStack>
                <CommitteeMembers />
                <CardHeader>
                  <Heading
                    color="#1c4980"
                    size="sm"
                  >
                    Other members
                  </Heading>
                </CardHeader>
              </VStack>
            </Card>
          </Container>
        </Card>
      </Container>
    </>
  );
}



