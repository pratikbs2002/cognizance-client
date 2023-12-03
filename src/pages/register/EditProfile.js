import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    Card,
    CardHeader,
    Container,
    FormControl,
    Input,
    Stack,
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
    Tag,
    TagLabel,
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
} from "@chakra-ui/react";
import {
    isProfileUpdatedAPI,
    login,
    updateProfileAPI,
} from "../../service/authService";
import { useGoogleLogin } from "@react-oauth/google";
import Payment from "./Payment";

const EditProfile = (props) => {
    const {
        isOpen: isEditProfileModalOpen,
        onOpen: onEditProfileModalOpen,
        onClose: onEditProfileModalClose,
    } = useDisclosure();
    const {
        isOpen: isEventRegisterModalOpen,
        onOpen: onEventRegisterModalOpen,
        onClose: onEventRegisterModalClose,
    } = useDisclosure();
    const [registerCredentials, setRegisterCredentials] = useState({});
    const [eventRegisterCredentials, setEventRegisterCredentials] = useState(
        {}
    );
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(registerCredentials);
        if (validateRegisterCredentials()) {
            let response = await updateProfileAPI(
                registerCredentials.mobileNumber,
                registerCredentials.universityName,
                registerCredentials.year
            );
            console.log(response);
            if (response?.isProfileUpdated) {
                setIsProfileUpdated(true);
                onEditProfileModalClose();
                onEventRegisterModalOpen();
            }
        }
    };

    const validateRegisterCredentials = () => {
        return true;
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterCredentials((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleRegisterEvent = async (event) => {
        event.preventDefault();
        if (validateRegisterEventCredentials()) {
            console.log(eventRegisterCredentials);
            setIsPaymentModalOpen(true);
        }
    };

    const validateRegisterEventCredentials = () => {
        return true;
    };

    const handleChangeEvent = (event, index) => {
        const name = event.target.name;
        if (name === "teamName") {
            const value = event.target.value;
            setEventRegisterCredentials((values) => ({
                ...values,
                [name]: value,
            }));
        } else {
            const value = event.target.value;
            setEventRegisterCredentials((values) => ({
                ...values,
                [`participants${index}`]: {
                    ...values[`participants${index}`],
                    [name]: value,
                },
            }));
        }
    };

    const isProfileUpdatedRequest = async () => {
        let response = await isProfileUpdatedAPI();
        console.log(response);
        setIsProfileUpdated(response?.isProfileUpdated);
        return response?.isProfileUpdated;
    };

    const GAuth = useGoogleLogin({
        clientId: process.env.REACT_APP_CLIENT_ID,
        flow: "implicit",
        onSuccess: async (credentialResponse) => {
            console.log(credentialResponse);
            sessionStorage.setItem(
                "token",
                "Bearer " + credentialResponse.access_token
            );
            let response = await login();
            console.log(response);
            if (!response?.isAuthenticated) {
                console.log(response.message);
                sessionStorage.removeItem("token");
            } else {
                if (isProfileUpdated || (await isProfileUpdatedRequest())) {
                    // Call For Register Modal
                    console.log("REGISTER MODAL");
                    onEventRegisterModalOpen();
                } else {
                    // Call For Profile Modal
                    console.log("PROFILE MODAL");
                    onEditProfileModalOpen();
                }
            }
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const participantsField = [];
    for (let i = 1; i < props.teamSize; i++) {
        participantsField.push(
            <VStack
                w="full"
                spacing={2}
                alignItems="flex-start"
                key={i}
                divider={<StackDivider borderColor="gray.200" />}
            >
                <Text fontSize={14} align="left">
                    Participant {i}
                </Text>
                <FormControl>
                    <Input
                        name="name"
                        type="text"
                        pr="4.5rem"
                        variant="outline"
                        placeholder="Enter Participant's Name"
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        name="email"
                        type="email"
                        pr="4.5rem"
                        variant="outline"
                        placeholder="Enter Participant's Email"
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        name="mobileNumber"
                        type="tel"
                        pr="4.5rem"
                        variant="outline"
                        placeholder="Enter Participant's Mobile Number"
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl>
            </VStack>
        );
    }

    return (
        <>
            <Button
                backgroundColor="#54cadd"
                color={"black"}
                onClick={async () => {
                    if (sessionStorage.getItem("token") !== null) {
                        if (
                            isProfileUpdated ||
                            (await isProfileUpdatedRequest())
                        ) {
                            // Call For Register Modal
                            console.log("REGISTER MODAL");
                            onEventRegisterModalOpen();
                        } else {
                            // Call For Profile Modal
                            console.log("PROFILE MODAL");
                            onEditProfileModalOpen();
                        }
                    } else {
                        GAuth();
                    }
                }}
            >
                Register
            </Button>
            <Modal
                isOpen={isEditProfileModalOpen}
                onClose={onEditProfileModalClose}
                size={"xl"}
                closeOnOverlayClick={false}
                isCentered
            >
                <ModalOverlay />

                <ModalContent bg="white" p={10} paddingBottom={10}>
                    <ModalHeader>
                        <Heading as="h1" size={"lg"}>
                            User Profile
                        </Heading>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Box>
                            <form>
                                <VStack w="full" bg="white" p={6} spacing={5}>
                                    <VStack
                                        w="full"
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <Text fontSize={14} align="left">
                                            University Name
                                        </Text>
                                        <FormControl>
                                            <Input
                                                name="universityName"
                                                type="text"
                                                pr="4.5rem"
                                                variant="outline"
                                                placeholder="Enter Name"
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </VStack>

                                    <VStack
                                        w="full"
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <Text fontSize={14} align="left">
                                            Mobile Number
                                        </Text>
                                        <FormControl>
                                            <Input
                                                name="mobileNumber"
                                                type="number"
                                                pr="4.5rem"
                                                variant="outline"
                                                placeholder="Enter Mobile Number"
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </VStack>

                                    <VStack
                                        w="full"
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <Text fontSize={14} align="left">
                                            Current Year
                                        </Text>
                                        <FormControl>
                                            <Input
                                                name="year"
                                                type="number"
                                                pr="4.5rem"
                                                variant="outline"
                                                placeholder="Enter Current Year"
                                                onChange={handleChange}
                                            />
                                        </FormControl>
                                    </VStack>
                                </VStack>
                            </form>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={handleRegister}
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={isEventRegisterModalOpen}
                onClose={onEventRegisterModalClose}
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
                            Register for {props.eventName}
                        </Heading>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        {!isPaymentModalOpen ? (
                            <Box>
                                <form onSubmit={handleRegisterEvent}>
                                    <VStack
                                        w="full"
                                        bg="white"
                                        p={6}
                                        spacing={5}
                                    >
                                        <VStack
                                            w="full"
                                            spacing={2}
                                            alignItems="flex-start"
                                        >
                                            <Text fontSize={14} align="left">
                                                Team Name
                                            </Text>
                                            <FormControl>
                                                <Input
                                                    name="teamName"
                                                    type="text"
                                                    pr="4.5rem"
                                                    variant="outline"
                                                    placeholder="Enter Team Name"
                                                    onChange={handleChangeEvent}
                                                />
                                            </FormControl>
                                        </VStack>

                                        <VStack
                                            w="full"
                                            spacing={2}
                                            alignItems="flex-start"
                                        >
                                            <Text fontSize={14} align="left">
                                                Team Leader
                                            </Text>
                                            <FormControl>
                                                <Input
                                                    name="name"
                                                    type="text"
                                                    pr="4.5rem"
                                                    variant="outline"
                                                    placeholder="Enter Leader's Name"
                                                    onChange={(event) => {
                                                        handleChangeEvent(
                                                            event,
                                                            0
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    pr="4.5rem"
                                                    variant="outline"
                                                    placeholder="Enter Leader's Email"
                                                    onChange={(event) => {
                                                        handleChangeEvent(
                                                            event,
                                                            0
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <Input
                                                    name="mobileNumber"
                                                    type="tel"
                                                    pr="4.5rem"
                                                    variant="outline"
                                                    placeholder="Enter Leader's Mobile Number"
                                                    onChange={(event) => {
                                                        handleChangeEvent(
                                                            event,
                                                            0
                                                        );
                                                    }}
                                                />
                                            </FormControl>
                                        </VStack>

                                        {participantsField}
                                    </VStack>
                                </form>
                            </Box>
                        ) : (
                            <Payment price={props.price} />
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={handleRegisterEvent}
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditProfile;
