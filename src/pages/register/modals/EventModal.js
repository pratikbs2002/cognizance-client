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
    Text
} from "@chakra-ui/react";
import "./EventModal.css";
import "./modalScrollBar.css";

const BasicUsage = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} color="black" bg="white">
                Explore more
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} closeOnOverlayClick={false} isCentered>
                <ModalOverlay />
                <ModalContent
                    margin={0}
                    bg="white"
                    p={10}
                    paddingBottom={0}
                    paddingTop={"40px"}
                    scrollBehavior="outside"
                    className="general-modal"
                    // maxH="600px"
                >
                    <ModalHeader>
                        <Heading textAlign={{ base: "center", md: "initial" }} as="h1" size={"lg"}>
                            {props.eventName}
                        </Heading>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody margin={0} padding={0}>
                        <Text textAlign={{ base: "center", md: "initial" }} fontSize={"xl"} p={5} pt={0}>
                            Team Size: {props.teamSize}
                        </Text>

                        <Box>
                            <HStack
                                spacing={10}
                                divider={<StackDivider borderColor="gray.200" />}
                                align={{ base: "flex-start", md: "flex-start" }}
                                justifyContent={{
                                    base: "center",
                                    md: "space-between"
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
                                            borderRadius: "10px"
                                        }}
                                        src={props.image}
                                        alt={props.eventName}
                                    />
                                </Box>

                                <Box margin={0} padding={0} marginTop="10px" w={{ base: "100%", md: "65%" }}>
                                    <Tabs
                                        size="md"
                                        variant="enclosed"
                                        style={{
                                            textAlign: "left"
                                        }}
                                    >
                                        <TabList
                                            margin={0}
                                            padding={0}
                                            display={"flex"}
                                            // gap={"10px"}
                                            alignItems={"center"}
                                            justifyContent={{ base: "space-between", md: "initial" }}
                                            maxWidth={{ base: "100%", md: "initial" }}
                                            mb="1em"
                                        >
                                            <Tab>About</Tab>
                                            {props.taskEnabled && <Tab>Task</Tab>}
                                            {props.prizesEnabled && <Tab>Prizes</Tab>}
                                        </TabList>

                                        <TabPanels>
                                            <TabPanel
                                                style={{
                                                    backgroundColor: "#e2e8f0"
                                                }}
                                                padding={3}
                                                margin={0}
                                            >
                                                <div
                                                    style={{
                                                        overflowY: "auto",
                                                        maxHeight: "20vh"
                                                    }}
                                                    className="event-registration-description"
                                                >
                                                    {props.about}
                                                </div>
                                                {props.eventName.toLowerCase() === "musical night" && (
                                                    <div className="exploreMore-note">
                                                        <span className="title">Note:</span>
                                                        <span className="message">
                                                            Registration will be done offline on campus.
                                                        </span>
                                                    </div>
                                                )}
                                            </TabPanel>
                                            {props.taskEnabled && (
                                                <TabPanel
                                                    style={{
                                                        backgroundColor: "#e2e8f0"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            textAlign: "left",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "flex-start",
                                                            overflowY: "auto",
                                                            maxHeight: "20vh"
                                                        }}
                                                        className="event-registration-description"
                                                    >
                                                        <UnorderedList>
                                                            {props?.task?.map((t) => (
                                                                <ListItem>{t}</ListItem>
                                                            ))}
                                                        </UnorderedList>
                                                    </div>
                                                </TabPanel>
                                            )}

                                            {props.prizesEnabled && (
                                                <TabPanel
                                                    style={{
                                                        backgroundColor: "#e2e8f0"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            textAlign: "left",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "flex-start",
                                                            overflowY: "auto",
                                                            maxHeight: "20vh"
                                                        }}
                                                    >
                                                        <UnorderedList>
                                                            {props?.winningPrizes?.map((t) => (
                                                                <ListItem>{t}</ListItem>
                                                            ))}
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

                    <ModalFooter
                        display={"flex"}
                        alignItems={"center"}
                        maxWidth={"100%"}
                        justifyContent={{ base: "center", md: "flex-end" }}
                    >
                        <Button as="a" colorScheme="blue" download href={`pdfs/${props.pdfName}.pdf`}>
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
