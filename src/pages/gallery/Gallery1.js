import { Container, HStack, Img, Stack, VStack } from "@chakra-ui/react";
import { Gallery } from "react-grid-gallery";
import React from "react";
import image1 from "../../assets/Avengers.jpeg";
import "./Gallery.css";
export default function Gallery1() {
  const images = [
    {
      src: "/background1.png",
      width: 500,
      height: 400,
    },
    {
      src: "/background1.png",
      width: 3000,
      height: 2000,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },

    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
    {
      src: "/background1.png",
      width: 320,
      height: 212,
    },
  ];
  return (
    <>
      <Container maxWidth={"100%"} padding={0}>
        <Container
          maxWidth={"100%"}
          style={{ backgroundColor: "transparent", padding: "30px" }}
        >
          <Container
            maxWidth={"100%"}
            // padding={10}
            className="gallery-container"
            overflow={"overlay"}
            height={"500px"}
          >
            <Gallery enableImageSelection={false} images={images} />
          </Container>
        </Container>
      </Container>
    </>
  );
}
