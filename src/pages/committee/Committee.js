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
import CoreTeam from "./CoreTeam";
import "./committee.css";
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
                            color="white"
                            size={{ base: "3xl", md: "4xl" }}
                        >
                            Committee
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
                            <CoreTeam />
                            <Heading
                                padding={5}
                                textAlign={"center"}
                                color="#1c4980"
                                size="sm"
                            >
                                Core members
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
                                Other members
                            </Heading>
                        </Card>
                    </Container>
                </Card>
            </Container>
        </>
    );
}
