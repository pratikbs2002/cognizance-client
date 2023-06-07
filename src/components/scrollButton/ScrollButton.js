import { Button, Img, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import lg from "../../assets/rocketo6.png";
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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      <div
        className={`go-to-top ${visible ? "visible" : ""}`}
        onClick={scrollToTop}
        style={{
          cursor: "pointer",
          // display: visible ? "inline" : "none"
        }}
      >
        <Img boxSize="90px" src={lg} />
        <Text color={"white"}>Back to Top</Text>
      </div>
    </>
  );
};

export default ScrollButton;
