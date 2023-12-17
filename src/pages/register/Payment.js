import {
    Button,
    Container,
    Divider,
    FormControl,
    FormErrorMessage,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tr,
    VStack,
    useToast
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CloseButton } from "@chakra-ui/react";
import "./EventCard.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { cz } from "../../firebase";
import { registerEvent } from "../../service/eventRegistrationService";
import { IoReceipt } from "react-icons/io5";
export default function Payment(props) {
    const [eventTransactionId, setEventTransactionId] = useState({
        transactionId: ""
    });

    const [newImage, setNewImage] = useState("");
    const [base64, setBase64] = useState("");

    const [load, setLoad] = useState(false);
    const [transactionError, setTransactionError] = useState({ transactionIdError: "", photoProofError: "" });
    const note1 = `Make a payment of ₹${props.price} to above mentioned bank details. After payment, please enter transaction ID and attach the screenshot of your payment so our coordinators can verify it. Then click the button below for submission. Our coordinators will contact you shortly`;
    const note2 = `Please wait a moment for your proof to upload, depending on your internet connection.`;

    const fireUpload = async (file) => {
        if (!file) {
            console.error("No image selected for upload");
            return;
        }
        const uniqueTransactionId = eventTransactionId.transactionId;
        const uniqueEmail = props.eventRegisterCredentials.participant0.email;

        const fileExtension = file.name && file.name.split(".").pop().toLowerCase();

        const fileName = `image_${uniqueEmail}_${uniqueTransactionId}.${fileExtension}`;

        const imgRef = ref(cz, `cz/${fileName}`);

        const contentType = `image/${fileExtension}`;

        const metadata = { contentType };

        await uploadBytes(imgRef, file, metadata);
        try {
            const data = await getDownloadURL(imgRef);
            console.log(data);
            setNewImage(data);
            return data;
            // console.log(data);
            // console.log("Image uploaded Successfully");
        } catch (e) {
            console.log(e);
        }
    };
    const toast = useToast();

    const handleRegister = async (e) => {
        if (handleBlur()) {
            setLoad(true);
            e.preventDefault();

            const data = await fireUpload(transactionProof);

            console.log("newImage", data);

            let eventData = {
                id: props.eventId,
                eventType: props.eventType,
                eventTitle: props.eventName,
                isMusicalNight: props.isMusicalNight ? true : false,
                eventFees: props.price,
                eventParticipantInfo: props.eventRegisterCredentials,
                eventIsAccomodationNeeded: props.isAccomodationNeeded,
                transactionId: eventTransactionId.transactionId,
                eventTransactionImage: data
            };

            let response = await registerEvent(eventData);

            if (!response?.isAuthenticated) {
                sessionStorage.removeItem("token");
                toast({
                    description: "Please login again",
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                props.onClose();
                setLoad(false);
                return;
            }
            if (!response?.isUserExist) {
                toast({
                    description: "User does not exist",
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                props.onClose();
                setLoad(false);
                return;
            }
            if (!response?.isEventRegistered) {
                toast({
                    description: response.message,
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                props.onClose();
                setLoad(false);
                return;
            }
            if (response?.isEventRegistered) {
                toast({
                    description: response.message,
                    status: "success",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                props.onClose();
                setLoad(false);
            }
        } else {
            toast({
                description: "Error registering event",
                status: "error",
                duration: 5000,
                position: "top",
                isClosable: true
            });
        }
        setLoad(false);
    };

    const [transactionProof, setTransactionProof] = useState(null);

    const handlefileChange = async (e) => {
        const file = e.target.files[0];
        if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg") {
            e.target.value = "";
            setTransactionError({ ...transactionError, photoProofError: "Only Images are allowed" });
        } else {
            setTransactionError({ ...transactionError, photoProofError: "" });
            const base = await convert64(file);
            setBase64(base);
        }
        setTransactionProof(file);
    };

    console.log(transactionProof);
    const handleChange = (e) => {
        const name = e.target.name;

        if (name === "transactionId") {
            const value = e.target.value;
            setEventTransactionId((values) => ({
                ...values,
                transactionId: value
            }));
        }
    };

    const handleBlur = () => {
        let flag = true;
        let error = {};
        if (!eventTransactionId.transactionId.trim()) {
            error = {
                ...error,
                transactionIdError: "Transaction Id is require"
            };
            flag = false;
        } else {
            error = {
                ...error,
                transactionIdError: ""
            };
        }
        if (!base64.trim()) {
            error = {
                ...error,
                photoProofError: "Photo proof is require"
            };
            flag = false;
        } else {
            error = {
                ...error,
                photoProofError: ""
            };
        }
        setTransactionError({ ...transactionError, ...error });
        if (flag) return true;
        else return false;
    };

    const convert64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div
                style={{
                    borderRadius: "10px",
                    backgroundColor: "#ffbc1d",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        marginBottom: "10px",
                        textAlign: "center"
                    }}
                >
                    Note
                </div>
                <Divider />
                <Text
                    fontSize={{ base: "15px", md: "20px" }}
                    style={{
                        marginTop: "10px",

                        textAlign: "center"
                    }}
                >
                    {note1}
                </Text>
            </div>
            <div
                style={{
                    marginTop: "20px",
                    border: "2px solid #f0f0f0",
                    borderRadius: "10px",
                    padding: "5px",
                    paddingTop: "10px",
                    paddingBottom: "20px"
                }}
            >
                <div
                    style={{
                        padding: "5px",
                        fontSize: "30px",
                        fontWeight: "600",
                        textAlign: "center"
                    }}
                >
                    Account Details
                    <Divider />
                </div>
                <div>
                    <Table variant={"simple"} style={{ minWidth: "100%" }}>
                        <Tbody>
                            <Tr>
                                <Td>Bank A/c Name</Td>
                                <Td>Chandubhai S. Patel Institute of Technology</Td>
                            </Tr>
                            <Tr>
                                <Td>Bank A/c Number</Td>
                                <Td>30762646817</Td>
                            </Tr>
                            <Tr>
                                <Td>Bank A/c Type</Td>
                                <Td>Current A/C</Td>
                            </Tr>
                            <Tr>
                                <Td>Bank Branch Code</Td>
                                <Td>10961</Td>
                            </Tr>
                            <Tr>
                                <Td> Bank IFSC Code</Td>
                                <Td>SBIN0010961</Td>
                            </Tr>
                            <Tr>
                                <Td>Bank MICR Code</Td>
                                <Td>388002502</Td>
                            </Tr>
                            <Tr>
                                <Td>Bank Branch Address</Td>
                                <Td>Darshan Hostel, Changa-Valetla Road, Changa. Dist. Anand</Td>
                            </Tr>
                            {/* <Tr>
                                <Td>Transaction Id</Td>
                                <Td>
                                    <FormControl isInvalid={!!transactionError.transactionIdError}>
                                        <Input
                                            name="transactionId"
                                            type="text"
                                            fontSize={15}
                                            pr="4.5rem"
                                            variant="outline"
                                            placeholder="Enter Transaction Id"
                                            onChange={handleChange}
                                        />
                                        <FormErrorMessage>{transactionError.transactionIdError}</FormErrorMessage>
                                    </FormControl>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Photo Proof</Td>
                                <Td>
                                    {base64 ? (
                                        <div
                                            style={{
                                                width: "80%",
                                                padding: "1.03125rem .875rem",
                                                border: "1px solid #999",
                                                borderRadius: ".3rem",
                                                display: "flex",
                                                gap: "2rem",
                                                color: "black",
                                                alignItems: "center"
                                            }}
                                        >
                                            <img
                                                src={base64}
                                                alt="cover"
                                                style={{
                                                    width: "150px",
                                                    objectFit: "cover"
                                                }}
                                            />
                                            <span
                                                onClick={() => {
                                                    setBase64("");
                                                }}
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                X
                                            </span>
                                        </div>
                                    ) : (
                                        <FormControl isInvalid={!!transactionError.photoProofError}>
                                            <input
                                                name="photoProof"
                                                accept="image/*"
                                                type="file"
                                                fontSize={15}
                                                pr="4.5rem"
                                                variant="outline"
                                                // onBlur={handleBlur}
                                                onChange={handlefileChange}
                                            />
                                            <FormErrorMessage>{transactionError.photoProofError}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Td>
                            </Tr> */}
                        </Tbody>
                    </Table>
                </div>
            </div>
            <div
                style={{
                    marginTop: "20px",
                    border: "2px solid #f0f0f0",
                    borderRadius: "10px",
                    padding: "5px",
                    paddingTop: "10px",
                    paddingBottom: "20px"
                }}
            >
                <div
                    style={{
                        padding: "5px",
                        fontSize: "30px",
                        fontWeight: "600",
                        textAlign: "center"
                    }}
                >
                    Payment Proof
                    <Divider />
                </div>
                <Container maxWidth={"100%"} padding={{ base: 3, md: 5 }}>
                    <Container display={"flex"} flexDirection={"column"} gap={5}>
                        <Container
                            display={"flex"}
                            alignItems={"left"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            gap={1}
                        >
                            <Text>Transaction Id</Text>
                            <Container padding={0} margin={0}>
                                <FormControl isInvalid={!!transactionError.transactionIdError}>
                                    <Input
                                        name="transactionId"
                                        type="text"
                                        fontSize={15}
                                        variant="outline"
                                        placeholder="Enter Transaction Id"
                                        onChange={handleChange}
                                    />
                                    <FormErrorMessage>{transactionError.transactionIdError}</FormErrorMessage>
                                </FormControl>
                            </Container>
                        </Container>
                        <Container
                            flex={{ base: 1, md: 1 }}
                            display={"flex"}
                            alignItems={"left"}
                            justifyContent={"center"}
                            flexDirection={"column"}
                            gap={1}
                        >
                            <Text>Transaction Receipt</Text>
                            <Container padding={0} margin={0}>
                                {base64 ? (
                                    <div
                                        style={{
                                            width: "100%",
                                            padding: "5px",
                                            border: "1px solid #f0f0f0",
                                            borderRadius: ".3rem",
                                            display: "flex",
                                            gap: "1rem",
                                            color: "black",
                                            alignItems: "center"
                                        }}
                                    >
                                        <img
                                            src={base64}
                                            alt="cover"
                                            style={{
                                                maxWidth: "200px",
                                                width: "100%",
                                                objectFit: "cover",
                                                border: "2px solid #f0f0f0"
                                            }}
                                        />
                                        <span
                                            onClick={() => {
                                                setBase64("");
                                            }}
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "1.2rem",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <CloseButton />
                                        </span>
                                    </div>
                                ) : (
                                    <FormControl isInvalid={!!transactionError.photoProofError}>
                                        <input
                                            name="photoProof"
                                            accept="image/*"
                                            type="file"
                                            style={{ fontSize: "12px", border: "2px solid #f0f0f0" }}
                                            onChange={handlefileChange}
                                        />
                                        <FormErrorMessage>{transactionError.photoProofError}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        marginTop: "20px"
                    }}
                >
                    <Button
                        rightIcon={<IoReceipt />}
                        isLoading={load}
                        colorScheme="blue"
                        color={"white"}
                        onClick={handleRegister}
                        loadingText="Processing"
                        style={{ width: "100%", maxWidth: "400px" }}
                    >
                        Submit Payment
                    </Button>
                </div>
                <div
                    style={{
                        marginTop: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#ffbc1d",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Text
                        fontSize={{ base: "15px", md: "20px" }}
                        style={{
                            textAlign: "center"
                        }}
                    >
                        <span
                            style={{
                                fontWeight: "500"
                            }}
                        >
                            Note:
                        </span>{" "}
                        {note2}
                    </Text>
                </div>
            </div>
        </div>
    );
}
