import React, { useEffect } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Image } from "@chakra-ui/react";
import paintball from "../../assets/adBanner/Paintball.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AdModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
                <ModalContent backgroundColor={"#191818"} paddingBottom={3}>
                    <ModalCloseButton position={"relative"} left={"90%"} />
                    <ModalBody
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        style={{ padding: "10px" }}
                    >
                        <LazyLoadImage
                            alt="paintballAdvertisement"
                            effect="blur"
                            src={paintball}
                            style={{
                                height: "72vh"
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
