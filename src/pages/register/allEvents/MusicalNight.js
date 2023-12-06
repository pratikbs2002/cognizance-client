import React from "react";
import { Container, Text } from "@chakra-ui/react";
import MusicalNight1 from "../../../assets/eventImages/dj.png";

import EventCard from "../EventCard";

const MusicalNight = (props) => {
    const IData = {
        id: 36,
        image: MusicalNight1,
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

    return (
        <>
            <Container
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
                mt={"4%"}
                mb={"2%"}
                textAlign={"center"}
            >
                <Text width={"100%"} maxW={"100%"}>
                    Musical Night Registration
                </Text>
            </Container>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    flexWrap: "wrap",
                }}
            >
                <EventCard
                    eventId={IData.id}
                    eventType={IData.eventType}
                    about={IData.about}
                    show={true}
                    image={IData.image}
                    title={IData.title}
                    description={IData.description}
                    eventName={IData.title}
                    task={IData.task}
                    price={IData.eventFee}
                    teamSize={IData.teamSize}
                    taskEnabled={false}
                    isMusicalNight={true}
                />
            </div>
        </>
    );
};

export default MusicalNight;
