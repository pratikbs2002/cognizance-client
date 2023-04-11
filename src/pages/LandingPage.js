import React from "react";
import { Container } from "@chakra-ui/react";
import mainbg from "../assets/main-bg.jpg";
import Home from "./Home";
import Gallery from "./gallery/Gallery1";
import Committee from "./committee/Committee";
import ScrollButton from "../components/ScrollButton";
import Navbar from "../components/navbar/Navbar";
import About from "./About";
import Footer from "../components/footer/Footer";
import PhotoGallery from "./photoGallery/PhotoGallery";

export default function LandingPage() {
  return (
    <>
      <Container
        padding={0}
        maxWidth={"100%"}
        backgroundImage={mainbg}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundColor="blackAlpha.800"
        backgroundRepeat={"no-repeat"}
      >
        <Navbar />
        <Home />
        <About />
        <Committee />
        <Gallery />
        
        <Footer />
        <ScrollButton />
      </Container>
      {/* <PhotoGallery /> */}
    </>
  );
}
