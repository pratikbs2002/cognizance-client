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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import Payment from "./Payment";
import MusicalNight from "../../assets/eventImages/dj.png";
import "./ComboContainer.css";

export default function ComboContainer() {
    const [selectedEvents, setSelectedEvents] = React.useState([]);
    const IData = {
        id: 36,
        image: MusicalNight,
        title: "Musical Night",
        description:
            "Join us at the college function's electrifying Musical Night for an evening of beats, dance, and celebration!",
        task: [""],
        contact: "",
        about: "Experience an electrifying Musical Night at our college function, featuring pulsating beats, vibrant lights, and an atmosphere brimming with energy that promises an unforgettable evening of music and dance.",
        teamSize: 1,
        eventFee: 1000,
        eventType: "WORKSHOP",
    };

    const [priceDetails, setPriceDetails] = React.useState([
        { "Musical Night": IData.eventFee },
    ]);

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const [finalPrice, setFinalPrice] = React.useState(0);
    const [isAllEventTeamRegistered, setIsAllEventTeamRegistered] =
        React.useState([]);

    React.useEffect(() => {
        let dt = 0;
        if (priceDetails.length === 2) {
            dt = 100;
        } else if (priceDetails.length === 3) {
            dt = 250;
        }
        setDiscount(dt);
        let tp = priceDetails.reduce((a, b) => {
            return a + Object.values(b)[0];
        }, 0);
        setTotalPrice(tp);
        setFinalPrice(tp - dt);
    }, [priceDetails]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(isAllEventTeamRegistered);
    return (
        <Container
            maxW={"100%"}
            padding={"30px"}
            // backgroundColor={"rgba(0, 0, 0, 0.442)"}
        >
            <Card backgroundColor={"rgba(0, 0, 0, 0.442)"} padding={"30px"}>
                <Container
                    marginBottom={"50px"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
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
                    <Divider width={"30%"} />
                </Container>
                <Container
                    marginBottom={"50px"}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    fontWeight={"400"}
                    color={"white"}
                    fontSize={"20px"}
                    width={"100%"}
                    maxW={"100%"}
                    className="noteCard"
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            padding: "20px",
                            borderRadius: "10px",
                            border: "2px solid green",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                        className="note"
                    >
                        <div>Note:</div>
                        <div>
                            Act now! Register your squad before{" "}
                            <b>January 15, 2024</b>, and seize the exclusive
                            benefits of our limited-time combo offer!
                        </div>
                    </div>
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
                            image={IData.image}
                            name={IData.title}
                            price={IData.eventFee}
                            eventType={IData.eventType}
                            eventId={IData.id}
                            teamSize={IData.teamSize}
                            setIsAllEventTeamRegistered={
                                setIsAllEventTeamRegistered
                            }
                        />
                        <ComboCard
                            isActive={false}
                            selectedEvents={selectedEvents}
                            setSelectedEvents={setSelectedEvents}
                            setPriceDetails={setPriceDetails}
                            setIsAllEventTeamRegistered={
                                setIsAllEventTeamRegistered
                            }
                        />
                        <ComboCard
                            isActive={false}
                            selectedEvents={selectedEvents}
                            setSelectedEvents={setSelectedEvents}
                            setPriceDetails={setPriceDetails}
                            setIsAllEventTeamRegistered={
                                setIsAllEventTeamRegistered
                            }
                        />
                    </Container>
                    <Container
                        mt={"20px"}
                        marginBottom={"50px"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        fontWeight={"400"}
                        color={"white"}
                        fontSize={"20px"}
                        width={"100%"}
                        maxW={"100%"}
                        className="noteCard"
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                padding: "20px",
                                borderRadius: "10px",
                                border: "2px solid green",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            }}
                            className="note"
                        >
                            <div>
                                Take advantage of our exclusive combo offer!
                                Click on the cards above to select 1 or 2 tech
                                events. Remember to register your squad for all
                                selected events to proceed to payment and unlock
                                the special combo offer!
                            </div>
                        </div>
                    </Container>
                    <Container
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        paddingTop={"30px"}
                        paddingBottom={"30px"}
                        className="card highlight"
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
                            {priceDetails?.map((value) => {
                                return (
                                    <HStack
                                        width={"100%"}
                                        justifyContent={"space-between"}
                                        marginTop={"20px"}
                                        gap={"100px"}
                                    >
                                        <Text
                                            color={"white"}
                                            fontWeight={"600"}
                                        >
                                            {Object.keys(value)[0]}
                                        </Text>
                                        <Text
                                            color={"white"}
                                            fontWeight={"600"}
                                        >
                                            {Object.values(value)[0]} ₹
                                        </Text>
                                    </HStack>
                                );
                            })}

                            <Divider />
                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                                marginTop={"20px"}
                                gap={"100px"}
                            >
                                <Text color={"white"} fontWeight={"600"}>
                                    Total
                                </Text>
                                <Text color={"white"} fontWeight={"600"}>
                                    {totalPrice} ₹
                                </Text>
                            </HStack>
                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                                marginTop={"20px"}
                                gap={"100px"}
                            >
                                <Text color={"white"} fontWeight={"600"}>
                                    Discount
                                </Text>
                                <Text color={"white"} fontWeight={"600"}>
                                    - {discount} ₹
                                </Text>
                            </HStack>
                            <Divider height={"10px"} />

                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                                marginTop={"20px"}
                                gap={"100px"}
                            >
                                <Text color={"white"} fontWeight={"600"}>
                                    Final Amount
                                </Text>
                                <Text color={"white"} fontWeight={"600"}>
                                    {finalPrice} ₹
                                </Text>
                            </HStack>
                            <Divider />
                        </VStack>
                        <Divider></Divider>
                        <Button
                            marginTop={"30px"}
                            width={"100px"}
                            color={"black"}
                            onClick={onOpen}
                            isDisabled={
                                priceDetails.length === 1 ||
                                isAllEventTeamRegistered.length !==
                                    priceDetails.length
                            }
                        >
                            Pay
                        </Button>

                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            size={"6xl"}
                            closeOnOverlayClick={false}
                            isCentered
                        >
                            <ModalOverlay />
                            <ModalContent
                                bg="white"
                                p={10}
                                paddingBottom={10}
                                h={"80%"}
                                overflowY={"scroll"}
                            >
                                <ModalHeader>
                                    <Heading as="h1" size={"lg"}>
                                        Payment For Combo Offer ( {finalPrice}{" "}
                                        ₹)
                                    </Heading>
                                </ModalHeader>

                                <ModalCloseButton />

                                <ModalBody>
                                    <Payment price={finalPrice} />
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </Container>
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
