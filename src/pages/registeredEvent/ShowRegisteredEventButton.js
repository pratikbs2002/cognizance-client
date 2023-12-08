import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    FormHelperText,
    Image,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import {
    isProfileUpdatedAPI,
    login,
    updateProfileAPI,
} from "../../service/authService";
import { useGoogleLogin } from "@react-oauth/google";

const ShowRegisteredEventButton = (props) => {
    const navigate = useNavigate();

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
    const [profileError, setProfileErrors] = useState({});

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
                setIsLoading(false);
            }
        }
    };

    const validateRegisterCredentials = () => {
        let errors = {};
        let flag = true;
        //name error
        if (!registerCredentials.name?.trim()) {
            errors.name = "Name is required";
            flag = false;
        } else if (
            !/^[A-Za-z ]+$/.test(registerCredentials.name.toLowerCase().trim())
        ) {
            errors.name = "Name must be Alphabets";
            flag = false;
        } else {
            errors.name = "";
        }

        //University Name error
        if (!registerCredentials.universityName?.trim()) {
            errors.universityName = "University name is required";
        } else if (
            !/^[a-z &,.'-]+$/.test(
                registerCredentials.universityName.toLowerCase().trim()
            )
        ) {
            errors.universityName = "University name must be Alphabets";
            flag = false;
        } else {
            errors.universityName = "";
        }

        // mobileNumber error
        if (!registerCredentials.mobileNumber?.trim()) {
            errors.mobileNumber = "Mobile number is require";
            flag = false;
        } else if (
            registerCredentials.mobileNumber.length > 10 ||
            registerCredentials.mobileNumber.length < 10
        ) {
            errors.mobileNumber = "Length must be of 10 digits";
            flag = false;
        } else if (
            !/^[6-9][0-9]{9}$/.test(registerCredentials.mobileNumber) ||
            registerCredentials.mobileNumber === "6666666666" ||
            registerCredentials.mobileNumber === "7777777777" ||
            registerCredentials.mobileNumber === "8888888888" ||
            registerCredentials.mobileNumber === "9999999999"
        ) {
            errors.mobileNumber = "Invalid mobile number";
            flag = false;
        } else {
            errors.mobileNumber = "";
        }
        setProfileErrors(errors);
        if (flag) {
            return true;
        } else {
            return false;
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterCredentials((values) => ({
            ...values,
            [name]: value,
        }));
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
                    // Call For Registered Event Modal
                    setIsLoading(false);
                    navigate("/registeredEvents");
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

    return (
        <>
            <Button
                backgroundColor="white"
                color={"black"}
                onClick={async () => {
                    if (sessionStorage.getItem("token") !== null) {
                        setIsLoading(true);
                        if (
                            isProfileUpdated ||
                            (await isProfileUpdatedRequest())
                        ) {
                            setIsLoading(false);
                            navigate("/registeredEvents");
                        } else {
                            if (!sessionStorage.getItem("token")) {
                                GAuth();
                                return;
                            }
                            onEditProfileModalOpen();
                            setIsLoading(false);
                        }
                    } else {
                        GAuth();
                    }
                }}
            >
                Show Registered Event <IoIosArrowForward />
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
                                                    Name
                                                </Text>
                                                <FormControl>
                                                    <Input
                                                        isInvalid={
                                                            profileError.name
                                                        }
                                                        name="name"
                                                        type="text"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter Name"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.name ? (
                                                        <FormHelperText
                                                            color={"#e74d4d"}
                                                            fontSize={13}
                                                        >
                                                            {" "}
                                                            {
                                                                profileError.name
                                                            }{" "}
                                                        </FormHelperText>
                                                    ) : (
                                                        <></>
                                                    )}
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
                                                    University Name
                                                </Text>
                                                <FormControl>
                                                    <Input
                                                        isInvalid={
                                                            profileError.universityName
                                                        }
                                                        name="universityName"
                                                        type="text"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter University Name"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.universityName ? (
                                                        <FormHelperText
                                                            color={"#e74d4d"}
                                                            fontSize={13}
                                                        >
                                                            {" "}
                                                            {
                                                                profileError.universityName
                                                            }
                                                        </FormHelperText>
                                                    ) : (
                                                        <></>
                                                    )}
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
                                                        isInvalid={
                                                            profileError.mobileNumber
                                                        }
                                                        name="mobileNumber"
                                                        type="number"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter Mobile Number"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.mobileNumber ? (
                                                        <FormHelperText
                                                            color={"#e74d4d"}
                                                            fontSize={13}
                                                        >
                                                            {" "}
                                                            {
                                                                profileError.mobileNumber
                                                            }{" "}
                                                        </FormHelperText>
                                                    ) : (
                                                        <></>
                                                    )}
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
                </>
            )}
        </>
    );
};

export default ShowRegisteredEventButton;
