import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Container,
    Divider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    HStack,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Spinner,
    StackDivider,
    Text,
    VStack,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { isProfileUpdatedAPI, login, updateProfileAPI } from "../../../service/authService";
import Payment from "../Payment";

const EditProfile = (props) => {
    const {
        isOpen: isEditProfileModalOpen,
        onOpen: onEditProfileModalOpen,
        onClose: onEditProfileModalClose
    } = useDisclosure();
    const {
        isOpen: isEventRegisterModalOpen,
        onOpen: onEventRegisterModalOpen,
        onClose: onEventRegisterModalClose
    } = useDisclosure();
    const teamSize = typeof props.teamSize === "string" ? undefined : props.teamSize;
    const isAccomodationNeeded = props.isAccomodationNeeded ? true : false;
    const [registerCredentials, setRegisterCredentials] = useState({
        name: "",
        universityName: "",
        mobileNumber: ""
    });

    const [userData, setUserData] = useState({});
    const [eventRegisterCredentials, setEventRegisterCredentials] = useState({
        teamSize: teamSize
    });
    const [eventRegisterCredAcco, setEventRegisterCredAcco] = useState({
        isAccomodationNeeded: isAccomodationNeeded
    });
    // const [eventRegistrationErrors, setEventRegistrationErrors] = useState({});
    const [profileError, setProfileErrors] = useState({});
    const [isProfileUpdated, setIsProfileUpdated] = useState(false);

    // let accomodationNote = By checking this you agree that you need accomodation for the event <b>${props.eventName}</b> at Charusat campus.

    const handleRegister = async (event) => {
        // setIsLoading(true);
        // event.preventDefault();
        // console.log(registerCredentials);
        if (validateRegisterCredentials()) {
            let response = await updateProfileAPI(
                registerCredentials.mobileNumber,
                registerCredentials.universityName,
                registerCredentials.year
            );
            // console.log(response);
            if (response?.isProfileUpdated) {
                setIsProfileUpdated(true);
                onEditProfileModalClose();
                onEventRegisterModalOpen();
                setIsLoading(false);
            }
        }
    };

    const validateRegisterCredentials = () => {
        console.log(registerCredentials);
        let errors = {};
        let flag = true;
        //name error
        if (!registerCredentials.name.trim()) {
            errors.name = "Name is required";
            flag = false;
        } else if (!/^[A-Za-z ]+$/.test(registerCredentials.name.toLowerCase().trim())) {
            errors.name = "Name must be Alphabets";
            flag = false;
        } else {
            errors.name = "";
        }

        //University Name error
        if (!registerCredentials.universityName.trim()) {
            errors.universityName = "University name is required";
        } else if (!/^[a-z &,.'#-]+$/.test(registerCredentials.universityName.toLowerCase().trim())) {
            errors.universityName = "University name must be Alphabets";
            flag = false;
        } else {
            errors.universityName = "";
        }

        // mobileNumber error
        if (!registerCredentials.mobileNumber.trim()) {
            errors.mobileNumber = "Mobile number is require";
            flag = false;
        } else if (registerCredentials.mobileNumber.length > 10 || registerCredentials.mobileNumber.length < 10) {
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
    // console.log(profileError);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.trim();
        setRegisterCredentials((values) => ({
            ...values,
            [name]: value
        }));
    };
    const toast = useToast();

    const handleRegisterEvent = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (validateRegisterEventCredentials()) {
            // console.log(eventRegisterCredentials);
            if (!sessionStorage.getItem("token")) {
                // alert("Please Login First to Register for any event!");
                toast({
                    title: "Authentication Failed",
                    description: "Please Login First to Register for any event!",
                    status: "warning",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                GAuth();
            }
            let eventData = {
                id: props.eventId,
                eventType: props.eventType,
                eventTitle: props.eventName,
                isMusicalNight: props.isMusicalNight ? true : false,
                isCombo: props.addEventModal ? true : false,
                // eventDate: "",
                // eventLocation: "",
                eventFees: props.price,
                eventParticipantInfo: eventRegisterCredentials,
                eventIsAccomodationNeeded: eventRegisterCredAcco.isAccomodationNeeded
            };
            // console.log(eventData.eventParticipantInfo);
            // let response = await registerEvent(eventData);
            // // console.log(response);
            // if (!response?.isAuthenticated) {
            //     sessionStorage.removeItem("token");
            //     alert("Please Login First to Register for any event!");
            //     setIsLoading(false);
            //     return;
            // }
            // if (!response?.isUserExist) {
            //     alert("User Does Not Exist");
            //     setIsLoading(false);
            //     return;
            // }
            // if (!response?.isEventRegistered) {
            //     alert(response.msg);
            //     setIsLoading(false);
            //     return;
            // }
            // if (response?.isEventRegistered) {
            //     if (props.addEventModal) {
            //         props.handleRegisterTeam();
            //         onEventRegisterModalClose();
            // } else setIsPaymentModalOpen(true);
            //     setIsLoading(false);
            // }
            setIsPaymentModalOpen(true);
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    const [errorForRegisterForm, setErrorForRegisterForm] = useState({
        errors: {}
    });
    // console.log(eventRegisterCredentials);
    // console.log(eventRegisterCredAcco);
    const validateRegisterEventCredentials = () => {
        let errors = {};
        let isValid = true;
        if (typeof props.teamSize === "string") {
            if (!eventRegisterCredentials?.teamSize) {
                errors[`teamSize`] = {
                    ...errors[`teamSize`],
                    teamSize: ""
                };
                isValid = false;
            } else {
                errors[`teamSize`] = {
                    ...errors[`teamSize`],
                    teamSize: ""
                };
            }
        }
        if (eventRegisterCredentials?.teamSize > 1) {
            if (!eventRegisterCredentials?.teamName) {
                errors[`teamName`] = {
                    ...errors[`teamName`],
                    teamName: "Team name is rquired"
                };
                isValid = false;
            } else {
                errors[`teamName`] = {
                    ...errors[`teamName`],
                    teamName: ""
                };
            }
        }
        for (let i = 0; i < eventRegisterCredentials.teamSize; i++) {
            if (!eventRegisterCredentials[`participant${i}`]?.name.trim()) {
                errors[`participant${i}`] = {
                    ...errors[`participant${i}`],
                    name: "Name is required"
                };
                isValid = false;
            } else if (!/^[A-Za-z ]+$/.test(eventRegisterCredentials[`participant${i}`]?.name)) {
                errors[`participant${i}`] = {
                    ...errors[`participant${i}`],
                    name: "Name must be alphabets"
                };
                isValid = false;
            } else {
                errors[`participant${i}`] = {
                    ...errors[`participant${i}`],
                    name: ""
                };
            }
        }
        setErrorForRegisterForm((value) => {
            return {
                ...value,
                errors
            };
        });
        if (isValid) {
            setErrorForRegisterForm({
                errors: {}
            });
        }
        // console.log(errors);
        return isValid;
    };

    // console.log(errorForRegisterForm);
    const handleChangeEvent = (event, index) => {
        const name = event.target.name;
        if (name === "teamName") {
            const value = event.target.value;
            setEventRegisterCredentials((values) => ({
                ...values,
                [name]: value
            }));
        } else if (name === "teamSize") {
            const value = event.target.value;
            setEventRegisterCredentials((values) => ({
                ...values,
                [name]: parseInt(value)
            }));
        } else if (name === "checkbox") {
            const value = event.target.checked;
            setEventRegisterCredAcco((values) => ({
                ...values,
                // checkAcc: value,
                isAccomodationNeeded: value
            }));
        } else {
            const value = event.target.value;
            setEventRegisterCredentials((values) => ({
                ...values,
                [`participant${index}`]: {
                    ...values[`participant${index}`],
                    [name]: value
                }
            }));
        }
    };

    const isProfileUpdatedRequest = async () => {
        setIsLoading(true);
        let response = await isProfileUpdatedAPI();
        // console.log(response);
        if (!response?.isAuthenticated) {
            sessionStorage.removeItem("token");
            setIsLoading(false);
            return false;
        }
        setIsProfileUpdated(response?.isProfileUpdated);
        setUserData(response?.userData);
        setEventRegisterCredentials({
            ...eventRegisterCredentials,
            participant0: {
                name: response.userData.name,
                email: response.userData.email,
                mobileNumber: response.userData.mobileNumber
            }
        });
        setIsLoading(false);
        return response?.isProfileUpdated;
    };
    const GAuth = useGoogleLogin({
        clientId: process.env.REACT_APP_CLIENT_ID,
        flow: "implicit",
        onSuccess: async (credentialResponse) => {
            // console.log(credentialResponse);
            sessionStorage.setItem("token", "Bearer " + credentialResponse.access_token);
            let response = await login();
            // console.log(response);
            setIsLoading(true);
            if (!response?.isAuthenticated) {
                // console.log(response.message);
                sessionStorage.removeItem("token");
                setIsLoading(false);
            } else {
                if (isProfileUpdated || (await isProfileUpdatedRequest())) {
                    // Call For Register Modal
                    // console.log("REGISTER MODAL");
                    onEventRegisterModalOpen();
                    setIsLoading(false);
                } else {
                    // Call For Profile Modal
                    if (!sessionStorage.getItem("token")) {
                        GAuth();
                        return;
                    }
                    // console.log("PROFILE MODAL");
                    onEditProfileModalOpen();
                    setIsLoading(false);
                }
            }
        },
        onError: () => {
            // console.log("Login Failed");
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const participantsField = [];
    for (let i = 0; i < props.teamSize; i++) {
        participantsField.push(
            <VStack w="full" spacing={2} alignItems="flex-start" key={i} paddingBottom={5}>
                <Text fontSize={16} align="left" fontWeight={500}>
                    {i === 0 ? `Enter Participant ${i + 1} Name (Your Name)` : `Enter Participant ${i + 1} Name`}
                </Text>
                <FormControl isInvalid={!!errorForRegisterForm.errors[`participant${i}`]?.name}>
                    <Input
                        name="name"
                        type="text"
                        pr="4.5rem"
                        fontSize={15}
                        variant="outline"
                        value={i === 0 ? eventRegisterCredentials?.participant0?.name : undefined}
                        placeholder={i === 0 ? "Enter Your Name" : `Enter Participant${i + 1}'s Name`}
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                    <FormErrorMessage>{errorForRegisterForm.errors[`participant${i}`]?.name}</FormErrorMessage>
                </FormControl>
                {/* <FormControl>
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
                        value={
                            i === 0
                                ? eventRegisterCredentials?.participant0?.email
                                : undefined
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
                        value={
                            i === 0
                                ? eventRegisterCredentials?.participant0
                                      ?.mobileNumber
                                : undefined
                        }
                        onChange={(event) => {
                            handleChangeEvent(event, i);
                        }}
                    />
                </FormControl> */}
            </VStack>
        );
    }

    const optoinList = [];
    const dynParticipantsField = [];
    if (typeof props.teamSize === "string") {
        const ts = props.teamSize.split("-").pop();
        for (let i = 0; i < ts; i++) {
            optoinList.push(<option value={i + 1}>{i + 1}</option>);
        }

        for (let i = 0; i < eventRegisterCredentials.teamSize; i++) {
            // console.log("123");
            dynParticipantsField.push(
                <VStack w="full" spacing={2} alignItems="flex-start" key={i} paddingBottom={5}>
                    <Text fontSize={16} align="left" fontWeight={500}>
                        {i === 0 ? `Enter Participant ${i + 1} Name (Your Name)` : `Enter Participant ${i + 1} Name`}
                    </Text>
                    <FormControl isInvalid={!!errorForRegisterForm.errors[`participant${i}`]?.name}>
                        <Input
                            name="name"
                            type="text"
                            pr="4.5rem"
                            fontSize={15}
                            variant="outline"
                            placeholder={i === 0 ? "Enter Your Name" : `Enter Participant${i + 1}'s Name`}
                            value={i === 0 ? eventRegisterCredentials?.participant0?.name : undefined}
                            onChange={(event) => {
                                handleChangeEvent(event, i);
                            }}
                        />
                        <FormErrorMessage>{errorForRegisterForm.errors[`participant${i}`]?.name}</FormErrorMessage>
                    </FormControl>
                    {/* <FormControl>
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
                            value={i === 0 ? userData?.email : undefined}
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
                            value={i === 0 ? userData?.mobileNumber : undefined}
                            onChange={(event) => {
                                handleChangeEvent(event, i);
                            }}
                        />
                    </FormControl> */}
                </VStack>
            );
        }
    }

    return (
        <>
            {props.eventName !== "Musical Night" && (
                <Button
                    backgroundColor="#54cadd"
                    color={"black"}
                    onClick={async () => {
                        if (sessionStorage.getItem("token") !== null) {
                            setIsLoading(true);
                            if (isProfileUpdated || (await isProfileUpdatedRequest())) {
                                // Call For Register Modal
                                // console.log("REGISTER MODAL");
                                onEventRegisterModalOpen();
                                setIsLoading(false);
                            } else {
                                // Call For Profile Modal
                                if (!sessionStorage.getItem("token")) {
                                    GAuth();
                                    return;
                                }
                                // console.log("PROFILE MODAL");
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
            )}
            {isLoading ? (
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "fixed",
                        left: "0",
                        top: "0",
                        zIndex: "100",
                        backgroundColor: "rgba(0,0,0,0.5)"
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
                            zIndex: "100"
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

                        <ModalContent bg="white" p={10} paddingBottom={10} overflowY={"hidden"}>
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
                                            <VStack w="full" spacing={2} alignItems="flex-start">
                                                <Text fontSize={14} align="left">
                                                    Name
                                                </Text>
                                                <FormControl>
                                                    <Input
                                                        isInvalid={profileError.name}
                                                        name="name"
                                                        type="text"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter Name"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.name ? (
                                                        <FormHelperText color={"#e74d4d"} fontSize={13}>
                                                            {" "}
                                                            {profileError.name}{" "}
                                                        </FormHelperText>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </FormControl>
                                            </VStack>

                                            <VStack w="full" spacing={2} alignItems="flex-start">
                                                <Text fontSize={14} align="left">
                                                    University Name
                                                </Text>
                                                <FormControl>
                                                    <Input
                                                        isInvalid={profileError.universityName}
                                                        name="universityName"
                                                        type="text"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter University Name"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.universityName ? (
                                                        <FormHelperText color={"#e74d4d"} fontSize={13}>
                                                            {" "}
                                                            {profileError.universityName}
                                                        </FormHelperText>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </FormControl>
                                            </VStack>

                                            <VStack w="full" spacing={2} alignItems="flex-start">
                                                <Text fontSize={14} align="left">
                                                    Mobile Number
                                                </Text>
                                                <FormControl>
                                                    <Input
                                                        maxLength={10}
                                                        isInvalid={profileError.mobileNumber}
                                                        name="mobileNumber"
                                                        type="number"
                                                        pr="4.5rem"
                                                        variant="outline"
                                                        placeholder="Enter Mobile Number"
                                                        onChange={handleChange}
                                                    />
                                                    {profileError.mobileNumber ? (
                                                        <FormHelperText color={"#e74d4d"} fontSize={13}>
                                                            {" "}
                                                            {profileError.mobileNumber}{" "}
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
                                <Button colorScheme="blue" mr={3} onClick={handleRegister}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    {/* registrationf form and payment model */}
                    <Modal
                        className="event-registration-general-modal"
                        isOpen={isEventRegisterModalOpen && !isLoading}
                        onClose={onEventRegisterModalClose}
                        size={"6xl"}
                        closeOnOverlayClick={false}
                        isCentered
                        scrollBehavior="inside"
                    >
                        <ModalOverlay />
                        <ModalContent
                            bg="white"
                            p={{ base: "0", md: "10" }}
                            paddingBottom={20}
                            h={{ base: "unset", md: "80%" }}
                            maxHeight={{ base: "90vh", md: "100vh" }}
                            overflowY={"auto"}
                            className="event-registration-modal event-registration-description"
                        >
                            <ModalHeader>
                                <Heading as="h1" size={"lg"} maxWidth={"70%"}>
                                    Registration | {props.eventName} | ₹{props.price}/-
                                </Heading>
                                <Divider marginTop={"3px"} />
                            </ModalHeader>

                            <ModalCloseButton
                                padding={6}
                                color={"black"}
                                borderRadius={"100%"}
                                backgroundColor={"#f0f0f0"}
                                fontSize={{ base: "15px", md: "20px" }}
                            />

                            <ModalBody maxWidth={{ base: "100%" }}>
                                {props.addEventModal || !isPaymentModalOpen ? (
                                    <Box padding={0} margin={0}>
                                        <HStack
                                            padding={0}
                                            margin={0}
                                            spacing={10}
                                            divider={<StackDivider borderColor="gray.200" />}
                                            justifyContent={{
                                                base: "center",
                                                md: "space-between"
                                            }}
                                            flexDirection={{
                                                base: "column",
                                                md: "row"
                                            }}
                                            gap={{ base: "10px", md: "2px" }}
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                padding={0}
                                                margin={0}
                                                w={{ base: "100%", md: "auto" }}
                                            >
                                                <Image
                                                    src={props.image}
                                                    alt="Image"
                                                    style={{
                                                        width: "300px",
                                                        aspectRatio: "1/1",
                                                        objectFit: "contain",
                                                        borderColor: "gray",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                                            </Box>
                                            <Container
                                                className="event-registration-description"
                                                display={"flex"}
                                                flex="2"
                                                padding={0}
                                                margin={0}
                                                flexDirection="column"
                                                maxHeight={{
                                                    base: "fit-content",
                                                    md: "unset"
                                                }}
                                                overflow={"auto"}
                                            >
                                                <form style={{}} onSubmit={handleRegisterEvent}>
                                                    <VStack w="full" bg="white" p={2} spacing={5}>
                                                        {typeof props.teamSize === "string" ? (
                                                            <>
                                                                <FormControl>
                                                                    <Select
                                                                        variant="outline"
                                                                        name="teamSize"
                                                                        placeholder="Select Team Size"
                                                                        onChange={handleChangeEvent}
                                                                        value={eventRegisterCredentials.teamSize}
                                                                    >
                                                                        {optoinList}
                                                                    </Select>
                                                                </FormControl>
                                                                {eventRegisterCredentials?.teamSize > 1 ? (
                                                                    <VStack
                                                                        w="full"
                                                                        spacing={2}
                                                                        alignItems="flex-start"
                                                                        paddingBottom={5}
                                                                    >
                                                                        <Text
                                                                            fontSize={16}
                                                                            align="left"
                                                                            fontWeight={500}
                                                                        >
                                                                            Team Name
                                                                        </Text>
                                                                        <FormControl
                                                                            isInvalid={
                                                                                !!errorForRegisterForm.errors?.teamName
                                                                                    ?.teamName
                                                                            }
                                                                        >
                                                                            <Input
                                                                                name="teamName"
                                                                                type="text"
                                                                                fontSize={15}
                                                                                pr="4.5rem"
                                                                                variant="outline"
                                                                                placeholder="Enter Team Name"
                                                                                onChange={handleChangeEvent}
                                                                            />
                                                                            <FormErrorMessage>
                                                                                {
                                                                                    errorForRegisterForm.errors
                                                                                        ?.teamName?.teamName
                                                                                }
                                                                            </FormErrorMessage>
                                                                        </FormControl>
                                                                    </VStack>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {dynParticipantsField}
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        {(props.teamSize > 1) &
                                                            (typeof props.teamSize === "number") && (
                                                            <VStack
                                                                w="full"
                                                                spacing={2}
                                                                alignItems="flex-start"
                                                                paddingBottom={5}
                                                            >
                                                                <Text fontSize={16} align="left" fontWeight={500}>
                                                                    Team Name
                                                                </Text>
                                                                <FormControl
                                                                    isInvalid={
                                                                        !!errorForRegisterForm.errors?.teamName
                                                                            ?.teamName
                                                                    }
                                                                >
                                                                    <Input
                                                                        name="teamName"
                                                                        type="text"
                                                                        fontSize={15}
                                                                        pr="4.5rem"
                                                                        variant="outline"
                                                                        placeholder="Enter Team Name"
                                                                        onChange={handleChangeEvent}
                                                                    />
                                                                    <FormErrorMessage>
                                                                        {
                                                                            errorForRegisterForm.errors?.teamName
                                                                                ?.teamName
                                                                        }
                                                                    </FormErrorMessage>
                                                                </FormControl>
                                                            </VStack>
                                                        )}

                                                        {typeof props.teamSize === "number" && participantsField}

                                                        <CheckboxGroup>
                                                            <Checkbox onChange={handleChangeEvent} name="checkbox">
                                                                By checking this you agree that you need accomodation
                                                                for the event <b>{props.eventName}</b> at Charusat
                                                                campus.
                                                            </Checkbox>
                                                        </CheckboxGroup>

                                                        <VStack>
                                                            <Button
                                                                colorScheme="blue"
                                                                mr={3}
                                                                onClick={handleRegisterEvent}
                                                            >
                                                                Next
                                                            </Button>
                                                        </VStack>
                                                    </VStack>
                                                </form>
                                            </Container>
                                        </HStack>
                                    </Box>
                                ) : (
                                    <Payment
                                        price={props.price}
                                        eventId={props.eventId}
                                        eventType={props.eventType}
                                        eventName={props.eventName}
                                        isMusicalNight={props.isMusicalNight}
                                        isAccomodationNeeded={eventRegisterCredAcco.isAccomodationNeeded}
                                        eventRegisterCredentials={eventRegisterCredentials}
                                        onClose={onEventRegisterModalClose}
                                    />
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
