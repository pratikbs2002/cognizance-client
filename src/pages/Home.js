import { Heading } from "@chakra-ui/react";
import React from "react";
import MainCarousel from "../components/MainCarousel";

export default function Home() {
  return (
    <>
      <Heading
        className="Home-section"
        padding={2}
        textAlign={"center"}
        color="#1c4980"
        size="lg"
      >
        COGNIZANCE
      </Heading>
      <MainCarousel />
    </>
  );
}
