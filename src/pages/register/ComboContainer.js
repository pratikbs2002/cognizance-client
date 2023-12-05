import React from "react";
import ComboCard from "./ComboCard";
import DJNight from "../../assets/eventImages/dj.png";
import { Box, Card, Circle, Container, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function ComboContainer() {
    return (
        <Container
            maxW={"100%"}
            padding={"30px"}
            backgroundColor={"rgba(0, 0, 0, 0.442)"}
        >

            <Card padding={"30px"}>


                <Container className="events-combo" maxW={"90%"}>
                    <Card>
                        <Container
                            padding={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            maxWidth={"100%"}
                            flexWrap={"wrap"}
                        >
                            <ComboCard image={DJNight} name="DJNight" price="100" />
                            <ComboCard image={DJNight} name="DJNight" price="100" />
                            <ComboCard image={DJNight} name="DJNight" price="100" />
                            <ComboCard image={DJNight} name="DJNight" price="100" />
                        </Container>
                        <Card width={"100%"}>
                            <Container display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                                <Text fontSize={"30"} fontWeight={"600"}>
                                    Combo Offer Summary
                                </Text>
                                <Divider />

                                <VStack>
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            DJNight
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            100$
                                        </Text>
                                    </HStack>
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            DJNight
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            100$
                                        </Text>
                                    </HStack>
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            DJNight
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            100$
                                        </Text>
                                    </HStack>
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            DJNight
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            100$
                                        </Text>
                                    </HStack>
                                    <Divider />
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            Total
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            400$
                                        </Text>
                                    </HStack>
                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            Discount
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            - 15%
                                        </Text>
                                    </HStack>
                                    <Divider height={"10px"} />

                                    <HStack width={"100%"} justifyContent={"space-between"} marginTop={"40px"} gap={"100px"}>
                                        <Text fontWeight={"600"}>
                                            Final Amount
                                        </Text>
                                        <Text fontWeight={"600"}>
                                            340 $
                                        </Text>
                                    </HStack>
                                    <Divider />
                                </VStack>
                                <Divider>

                                </Divider>

                            </Container>
                        </Card>
                    </Card>
                    <Card>
                        <Container>
                            {/* <Box border={"2px solid black"} backgroundColor={"white"} boxSize='100px' borderRadius={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Text fontWeight={"700"}> 100 Rs</Text>
                            </Box>
                            <Box border={"2px solid black"} backgroundColor={"white"} boxSize='100px' borderRadius={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Text fontWeight={"700"}> 100 Rs</Text>
                            </Box>
                            <Box border={"2px solid black"} backgroundColor={"white"} boxSize='100px' borderRadius={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Text fontWeight={"700"}> 100 Rs</Text>
                            </Box>
                            <Box border={"2px solid black"} backgroundColor={"white"} boxSize='100px' borderRadius={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Text fontWeight={"700"}> 100 Rs</Text>
                            </Box> */}

                        </Container>
                    </Card>
                </Container>
                {/* <Container marginTop={"10px"} className="events-combo" maxW={"80%"}>
                    <Card>
                        <Container
                            padding={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            maxWidth={"80%"}
                        >
                            <ComboCard image={DJNight} name="DJNight" price="100" />
                        </Container>
                    </Card>
                </Container> */}
            </Card>
        </Container>
    );
}
