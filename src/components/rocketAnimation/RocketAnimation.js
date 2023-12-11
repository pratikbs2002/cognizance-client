import React, { useState, useEffect } from "react";
import rocketImage from "../../assets/rocketo5.png";
import { Button, Container, Text } from "@chakra-ui/react";
import "./RocketAnimation.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
export default function RocketAnimation() {
  const [angle, setAngle] = useState(0);
  const radius = 97; // radius of the big circle
  const rocketSize = 70; // width and height of the rocket image

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((angle) => angle + 1);
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  const rocketStyle = {
    position: "absolute",
    top: radius + radius * Math.sin((angle * Math.PI) / 180) - rocketSize / 2, // y
    left: radius + radius * Math.cos((angle * Math.PI) / 180) - rocketSize / 2, // x
    width: rocketSize,
    height: rocketSize,
    backgroundImage: `url(${rocketImage})`,
    backgroundSize: "contain",
    transform: `rotate(${angle}deg)`,
  };

  return (
    <>
      <div className="big-circle">
        <div style={rocketStyle}></div>
        <Container
          display={"flex"}
          padding={"30px"}
          maxWidth={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          className="button"
        >
          <Link to="event-section" smooth="true">
            <Button
              fontSize={"20px"}
              borderRadius={"100%"}
              width={"130px"}
              height={"130px"}
              display={"flex"}
              flexWrap={"wrap"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              border={"5px solid yellow"}
              backgroundColor={"#353535"}
              padding={"30px"}
              variant={"unstyled"}z
            >
              <Text color={"white"} display={"flex"} flexWrap={"wrap"}>
                Let's
              </Text>
              <Text
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                color={"white"}
                display={"flex"}
                flexWrap={"wrap"}
              >
                Go <BsFillArrowRightCircleFill />
              </Text>
            </Button>
          </Link>
        </Container>
      </div>
    </>
  );
}
