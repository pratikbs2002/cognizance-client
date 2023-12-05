import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    FormControl,
    Input,
    Text,
    useDisclosure,
    VStack,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Heading,
    Box,
    Spinner,
    Image,
} from "@chakra-ui/react";
import Temp from "./Temp";

const AddEventModal = (props) => {
    const {
        isOpen: isEventModalOpen,
        onOpen: onEventModalOpen,
        onClose: onEventModalClose,
    } = useDisclosure();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Box
                maxW={"250px"}
                overflow="hidden"
                p={4}
                transition="box-shadow 0.3s"
                mx="auto"
                mb={4}
            >
                <Button
                    backgroundColor="#54cadd"
                    color={"black"}
                    onClick={() => {
                        setIsLoading(true);
                        onEventModalOpen();
                        setIsLoading(false);
                    }}
                >
                    +
                </Button>
            </Box>
            {isLoading ? (
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        left: "0",
                        top: "0",
                        zIndex: "100",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                >
                    <Spinner
                        thickness="6px"
                        speed="0.6s"
                        emptyColor="rgba(0,0,0,0)"
                        color="red"
                        size="xl"
                        style={{
                            height: "100px",
                            width: "100px",
                            position: "fixed",
                            left: "47.5%",
                            top: "45%",
                            zIndex: "100",
                        }}
                    />
                </div>
            ) : (
                <>
                    <Modal
                        isOpen={isEventModalOpen && !isLoading}
                        onClose={onEventModalClose}
                        size={"6xl"}
                        closeOnOverlayClick={false}
                        isCentered
                    >
                        <ModalOverlay />
                        <ModalContent
                            bg="white"
                            p={10}
                            paddingBottom={10}
                            h={"80%"}
                            overflowY={"scroll"}
                        >
                            <ModalHeader>
                                <Heading as="h1" size={"lg"}>
                                    Select Event
                                </Heading>
                            </ModalHeader>

                            <ModalCloseButton />

                            <ModalBody>
                                <Temp
                                    addEventModal={true}
                                    addEventHandler={props.addEventHandler}
                                    setAddEventData={props.setAddEventData}
                                />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </>
            )}
        </>
    );
};

export default AddEventModal;
