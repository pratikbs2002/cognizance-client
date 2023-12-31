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
import paintball from "../../assets/adBanner/Paintball1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AdModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" blockScrollOnMount={false}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
                <ModalContent backgroundColor={"#191818"} paddingBottom={3} minWidth={"min-content"}>
                    <ModalCloseButton />

                    <ModalBody alignItems={"center"} justifyContent={"center"} mt={12}>
                        <LazyLoadImage
                            alt="paintballAdvertisement"
                            effect="blur"
                            src={paintball}
                            style={{
                                minWidth: "27vw",
                                aspectRatio: "5/7",
                                objectFit: "cover"
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
