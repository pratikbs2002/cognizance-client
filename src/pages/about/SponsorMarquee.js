import { Card, Image, Text } from "@chakra-ui/react";

import s1 from "../../assets/sponsor_logo/s1.png";
import s2 from "../../assets/sponsor_logo/s2.png";
import s3 from "../../assets/sponsor_logo/s3.png";
import s4 from "../../assets/sponsor_logo/s4.png";
import s5 from "../../assets/sponsor_logo/s5.png";
import s6 from "../../assets/sponsor_logo/s6.png";
import s7 from "../../assets/sponsor_logo/s7.png";
import s8 from "../../assets/sponsor_logo/s8.png";

import React from "react";
import Marquee from "react-fast-marquee";

export default function SponsorMarquee() {
    const arr = [s1, s2, s3, s4, s5, s6, s7, s8];
    return (
        <Marquee gradient gradientColor speed={120}>
            {arr.map((index) => (
                <Card
                    style={{
                        marginRight: "100px",
                        boxShadow: "0 0 10 10 rgba(0 0 0 0.5) ",
                    }}
                    key={index}
                >
                    <Image
                        boxSize="100px"
                        objectFit="cover"
                        src={index}
                        alt="sponsor"
                    />
                </Card>
            ))}
        </Marquee>
    );
}
