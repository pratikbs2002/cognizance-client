import React, { useState } from "react";
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
import { isProfileUpdatedAPI, login } from "../../service/authService";
import { useGoogleLogin } from "@react-oauth/google";

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
    const [isLogin, setIsLogin] = useState(
        sessionStorage.getItem("token") ? true : false
    );
    const [isProfileUpdated, setIsProfileUpdated] = useState(true);

    const handleRegister = async (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterCredentials((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const loginRequest = async () => {
        let response = await login();
        console.log(response);
        if (isProfileUpdated) {
            onEventRegisterModalOpen();
        } else {
            isProfileUpdatedRequest();
            onEditProfileModalOpen();
        }
    };

    const isProfileUpdatedRequest = async () => {
        let response = await isProfileUpdatedAPI();
        console.log(response);
        setIsProfileUpdated(response?.isProfileUpdated);
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
            setIsLogin(true);
            loginRequest();
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    return (
        <>
            <Button
                backgroundColor="#54cadd"
                color={"black"}
                onClick={() => {
                    if (isLogin) {
                        if (isProfileUpdated) {
                            // Call For Register Modal
                            console.log("REGISTER MODAL");
                            onEventRegisterModalOpen();
                        } else {
                            isProfileUpdatedRequest();
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
                            <form onSubmit={handleRegister}>
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
                            onClick={onEditProfileModalClose}
                            onSubmit={handleRegister}
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

                <ModalContent bg="white" p={10} paddingBottom={10}>
                    <ModalHeader>
                        <Heading as="h1" size={"lg"}>
                            Register for {props.eventName}
                        </Heading>
                    </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Box>
                            <form onSubmit={handleRegister}>
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
                            onClick={onEventRegisterModalClose}
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
