import React from "react";
import EventCard from "./EventCard";
import DJNight from "../../assets/eventImages/dj.png";
import { Card } from "@chakra-ui/react";
import ComboCard from "./ComboCard";
import ComboContainer from "./ComboContainer";



const ComboEvents = () => {
    const data = [1, 2, 3, 4];
    const IData = {
        id: 34,
        image: DJNight,
        title: "DJ Night",
        description:
            "Join us at the college function's electrifying DJ Night for an evening of beats, dance, and celebration!",
        task: [""],
        contact: "",
        about: "Experience an electrifying DJ Night at our college function, featuring pulsating beats, vibrant lights, and an atmosphere brimming with energy that promises an unforgettable evening of music and dance.",
        teamSize: 1,
        eventFee: 150,
    };
    return (
        <>
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
                    eventType={"DJ NIGHT"}
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
                />
            </div>
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
                {data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            style={{
                                width: "300px",
                                height: "300px",
                                margin: "10px",
                                color: "white",
                                fontWeight: "600",
                                fontSize: "20px",
                                display: "flex",
                                background: "rgba(0, 0, 0, 0.442)",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                padding: "10px",
                                border: "1px solid white",
                                borderRadius: "10px",
                                boxShadow:
                                    "0px 0px 10px 0px rgba(255,255,255,0.5)",
                            }}
                        >
                            Add Event (Comming Soon!)
                        </Card>
                    );
                })}
            </div>
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
                {data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            style={{
                                width: "300px",
                                height: "300px",
                                margin: "10px",
                                color: "white",
                                fontWeight: "600",
                                fontSize: "20px",
                                display: "flex",
                                background: "rgba(0, 0, 0, 0.442)",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                padding: "10px",
                                border: "1px solid white",
                                borderRadius: "10px",
                                boxShadow:
                                    "0px 0px 10px 0px rgba(255,255,255,0.5)",
                            }}
                        >
                            Add Event (Comming Soon!)
                        </Card>
                    );
                })}
            </div>
            <ComboContainer />
        </>
    );
};

export default ComboEvents;
