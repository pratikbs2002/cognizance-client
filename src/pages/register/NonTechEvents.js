import React from "react";
import EventCard from "./EventCard";
// import image1 from "../../assets/eventRegister/register1.jpeg";
// import image2 from "../../assets/eventRegister/register2.jpeg";
// import image3 from "../../assets/eventRegister/register3.jpeg";
// import image4 from "../../assets/eventRegister/register4.jpeg";
// import image5 from "../../assets/eventRegister/register5.jpeg";
// import image6 from "../../assets/eventRegister/register6.jpeg";
// import image7 from "../../assets/eventRegister/register7.jpeg";

import bgmi from "../../assets/eventImages/BGMI.jpg";
import cs2 from "../../assets/eventImages/Counter-Strike-2.jpg";
import boxCricket from "../../assets/eventImages/box cricket 1.png";
import civilCastle from "../../assets/eventImages/civil's castle.jpeg";
import squidGame2 from "../../assets/eventImages/Squid Game2.jpeg";
import wireLoop from "../../assets/eventImages/wire loop game.jpeg";
import boxSoccer from "../../assets/eventImages/box soccer.png";
import ballGun from "../../assets/eventImages/ball gun.png";
import paintDate from "../../assets/eventImages/paint date.png";

const NonTechEvents = () => {
    const data = [
        {
            id: 0,
            image: cs2,
            title: "Counter-Strike 2(CS2)",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about: "The CS2 Tournament is an exciting gaming event organized as part of Cognizance 23, the annual techfest of our esteemed institution. This tournament aims to bring together gaming enthusiasts, showcase their skills, and promote a spirit of healthy competition within the gaming community.",
            task: [
                "●	The tournament will consist of a double-elimination bracket.",
                "●	Series of competitive games of CS2 will be played between two teams, likewise for every participant team"
            ],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 1,
            image: boxCricket,
            title: "Box Cricket",
            description:
                "Demystify the world of Web3 and discover the limitless possibilities of the decentralized web.",
            about: "Box Cricket is a version of the game of cricket that remains many of the characteristics of the original game but is played for fun in a more controlled environment, making It more accessible to casual players.",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 2,
            image: wireLoop,
            title: "Wire Loop Game",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about: "A wire loop game is a game which involves guiding a metal loop (a 'probe') along a serpentine length of wire without touching the loop to the wire. The loop and wire are connected to a power source in such a way that, if they touch, they form a closed electric circuit. The circuit is connected to a light or sound-emitting device of some sort, so that when the loop and the wire touch, the light-emitting device will light up, and the sound-emitting device will make a sound, traditionally a buzzing noise. In commercial implementations of the game the wire is usually bent along a single axis",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 3,
            image: civilCastle,
            title: "Civil’s CASTLE",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about: "Join us for an exciting Exclusive Games in Campus! Experience a day of fun challenges and crazy obstacles inspired by the famous TV show. Test your skills and coordination to have a blast with your friends as you tackle hilarious hurdles, big bouncy inflatables, and tricky tasks. It's a day of laughter and adventure for everyone!",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 4,
            image: squidGame2,
            title: "Squid Game",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about: "Our college is bringing the sensation of the hit series 'Squid Game' to life with an adrenaline-pumping event. Join us for an action-packed experience that features three challenging rounds: 'Human Node', 'Tricky Lights', and 'Twisted Snakes'. Participants will be pushed to their limits as they navigate a world of competition, strategy, and entertainment. Can you outsmart your opponents, complete tasks under pressure, and emerge as a champion? Get ready to test your skill and courage in our thrilling Squid Game event!",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 5,
            image: bgmi,
            title: "BGMI",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about:
                "Join us for an exhilarating gaming experience in the BattleGrounds Mobile India (BGMI) Championship, where players from across various universities will battle it out for supremacy! Get ready to showcase your skills, strategies, and teamwork as you participate in one of the most exciting mobile e-sports tournaments." +
                "Don't miss this opportunity to be a part of the BGMI Championship and prove your skills on the battlefield. Get ready for epic battles, nail-biting moments, and unforgettable gaming action! Whether you're a seasoned pro or just starting your BGMI journey, this championship is your chance to shine.",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 6,
            image: boxSoccer,
            title: "Box Soccer",
            description:
                "Get ready for the ultimate frenzy of Machino Mania, a thrilling competition where machines clash in a high-octane showdown! ",
            about: "A large rectangular area is marked, usually with cones or lines, to create a box. The size of the box can vary depending on the number of players and available space. Two teams are formed, and each team has players sitting inside the designated box. The number of players per team can vary but typically ranges from 3 to 5. The objective is to score goals by kicking the ball with your feet while remaining seated inside the box. Players can pass the ball to their teammates or attempt to shoot directly at the opponents' goal. The ball should remain on the ground during play. Box football offers a unique twist to the traditional game of soccer, as players have to adapt their playing style while seated. It can be a fun and entertaining activity, especially in situations where space or mobility is limited.",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 7,
            image: paintDate,
            title: "Paint Date",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about:
                "1.	The participants will be given 2 6x6 inch canvas boards." +
                "2.	They are given freedom to paint anything." +
                "3.	The participants will have to exchange the canvas boards every 5 mins." +
                "4.	They will take the canvas back with them." +
                "5.	The time duration of the event will be 30 mins." +
                "6.	The minimum number of participants is 2 in a group.",
            task: [],
            teamSize: 3,
            eventFee: 150
        },
        {
            id: 8,
            image: ballGun,
            title: "Paint Ball",
            description:
                "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
            about: "Paintball is a competitive team shooting sport in which players eliminate opponents from play by hitting them with spherical dye-filled gelatin capsules called paintballs that break upon impact. Paintballs are usually shot using low-energy air weapons called paintball markers that are powered by compressed air or carbon dioxide.",
            teamSize: 3,
            eventFee: 150
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
                        eventName={IData.title}
                        department={IData.department}
                        task={IData.task}
                        price={IData.eventFee}
                        teamSize={IData.teamSize}
                        about={IData.about}
                    />
                ))}
            </div>
        </>
    );
};

export default NonTechEvents;
