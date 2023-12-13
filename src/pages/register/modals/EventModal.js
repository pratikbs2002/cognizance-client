import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Heading,
    useDisclosure,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    HStack,
    StackDivider,
    ListItem,
    UnorderedList,
    Text,
} from "@chakra-ui/react";
import "./EventModal.css";

const BasicUsage = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} color="black" bg="white">
                Explore more
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={"6xl"}
                closeOnOverlayClick={false}
                isCentered
            >
                <ModalOverlay />
                <ModalContent
                    bg="white"
                    p={10}
                    paddingBottom={0}
                    // maxH="600px"
                >
                    <ModalHeader>
                        <Heading as="h1" size={"lg"}>
                            {props.eventName}
                        </Heading>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Text fontSize={"xl"} p={5} pt={0}>
                            Team Size: {props.teamSize}
                        </Text>

                        <Box>
                            <HStack
                                spacing={10}
                                divider={
                                    <StackDivider borderColor="gray.200" />
                                }
                                align={{ base: "flex-start", md: "flex-start" }}
                                justifyContent={{
                                    base: "center",
                                    md: "space-between",
                                }}
                                flexDirection={{ base: "column", md: "row" }}
                            >
                                <Box w={{ base: "100%", md: "auto" }}>
                                    <img
                                        style={{
                                            width: "300px",
                                            aspectRatio: "1/1",
                                            objectFit: "contain",
                                            // border: "1px solid",
                                            borderColor: "gray",
                                            borderRadius: "10px",
                                        }}
                                        src={props.image}
                                        alt={props.eventName}
                                    />
                                </Box>

                                <Box w={{ base: "100%", md: "65%" }}>
                                    <Tabs
                                        size="md"
                                        variant="enclosed"
                                        style={{
                                            textAlign: "left",
                                        }}
                                    >
                                        <TabList mb="1em">
                                            <Tab>About</Tab>
                                            {props.taskEnabled && (
                                                <Tab>Task</Tab>
                                            )}
                                            {props.prizesEnabled && (
                                                <Tab>Prizes</Tab>
                                            )}
                                            {/* <Tab>Contact</Tab> */}
                                        </TabList>

                                        <TabPanels>
                                            <TabPanel>
                                                <div
                                                    style={{
                                                        overflowY: "auto",
                                                        maxHeight: "20vh",
                                                    }}
                                                    className="event-registration-description"

                                                >
                                                    {props.about}
                                                </div>
                                                {props.eventName.toLowerCase()==="musical night"&&
                                                    <div className="exploreMore-note">
                                                        <span className="title">
                                                            Note:
                                                        </span>
                                                        <span className="message">
                                                            Registration will be done offline on campus.
                                                        </span>
                                                    </div>
                                                }
                                            </TabPanel>
                                            {props.taskEnabled && (
                                                <TabPanel>
                                                    <div
                                                        style={{
                                                            textAlign: "left",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            alignItems:
                                                                "flex-start",
                                                            overflowY: "auto",
                                                            maxHeight: "20vh",
                                                        }}
                                                        className="event-registration-description"
                                                    >
                                                        <UnorderedList>
                                                            {props?.task?.map(
                                                                (t) => (
                                                                    <ListItem>
                                                                        {t}
                                                                    </ListItem>
                                                                )
                                                            )}
                                                        </UnorderedList>
                                                    </div>
                                                </TabPanel>
                                            )}

                                            {props.prizesEnabled && (
                                                <TabPanel>
                                                    <div
                                                        style={{
                                                            textAlign: "left",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            alignItems:
                                                                "flex-start",
                                                            overflowY: "auto",
                                                            maxHeight: "20vh",
                                                        }}
                                                    >
                                                        <UnorderedList>
                                                            {props?.winningPrizes?.map(
                                                                (t) => (
                                                                    <ListItem>
                                                                        {t}
                                                                    </ListItem>
                                                                )
                                                            )}
                                                        </UnorderedList>
                                                    </div>
                                                </TabPanel>
                                            )}
                                        </TabPanels>
                                    </Tabs>
                                </Box>
                            </HStack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            as="a"
                            colorScheme="blue"
                            mr={3}
                            download
                            href={`pdfs/${props.pdfName}.pdf`}
                        >
                            Download PDF
                        </Button>
                        {/* <Button variant="outline" colorScheme="black">
                            Register for {price}
                        </Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BasicUsage;
