import { Button, FormControl, FormErrorMessage, Input, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./EventCard.css";
// import transaction from "../../assets/transaction.jpg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { cz } from "../../firebase";
import { registerEvent } from "../../service/eventRegistrationService";

export default function Payment(props) {
    let transactionId = "";
    const [eventTransactionId, setEventTransactionId] = useState({
        transactionId: transactionId
    });
    // const imgRef = useRef()
    const [selectedImage, setSelectedImage] = useState(null);
    const [newImage, setNewImage] = useState();
    const [temp, setTemp] = useState();
    // const [selectedFile, setSelectedFile] = useState(null);
    const [base64, setBase64] = useState("");
    const [transactionError, setTransactionError] = useState({ transactionIdError: "", photoProofError: "" });
    const note1 = `Make a payment of ₹${props.price} to above mentioned bank details.
    After payment, please proceed by clicking following button to fill out the form. Our coordinators will contact you shortly. `;

    useEffect(() => {
        // This block will be executed when newImage changes
        console.log("New image state updated:", newImage);
        setTemp(newImage);
    }, [newImage]);

    const fireUpload = async () => {
        const imgRef = ref(cz, `cz/${v4()}`);

        await uploadBytes(imgRef, selectedImage);

        try {
            const data = await getDownloadURL(imgRef);
            setNewImage(data);
            console.log("Image uploaded Successfully");
        } catch (e) {
            console.log(e);
        }
    };

    const handleRegister = async (e) => {
        if (handleBlur()) {
            e.preventDefault();

            let eventData = {
                id: props.eventId,
                eventType: props.eventType,
                eventTitle: props.eventName,
                isMusicalNight: props.isMusicalNight ? true : false,
                eventFees: props.price,
                eventParticipantInfo: props.eventRegisterCredentials,
                eventIsAccomodationNeeded: props.isAccomodationNeeded,
                transactionId: eventTransactionId.transactionId,
                eventTransactionImage: newImage
            };

            await registerEvent(eventData);

            // await uploadTransactionImage(base64);
            await fireUpload();
            console.log(eventData);

            if (newImage !== undefined) props.onClose();
            // console.log(data);
        } else alert("Error registering event");
    };

    const handlefileChange = async (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        const ext = file.name.split(".").pop();
        if (ext !== "jpg" && ext !== "png" && ext !== "jpeg") {
            e.target.value = "";
            setTransactionError({
                ...transactionError,
                photoProofError: "Only Images are allowed"
            });
        } else {
            setTransactionError({
                ...transactionError,
                photoProofError: ""
            });

            // fireUpload();
            // const compressedImage = await compressImage(file);
            // const base = await convert64(file);
            // setBase64(base);
            // console.log(base);
        }

        console.log(file);
        // console.log(base64);
        // console.log(selectedFile);
    };
    // console.log(transactionId);
    const handleChange = (e) => {
        const name = e.target.name;

        if (name === "transactionId") {
            const value = e.target.value;
            setEventTransactionId((values) => ({
                ...values,
                transactionId: value
            }));
        }

        // console.log(eventTransactionId);
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

    // const convert64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };
    // console.log(transactionError);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    // maxHeight: "65vh",
                    paddingTop: "50px",
                    justifyContent: "center"
                    // overflow: "auto"
                }}
            >
                <div
                    className="part1 event-registration-description"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                        // overflow: "auto"
                    }}
                >
                    <div
                        className="title"
                        style={{
                            fontSize: "30px",
                            fontWeight: "400"
                        }}
                    >
                        Account Details
                    </div>
                    <div
                        className="body"
                        style={{
                            paddingTop: "5%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "100%"
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            }}
                        >
                            <Table variant={"simple"}>
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
                                    <Tr>
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
                                                    // onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                <FormErrorMessage>
                                                    {transactionError.transactionIdError}
                                                </FormErrorMessage>
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
                                                    <p>{transactionId}</p>
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
                                                    <FormErrorMessage>
                                                        {transactionError.photoProofError}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                            {/* <img src={transaction} alt="transaation" width={150} /> */}
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            {/* <Text fontSize={"20px"}>Amount : </Text> */}

                            {/* <Table>
                                <Header>
                                    <HeaderRow>sd</HeaderRow>
                                    <HeaderRow>sd</HeaderRow>
                                </Header>

                                <Body>
                                    <Row>
                                        <Cell>df</Cell>
                                        
                                    </Row>
                                </Body>
                            </Table> */}
                        </div>
                    </div>
                </div>
                {/* <div
                    className="part2"
                    style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <div
                        className="title"
                        style={{ fontSize: "30px", fontWeight: "400" }}
                    >
                        Payment Using QR Code
                    </div>
                    <div
                        className="body"
                        style={{
                            paddingTop: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <div className="image">
                            <img
                                src={qrCodeImage}
                                alt="qr code image"
                                style={{ width: "200px", height: "200px" }}
                            />
                        </div>
                        <div>Scan the QR Code</div>
                    </div>
                </div> */}
            </div>

            <div>
                <div
                    style={{
                        display: "flex",
                        paddingTop: "5%",
                        paddingBottom: "20px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: "700",
                            paddingRight: "10px"
                        }}
                    >
                        Note:
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: "700"
                        }}
                    >
                        {note1}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        // paddingBottom: "50px",
                        justifyContent: "center"
                    }}
                >
                    <Button
                        colorScheme="blue"
                        mr={3}
                        // href="https://forms.gle/DaqEYXgjcx9kCNpe6"
                        // target="_blank"
                        // rel="noopener noreferrer"
                        color={"white"}
                        onClick={handleRegister}
                    >
                        Submit Payment
                    </Button>
                </div>
            </div>
        </div>
    );
}
