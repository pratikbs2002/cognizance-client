import React from "react";
import { Button } from "@chakra-ui/react";
import "./EventCard.css";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";

export default function Payment(props) {
    const note1 = `Make a payment of ₹${props.price} to above mentioned bank details.
    After payment, please proceed by clicking following button to fill out the form. Our coordinators will contact you shortly. `;
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
                    maxHeight: "65vh",
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
                        flexDirection: "column",
                        overflow: "auto"
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
                        as="a"
                        href="https://forms.gle/DaqEYXgjcx9kCNpe6"
                        target="_blank"
                        rel="noopener noreferrer"
                        color={"white"}
                    >
                        Submit Payment Reciept
                    </Button>
                </div>
            </div>
        </div>
    );
}
