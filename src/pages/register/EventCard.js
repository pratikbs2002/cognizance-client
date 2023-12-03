import {
    Box,
    Flex,
    Image,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    // useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import "./EventCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./EventModal";
import EditProfile from "./EditProfile";

export default function EventCard(props) {
    const navigate = useNavigate();

    const [show, setShow] = useState(props.show);
    return (
        <>
            {/* <Modal /> */}
            <Box p={4} width="350px">
                <Box
                    borderWidth={1}
                    borderRadius="md"
                    minHeight={"400px"}
                    overflow="hidden"
                    backgroundColor={"blackAlpha.400"}
                >
                    <Image
                        src={props.image}
                        alt="Image"
                        objectFit="cover"
                        w="100%"
                        style={{
                            aspectRatio: "1/1",
                        }}
                    />

                    <Box p={4}>
                        <Text
                            fontSize="20px"
                            fontWeight="bold"
                            height={"50px"}
                            mb={2}
                        >
                            {props.title}
                        </Text>

                        <Accordion allowToggle>
                            <AccordionItem border={0}>
                                <h2>
                                    <AccordionButton
                                        display="flex"
                                        justifyContent={"space-between"}
                                        w={"100%"}
                                        alignItems={"flex-start"}
                                        margin={0}
                                        padding={"10px 10px 10px 0px"}
                                    >
                                        <Box flex="1" textAlign="left">
                                            More Details
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    className="event-registration-description"
                                    // overflowY={"scroll"}
                                    // maxHeight={"100px"}
                                    pb={4}
                                >
                                    {!show ? (
                                        <>Coming Soon!!</>
                                    ) : (
                                        <>{props.description}</>
                                    )}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <Flex
                            width={"100%"}
                            justify="space-between"
                            mt={4}
                            gap={2}
                        >
                            <EditProfile
                                eventName={props.eventName}
                                teamSize={props.teamSize}
                                price={props.price}
                                image={props.image}
                            />
                            <Modal
                                about={props.about}
                                eventName={props.eventName}
                                image={props.image}
                                department={props.department}
                                task={props.task}
                                price={props.price}
                                teamSize={props.teamSize}
                                taskEnabled={props.taskEnabled}
                                pdfName={props.pdfName}
                            />
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
