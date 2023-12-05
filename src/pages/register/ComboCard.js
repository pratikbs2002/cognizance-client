import React, { useState } from "react";
import { Box, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";
import AddEventModal from "./AddEventModal";

const ComboCard = ({ name, image, price }) => {
    const [isTeamRegistered, setIsTeamRegistered] = useState(false);

    const boxShadowColor = useColorModeValue(
        isTeamRegistered ? "rgba(72, 187, 120, 0.5)" : "rgba(239, 68, 68, 0.5)",
        isTeamRegistered ? "rgba(72, 187, 120, 0.2)" : "rgba(239, 68, 68, 0.2)"
    );
    const borderColor = useColorModeValue(
        isTeamRegistered ? "green.500" : "red.500",
        isTeamRegistered ? "green.300" : "red.300"
    );
    const handleRegisterTeam = () => {
        setIsTeamRegistered(!isTeamRegistered);
    };

    const addEventHandler = (
        image,
        title,
        price,
        eventId,
        eventType,
        teamSize
    ) => {
        console.log("Add event handler called");
        setData({ image, title, price, eventId, eventType, teamSize });
        setActive(true);
    };

    const [active, setActive] = useState(false);
    const [data, setData] = useState({});
    return (
        <>
            {active ? (
                <Box
                    maxW={"250px"}
                    borderWidth="5px"
                    borderRadius="lg"
                    overflow="hidden"
                    backgroundColor={"rgba(0, 0, 0, 0.442)"}
                    borderColor={borderColor}
                    p={4}
                    boxShadow={`0 0 30px ${boxShadowColor}`}
                    transition="box-shadow 0.3s"
                    mx="auto"
                    mb={4}
                >
                    <Image src={data.image} alt={name} w="100%" h="auto" />
                    <Text
                        color="white"
                        mt={2}
                        fontSize="xl"
                        fontWeight="semibold"
                    >
                        {data.title}
                    </Text>
                    <Text mt={2} color="white">
                        ${data.price}
                    </Text>
                    <Button
                        mt={4}
                        backgroundColor="white"
                        onClick={handleRegisterTeam}
                        variant="outline"
                        w="100%"
                    >
                        {isTeamRegistered ? "Unregister Team" : "Register Team"}
                    </Button>
                </Box>
            ) : (
                <Box
                    maxW={"250px"}
                    borderWidth="5px"
                    borderRadius="lg"
                    overflow="hidden"
                    backgroundColor={"rgba(0, 0, 0, 0.442)"}
                    borderColor={borderColor}
                    p={4}
                    boxShadow={`0 0 30px ${boxShadowColor}`}
                    transition="box-shadow 0.3s"
                    mx="auto"
                    mb={4}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <AddEventModal addEventHandler={addEventHandler} />
                </Box>
            )}
        </>
    );
};

export default ComboCard;
