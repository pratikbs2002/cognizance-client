import React from "react";
import "./PhotoGallery.css";
import img1 from "../../assets/Avengers.jpeg";
import img2 from "../../assets/Avengers.jpeg";
import img3 from "../../assets/163754-spider_man-iron_man-superhero-comic_book-spider-1080x1920.jpg";
import img4 from "../../assets//6205095502ee1.jpg";
import img5 from "../../assets/avengers-endgame-iron-man-tony-stark-infinity-stones_2440x4320_xtrafondos.com.jpg";
import img6 from "../../assets/Avengers.jpeg";
import img7 from "../../assets/bg3.png";
import img8 from "../../assets/bg2.jpeg";
import img9 from "../../assets/bg3.png";
import img10 from "../../assets/bg4.png";

import { useState } from "react";
import {
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function PhotoGallery() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },

    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImage, setCurrentImage] = useState(null);
  const getImg = (img) => {
    setCurrentImage(img);
    onOpen(true);
  };
  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img alt="temp" src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"}>
          <ModalHeader
            color={"red.100"}
            display={"flex"}
            fontSize={"30px"}
            fontWeight={"bold"}
            justifyContent={"center"}
          >
            {/* <Button onClick={onClose}>❌</Button> */}
            Cognizance
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Img maxHeight={"80vh"} src={currentImage} alt="temp" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
