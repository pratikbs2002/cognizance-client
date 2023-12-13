import React from 'react'
import { Card, Container, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import _1 from "../../assets/event_committee_photo/actrhos/1srushtimam.jpg";
import _2 from "../../assets/event_committee_photo/actrhos/2vaibhavimam.jpg"
import _3 from "../../assets/event_committee_photo/actrhos/3aart.jpg";
import _4 from "../../assets/event_committee_photo/actrhos/4arsh.jpg";
import _5 from "../../assets/event_committee_photo/actrhos/5bhavay.jpg"
const AcTrHos = () => {
    const arr=[
        {
            id:1,
            name:"Prof. Srushti Gajjar",
            email:"srushtigajjar.cse@charusat.ac.in",
            department:"Computer Science & Engineering, CSPIT",
            profile:_1
        },
        {
            id:2,
            name:"Prof. Vaibhavi Patel",
            email:"vaibhavipatel.cse@charusat.ac.in",
            department:"Computer Science & Engineering, CSPIT",
            profile:_2
        },
        {
            id:3,
            name:"Aart Desai",
            email:"",
            department:"",
            profile:_3
        },
        {
            id:4,
            name:"Arsh Sandhu",
            email:"",
            department:"",
            profile:_4
        },
        {
            id:5,
            name:"Bhavay Mehta",
            email:"",
            department:"",
            profile:_5
        },
    ];
    return (
        <>
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
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
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
                {
                    arr.map((index)=>(
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
                                <Image
                                    boxSize="100px"
                                    objectFit="cover"
                                    src={index.profile}
                                    alt="sponsor"
                                />
                                <Text fontWeight={700}>{index.name}</Text>
                                <Text>{index.email}</Text>
                                <Text>{index.department}</Text>
                            </Container>
                        </Card>
                    ))
                }
            </Carousel>
        </>
    )
}

export default AcTrHos