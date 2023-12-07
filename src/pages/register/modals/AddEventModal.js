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

import { CiCirclePlus } from "react-icons/ci";
import TechEvents from "../allEvents/TechEvents";
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
        width={"250px"}
        height={"335px"}
        transition="box-shadow 0.3s"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}   
        backgroundColor={"rgba(0, 0, 0, 0.442)"}
        onClick={() => {
          setIsLoading(true);
          onEventModalOpen();
          setIsLoading(false);
        }}
        cursor={"pointer"}
      >
        <div
          padding={"10px"}
          height={"50px"}
          width={"50px"}
          borderRadius={"100%"}
          // backgroundColor="#54cadd"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2%",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: "500",
          }}
          cursor={"pointer"}
        >
          <CiCirclePlus color="white" cursor={"pointer"} fontSize={"70px"} />
          Add Event
        </div>
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
              backgroundColor={"rgba(0, 0, 0, 0.802)"}
              p={10}
              paddingBottom={10}
              h={"80%"}
              overflowY={"scroll"}
            >
              <ModalHeader>
                <Heading color={"white"} as="h1" size={"lg"}>
                  Select Event
                </Heading>
              </ModalHeader>

              <ModalCloseButton />

              <ModalBody>
                <TechEvents
                  addEventModal={true}
                  addEventHandler={props.addEventHandler}
                  setAddEventData={props.setAddEventData}
                  selectedEvents={props.selectedEvents}
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
