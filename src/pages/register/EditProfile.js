import React,{ useState }  from 'react'
import {  Button,
    Modal,
    Card,
    CardHeader,
    Container,
    FormControl,
    Input,
    Stack,
    Text,
    useDisclosure,
    VStack} from "@chakra-ui/react";

const EditProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleRegister = async (event) => {
        event.preventDefault();
      };
    
    const [registerCredentials, setRegisterCredentials] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterCredentials((values) => ({
          ...values,
          [name]: value
        }));
      };
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
     isCentered>
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
                      <b>Profile</b>
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
                    </VStack>
                  </form>
                </Container>
              </VStack>
            </Card>
          </Stack>
        </Container>
        </Modal>
    </>
  )
}

export default EditProfile