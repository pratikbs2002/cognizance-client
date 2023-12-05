import React from "react";
import ComboCard from "./ComboCard";
import DJNight from "../../assets/eventImages/dj.png";
import {
    Box,
    Button,
    Card,
    Circle,
    Container,
    Divider,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import Payment from "./Payment";
export default function ComboContainer() {
    const [selectedEvents, setSelectedEvents] = React.useState([]);
    return (
        <Container
            maxW={"100%"}
            padding={"30px"}
            // backgroundColor={"rgba(0, 0, 0, 0.442)"}
        >
            <Card backgroundColor={"rgba(0, 0, 0, 0.442)"} padding={"30px"}>
                <Container
                    marginBottom={"100px"}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    fontWeight={"800"}
                    color={"white"}
                    fontSize={"40px"}
                    width={"100%"}
                    maxW={"100%"}
                    textAlign={"center"}
                >
                    <Text width={"100%"} maxW={"100%"}>
                        Combo Offer
                    </Text>
                </Container>
                <Container className="events-combo" maxW={"90%"}>
                    <Container
                        padding={"10px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        maxWidth={"100%"}
                        flexWrap={"wrap"}
                    >
                        <ComboCard
                            isActive={true}
                            image={DJNight}
                            name="Musical Night"
                            price="100"
                        />
                        <ComboCard
                            isActive={false}
                            image={DJNight}
                            name="Musical Night"
                            price="100"
                            selectedEvents={selectedEvents}
                            setSelectedEvents={setSelectedEvents}
                        />
                        <ComboCard
                            isActive={false}
                            image={DJNight}
                            name="Musical Night"
                            price="100"
                            selectedEvents={selectedEvents}
                            setSelectedEvents={setSelectedEvents}
                        />
                    </Container>
                    <Card
                        backgroundColor={"rgba(0, 0, 0, 0.642)"}
                        width={"100%"}
                    >
                        <Container
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            paddingTop={"30px"}
                            paddingBottom={"30px"}
                        >
                            <Text
                                fontSize={"30"}
                                fontWeight={"800"}
                                color={"white"}
                            >
                                Combo Offer Summary
                            </Text>
                            <Divider />

                            <VStack>
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Musical Night
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        100$
                                    </Text>
                                </HStack>
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Musical Night
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        100$
                                    </Text>
                                </HStack>
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Musical Night
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        100$
                                    </Text>
                                </HStack>
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Musical Night
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        100$
                                    </Text>
                                </HStack>
                                <Divider />
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Total
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        400$
                                    </Text>
                                </HStack>
                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Discount
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        - 15%
                                    </Text>
                                </HStack>
                                <Divider height={"10px"} />

                                <HStack
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    marginTop={"40px"}
                                    gap={"100px"}
                                >
                                    <Text color={"white"} fontWeight={"600"}>
                                        Final Amount
                                    </Text>
                                    <Text color={"white"} fontWeight={"600"}>
                                        340 $
                                    </Text>
                                </HStack>
                                <Divider />
                            </VStack>
                            <Divider></Divider>
                            <Button
                                marginTop={"30px"}
                                width={"100px"}
                                color={"black"}
                                onClick={() => {}}
                            >
                                Pay
                            </Button>
                        </Container>
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
                            <ComboCard image={DJNight} name="Musical Night" price="100" />
                        </Container>
                    </Card>
                </Container> */}
            </Card>
        </Container>
    );
}
