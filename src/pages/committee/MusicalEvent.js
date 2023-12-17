import React from "react";
import { Card, Container, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import _1 from "../../assets/event_committee_photo/musical_event/1nishatmam.jpeg";
import _2 from "../../assets/event_committee_photo/musical_event/2dhavalsir.gif";
import _3 from "../../assets/event_committee_photo/musical_event/3mohit.JPG";
import _4 from "../../assets/event_committee_photo/musical_event/4aum.jpg";

const MusicalEvent = () => {
    const arr = [
        {
            id: 1,
            name: "Prof. Nishat Shaikh",
            email: "nishatshaikh.it@charusat.ac.in",
            department: "Infomation Technology, CSPIT",
            profile: _1
        },
        {
            id: 2,
            name: "Prof. Dhaval Patel",
            email: "dhavalpatel.it@charusat.ac.in",
            department: "Infomation Technology, CSPIT",
            profile: _2
        },
        {
            id: 3,
            name: "Mohit Mungra",
            email: "21it092@charusat.edu.in",
            department: "Infomation Technology, CSPIT",
            profile: _3
        },
        {
            id: 4,
            name: "Aum Barai",
            email: "22aiml002@charusat.edu.in",
            department: "Computer Science & Engineering: AIML, CSPIT",
            profile: _4
        }
    ];
    return (
        <>
            {/* <Container
                marginTop={"20px"}
                padding={"10px"}
                maxW={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                gap={"20px"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                {arr.map((index) => (
                    <Card background={"white"} width={"300px"} height={"300px"} key={index.id}>
                        <Container
                            paddingTop={30}
                            display={"flex"}
                            flexDirection="column"
                            gap={"5"}
                            width={"100"}
                            alignItems={"center"}
                            justifyContent="center"
                            textAlign={"center"}
                            margin="0"
                        >
                            <Image boxSize="100px" objectFit="cover" src={index.profile} alt="sponsor" />
                            <Text color="black" fontWeight={700}>
                                {index.name}
                            </Text>
                            <Text color="black">{index.email}</Text>
                            <Text color="black">{index.department}</Text>
                        </Container>
                    </Card>
                ))}
            </Container> */}
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="team-preview"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {arr.map((index) => (
                    <Card width={"100%"} height={"300px"} key={index.id} borderRadius={0}>
                        <Container
                            paddingTop={30}
                            display={"flex"}
                            flexDirection="column"
                            gap={"5"}
                            width={"100"}
                            alignItems={"center"}
                            justifyContent="center"
                            textAlign={"center"}
                            margin="0"
                        >
                            <Image boxSize="100px" objectFit="cover" src={index.profile} alt="sponsor" />
                            <Text fontWeight={700}>{index.name}</Text>
                            <Text>{index.email}</Text>
                            <Text>{index.department}</Text>
                        </Container>
                    </Card>
                ))}
            </Carousel>
        </>
    );
};

export default MusicalEvent;
