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
    Tag,
    TagLabel,
    HStack,
    StackDivider
} from "@chakra-ui/react";

const BasicUsage = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    let tsk = props.task;
    console.log(tsk);

    // tsk.map((task) => {
    //     console.log(task);
    //     return <>{task}</>;
    // });

    for (let i = 0; i < tsk.length; i++) {
        console.log(tsk[i]);
    }
    return (
        <>
            <Button onClick={onOpen} color="black">
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
                <ModalContent bg="white" p={10} paddingBottom={0}>
                    <ModalHeader>
                        <Heading as="h1" size={"lg"}>
                            {props.eventName}
                        </Heading>

                        <Tag
                            size={"md"}
                            variant="outline"
                            color="#cc7c69"
                            borderRadius={100}
                            marginTop={2}
                        >
                            <TagLabel>{props.department}</TagLabel>
                        </Tag>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Box>
                            <HStack
                                spacing={10}
                                divider={
                                    <StackDivider borderColor="gray.200" />
                                }
                            >
                                <Box>
                                    <img
                                        style={{
                                            width: "300px",
                                            aspectRatio: "auto"
                                        }}
                                        src={props.image}
                                        alt={props.eventName}
                                    />
                                </Box>

                                <Box w="65%">
                                    <Tabs
                                        size="md"
                                        variant="enclosed"
                                    >
                                        <TabList mb="1em">
                                            <Tab>About</Tab>
                                            <Tab>Task</Tab>
                                            <Tab>Contact</Tab>
                                        </TabList>

                                        <TabPanels>
                                            <TabPanel>
                                                {props.about}
                                            </TabPanel>

                                            <TabPanel></TabPanel>

                                            <TabPanel>
                                                {props.contact}
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </Box>
                            </HStack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button variant="ghost">
                            Secondary Action
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default BasicUsage;
