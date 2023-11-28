import {
  Button,
  Card,
  CardHeader,
  Container,
  FormControl,
  Input,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { register } from "../../services/auth-service";
// import GlobalLoading from "../../components/Navbar/GlobalLoading";
import { IoIosArrowBack } from "react-icons/io";
export default function Register() {
  const [registerCredentials, setRegisterCredentials] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegisterCredentials((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="photo-gallery-parent-container">
        <div className="photo-gallery-navbar">
          <div
            className="photo-gallery-back-button"
            onClick={() => navigate(`/`)}
          >
            <IoIosArrowBack />
            Back
          </div>
        </div>
        <Container maxWidth="100%" padding={0} paddingBottom={20}>
          <Stack alignItems={"center"} marginTop={10}>
            <Card
              shadow={"md"}
              width={{
                base: "100%",
                md: "70%",
                lg: "60%",
                xl: "40%"
              }}
              align="flex-start"
              bg="white"
            >
              <VStack width="100%" maxWidth={"100%"}>
                <Container
                  padding={"0px 10px 0px 10px"}
                  width={"70%"}
                  style={{
                    maxW: "100%",
                    backgroundColor: "white"
                  }}
                  borderRadius={12}
                >
                  <CardHeader>
                    <Text
                      fontSize="30px"
                      textAlign={"center"}
                      color="#1c4980"
                      size="lg"
                    >
                      <b>Register</b>
                    </Text>
                  </CardHeader>
                  <form onSubmit={handleRegister}>
                    <VStack w="full" bg="white" p={6} spacing={5}>
                      <VStack
                        w="full"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Text fontSize={14} align="left">
                          Name
                        </Text>
                        <FormControl>
                          <Input
                            name="name"
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
                          Email address
                        </Text>
                        <FormControl>
                          <Input
                            name="email"
                            type="email"
                            pr="4.5rem"
                            variant="outline"
                            placeholder="Enter Email Address"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>

                      {/* <VStack w="full" bg="white" p={6} spacing={5}> */}
                      <VStack
                        w="full"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Text fontSize={14} align="left">
                          College/University Name
                        </Text>
                        <FormControl>
                          <Input
                            name="cuname"
                            type="text"
                            pr="4.5rem"
                            variant="outline"
                            placeholder="Enter College/University Name"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>

                      {/* <VStack w="full" bg="white" p={6} spacing={5}> */}
                      <VStack
                        w="full"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Text fontSize={14} align="left">
                          Date of Birth
                        </Text>
                        <FormControl>
                          <Input
                            name="dob"
                            type="date"
                            pr="4.5rem"
                            variant="outline"
                            placeholder="Date of Birth"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>

                      {/* <VStack w="full" bg="white" p={6} spacing={5}> */}
                      <VStack
                        w="full"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Text fontSize={14} align="left">
                          Present college year
                        </Text>
                        <FormControl>
                          <Input
                            name="yr"
                            type="number"
                            pr="4.5rem"
                            variant="outline"
                            placeholder="Enter Present college year"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>

                      <Button
                        colorScheme="blue"
                        variant="solid"
                        type="submit"
                        onClick={() => {
                          alert("Coming Soon!");
                        }}
                      >
                        Register
                      </Button>
                    </VStack>
                  </form>
                </Container>
              </VStack>
            </Card>
          </Stack>
        </Container>
      </div>
    </>
  );
}
