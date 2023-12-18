import React from "react";
import EventCard from "../EventCard";
// import image1 from "../../assets/eventRegister/register1.jpeg";
// import image2 from "../../assets/eventRegister/register2.jpeg";
// import image3 from "../../assets/eventRegister/register3.jpeg";
// import image4 from "../../assets/eventRegister/register4.jpeg";
// import image5 from "../../assets/eventRegister/register5.jpeg";
// import image6 from "../../assets/eventRegister/register6.jpeg";
// import image7 from "../../assets/eventRegister/register7.jpeg";

import bgmi from "../../../assets/eventImages/bgmi.png";
import cs2 from "../../../assets/eventImages/CS2.png";
import boxCricket from "../../../assets/eventImages/box cricket 1.png";
import civilCastle from "../../../assets/eventImages/civil's castle.jpeg";
import squidGame2 from "../../../assets/eventImages/Squid Game2.jpeg";
import wireLoop from "../../../assets/eventImages/wire loop game.jpeg";
import boxSoccer from "../../../assets/eventImages/box soccer.png";
import ballGun from "../../../assets/eventImages/ball gun.png";
import paintDate from "../../../assets/eventImages/paint date.png";
import rapbattle from "../../../assets/eventImages/RapBattle3.png";
import valorant from "../../../assets/eventImages/Valorant.png";
import moneyheist from "../../../assets/eventImages/money heist.png";
import lostinspace from "../../../assets/eventImages/Lost in Space.png";
import roadies from "../../../assets/eventImages/roadies.png";
import TakeshisChamber from "../../../assets/eventImages/TakeshisChamber.png";

const NonTechEvents = (props) => {
    const data = [
        {
            id: 18,
            image: roadies,
            title: "Roadies",
            description:
                "Join the ultimate 'Roadies' challenge on campus—an adventure pushing mental and physical boundaries, fostering friendships, and competing for the coveted collegiate 'Roadie' title.",
            about: "Await the ultimate challenge of perseverance and fortitude as we introduce the          exhilarating 'Roadies' experience to our campus! Participants in this exhilarating event will be put through a series of difficult exercises that will test their mental and physical boundaries. The chosen 'Roadies' will set out on an adventure filled with friendship and personal development. Are you prepared to take the ultimate collegiate 'Roadie' title by proving your mettle?",
            task: [
                "●	Task 1: Quiz",
                "●	Task 2: Puzzle round containing mini challenges",
                "●	Task 3: Bucket Weight Battle",
                "●	Task 4: Zip-lining with some Roadies element"
            ],
            teamSize: 6,
            eventFee: 200,
            winningPrice: ["●	Winner: ₹ 3,000", "● Runner up's: ₹ 1,500"],
            isPrizesEnabled: true,
            pdfName: "roadies"
        },
        {
            id: 19,
            image: rapbattle,
            title: "Rap Battle",
            description:
                "Unleash your unique perspective through the rhythm of rap—express your inner voice, let others see the world through your eyes, in your own powerful words.",
            about: "Express your inner voice in the form of a rap. Let the others see the world through your eyes in your own words.",
            task: [
                "●	Task 1 : Participants can perform their own written lyrics for round 1.",
                "●	Task 2 : A topic will be given on which participants have to write and perform their lyrics.",
                "●	Task 3 : One on one rap battle will be arranged."
            ],
            teamSize: 1,
            eventFee: 150,
            winningPrice: ["Coming Soon"],
            isPrizesEnabled: false,
            pdfName: "rapbattle"
        },
        {
            id: 20,
            image: bgmi,
            title: "BGMI",
            description:
                "Experience the adrenaline of the BGMI Championship as university players engage in epic battles, demonstrating skills, strategies, and teamwork in a dynamic mobile e-sports tournament.",
            about:
                "Join us for an exhilarating gaming experience in the BattleGrounds Mobile India (BGMI) Championship, where players from across various universities will battle it out for supremacy! Get ready to showcase your skills, strategies, and teamwork as you participate in one of the most exciting mobile e-sports tournaments." +
                "Don't miss this opportunity to be a part of the BGMI Championship and prove your skills on the battlefield. Get ready for epic battles, nail-biting moments, and unforgettable gaming action! Whether you're a seasoned pro or just starting your BGMI journey, this championship is your chance to shine.",
            task: [],
            teamSize: 4,
            eventFee: 160,
            winningPrice: ["●	Winner: Rs. 4,000/-", "●	Runner up: Rs. 3,000/-"],
            isPrizesEnabled: true,
            pdfName: "bgmi"
        },
        {
            id: 21,
            image: valorant,
            title: "Valorant",
            description:
                "Dive into a 2-day Valorant esports showdown with 256 teams, spanning 5 rounds and various game modes. From Day 1's Team Deathmatch battles to Day 2's final rounds, witness top collegiate talent competing in best-of-3 and best-of-5 matches, showcasing the pinnacle of Valorant skill and strategy.",
            about: `This 2-day e-sports tournament will feature 256 teams competing in a 5-round tournament across various Valorant game modes.Round 1 on Day 1 will have 256 teams divided into 16 groups playing best-of-3 Team Deathmatch matches. The field will be narrowed down to the top 128 teams for Round 2 best-of-3 Competitive matches. On Day 2, the top 32 teams from the previous day will compete in the final two rounds, with the top 2 teams playing a best-of-5 match to determine the tournament champion.Matches will take place in up to 15 labs simultaneously each day from 9AM to 5PM. The tournament will showcase top collegiate Valorant teams and players.
                
                Note: Player who wants to add their in game name and thier #id can write as: Name InGameName #1234`,
            task: ["●	Task 1 : Team Deathmatch", "●	Task 2 : Competitive Round", "●	Task 3 : Swift Play"],
            teamSize: 5,
            eventFee: 250,
            maxNumberOfTeams: 256,
            winningPrice: ["●	Winner: Rs. 7,500/-", "●	Runner up: Rs. 5,000/-"],
            isPrizesEnabled: true,
            pdfName: "valorant"
        },

        {
            id: 22,
            image: boxSoccer,
            title: "Box Soccer",
            description:
                "Experience a seated twist on soccer with Box Football—an entertaining game played inside a marked rectangular area, challenging teams to score goals while seated, adding a unique spin to traditional soccer dynamics.",
            about: "A large rectangular area is marked, usually with cones or lines, to create a box. The size of the box can vary depending on the number of players and available space. Two teams are formed, and each team has players sitting inside the designated box. The number of players per team can vary but typically ranges from 3 to 5. The objective is to score goals by kicking the ball with your feet while remaining seated inside the box. Players can pass the ball to their teammates or attempt to shoot directly at the opponents' goal. The ball should remain on the ground during play. Box football offers a unique twist to the traditional game of soccer, as players have to adapt their playing style while seated. It can be a fun and entertaining activity, especially in situations where space or mobility is limited.",
            task: [],
            teamSize: 1,
            eventFee: 150,
            winningPrice: ["●	Winner: Rs. 1,500/-", "●	Runner up: Rs. 1,000/-"],
            isPrizesEnabled: true,
            pdfName: "boxsoccer"
        },
        {
            id: 23,
            image: moneyheist,
            title: "Money Heist: The Treasure Hunt Caper",
            description:
                "Embark on an exhilarating real-life treasure hunt inspired by 'Money Heist': Solve puzzles, decipher codes, and evade the 'police' to uncover hidden treasure in this immersive experience",
            about: `"Money Heist: The Treasure Hunt Caper" is an exciting real-life treasure hunt experience 
            inspired by the popular TV series "Money Heist." In this treasure hunt game, players 
            immerse themselves in the world of heists, solving puzzles, deciphering codes, and
            uncovering clues to locate hidden treasure while avoiding the "police."`,
            task: [
                "1. The Red Jumpsuit Challenge:",
                "● Teams must wear red jumpsuits similar to those in the series.",
                "● At a designated location, they find a set of puzzle pieces scattered around.",
                "● Assembling the puzzle reveals a hidden message or clue.",
                "2. The Professor's Voice Recording:",
                "● Play a recorded message mimicking the Professor's style.",
                "● The message provides a clue about the next location or a code to decipher.",
                "● Teams must listen carefully and follow the instructions.",
                "3. The Bank Heist Blueprint:",
                "● Provide teams with a partial blueprint of a bank.",
                "● Hidden within the blueprint are clues or symbols that lead to the actual location of the hidden treasure."
            ],
            teamSize: 4,
            eventFee: 150,
            winningPrice: ["●	Winner: Rs. 3,000/-", "●	Runner up: Rs. 1,500/-"],
            isPrizesEnabled: true,
            pdfName: "moneyheist"
        },
        {
            id: 24,
            image: cs2,
            title: "Counter-Strike 2(CS2)",
            description:
                "Join the CS2 Tournament at Cognizance 23—an electrifying gaming event uniting enthusiasts, showcasing skills, and fostering healthy competition within the gaming community.",
            about: "The CS2 Tournament is an exciting gaming event organized as part of Cognizance 23, the annual techfest of our esteemed institution. This tournament aims to bring together gaming enthusiasts, showcase their skills, and promote a spirit of healthy competition within the gaming community.",
            task: [
                "●	The tournament will consist of a double-elimination bracket.",
                "●	Series of competitive games of CS2 will be played between two teams, likewise for every participant team"
            ],
            teamSize: 5,
            eventFee: 250,
            winningPrice: ["●	Winner: Rs. 5,000/-", "●	Runner up: Rs. 3,000/-"],
            isPrizesEnabled: true,
            pdfName: "cs2"
        },

        {
            id: 25,
            image: paintDate,
            title: "Paint Date",
            description:
                "Express creativity in a dynamic canvas exchange: Participants paint on 6x6 inch boards, swapping every 5 mins in this 30-min event where artistic freedom meets collaborative innovation.",
            about:
                "1.	The participants will be given 2 6x6 inch canvas boards." +
                "2.	They are given freedom to paint anything." +
                "3.	The participants will have to exchange the canvas boards every 5 mins." +
                "4.	They will take the canvas back with them." +
                "5.	The time duration of the event will be 30 mins." +
                "6.	The minimum number of participants is 2 in a group.",
            task: [],
            teamSize: 2,
            eventFee: 200,
            winningPrice: ["●	Winner: Rs. 1,500/-", "●	Runner up: Rs. 1,000/-"],
            isPrizesEnabled: true,
            pdfName: "paintdate"
        },
        {
            id: 26,
            image: wireLoop,
            title: "Wire Loop Game",
            description:
                "Master precision and steady hands in the wire loop game—an engaging physical skill challenge where players navigate a metal loop along a twisted wire, aiming to reach the end without a single mistake.",
            about: `The wire loop game is a physical skill game that challenges players to navigate a 
            metal loop along a twisted wire without touching the wire. The goal is to guide the 
            metal loop from the beginning to the end without allowing the loop to come into 
            touch with the wire. If the loop comes into contact with the wire at any time, the 
            player has made a mistake.`,
            task: [
                `● Using a handheld device, guide the loop from the starting point to the finishing point without triggering the buzzer or light. Test your hand-eye coordination and steady hand as you manoeuvre through the wire's twists and turns. `,
                `● Compete against yourself and others to complete the challenge with the fewest mistakes or in the given time.`,
                `● There will be one rest place between the beginning and ending ends of the wire loop.`,
                `● Participants are permitted to commit three mistakes; if you make more than three, you are disqualified from receiving the prize.`
            ],
            teamSize: 3,
            eventFee: 150,
            winningPrice: ["●	Winner: Rs. 1,000/-", "●	Runner up: Rs. 500/-"],
            isPrizesEnabled: true,
            pdfName: "wireloop"
        },
        {
            id: 27,
            image: squidGame2,
            title: "Squid Game",
            description:
                "Experience 'Squid Game' live at our college—an action-packed event with three challenging rounds, testing your skill, strategy, and courage to emerge as the champion!",
            about: "Our college is bringing the sensation of the hit series 'Squid Game' to life with an adrenaline-pumping event. Join us for an action-packed experience that features three challenging rounds: 'Human Node', 'Tricky Lights', and 'Twisted Snakes'. Participants will be pushed to their limits as they navigate a world of competition, strategy, and entertainment. Can you outsmart your opponents, complete tasks under pressure, and emerge as a champion? Get ready to test your skill and courage in our thrilling Squid Game event!",
            task: [
                `● Task 1: Prepare teams of 4 members in the 1st Round.`,
                `● Task 2: Select winners in each round.`,
                `● Task 3: Final round who are selected from out of these. `
            ],
            teamSize: 1,
            eventFee: 150,
            winningPrice: ["●	Winner: Rs. 6,000/-", "●	Runner up: Rs. 3,000/-"],
            isPrizesEnabled: true,
            pdfName: "squidgame"
        },
        {
            id: 28,
            image: lostinspace,
            title: "Galactic Quest: Lost in Space Adventure",
            description:
                "Embark on a cosmic journey where teams navigate space, encounter challenges, and make critical decisions to determine their fate and return safely to Earth.",
            about: `Teams (or individuals) embark on a mission to navigate through the vastness of space and return safely to Earth. Along the way, they'll encounter challenges and make decisions that will determine their fate.`,
            task: [
                `1. Cosmic Puzzle Relay:`,
                `● Set up a series of puzzles related to space and astronomy.`,
                `● Blindfold half of each team and have the other half guide them through the puzzle relay.`,
                `● Each correct puzzle solved earns the team a resource token.`,
                `2. Black Hole Obstacle Course:`,
                `● Create an obstacle course with different challenges, representing the hazards of a black hole.`,
                `● Blindfold the entire team and set a time limit for them to navigate through the course.`,
                `● Time penalties or loss of points for each obstacle not successfully overcome.`,
                `3. Alien Communication Challenge:`,
                `● Introduce "alien" facilitators who speak in a made-up language.`,
                `● Teams must decipher the language by solving a series of riddles or puzzles.`,
                `● The quicker they communicate with the aliens, the more resource tokens they earn.`
            ],
            teamSize: 4,
            eventFee: 150,
            winningPrice: ["●	Winner: Rs. 3,000/-", "●	Runner up: Rs. 1,500/-"],
            isPrizesEnabled: true,
            pdfName: "galacticquest"
        },
        {
            id: 29,
            image: TakeshisChamber,
            title: "Takeshis Chamber",
            description:
                "Join the excitement of Exclusive Games in Campus—an exhilarating day filled with fun challenges, crazy obstacles, and laughter, inspired by a famous TV show, promising a blast of adventure for all!",
            about: `Join us for an exciting Exclusive Games in Campus! Experience a day of fun challenges and 
            crazy obstacles inspired by the famous TV show. Test your skills and coordination to have a 
            blast with your friends as you tackle hilarious hurdles, big bouncy inflatables, and tricky tasks. 
            It's a day of laughter and adventure for everyone!`,
            task: [
                `●	Task 1: Put the ball in the box, Eat the cookie.`,
                `●	Task 2: Junk in the trunk, Score the goal`,
                `●	Task 3: Dangerous Curves, Slippery castle `,
                `●	All the tasks will be having their own rules`
            ],
            teamSize: 4,
            eventFee: 200,
            winningPrice: ["●	Winner: Rs. 3,000/-", "●	Runner up: Rs. 1,500/-"],
            isPrizesEnabled: true,
            pdfName: "takeshischamber"
        }
        // {
        //     id: 19,
        //     image: boxCricket,
        //     title: "Box Cricket",
        //     description:
        //         "Demystify the world of Web3 and discover the limitless possibilities of the decentralized web.",
        //     about: "Box Cricket is a version of the game of cricket that remains many of the characteristics of the original game but is played for fun in a more controlled environment, making It more accessible to casual players.",
        //     task: [],
        //     teamSize: 7,
        //     eventFee: 150,
        //     winningPrice: ["Coming Soon"],
        //     isPrizesEnabled: false,
        //     pdfName: "boxcricket",
        // },

        // {
        //     id: 21,
        //     image: civilCastle,
        //     title: "Civil’s CASTLE",
        //     description:
        //         "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
        //     about: "Join us for an exciting Exclusive Games in Campus! Experience a day of fun challenges and crazy obstacles inspired by the famous TV show. Test your skills and coordination to have a blast with your friends as you tackle hilarious hurdles, big bouncy inflatables, and tricky tasks. It's a day of laughter and adventure for everyone!",
        //     task: [
        //         "●	Round 1: Put the ball in the box , Eat the cookie.",
        //         "●	Round 2: Junk in the trunk , Score the goal",
        //         "●	Round 3: Dangerous Curves, Slippery castle ",
        //     ],
        //     teamSize: 4,
        //     eventFee: 150,
        //     winningPrice: ["Coming Soon"],
        //     isPrizesEnabled: false,
        //     pdfName: "civilcastle",
        // },

        // {
        //     id: 26,
        //     image: ballGun,
        //     title: "Paint Ball",
        //     description:
        //         "Enhance your expertise in cable and wire testing techniques through our comprehensive workshop, covering essential methods for accurate diagnostics and quality assurance.",
        //     about: "Paintball is a competitive team shooting sport in which players eliminate opponents from play by hitting them with spherical dye-filled gelatin capsules called paintballs that break upon impact. Paintballs are usually shot using low-energy air weapons called paintball markers that are powered by compressed air or carbon dioxide.",
        //     teamSize: 3,
        //     eventFee: 150,
        //     winningPrice: ["Coming Soon"],
        //     isPrizesEnabled: false,
        //     pdfName: "paintball",
        // },
    ];

    const [finalData, setFinalData] = React.useState([]);

    React.useEffect(() => {
        if (props.registeredEvent) {
            setFinalData(data.filter((item) => props.nonTechEventIds?.includes(item.id)));
        } else {
            setFinalData(data.filter((item) => !props.nonTechEventIds?.includes(item.id)));
            setFinalData((value) => [...value, ...data.filter((item) => props.nonTechEventIds?.includes(item.id))]);
        }
    }, [props.nonTechEventIds]);
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
                {finalData.map((IData) => (
                    <EventCard
                        eventId={IData.id}
                        eventType={"NTECH"}
                        show={true}
                        image={IData.image}
                        title={IData.title}
                        description={IData.description}
                        eventName={IData.title}
                        department={IData.department}
                        task={IData.task}
                        price={IData.eventFee}
                        teamSize={IData.teamSize}
                        about={IData.about}
                        taskEnabled={true}
                        prizesEnabled={IData.isPrizesEnabled}
                        winningPrizes={IData.winningPrice}
                        pdfName={IData.pdfName}
                        addEventModal={props.addEventModal}
                        addEventHandler={props.addEventHandler}
                        registeredEvent={props.registeredEvent}
                        isAlreadyRegistered={props.nonTechEventIds?.includes(IData.id)}
                        isAdditionalFieldRequired={IData.id === 20 || IData.id === 21 || IData.id === 24}
                    />
                ))}
            </div>
        </>
    );
};

export default NonTechEvents;
