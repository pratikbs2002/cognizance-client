import React from 'react'
import { Card, Container, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import _1 from "../../assets/event_committee_photo/nonTech/1ankursir.jpg";
import _2 from "../../assets/event_committee_photo/nonTech/2jaysir.png";
import _3 from "../../assets/event_committee_photo/nonTech/3jevin.jpg";
import _4 from "../../assets/event_committee_photo/nonTech/4kushal.jpg";
import _5 from "../../assets/event_committee_photo/nonTech/5smit.jpg";
import _6 from "../../assets/event_committee_photo/nonTech/6bhavin.jpg";
const NonTech = () => {
    const arr=[
        {
            id:1,
            name:"Prof. Ankur Patel",
            email:"",
            department:"",
            profile:_1,
        },
        {
            id:2,
            name:"Prof. Jay Patel",
            email:"jaypatel.dce@charusat.ac.in",
            department:"Computer Engineering, DEPSTAR",
            profile:_2,
        },
        {
            id:3,
            name:"Jevin Vaghasiya",
            email:"",
            department:"",
            profile:_3,
        },
        {
            id:4,
            name:"Kushalkumar Solanki",
            email:"",
            department:"",
            profile:_4,
        },
        {
            id:5,
            name:"Smit Vaghela",
            email:"",
            department:"",
            profile:_5,
        },
        {
            id:6,
            name:"Bhavin Bhetariya",
            email:"",
            department:"",
            profile:_6,
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

export default NonTech