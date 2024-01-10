import React, { useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    ModalHeader
} from "@chakra-ui/react";
// import paintball from "../../assets/adBanner/Paintball1.png";
import dvivid from "../../assets/adBanner/d-vivid.jpg";
import amul from "../../assets/adBanner/amul.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AdModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);

    useEffect(() => {
        props.setIsModalOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" blockScrollOnMount={false}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
                <ModalContent backgroundColor={"#191818"} paddingBottom={3} minWidth={"min-content"}>
                    <ModalCloseButton />

                    <ModalBody
                        alignItems={"center"}
                        justifyContent={"center"}
                        mt={12}
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                        gap={10}
                    >
                        <LazyLoadImage
                            alt="paintballAdvertisement"
                            effect="blur"
                            src={amul}
                            style={{
                                minWidth: "27vw",
                                aspectRatio: "1/1",
                                objectFit: "cover"
                            }}
                        />
                        <LazyLoadImage
                            alt="paintballAdvertisement"
                            effect="blur"
                            src={dvivid}
                            style={{
                                minWidth: "27vw",
                                aspectRatio: "1/1",
                                objectFit: "cover"
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
