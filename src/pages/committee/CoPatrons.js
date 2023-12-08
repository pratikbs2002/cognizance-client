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

export default function CoPatrons() {
    const arr = [
        {
            id: 4,
            name: "Dr. Atul Patel",
            description: "Registrar, CHARUSAT, India",
            profile: _4,
        },
    ];

    return (
        <>
            <Container
                padding={"10px"}
                maxW={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                gap={"20px"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                {arr.map((index) => (
                    <Card
                        background={"white"}
                        width={"300px"}
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
                            <Text color="black">{index.name}</Text>
                            <Text color="black">{index.description}</Text>
                        </Container>
                    </Card>
                ))}
            </Container>
        </>
    );
}
