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
            department: "CSPIT: CE",
            description:
                "Technology for creating decentralized ledger systems for various Dataset.Learn the fundamentals, applications, and hands-on skills to navigate the decentralized future",
            about: "",
            task: [
                "Task 1:  Maze Game.",
                "Task 2: Solve the question and get clues and combines all clues and find IP address.   ",
                "Task 3: Solve the code and reach to final location."
            ],
            contact: ""
        },
        {
            id: 1,
            image: image2,
            title: "Network Hunting",
            department: "CSPIT: CE",
            description:
                "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques.",
            task: [
                "Task 1: Maze Game.",
                "Task 2: Solve the question and get clues and combines all clues and find IP address.",
                "Task 3: Solve the code and reach to final location."
            ],
            contact: "",
            about: ""
        },
        {
            id: 2,
            image: image3,
            title: "Civil Saga",
            department: "CSPIT: CL",
            description:
                "Unleash your creativity at the Blender and Beyond Workshop! Dive into the world of 3D modeling, animation, and visual effects, as industry experts guide you through powerful techniques.",
            task: "",
            contact: "",
            about: ""
        },
        {
            id: 3,
            image: image4,
            title: "ArtTech Extravaganza",
            department: "CSPIT: CSE/AIML",
            description:
                "Experience working with SolidWorks, a 3D CAD software which includes modeling, analysis and AMP, Animation and more.",
            task: [
                "To design technical posters or graphic designs",
                "Creating games by using code",
                "Design blueprints etc.",
                "You may use it according to your interest"
            ],
            contact: "",
            about: ""
        },
        {
            id: 4,
            image: image9,
            title: "Code Mania",
            department: "CSPIT: CSE/AIML",
            description:
                "Get ready for the ultimate frenzy of Machino Mania, a thrilling competition where machines clash in a high-octane showdown! ",
            task: [
                "The event will consist of multiple coding problems of varying difficulty levels.",
                "The problem set may include algorithmic challenges, data structure manipulation, logical puzzles, or real-world coding scenarios.",
                "Each problem will have a specific set of input and output requirements."
            ],
            contact: "",
            about: ""
        },
        {
            id: 5,
            image: image6,
            title: "Battlebot Blitz",
            department: "CSPIT: EC/EE",
            description:
                "Demystify the world of Web3 and discover the limitless possibilities of the decentralized web.",
            task: ["The BattleBot Blitz Contest is an electrifying competition that showcases the engineering prowess of custom-built robots engaged in intense combat. Witness the thrilling clash of mechanical titans as they battle for supremacy in a no-holds-barred arena!"],
            contact: "",
            about: "The BattleBot Blitz Contest is an electrifying competition that showcases the engineering prowess of custom-built robots engaged in intense combat. Witness the thrilling clash of mechanical titans as they battle for supremacy in a no-holds-barred arena!"
        },
        {
            id: 6,
            image: image7,
            title: "Robo Soccer",
            department: "CSPIT: EC/EE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Bring your manual designed robot and which can compete on an arena specially designed for robotic soccer match. The event mainly consists of ROUNDS 1, 2 and 3.",
                "Obstacles are placed on both halves of the arena; points will be deducted if the robot touches the obstacles."
            ],
            contact: "",
            about: ""
        },
        {
            id: 7,
            image: image10,
            title: "Robo Race",
            department: "CSPIT: EC/EE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Each competitor must bring a miniature, hand-built robot car for the competition.",
                "The goal is to build your own robot, either wired or wireless, within the required specifications in order to obtain the highest speed possible in order to cross the finish line in the shortest time possible.",
                "Any kind of obstacle, such as numerous turns, sand, a suicide point,dig and others, could be present on the path, your robo should be able to overcome every obstacle.",
                "The first prize goes to the robot with the shortest official time. Second prize to the next shortest, and so on.",
                "If there is a tie, another chance will be given to the participants."
            ],
            contact: "",
            about: "'RoboRace' refers to an innovative motorsport concept that involves fully autonomous, electric race cars competing against each other. It's a high-tech, futuristic take on traditional racing, with a focus on showcasing the capabilities of artificial intelligence, machine learning, and autonomous driving technology."
        },
        {
            id: 8,
            image: image7,
            title: "The Digital Scavenger Hunt",
            department: "CSPIT: IT",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1: Debugging the code provided.",
                "Task 2: Mini-Games.",
                "Task 3: Solving the GATE Level Questions.",
                "Task 4: Technical Treasure Hunt"
            ],
            contact: "",
            about: ""
        },
        {
            id: 9,
            image: image7,
            title: "Graphics Gladiator",
            department: "CSPIT: IT",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1 :  QUIZ",
                "Task 2 :  LOGO DESIGN",
                "Task 3 :  BRANDING"
            ],
            contact: "",
            about: ""
        },
        {
            id: 10,
            image: image8,
            title: "Roller Coster",
            department: "CSPIT: ME",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1 :  Time travelled by a plastic ball from top to toe will be measured along the maze created.",
                "Task 2 : Plastic ball filled with sand will be tested on the same maze and maximum time will be measured.     ",
                "Task 3 : Plastic ball half filled with liquid will be tested on the maze and time taken to travel the maze will measured."
            ],
            contact: "",
            about: ""
        },
        {
            id: 11,
            image: image7,
            title: "Relay and Bling Coding",
            department: "DEPSTAR CE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [],
            contact: "",
            about: ""
        },
        {
            id: 12,
            image: image5,
            title: "Key Masters - The ultimate typing showdown",
            department: "DEPSTAR CE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "<b>Five Rounds of Typing Fun:</b> The Typing Game Extravaganza comprises five rounds, each with its own unique typing challenge. From speed tests to accuracy challenges, you'll have the opportunity to showcase your typing prowess."
            ],
            contact: "",
            about: ""
        },
        {
            id: 13,
            image: image7,
            title: "Ping Data Structure",
            department: "DEPSTAR CSE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1: Solve the Quiz",
                "Task 2: Solve Query Challenge"
            ],
            contact: "",
            about: ""
        },
        {
            id: 14,
            image: image10,
            title: "Capture the Flag",
            department: "DEPSTAR CSE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1 : Find the flags 8 flags",
                "Task 2 : Answer the questions"
            ],
            contact: "",
            about: ""
        },
        {
            id: 15,
            image: image10,
            title: "Designing for Delight: A UI/UX challenge",
            department: "DEPSTAR IT",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: ["Task 1: Design UX/UI"],
            contact: "",
            about: ""
        },
        {
            id: 16,
            image: image7,
            title: "Break the Query",
            department: "DEPSTAR IT",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            task: [
                "Task 1: Solve the Quiz.",
                "Task 2: Solve Query Challenge."
            ],
            contact: "",
            about: ""
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
                        about={IData.about}
                        show={false}
                        image={IData.image}
                        title={IData.title}
                        description={IData.description}
                        eventName={IData.title}
                        department={IData.department}
                        task={IData.task}
                    />
                ))}
            </div>
        </>
    );
};

export default TechEvents;
