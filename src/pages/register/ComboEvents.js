import React from "react";
import EventCard from "./EventCard";
import image1 from "../../assets/eventRegister/register1.jpeg";
import image2 from "../../assets/eventRegister/register2.jpeg";
import image3 from "../../assets/eventRegister/register3.jpeg";
import image4 from "../../assets/eventRegister/register4.jpeg";
import image5 from "../../assets/eventRegister/register5.jpeg";
// import image6 from "../../assets/eventRegister/register6.jpeg";
import image7 from "../../assets/eventRegister/register7.jpeg";
import image8 from "../../assets/eventRegister/reg1.png";
import image9 from "../../assets/eventRegister/coding.png";
import image10 from "../../assets/eventRegister/flag.jpeg";

import DJNight from "../../assets/eventImages/DJNight.jpg";
import roboSoccer from "../../assets/eventImages/robo soccer.png";
import roboRace from "../../assets/eventImages/robo race.jpg";
import codeMania from "../../assets/eventImages/code mania.png";
import artTech from "../../assets/eventImages/artTech.png";
import networkinghunting from "../../assets/eventImages/network hunting.png";
import { Card } from "@chakra-ui/react";
// import

const ComboEvents = () => {
    const data = [1, 2, 3, 4];
    const IData = {
        id: 0,
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
        </>
    );
};

export default ComboEvents;
