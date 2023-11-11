import React, { useEffect } from "react";
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
    Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { getImagesLinks } from "../../service/publicService";

export default function PhotoGallery() {
    const navigate = useNavigate();

    const [isImageFetched, setIsImageFetched] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentImage, setCurrentImage] = useState(null);
    const getImg = async (img) => {
        let name = img.split("/")[img.split("/").length - 1];
        name = name.split(".webp")[0];
        setCurrentImage(
            `${process.env.REACT_APP_SERVER_URL}/gallery/original/${name}`
        );
        onOpen(true);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            let response = await getImagesLinks();
            let data = await response.json();
            console.log(data);
            if (data.isFound) {
                setData(data.listOfFiles);
            } else {
                console.log("No images found");
            }

            setIsImageFetched(true);
        }

        if (!isImageFetched) fetchImages();
    }, [isImageFetched]);

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
                            {isImageFetched ? (
                                data.map((item, index) => {
                                    return (
                                        <div
                                            className="pics"
                                            key={index}
                                            onClick={() => getImg(item)}
                                        >
                                            <img
                                                alt="temp"
                                                src={item}
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <Spinner
                                    thickness="6px"
                                    speed="1s"
                                    emptyColor="gray.200"
                                    color="yellow"
                                    size="xl"
                                    style={{
                                        height: "100px",
                                        width: "100px",
                                        position: "absolute",
                                        top: "54%",
                                        left: "47.2%",
                                    }}
                                />
                            )}
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
                            <Img
                                maxHeight={"80vh"}
                                src={currentImage}
                                alt="temp"
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
