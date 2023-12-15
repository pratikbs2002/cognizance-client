import React from 'react'
import {
    Container,
    Text,
    Card,
    Heading,
} from "@chakra-ui/react";
import backd from "../../assets/main-bg.jpg";
import Website from './Website';
import MusicalEvent from './MusicalEvent';
import MediaPress from './MediaPress';
import Sponsorship from './Sponsorship';
import Campaining from './Campaining';
import AcTrHos from './AcTrHos';
import RegisterComm from './RegisterComm';
import NonTech from './NonTech';
import Technical from './Technical';

const EventCommittee=()=>{
    return(
        <>
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
                    textAlign: "center",
                }}
            >
                <Text>Event Committee</Text>
            </div>
            <Container
                background={"transparent"}
                className="committee-section"
                padding={5}
                maxW={"100%"}
            >
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            WEBSITE COMMITTEE
                        </Heading>
                        <Website/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            >
                            MUSICAL EVENT COMMITTEE
                        </Heading>
                        <MusicalEvent/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            MEDIA AND PRESS COMMITTEE
                        </Heading>
                        <MediaPress/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            SPONSORSHIP COMMITTEE
                        </Heading>
                        <Sponsorship/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            CAMPAINING COMMITTEE
                        </Heading>
                        <Campaining/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            Accommodation, Transportation and Hospitality Committee 
                            ACCOMMODATION, TRANSPORTATION AND HOSPITALITY COMMITTEE
                        </Heading>
                        <AcTrHos/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            REGISTRATION COMMITTEE
                        </Heading>
                        <RegisterComm/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            NON TECHNICAL EVENT COMMITTEE
                        </Heading>
                        <NonTech/>
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
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                        maxW={"100%"}
                        padding={0}
                    >
                        <Heading
                            padding={5}
                            textAlign={"center"}
                            size="md"
                            color="white"
                            // bg="#161d37 !important"
                            border="1px solid white"
                            style={{
                                background: `url(${backd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            TECHNICAL EVENT COMMITTEE
                        </Heading>
                        <Technical/>
                    </Card>
                </Container>
            </Container>
        </>
    );
}
export default EventCommittee;