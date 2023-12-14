import { Card, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import _1 from "../../assets/committee_photo/1. VijayPanchal.webp";
import _2 from "../../assets/committee_photo/2.dr_chirag-patel.png";
import _3 from "../../assets/committee_photo/3. NilayPatel.jpg";
import _4 from "../../assets/committee_photo/4. AmitThakkar.webp";
import _5 from "../../assets/committee_photo/5. ParthShah.webp";
import _6 from "../../assets/committee_photo/6. UpeshSir.webp";
import _7 from "../../assets/committee_photo/7. NiravBhatt.webp";
import _8 from "../../assets/committee_photo/8. nikita_mam.jfif";
import _9 from "../../assets/committee_photo/9. amit nayak.jpg";
import _10 from "../../assets/committee_photo/10. dweepna garg.jpg";

export default function CommitteeMembers() {
    const arr = [
        {
            id: 0,
            name: "Dr. V. R. Panchal",
            description:
                "Professor and Head, Civil Engineering Department, CSPIT, CHARUSAT, India",
            profile: _1,
        },
        {
            id: 3,
            name: "Dr. Amit Thakkar",
            description:
                "Head of the Department, Department of Computer Science & Engineering, CSPIT, CHARUSAT, India",
            profile: _4,
        },
        {
            id: 4,
            name: "Dr. Parth Shah",
            description:
                "Head of the Department of Information Technology, CSPIT, CHARUSAT, India",
            profile: _5,
        },
        {
            id: 2,
            name: "Dr. Nilay Patel",
            description:
                "Head of the Department, Department of Electrical Engineering, CSPIT, CHARUSAT, India",
                profile: _3,
            },
            {
                id: 5,
                name: "Dr. Upesh Patel",
                description:
                    "Head of the Department, Department of Electronics & Communication Engineering, CSPIT, CHARUSAT, India",
                profile: _6,
            },
            {
                id: 8,
                name: "Dr. Amit Nayak",
                description:
                "Head of the Department, Department of Information Technology Department, DEPSTAR, CHARUSAT, India",
                profile: _9,
            },
            {
                id: 6,
                name: "Dr. Nirav Bhatt",
                description:
                "Head of the Department, Department of AI & ML Engineering, CSPIT, CHARUSAT, India",
                profile: _7,
            },
            {
                id: 7,
                name: "Dr. Nikita Bhatt",
                description:
                "Head of the Department, Department of Computer Engineering, CSPIT, CHARUSAT, India",
                profile: _8,
            },
            {
                id: 9,
                name: "Dr. Dweepna Garg",
                description:
                "Head of the Department, Department of Computer Engineering, DEPSTAR, CHARUSAT, India",
                profile: _10,
            },
            {
                id: 1,
                name: "Dr. Chirag Patel",
                description:
                "Associate Professor and Head, Computer Science and Engineering Department, DEPSTAR, CHARUSAT, India",
                profile: _2,
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
                            <Text color="black">{index.description}</Text>
                        </Container>
                    </Card>
                ))}
            </Container>
        </>
    );
}
