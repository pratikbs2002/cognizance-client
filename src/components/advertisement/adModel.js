import React, { useEffect } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Image } from "@chakra-ui/react";
import paintball from "../../assets/adBanner/Paintball.jpg";

export default function AdModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, []);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
                <ModalContent backgroundColor={"#021d1d"} height={"100vh"}>
                    <ModalCloseButton />
                    <ModalBody
                        height={"100vh"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        marginTop={"50px"}
                        style={{ padding: "10px" }}
                    >
                        <Image
                            border={"1px solid white"}
                            height={"72vh"}
                            src={paintball}
                            alt="paintballAdvertisement"
                            borderRadius="md"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
