import React, { useEffect, useState } from "react";
import {
    Container,
    Divider,
    Text,
    useToast,
    Box,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Heading
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./pages/photoGallery/PhotoGallery.css";
import { getRegisterCountService } from "./service/publicService";

export default function AdminLogin(props) {
    const toast = useToast();
    const navigate = useNavigate();
    const usernameEnv = process.env.REACT_APP_USER_NAME;
    const passwordEnv = process.env.REACT_APP_USER_PASSWORD;

    const [showPassword, setShowPassword] = useState(false);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const authenticateUser = (username, password) => {
        if (username === usernameEnv && password === passwordEnv) {
            props.setIsAdmin(true);
        } else {
            toast({
                title: "Authentication Failed",
                description: "Please enter a valid username and password.",
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true
            });
            props.setIsAdmin(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = () => {
        if (credentials.username.trim() !== "" && credentials.password.trim() !== "") {
            authenticateUser(credentials.username, credentials.password);
        } else {
            toast({
                title: "Authentication Failed",
                description: "Please enter a valid username and password.",
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true
            });
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div className="photo-gallery-back-button" onClick={() => navigate(`/`)}>
                        <IoIosArrowBack />
                        Back
                    </div>
                </div>
                <Container
                    maxW={"100%"}
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Box
                        maxWidth={"90%"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        mt={6}
                        padding={{ base: "20px", md: "70px" }}
                        borderRadius={"30px"}
                        backgroundColor={"rgba(0, 0, 0, 0.442)"}
                    >
                        <Heading mt={0} color={"white"} textAlign="center">
                            Welcome
                        </Heading>
                        <Divider />
                        <Box
                            maxW={"100%"}
                            w={"300px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            mt={10}
                        >
                            <FormControl>
                                <Text color={"white"}>Username:</Text>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={credentials.username}
                                    onChange={handleChange}
                                    variant={"outline"}
                                    textColor={"white"}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Text color={"white"}>Password:</Text>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        variant={"outline"}
                                        textColor={"white"}
                                    />
                                    <InputRightElement>
                                        <Button
                                            variant={"unstyled"}
                                            backgroundColor={"transparent"}
                                            color={"white"}
                                            size="sm"
                                            onClick={handleTogglePassword}
                                            textAlign={"center"}
                                            alignItems={"center"}
                                            display={"flex"}
                                            justifyContent={"center"}
                                        >
                                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button width={"200px"} mt={6} onClick={handleLogin}>
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    );
}
