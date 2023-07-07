import React from "react";
import "./PhotoGallery.css";
import { useState } from "react";
import {
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function PhotoGallery() {
  const navigate = useNavigate();
  let data = [
    {
      id: 1,
      imgSrc:
        "https://drive.google.com/uc?id=1s0sO7zADgfH2MaZFu5lHg0KFM8ulUdtN",
    },
    {
      id: 2,
      imgSrc:
        " https://drive.google.com/uc?id=1lsyz4yLiHA_jVoSRd8fR4UgCs9qBQzb3",
    },
    {
      id: 3,
      imgSrc:
        "https://drive.google.com/uc?id=1RsAoe1_UJB1cEwkc6bz27cqOcnznKKM2",
    },
    {
      id: 11,
      imgSrc:
        "https://drive.google.com/uc?id=1oZSyzNu-GPJDPsq4wKrdtPRCC9AxvyAt",
    },
    {
      id: 12,
      imgSrc:
        "https://drive.google.com/uc?id=1oZSyzNu-GPJDPsq4wKrdtPRCC9AxvyAt",
    },

    {
      id: 9,
      imgSrc:
        "https://drive.google.com/uc?id=1S3q4shbOZKt8kLq7tmtQBKivluwLTimK",
    },
    {
      id: 10,
      imgSrc:
        "https://drive.google.com/uc?id=1nrzs_BE1mPPnbBMW2G0DpSq3UvYisMIQ",
    },
    {
      id: 13,
      imgSrc:
        "https://drive.google.com/uc?id=1ZZML1jt-tbVVWSRlQ_sHoZAmbPRa4J5J",
    },
    {
      id: 16,
      imgSrc:
        "https://drive.google.com/uc?id=1p3bAGM0T7dp3o1LqqpP_fjI210ml3iRO",
    },
    {
      id: 17,
      imgSrc:
        "https://drive.google.com/uc?id=1BV55IdgvKOvk4d5emDjaaNDexwdZSzSl",
    },
    {
      id: 18,
      imgSrc:
        "https://drive.google.com/uc?id=16N9aWNn640Ftd-I29Bd63fv5OFV-lmIZ",
    },
    {
      id: 19,
      imgSrc:
        "https://drive.google.com/uc?id=1O6dPSE8eHm4ktN4-CEhvO8rJ_UjyQEb_",
    },
    {
      id: 1,
      imgSrc:
        "https://drive.google.com/uc?id=1s0sO7zADgfH2MaZFu5lHg0KFM8ulUdtN",
    },
    {
      id: 2,
      imgSrc:
        " https://drive.google.com/uc?id=1lsyz4yLiHA_jVoSRd8fR4UgCs9qBQzb3",
    },
    {
      id: 3,
      imgSrc:
        "https://drive.google.com/uc?id=1RsAoe1_UJB1cEwkc6bz27cqOcnznKKM2",
    },
    {
      id: 11,
      imgSrc:
        "https://drive.google.com/uc?id=1oZSyzNu-GPJDPsq4wKrdtPRCC9AxvyAt",
    },
    {
      id: 12,
      imgSrc:
        "https://drive.google.com/uc?id=1oZSyzNu-GPJDPsq4wKrdtPRCC9AxvyAt",
    },

    {
      id: 9,
      imgSrc:
        "https://drive.google.com/uc?id=1S3q4shbOZKt8kLq7tmtQBKivluwLTimK",
    },
    {
      id: 10,
      imgSrc:
        "https://drive.google.com/uc?id=1nrzs_BE1mPPnbBMW2G0DpSq3UvYisMIQ",
    },
    {
      id: 13,
      imgSrc:
        "https://drive.google.com/uc?id=1ZZML1jt-tbVVWSRlQ_sHoZAmbPRa4J5J",
    },
    {
      id: 16,
      imgSrc:
        "https://drive.google.com/uc?id=1p3bAGM0T7dp3o1LqqpP_fjI210ml3iRO",
    },
    {
      id: 17,
      imgSrc:
        "https://drive.google.com/uc?id=1BV55IdgvKOvk4d5emDjaaNDexwdZSzSl",
    },
    {
      id: 18,
      imgSrc:
        "https://drive.google.com/uc?id=16N9aWNn640Ftd-I29Bd63fv5OFV-lmIZ",
    },
    {
      id: 19,
      imgSrc:
        "https://drive.google.com/uc?id=1O6dPSE8eHm4ktN4-CEhvO8rJ_UjyQEb_",
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
      <div className="photo-gallery-parent-container">
        <div className="photo-gallery-navbar">
          <div
            className="photo-gallery-back-button"
            onClick={() => navigate(`/`)}
          >
            <IoIosArrowBack />
            Back
          </div>
        </div>
        <div className="gallery-container">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              fontSize: "50px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Photos
          </div>
          <div className="main-container-gallery">
            <div className="gallery">
              {data.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.imgSrc)}
                  >
                    <img
                      alt="temp"
                      src={item.imgSrc}
                      style={{ width: "100%" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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
      </div>
    </>
  );
}
