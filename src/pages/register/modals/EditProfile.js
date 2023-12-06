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
import {
    isProfileUpdatedAPI,
    login,
    updateProfileAPI,
} from "../../../service/authService";
import { useGoogleLogin } from "@react-oauth/google";
import Payment from "../Payment";
import { registerEvent } from "../../../service/eventRegistrationService";

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
    const [eventRegisterCredentials, setEventRegisterCredentials] = useState({
        teamSize: props.teamSize,
    });
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    const handleRegister = async (event) => {
        setIsLoading(true);
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
                setIsLoading(false);
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
            if (!sessionStorage.getItem("token")) {
                alert("Please Login First");
                GAuth();
            }
            let eventData = {
                id: props.eventId,
                eventType: props.eventType,
                eventTitle: props.eventName,
                isMusicalNight: props.isMusicalNight ? true : false,
                // eventDate: "",
                // eventLocation: "",
                eventFees: props.price,
                eventParticipantInfo: eventRegisterCredentials,
            };
            console.log(eventData);
            let response = await registerEvent(eventData);
            console.log(response);
            if (!response?.isAuthenticated) {
                sessionStorage.removeItem("token");
                return;
            }
            if (!response?.isUserExist) {
                alert("User Does Not Exist");
                return;
            }
            if (!response?.isEventRegistered) {
                alert("Event is not registered!");
                return;
            }
            if (response?.isEventRegistered) {
                if (props.addEventModal) {
                    props.handleRegisterTeam();
                    onEventRegisterModalClose();
                } else setIsPaymentModalOpen(true);
            }
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
                [`participant${index}`]: {
                    ...values[`participant${index}`],
                    [name]: value,
                },
            }));
        }
    };

    const isProfileUpdatedRequest = async () => {
        let response = await isProfileUpdatedAPI();
        console.log(response);
        if (!response?.isAuthenticated) {
            sessionStorage.removeItem("token");
            return false;
        }
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
            setIsLoading(true);
            if (!response?.isAuthenticated) {
                console.log(response.message);
                sessionStorage.removeItem("token");
                setIsLoading(false);
            } else {
                if (isProfileUpdated || (await isProfileUpdatedRequest())) {
                    // Call For Register Modal
                    console.log("REGISTER MODAL");
                    onEventRegisterModalOpen();
                    setIsLoading(false);
                } else {
                    // Call For Profile Modal
                    if (!sessionStorage.getItem("token")) {
                        GAuth();
                        return;
                    }
                    console.log("PROFILE MODAL");
                    onEditProfileModalOpen();
                    setIsLoading(false);
                }
            }
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const participantsField = [];
    for (let i = 0; i < props.teamSize; i++) {
        participantsField.push(
            <VStack
                w="full"
                spacing={2}
                alignItems="flex-start"
                key={i}
                paddingBottom={5}
            >
                <Text fontSize={16} align="left" fontWeight={500}>
                    {i === 0
                        ? "Enter Your Details"
                        : `Enter Participant ${i} Details`}
                </Text>
                <FormControl>
                    <Input
                        name="name"
                        type="text"
                        pr="4.5rem"
                        fontSize={15}
                        variant="outline"
                        placeholder={
                            i === 0
                                ? "Enter Your Name"
                                : `Enter Participant${i}'s Name`
                        }
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        name="email"
                        type="email"
                        fontSize={15}
                        pr="4.5rem"
                        variant="outline"
                        placeholder={
                            i === 0
                                ? "Enter Your Email"
                                : `Enter Participant${i}'s Email`
                        }
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <Input
                        name="mobileNumber"
                        type="tel"
                        fontSize={15}
                        pr="4.5rem"
                        variant="outline"
                        placeholder={
                            i === 0
                                ? "Enter Your Mobile Number"
                                : `Enter Participant${i}'s Mobile Number`
                        }
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
                        setIsLoading(true);
                        if (
                            isProfileUpdated ||
                            (await isProfileUpdatedRequest())
                        ) {
                            // Call For Register Modal
                            console.log("REGISTER MODAL");
                            onEventRegisterModalOpen();
                            setIsLoading(false);
                        } else {
                            // Call For Profile Modal
                            if (!sessionStorage.getItem("token")) {
                                GAuth();
                                return;
                            }
                            console.log("PROFILE MODAL");
                            onEditProfileModalOpen();
                            setIsLoading(false);
                        }
                    } else {
                        GAuth();
                    }
                }}
            >
                Register
            </Button>
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
                        isOpen={isEditProfileModalOpen && !isLoading}
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
                                                <Text
                                                    fontSize={14}
                                                    align="left"
                                                >
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
                                                <Text
                                                    fontSize={14}
                                                    align="left"
                                                >
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
                                                <Text
                                                    fontSize={14}
                                                    align="left"
                                                >
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
                        isOpen={isEventRegisterModalOpen && !isLoading}
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
                            className="event-registration-modal"
                        >
                            <ModalHeader>
                                <Heading as="h1" size={"lg"}>
                                    Register for {props.eventName} | ₹
                                    {props.price}/-
                                </Heading>
                            </ModalHeader>

                            <ModalCloseButton />

                            <ModalBody>
                                {props.addEventModal || !isPaymentModalOpen ? (
                                    <Box>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "10px",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flex: 1,
                                                    overflowY: "hidden",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Image
                                                    src={props.image}
                                                    alt="Image"
                                                    objectFit="cover"
                                                    aspectRatio="1/1"
                                                    w="100%"
                                                    h="80%"
                                                />
                                            </div>
                                            <div
                                                className="event-registration-description"
                                                style={{
                                                    display: "flex",
                                                    flex: 1,
                                                    maxHeight: "55vh",
                                                    borderLeft:
                                                        "1px solid gray",
                                                    padding: "10px",
                                                    flexDirection: "column",
                                                    overflowY: "auto",
                                                }}
                                            >
                                                <form
                                                    onSubmit={
                                                        handleRegisterEvent
                                                    }
                                                >
                                                    <VStack
                                                        w="full"
                                                        bg="white"
                                                        p={6}
                                                        spacing={5}
                                                    >
                                                        {props.teamSize > 1 && (
                                                            <VStack
                                                                w="full"
                                                                spacing={2}
                                                                alignItems="flex-start"
                                                                paddingBottom={
                                                                    5
                                                                }
                                                            >
                                                                <Text
                                                                    fontSize={
                                                                        16
                                                                    }
                                                                    align="left"
                                                                    fontWeight={
                                                                        500
                                                                    }
                                                                >
                                                                    Team Name
                                                                </Text>
                                                                <FormControl>
                                                                    <Input
                                                                        name="teamName"
                                                                        type="text"
                                                                        fontSize={
                                                                            15
                                                                        }
                                                                        pr="4.5rem"
                                                                        variant="outline"
                                                                        placeholder="Enter Team Name"
                                                                        onChange={
                                                                            handleChangeEvent
                                                                        }
                                                                    />
                                                                </FormControl>
                                                            </VStack>
                                                        )}

                                                        {participantsField}
                                                    </VStack>

                                                    <VStack>
                                                        <Button
                                                            colorScheme="blue"
                                                            mr={3}
                                                            onClick={
                                                                handleRegisterEvent
                                                            }
                                                        >
                                                            Submit
                                                        </Button>
                                                    </VStack>
                                                </form>
                                            </div>
                                        </div>
                                    </Box>
                                ) : (
                                    <Payment price={props.price} />
                                )}
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </>
            )}
        </>
    );
};

export default EditProfile;
