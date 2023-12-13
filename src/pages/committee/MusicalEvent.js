import React from 'react';
import { Card, Container, Image, Text } from "@chakra-ui/react";
import _1 from "../../assets/event_committee_photo/musical_event/1nishatmam.jpeg";
import _2 from "../../assets/event_committee_photo/musical_event/2dhavalsir.gif";
import _3 from "../../assets/event_committee_photo/musical_event/3mohit.JPG";
const MusicalEvent = () => {
    const arr=[
        {
            id:1,
            name:"Prof. Nishat Shaikh",
            email:"nishatshaikh.it@charusat.ac.in",
            department:"Infomation Technology, CSPIT",
            profile:_1,
        },
        {
            id:2,
            name:"Prof. Dhaval Patel",
            email:"dhavalpatel.it@charusat.ac.in",
            department:"Infomation Technology, CSPIT",
            profile:_2,
        },
        {
            id:3,
            name:"Mohit Mungra",
            email:"21it092@charusat.edu.in",
            department:"Infomation Technology, CSPIT",
            profile:_3,
        },
    ];
    return (
        <>
        <Container
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
                            <Text color="black" fontWeight={700}>{index.name}</Text>
                            <Text color="black">{index.email}</Text>
                            <Text color="black">{index.department}</Text>
                        </Container>
                    </Card>
                ))}
            </Container>

        </>
    )
}

export default MusicalEvent