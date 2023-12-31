import React from "react";
import { Container, Text } from "@chakra-ui/react";
import MusicalNight1 from "../../../assets/eventImages/dj.png";

import EventCard from "../EventCard";

const MusicalNight = (props) => {
    const IData = {
        id: 37,
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
        pdfName: "musicalnight"
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                {" "}
                <div className="exploreMore-note">
                    <span className="title">Note:</span>
                    <span className="message">Musical Night Registration will be done offline on campus.</span>
                </div>
            </div>
            {!(props.registeredEvent && !props.isMusicalNightRegistered) ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "600",
                        flexWrap: "wrap"
                    }}
                >
                    {!props.registeredEvent && (
                        <Container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
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
                    )}
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
                        registeredEvent={props.registeredEvent}
                        pdfName={IData.pdfName}
                    />
                </div>
            ) : null}
        </>
    );
};

export default MusicalNight;
