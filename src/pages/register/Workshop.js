import React from "react";
import image1 from "../../assets/eventRegister/register1.jpeg";
import image2 from "../../assets/eventRegister/register2.jpeg";
import image3 from "../../assets/eventRegister/register3.jpeg";
import image4 from "../../assets/eventRegister/register4.jpeg";
import image5 from "../../assets/eventRegister/register5.jpeg";
import image6 from "../../assets/eventRegister/register6.jpeg";
import image7 from "../../assets/eventRegister/register7.jpeg";
import image8 from "../../assets/eventRegister/djnight.jpg";

import EventCard from "./EventCard";

const Workshop = () => {
    const data = [
        {
            id: 0,
            image: image1,
            title: "BLOCKCHAIN",
            description:
                "Technology for creating decentralized ledger systems for various Dataset.Learn the fundamentals, applications, and hands-on skills to navigate the decentralized future",
        },
        {
            id: 1,
            image: image2,
            title: "BLENDER AND BEYOND",
            description:
                "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques.",
        },
        {
            id: 2,
            image: image3,
            title: "CLOUD",
            description:
                "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques.",
        },
        {
            id: 3,
            image: image4,
            title: "SOLID WORKS WITH 3D PRINTING",
            description:
                "Experience working with SolidWorks, a 3D CAD software which includes modeling, analysis and AMP, Animation and more.",
        },
        {
            id: 4,
            image: image5,
            title: "MACHINO MANIA",
            description:
                "Get ready for the ultimate frenzy of Machino Mania, a thrilling competition where machines clash in a high-octane showdown! ",
        },
        {
            id: 5,
            image: image6,
            title: "DEMYSTIFYING WEB3",
            description:
                "Demystify the world of Web3 and discover the limitless possibilities of the decentralized web.",
        },
        {
            id: 6,
            image: image7,
            title: "CABLE AND WIRE TESTING WORKSHOP",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
        },
    ];
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
                {data.map((IData) => (
                    <EventCard
                        eventId={IData.id}
                        eventType={"WORKSHOP"}
                        about={IData.about}
                        eventName={IData.title}
                        department={IData.department}
                        task={IData.task}
                        price={IData.eventFee}
                        teamSize={IData.teamSize}
                        taskEnabled={true}
                        show={true}
                        image={IData.image}
                        title={IData.title}
                        description={IData.description}
                    />
                ))}
            </div>
        </>
    );
};

export default Workshop;
