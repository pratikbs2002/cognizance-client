import React, { useState } from "react";
import { Box, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";
import AddEventModal from "./AddEventModal";
import EditProfile from "./EditProfile";
import { set } from "lodash";

const ComboCard = ({
    name,
    image,
    price,
    eventType,
    teamSize,
    eventId,
    isActive,
    selectedEvents,
    setSelectedEvents,
    setPriceDetails,
    priceDetails,
}) => {
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
        setPriceDetails((values) => [...values, { [title]: price }]);
        console.log(selectedEvents);
        setSelectedEvents([...selectedEvents, eventId]);
        setActive(true);
    };
    console.log(priceDetails);

    const [active, setActive] = useState(isActive);
    const [data, setData] = useState({});
    return (
        <>
            {active ? (
                <Box
                    maxW={"300px"}
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
                    <Image
                        src={isActive ? image : data.image}
                        alt={name}
                        w="100%"
                        h="auto"
                    />
                    <Text
                        color="white"
                        mt={2}
                        fontSize="xl"
                        fontWeight="semibold"
                    >
                        {isActive ? name : data.title}
                    </Text>
                    <Text mt={2} color="white">
                        ${isActive ? price : data.price}
                    </Text>
                    {/* <Button
                        mt={4}
                        backgroundColor="white"
                        onClick={handleRegisterTeam}
                        variant="outline"
                        w="100%"
                    >
                        {isTeamRegistered ? "Unregister Team" : "Register Team"}
                    </Button> */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "5%",
                        }}
                    >
                        <EditProfile
                            eventType={isActive ? eventType : data.eventType}
                            eventId={isActive ? eventId : data.eventId}
                            eventName={isActive ? name : data.title}
                            teamSize={isActive ? teamSize : data.teamSize}
                            price={isActive ? price : data.price}
                            image={isActive ? image : data.image}
                            addEventModal={true}
                            handleRegisterTeam={handleRegisterTeam}
                        />
                        {!isActive && (
                            <Button
                                backgroundColor="#54cadd"
                                onClick={() => {
                                    setActive(!active);
                                    setPriceDetails((values) =>
                                        values.filter(
                                            (value) =>
                                                Object.keys(value)[0] !==
                                                data.title
                                        )
                                    );
                                    setSelectedEvents(
                                        selectedEvents.filter(
                                            (event) => event !== data.eventId
                                        )
                                    );
                                }}
                                variant="outline"
                                marginLeft="5%"
                                w="50%"
                            >
                                Remove Event
                            </Button>
                        )}
                    </div>
                </Box>
            ) : (
                <Box
                    maxW={"250px"}
                    borderWidth="5px"
                    borderRadius="lg"
                    overflow="hidden"
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
                    <AddEventModal
                        addEventHandler={addEventHandler}
                        selectedEvents={selectedEvents}
                    />
                </Box>
            )}
        </>
    );
};

export default ComboCard;
