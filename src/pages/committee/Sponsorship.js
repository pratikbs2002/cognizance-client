import React from 'react'
import { Card, Container, Image, Text } from "@chakra-ui/react";
import _1 from "../../assets/event_committee_photo/sponsorship/1arpitamam.jpg";
import _2 from "../../assets/event_committee_photo/sponsorship/2pinalmam.jpeg";
import _3 from "../../assets/event_committee_photo/sponsorship/3fenil.JPG"
const Sponsorship = () => {
    const arr=[
        {
            id:1,
            name:"Dr.Arpita Patel",
            email:"arpitapatel.ec@charusat.ac.in",
            department:"Electronics & Communication Engineering, CSPIT",
            profile:_1,
        }, 
        {
            id:2,
            name:"Prof. Pinal Patel",
            email:"pinalpatel.cv@charusat.ac.in",
            department:"Civil Engineering, CSPIT",
            profile:_2,
        }, 
        {
            id:3,
            name:"Fenil Patel",
            email:"20ec057@charusat.ac.in",
            department:"Electronics & Communication Engineering, CSPIT",
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
                            <Text>{index.email}</Text>
                            <Text>{index.department}</Text>
                        </Container>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default Sponsorship