import React from "react";
import EventCard from "./EventCard";
import image1 from "../../assets/eventRegister/register1.jpeg";
import image2 from "../../assets/eventRegister/register2.jpeg";
import image3 from "../../assets/eventRegister/register3.jpeg";
import image4 from "../../assets/eventRegister/register4.jpeg";
import image5 from "../../assets/eventRegister/register5.jpeg";
import image6 from "../../assets/eventRegister/register6.jpeg";
import image7 from "../../assets/eventRegister/register7.jpeg";
import image8 from "../../assets/eventRegister/reg1.png";
import image9 from "../../assets/eventRegister/coding.png";
import image10 from "../../assets/eventRegister/flag.jpeg";

const TechEvents = () => {
  const data = [
    {
      id: 0,
      image: image1,
      title: "Healthy Switching",
      description:
        "Technology for creating decentralized ledger systems for various Dataset.Learn the fundamentals, applications, and hands-on skills to navigate the decentralized future"
    },
    {
      id: 1,
      image: image2,
      title: "Network Hunting",
      description:
        "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques."
    },
    {
      id: 2,
      image: image3,
      title: "Civil Saga",
      description:
        "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques."
    },
    {
      id: 3,
      image: image4,
      title: "ArtTech Extravaganza",
      description:
        "Experience working with SolidWorks, a 3D CAD software which includes modeling, analysis and AMP, Animation and more."
    },
    {
      id: 4,
      image: image9,
      title: "Code Mania",
      description:
        "Get ready for the ultimate frenzy of Machino Mania, a thrilling competition where machines clash in a high-octane showdown! "
    },
    {
      id: 5,
      image: image6,
      title: "Battlebot Blitz",
      description:
        "Demystify the world of Web3 and discover the limitless possibilities of the decentralized web."
    },
    {
      id: 6,
      image: image7,
      title: "Robo Soccer",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 7,
      image: image10,
      title: "Robo Race",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 8,
      image: image7,
      title: "The Digital Scavenger Hunt",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 9,
      image: image7,
      title: "Graphics Gladiator",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 10,
      image: image8,
      title: "Roller Coster",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 11,
      image: image7,
      title: "Relay and Bling Coding",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 12,
      image: image5,
      title: "Key Masters - The ultimate typing showdown",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 13,
      image: image7,
      title: "Ping Data Structure",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 14,
      image: image10,
      title: "Capture the Flag",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 15,
      image: image10,
      title: "Designing for Delight: A UI/UX challenge",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    },
    {
      id: 16,
      image: image7,
      title: "Break the Query",
      description:
        "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance."
    }
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
          flexWrap: "wrap"
        }}
      >
        {data.map((IData) => (
          <EventCard
            show={false}
            image={IData.image}
            title={IData.title}
            description={IData.description}
          />
        ))}
      </div>
    </>
  );
};

export default TechEvents;
