import React from "react";
import blockchain from "../../../assets/eventImages/blockChain.png";
import image4 from "../../../assets/eventRegister/register4.jpeg";
import cable from "../../../assets/eventImages/Cable.png";
import CyberSecurity from "../../../assets/eventImages/Cyber.png";
import BIM from "../../../assets/eventImages/BIM.png";
import Aws from "../../../assets/eventImages/AWS.png";
import Iot from "../../../assets/eventImages/IoT.png";

import EventCard from "../EventCard";

const Workshop = (props) => {
    const data = [
        {
            id: 30,
            image: blockchain,
            title: "Blockchain",
            description:
                "Technology for creating decentralized ledger systems for various Dataset.Learn the fundamentals, applications, and hands-on skills to navigate the decentralized future",
            pdfName: "Blockchain - Workshop - Cognizance 2024",
        },
        // {
        //     id: 28,
        //     image: blender,
        //     title: "Blender and beyond",
        //     description:
        //         "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques.",
        // },
        {
            id: 31,
            image: Aws,
            title: "AWS-DevOps",
            description:
                "Embark on an immersive learning experience and gain comprehensive expertise to revolutionize your capabilities within the dynamic realm of AWS Cloud at our transformative and hands-on workshop.",
            pdfName: "AWS-DevOps - Workshop - Cognizance 2024",
        },
        {
            id: 32,
            image: CyberSecurity,
            title: "Cyber Security",
            description:
                "Explore the intricate world of Cyber Security in our comprehensive workshop, where cutting-edge techniques and hands-on learning converge to fortify your defenses and safeguard the digital landscape.",
            pdfName: "Cyber Security - Workshop - Cognizance 2024",
        },
        {
            id: 33,
            image: BIM,
            title: "BIM : Building Information Modelling",
            description:
                "Discover the transformative potential of Building Information Modeling (BIM) in our immersive workshop, where innovation meets construction to reshape industry standards and unleash project excellence.",
            pdfName: "BIM - Workshop - Cognizance 2024",
        },
        {
            id: 34,
            image: cable,
            title: "Cable and Wire Testing Workshop",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            pdfName: "Cable & Wire Testing - Workshop - Cognizance 2024",
        },
        {
            id: 35,
            image: image4,
            title: "Solid Works & 3D Printing",
            description:
                "Experience working with SolidWorks, a 3D CAD software which includes modeling, analysis and AMP, Animation and more.",
            pdfName: "Solidworks & 3D Printing - Workshop - Cognizance 2024",
        },
        {
            id: 36,
            image: Iot,
            title: "Enlarging Mobile Apps for IoT & Robotics Application",
            description:
                "Explore the boundless horizons of IoT and Robotics application integration into mobile apps through our comprehensive workshop, expanding your skills and vision in this transformative technological landscape.",
            pdfName:
                "Enlarging Mobile Apps for IoT & Robotics Application - Workshop - Cognizance 2024",
        },
    ];

    const finalData = props.registeredEvent
        ? data.filter((item) => props.workshopIds?.includes(item.id))
        : data;
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
                {finalData.map((IData) => (
                    <EventCard
                        eventId={IData.id}
                        eventType={"WORKSHOP"}
                        about={IData.about}
                        eventName={IData.title}
                        department={IData.department}
                        task={IData.task}
                        price={IData.eventFee}
                        teamSize={1}
                        taskEnabled={true}
                        show={true}
                        image={IData.image}
                        pdfName={IData.pdfName}
                        title={IData.title}
                        description={IData.description}
                        addEventModal={props.addEventModal}
                        addEventHandler={props.addEventHandler}
                        isExploreMoreDeactived={true}
                        registeredEvent={props.registeredEvent}
                    />
                ))}
            </div>
        </>
    );
};

export default Workshop;
