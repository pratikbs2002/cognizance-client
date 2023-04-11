import { Button, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import lg from "../assets/sponsor_logo/rocketU.png";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Img
      className="go-to-top"
      borderRadius={100}
      border="1px solid white"
      onClick={scrollToTop}
      boxSize="50px"
      style={{ display: visible ? "inline" : "none" }}
      src={lg}
    />
  );
};

export default ScrollButton;
