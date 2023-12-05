import {
    Container,
    Text,
    Card,
    Stack,
    HStack,
    VStack,
    CardHeader,
    Heading,
} from "@chakra-ui/react";
import React from "react";
import CommitteeMembers from "./CommitteeMembers";
import CoreTeam from "./ChiefPatrons";
import "./committee.css";
import ChiefPatrons from "./ChiefPatrons";
import Patrons from "./Patrons";
import CoPatrons from "./CoPatrons";
import Conveners from "./Coveners";
export default function Committee() {
    return (
        <>
            <Container
                background={"transparent"}
                className="committee-section"
                padding={5}
                maxW={"100%"}
            >
                <Card
                    background={"transparent"}
                    padding={0}
                    align="flex-start"
                    // bg="white"
                >
                    <CardHeader
                        maxW={"100%"}
                        fontSize={30}
                        alignSelf={"center"}
                    >
                        <Heading
                            color="black"
                            size={{ base: "3xl", md: "4xl" }}
                        >
                            Organizing Committee
                        </Heading>
                    </CardHeader>
                    <Container
                        padding={0}
                        marginTop={10}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "80%",
                            "2xl": "60%",
                        }}
                    >
                        <Card padding={0}>
                            <ChiefPatrons />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Chief Patrons
                            </Heading>
                        </Card>
                    </Container>
                    <Container
                        padding={0}
                        marginTop={10}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "80%",
                            "2xl": "60%",
                        }}
                    >
                        <Card padding={0}>
                            <Patrons />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Patrons
                            </Heading>
                        </Card>
                    </Container>
                    <Container
                        padding={0}
                        marginTop={10}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "80%",
                            "2xl": "60%",
                        }}
                    >
                        <Card padding={0}>
                            <CoPatrons />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Co-Patrons
                            </Heading>
                        </Card>
                    </Container>
                    <Container
                        padding={0}
                        marginTop={10}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "80%",
                            "2xl": "60%",
                        }}
                    >
                        <Card padding={0}>
                            <Conveners />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Conveners
                            </Heading>
                        </Card>
                    </Container>
                    <Container
                        padding={0}
                        marginTop={10}
                        maxW={{
                            base: "100%",
                            md: "100%",
                            lg: "100%",
                            xl: "80%",
                            "2xl": "60%",
                        }}
                    >
                        <Card padding={"10px 0px 0 0px"}>
                            <CommitteeMembers />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Coordinators
                            </Heading>
                        </Card>
                    </Container>
                </Card>
            </Container>
        </>
    );
}
