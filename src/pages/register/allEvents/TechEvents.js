import React, { useState } from "react";
import EventCard from "../EventCard";

import battleBlitz from "../../../assets/eventImages/battle blitz.png";
import roboSoccer from "../../../assets/eventImages/robo soccer.png";
import roboRace from "../../../assets/eventImages/robo race.png";
import codeMania from "../../../assets/eventImages/code mania.png";
import artTech from "../../../assets/eventImages/artTech.png";
import networkHunting from "../../../assets/eventImages/network hunting.png";
import healthyswitching from "../../../assets/eventImages/healthySwitching.png";
import keyMaster from "../../../assets/eventImages/key master.jpg";
import uiux from "../../../assets/eventImages/ui ux.jpeg";
import civilSaga from "../../../assets/eventImages/civil saga.png";
import captureTheFlag from "../../../assets/eventImages/ctf2.png";
import graphicsGladiator from "../../../assets/eventImages/Graphics Gladiator.png";
import pingDataStructure from "../../../assets/eventImages/ping.png";
import rollerCoaster from "../../../assets/eventImages/roller coaster.png";
import theDigitalScavangerHunt from "../../../assets/eventImages/TDSH.png";
import relayAndBlindCoding from "../../../assets/eventImages/relayAndBlindCoding.png";
import pingData from "../../../assets/eventImages/pingData.jpg";

const TechEvents = (props) => {
    const data = [
        {
            id: 1,
            image: battleBlitz,
            title: "Battlebot Blitz",
            department: "CSPIT: EC/EE",
            description:
                "Experience the electrifying clash of custom-built robots in the BattleBot Blitz Contest, where engineering prowess meets intense combat for ultimate supremacy.",
            task: [
                "●	In this contest, participating teams are tasked with designing and constructing a remote-controlled robot capable of competing in a tournament against other robots. It's a test of engineering ingenuity, strategic thinking, and precise control."
            ],
            contact: "",
            about: "The BattleBot Blitz Contest is an electrifying competition that showcases the engineering prowess of custom-built robots engaged in intense combat. Witness the thrilling clash of mechanical titans as they battle for supremacy in a no-holds-barred arena!",
            teamSize: 3,
            eventFee: 500,
            winningPrice: ["● 1st Prize: ₹ 25,000", "● 2nd Prize: ₹ 20,000"],
            isPrizesEnabled: true,
            pdfName: "battleblitz",
            maxRegistration:45,
        },
        {
            id: 2,
            image: roboSoccer,
            title: "Robo Soccer",
            department: "CSPIT: EC/EE",
            description:
                "Step into a new dimension of soccer with ROBO SOCCER, where engineers redefine the game, challenging you to unleash your inner RONALDO or MESSI through manual soccer-playing bots on the grandest stage of thrilling competition.",
            task: [
                "●	Bring your manual designed robot and which can compete on an arena specially designed for robotic soccer match. The event mainly consists of ROUNDS 1, 2 and 3.",
                "●	Obstacles are placed on both halves of the arena; points will be deducted if the robot touches the obstacles."
            ],
            contact: "",
            about: "Its football time and no-one plays soccer better than the engineers, in their own sophisticated way we hail this event ROBO SOCCER. All your soccer fans hold your breath, as we present to your soccer with an entirely new dimension. So if you are up for the challenge get your manual soccer playing bots ready in order to compete on the biggest stage and bring out the hidden RONALDO, MESSI in you…its time you to stop watching soccer on screens. Participate and have lots of fun it’s going to be thrilling for sure…..enjoy the event!",
            teamSize: "1-3",
            eventFee: 200,
            winningPrice: ["● 1st Prize: ₹ 4,000", "● 2nd Prize: ₹ 2,500"],
            isPrizesEnabled: true,
            pdfName: "robosoccer",
            maxRegistration:50,
        },
        {
            id: 3,
            image: roboRace,
            title: "Robo Race",
            department: "CSPIT: EC/EE",
            description:
                "RoboRace transforms motorsport with fully autonomous, electric race cars, a futuristic showcase of AI, machine learning, and autonomous driving technology in high-speed competition.",
            task: [
                "●	Each competitor must bring a miniature, hand-built robot car for the competition.",
                "●	The goal is to build your own robot, either wired or wireless, within the required specifications in order to obtain the highest speed possible in order to cross the finish line in the shortest time possible.",
                "●	Any kind of obstacle, such as numerous turns, sand, a suicide point,dig and others, could be present on the path, your robo should be able to overcome every obstacle.",
                "●	The first prize goes to the robot with the shortest official time. Second prize to the next shortest, and so on.",
                "●	If there is a tie, another chance will be given to the participants."
            ],
            contact: "",
            about: "'RoboRace' refers to an innovative motorsport concept that involves fully autonomous, electric race cars competing against each other. It's a high-tech, futuristic take on traditional racing, with a focus on showcasing the capabilities of artificial intelligence, machine learning, and autonomous driving technology.",
            teamSize: 4,
            eventFee: 500,
            winningPrice: ["● Winner Prize: ₹ 5,000", "● Runner up Prize: ₹ 2,500"],
            isPrizesEnabled: true,
            pdfName: "roborace",
            maxRegistration:30,
        },
        {
            id: 4,
            image: networkHunting,
            title: "Network Hunting",
            department: "CSPIT: CE",
            description:
                "Dive into the Amazing Network Challenge—an immersive competition testing your IP address knowledge and networking skills through puzzles, teamwork, and thrilling challenges in this two-round adventure.",
            task: [
                "●	Task 1: Maze Game.",
                "●	Task 2: Solve the question and get clues and combines all clues and find IP address.",
                "●	Task 3: Solve the code and reach to final location."
            ],
            contact: "",
            about: "Welcome to the Amazing Network Challenge, an exhilarating competition designed to test your IP Address knowledge and network connections. This two-round event promises an immersive experience filled with puzzles, teamwork, and networking challenges. Get ready to embark on an unforgettable adventure!",
            teamSize: 3,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 7,000", "● 2nd Prize: ₹ 5,000"],
            isPrizesEnabled: true,
            pdfName: "networkhunting",
            maxRegistration:50,
        },
        {
            id: 5,
            image: healthyswitching,
            title: "Healthy Switching",
            department: "CSPIT: CE",
            description:
                "Engage in a two-day programming showdown, where participants showcase puzzle-solving prowess, coding skills, and debugging abilities across three dynamic segments: Maze Game, Coding, and Debugging.",
            about: "The event is a two-day programming competition designed to test participants puzzle solving knowledge, coding skills, and debugging abilities. It consists of three main segments: Maze game, Coding, and Debugging.",
            task: [
                "●	Task 1: Maze Game.",
                "●	Task 2: Solve the question and get clues and combines all clues and find IP address.   ",
                "●	Task 3: Solve the code and reach to final location.",
                "●	Task 4: Coding round but with a minor change that at the end of every switch the team participant will have to drink a carbonated beverage within a given set of time. "
            ],
            contact: "",
            teamSize: 3,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 7,000", "● 2nd Prize: ₹ 5,000"],
            isPrizesEnabled: true,
            pdfName: "healthyswitching",
            maxRegistration:50,
        },
        {
            id: 6,
            image: artTech,
            title: "ArtTech Extravaganza",
            department: "CSPIT: CSE/AIML",
            description:
                "ArtTech Extravaganza: Create tech-inspired masterpieces in a timed challenge using code, graphic design, and blueprints.",
            task: [
                "●	To design technical posters or graphic designs",
                "●	Creating games by using code",
                "●	Design blueprints etc.",
                "●	You may use it according to your interest"
            ],
            contact: "",
            about: "Host an ArtTech Extravaganza where participants create tech-inspired artwork, designs, and games by using code, Graphic design, or blueprints in a race against the clock.",
            teamSize: "1-3",
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 5,000", "● 2nd Prize: ₹ 3,000"],
            isPrizesEnabled: true,
            pdfName: "arttech",
            maxRegistration:50,
        },
        {
            id: 7,
            image: codeMania,
            title: "Code Mania",
            department: "CSPIT: CSE/AIML",
            description:
                "Code Mania: A high-stakes coding competition pushing participants to their limits, testing coding skills, problem-solving, and time management in an intense and fast-paced challenge.",
            task: [
                "●	The event will consist of multiple coding problems of varying difficulty levels.",
                "●	The problem set may include algorithmic challenges, data structure manipulation, logical puzzles, or real-world coding scenarios.",
                "●	Each problem will have a specific set of input and output requirements."
            ],
            contact: "",
            about: "Code Mania is an intense and fast-paced coding competition that challenges participants' coding skills, problem-solving abilities, and time management. The event is designed to push participants to their limits as they tackle a series of coding challenges within a limited timeframe. Participants will have the opportunity to showcase their technical prowess and compete against other talented coders.",
            teamSize: "2-3",
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 5,000", "● 2nd Prize: ₹ 3,000"],
            isPrizesEnabled: true,
            pdfName: "codemania",
            maxRegistration:50,
        },
        {
            id: 8,
            image: civilSaga,
            title: "Civil Saga",
            department: "CSPIT: CL",
            description:
                "Dive into Civil Saga for a day of quizzes, discussions, and model-making—exploring the exciting world of civil engineering together!",
            task: [
                `●   Round 1. Quiz Round (Basic knowledge of Civil Engineering) In the first round, a quiz will be conducted among all the groups. Quiz will be based on all the basic knowledge that a civil engineer should be aware of.`,
                "●   Round 2: Guess what?",
                "The second round will be like to answer the mysterious screening of objects used in civil engineering field.",
                "●   Round 3: Model making of Arch Bridge",
                "Participants will be supplied with material and specifications must consider getting qualified for testing.",
                "1. Dimensions Analysis",
                "2. Innovative design",
                "3. Tested for load carrying capacity."
            ],
            contact: "",
            about: "Dive into the exciting world of Civil Saga! Join us for a fun-filled day of quizzes, stimulating discussions about all objects of civil engineering and model-making. Whether you're a seasoned pro or just starting, there's something for everyone. Let's explore and enjoy the world of civil engineering together!",
            teamSize: "2-4",
            eventFee: 250,
            winningPrice: ["● 1st Prize: ₹ 10,000", "● 2nd Prize: ₹ 5,000"],
            isPrizesEnabled: true,
            pdfName: "civilsaga",
            maxRegistration:25,
        },
        {
            id: 9,
            image: rollerCoaster,
            title: "Roller Coaster",
            department: "CSPIT: ME",
            description:
                "Navigate the thrill-filled roller coaster maze: a three-round event blending excitement and technical finesse, where slow and steady triumph in creatively designed maps.",
            task: [
                "●	Task 1 :  Time travelled by a plastic ball from top to toe will be measured along the maze created.",
                "●	Task 2 : Plastic ball filled with sand will be tested on the same maze and maximum time will be measured.     ",
                "●	Task 3 : Plastic ball half filled with liquid will be tested on the maze and time taken to travel the maze will measured."
            ],
            contact: "",
            about: "Lose yourself in the maze of roller coaster. This three round event will assure the thrill and calibrate your technical fundamentals with creatively designed map where slow and steady wins the race. ",
            teamSize: 3,
            eventFee: 200,
            winningPrice: ["● 1st Prize: ₹ 3,000", "● 2nd Prize: ₹ 2,000"],
            isPrizesEnabled: true,
            pdfName: "rollercoaster",
            maxRegistration:15,
        },
        {
            id: 10,
            image: relayAndBlindCoding,
            title: "Relay and Blind Coding",
            department: "DEPSTAR CE",
            description:
                "Engage in collaborative coding excitement: 3-round competition with Problem Statement Discussion and Blind-Relay Coding phases, where teams strategize and code blindly in a relay-style challenge, aiming for participating certificates and exciting prizes for the top 3 teams.",
            task: [
                `Round 1: Discuss solution of the problem for 5-7 minutes and then blind code one after another.`,
                `Those who pass 1st round would proceed for 2nd round.`,
                `Round 2: No discussion time; blind code one after another; Code rechecking for 3-4 minutes (Not allowed to have code sheet during rechecking).`,
                `Those who pass 2nd round would proceed for 3rd round.`,
                `Round 3: Discuss solution of the problem for 8-10 minutes and then blind code one after another with keyboard placed upside down.`
            ],
            contact: "",
            about: "Divide students into groups of 3. Competition is of 3 rounds. Each round features two key phases: Problem Statement Discussion and Blind-Relay Coding. In the initial phase, team members collaborate to strategize based on a provided problem statement. After discussing the problem statement, participants move to the Blind Coding phase, where they write code on a blank screen. The challenge continues with a relay-style queue, with each student coding for a specific time period while performing blind coding, and their co-team members taking turns to complete the task within a specific time duration. A participating certificate will be provided to all Participants and the top 3 teams can win exciting prizes.",
            teamSize: 3,
            eventFee: 300,
            winningPrice: ["● 1st Prize: ₹ 4,000", "● 2nd Prize: ₹ 2,000"],
            isPrizesEnabled: true,
            pdfName: "relay",
            maxRegistration:50,
        },
        {
            id: 11,
            image: keyMaster,
            title: "Key Masters - The ultimate typing showdown",
            department: "DEPSTAR CE",
            description:
                "Test your typing prowess in a thrilling 5-round competition—open to all skill levels, from seasoned typists to those looking to enhance their skills, with a chance to win exciting prizes.",
            task: [
                "●	Five Rounds of Typing Fun: The Typing Game Extravaganza comprises five rounds, each with its own unique typing challenge. From speed tests to accuracy challenges, you'll have the opportunity to showcase your typing prowess."
            ],
            contact: "",
            about: "In this thrilling competition, participants have the opportunity to put their typing speed and accuracy to the test. With five rounds of fast-paced challenges, the event is open to individuals of all skill levels. Whether you're a seasoned typist or someone looking to enhance their typing skills, this competition offers a chance to shine and potentially win prizes.",
            teamSize: 1,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 4,000", "● 2nd Prize: ₹ 2,000"],
            isPrizesEnabled: true,
            pdfName: "keymasters",
            maxRegistration:100,
        },
        {
            id: 12,
            image: pingDataStructure,
            title: "Break the Query",
            department: "DEPSTAR IT",
            description:
                "Thrilling coding contest for young minds—test data structures and logic skills in a competitive challenge.",
            task: ["●	Task 1: Solve the Quiz.", "●	Task 2: Solve Query Challenge."],
            contact: "",
            about: "Welcome to the Amazing an exhilarating competition designed to test Competitive Coding Minds. Challenging young minds with problems designed to check their grip on data structures and logic building!",
            teamSize: 2,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 1,500", "● 2nd Prize: ₹ 1,000"],
            isPrizesEnabled: true,
            pdfName: "breakthequery",
            maxRegistration:30,
        },
        {
            id: 13,
            image: uiux,
            title: "Designing for Delight: A UI/UX challenge",
            department: "DEPSTAR IT",
            description:
                "Amazing Coding Challenge: An exhilarating competition testing competitive coding minds with challenges designed to assess data structures and logic-building skills in young participants.",
            task: ["●	Task 1: Design UX/UI"],
            contact: "",
            about: "Welcome to the Amazing an exhilarating competition designed to test Competitive Coding Minds. Challenging young minds with problems designed to check their grip on data structures and logic building!",
            teamSize: 2,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 1,500", "● 2nd Prize: ₹ 1,000"],
            isPrizesEnabled: true,
            pdfName: "designingfordelight",
            maxRegistration:30,
        },
        {
            id: 14,
            image: pingData,
            title: "Ping Data Structure",
            department: "DEPSTAR CSE",
            description:
                "Amazing Database Challenge: A thrilling competition testing young minds' competitive coding skills, evaluating their grasp on data structures and logic building!",
            task: ["●	Task 1: Solve the Quiz", "●	Task 2: Solve Query Challenge"],
            contact: "",
            about: "Welcome to the Amazing Database Challenge, an exhilarating competition designed to test Competitive Coding Minds. Challenging young minds with problems designed to check their grip on data structures and logic building!",
            teamSize: "2-3",
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 3,000", "● 2nd Prize: ₹ 1,500"],
            isPrizesEnabled: true,
            pdfName: "pingdatastructure",
            maxRegistration:45,
        },
        {
            id: 15,
            image: captureTheFlag,
            title: "Capture the Flag",
            department: "DEPSTAR CSE",
            description:
                "Explore the Amazing Security Challenge—a thrilling competition testing participants with tasks like decrypting ciphers and uncovering hidden data through skillful exploitation of server/web vulnerabilities!",
            task: ["●	Task 1 : Find the flags 8 flags", "●	Task 2 : Answer the questions"],
            contact: "",
            about: "Welcome to the Amazing Security Challenge, an exhilarating competition designed to test a series of rounds that will involve certain tasks (from decrypting ciphers, finding data hidden behind server/web pages they can find hidden info via exploiting it!",
            teamSize: "2-3",
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 3,000", "● 2nd Prize: ₹ 1,500"],
            isPrizesEnabled: true,
            pdfName: "capturetheflag",
            maxRegistration:45,
        },
        {
            id: 16,
            image: theDigitalScavangerHunt,
            title: "The Digital Scavenger Hunt",
            department: "CSPIT: IT",
            description:
                "Two-day techie event with rounds like Debugging, Mini-games, GATECRASH, and Treasure Hunt—test and challenge your skills!",
            task: [
                "●	Task 1: Debugging the code provided.",
                "●	Task 2: Mini-Games.",
                "●	Task 3: Solving the GATE Level Questions.",
                "●	Task 4: Technical Treasure Hunt"
            ],
            contact: "",
            about: "Join us for a fun-filled two-day event full of challenges and camaraderie! This event will comprise of various rounds comprising Debugging, Mini-games, GATECRASH, Treasure Hunt. This is the event shaped in such a way to test the techies and challenge their knowledge.",
            teamSize: 7,
            eventFee: 420,
            winningPrice: ["● 1st Prize: ₹ 5,000", "● 2nd Prize: ₹ 3,000"],
            isPrizesEnabled: true,
            pdfName: "digitalscavengerhunt",
            maxRegistration:40,
        },
        {
            id: 17,
            image: graphicsGladiator,
            title: "Graphics Gladiator",
            department: "CSPIT: IT",
            description:
                "Graphic Design Showdown: Unleash your creativity in this event, where participants compete for the title of Graphic Gladiator at CZ '24.",
            task: ["●	Task 1 :  QUIZ", "●	Task 2 :  LOGO DESIGN", "●	Task 3 :  BRANDING"],
            contact: "",
            about: "This Event is meant to test the Graphic Designing skills of the participants and One of them will be crowned as the Graphic Gladiator for CZ ‘24.",
            teamSize: 1,
            eventFee: 150,
            winningPrice: ["● 1st Prize: ₹ 2,500", "● 2nd Prize: ₹ 2,000"],
            isPrizesEnabled: true,
            pdfName: "graphicsgladiator",
            maxRegistration:100,
        }
    ];

    const [finalData, setFinalData] = useState([]);

    React.useEffect(() => {
        if (props.registeredEvent) {
            setFinalData(data.filter((item) => props.techEventIds?.includes(item.id)));
        } else {
            setFinalData(data.filter((item) => !props.techEventIds?.includes(item.id)));
            setFinalData((value) => [...value, ...data.filter((item) => props.techEventIds?.includes(item.id))]);
        }
    }, [props.techEventIds]);

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
                {finalData.map(
                    (IData) =>
                        !props?.selectedEvents?.includes(IData.id) && (
                            <EventCard
                                eventId={IData.id}
                                eventType={"TECH"}
                                about={IData.about}
                                show={true}
                                image={IData.image}
                                title={IData.title}
                                description={IData.description}
                                eventName={IData.title}
                                department={IData.department}
                                task={IData.task}
                                price={IData.eventFee}
                                teamSize={IData.teamSize}
                                taskEnabled={true}
                                winningPrizes={IData.winningPrice}
                                prizesEnabled={IData.isPrizesEnabled}
                                pdfName={IData.pdfName}
                                addEventModal={props.addEventModal}
                                addEventHandler={props.addEventHandler}
                                registeredEvent={props.registeredEvent}
                                isAlreadyRegistered={props.techEventIds?.includes(IData.id)}
                            />
                        )
                )}
            </div>
        </>
    );
};

export default TechEvents;
