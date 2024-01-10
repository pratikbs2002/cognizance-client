import React from 'react'
import { Card, Container, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import _1 from '../../assets/event_committee_photo/website/1arpitamam.png';
import _2 from "../../assets/event_committee_photo/website/2snehamam.png";
import _3 from "../../assets/event_committee_photo/website/3pratik.jpeg"
import _4 from "../../assets/event_committee_photo/website/4ketan.png"
import _5 from "../../assets/event_committee_photo/website/5ish.png"
import _6 from "../../assets/event_committee_photo/website/6dhruvin.jpg"
import _7 from "../../assets/event_committee_photo/website/7jay.png"

const Website = () => {
    const arr=[
        {
            id:1,
            name:"Prof. Arpita Shah",
            email:"arpitashah.ce@charusat.ac.in",
            department:"Computer Engineering, CSPIT",
            profile:_1
        },
        {
            id:2,
            name:"Prof. Sneha Padhiar",
            email:"snehapadhiar.ce@charusat.ac.in",
            department:"Computer Engineering, CSPIT",
            profile:_2
        },
        {
            id:3,
            name:"Pratik Suthar",
            email:"20ce141@charusat.edu.in",
            department:"Computer Engineering, CSPIT",
            profile:_3
        },
        {
            id:4,
            name:"Ketan Tiwari",
            email:"20ce149@charusat.edu.in",
            department:"Computer Engineering, CSPIT",
            profile:_4
        },
        {
            id:5,
            name:"Ish Thumber",
            email:"20ce148@charsat.edu.in",
            department:"Computer Engineering, CSPIT",
            profile:_5
        },
        {
            id:6,
            name:"Dhruvin Tandel",
            email:"20ce143@charusat.edu.in",
            department:"Computer Engineering, CSPIT",
            profile:_6
        },
        {
            id:7,
            name:"Jay Shah",
            email:"20ce128@charusat.edu.in",
            department:"Computer Engineering, CSPIT",
            profile:_7
        }


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
    );
}

export default Website;