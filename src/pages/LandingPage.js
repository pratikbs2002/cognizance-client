import React from "react";
import { Container } from "@chakra-ui/react";
import mainbg from "../assets/bg8.png";
import Committee from "./committee/Committee";

import Navbar from "../components/navbar/Navbar";
import About from "./about/About";
import Footer from "../components/footer/Footer";
import PhotoGallery from "./photoGallery/PhotoGallery";
import Count from "../components/Count";
import Home from "./home/Home";
import ScrollButton from "../components/scrollButton/ScrollButton";

export default function LandingPage() {
  return (
    <>
      <Container
        padding={0}
        margin={0}
        maxWidth={"100%"}
        backgroundImage={mainbg}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundColor="blackAlpha.800"
        backdropBlur={"lg"}
        backgroundRepeat={"no-repeat"}
      >
        <Navbar />
        <Home />
        <About />
        <Committee />
        {/* <PhotoGallery /> */}
        <Footer />
        <ScrollButton />
      </Container>
    </>
  );
}
