import { Card, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import profileImage from "../../assets/committee_photo/p1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import _1 from "../../assets/committee_photo/1.SurendraSir.png";
import _2 from "../../assets/committee_photo/2.Dr M C Patel.jpeg";
import _3 from "../../assets/committee_photo/3.Provost_RVU1.webp";
import _4 from "../../assets/committee_photo/4.AP1.png";
import _5 from "../../assets/committee_photo/5.VC1.png";
import _6 from "../../assets/committee_photo/6.TU1.png";

export default function Patrons() {
    const arr = [
        {
            id: 3,
            name: "Dr. R. V. Upadhyay",
            description: "Provost, CHARUSAT, India [Patron]",
            profile: _3,
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
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {arr.map((index) => (
                    <Card
                        background={"transparent"}
                        width={"100%"}
                        height={"300px"}
                        key={index.id}
                    >
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
                            <Text>{index.name}</Text>
                            <Text>{index.description}</Text>
                        </Container>
                    </Card>
                ))}
            </Carousel>
        </>
    );
}
