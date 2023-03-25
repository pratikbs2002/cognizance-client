import { Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'
import profileImage from "../../assets/committee_photo/p1.png"

export default function CommitteeMembers() {
    const arr = [
        { id: 0, name: "Person 1", description: "I am a person", profile: profileImage },
        { id: 1, name: "Person 2", description: "i am a person", profile: profileImage },
        { id: 2, name: "Person 3", description: "i am a person", profile: profileImage },
        { id: 3, name: "Person 4", description: "i am a person", profile: profileImage },
        { id: 4, name: "Person 5", description: "i am a person", profile: profileImage }
    ];
    return (
        <>
            <Marquee pauseOnHover gradient gradientColor speed={180}>
                {arr.map((index) => (
                    <Card

                        style={{
                            zIndex: 1,
                            textAlign: "center",
                            padding: "20px 50px 20px 50px",
                            marginRight: "100px",
                        }}
                    >

                        <Image boxSize="100px" objectFit="cover" src={index.profile} alt="sponsor" />
                        <Text>{index.name}</Text>
                        <Text>{index.description}</Text>
                    </Card>
                ))}
            </Marquee>
        </>
    )
}
