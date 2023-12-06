import React from "react";
import { Button, Text } from "@chakra-ui/react";
export default function Payment(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    maxHeight: "45vh",
                    paddingTop: "50px",
                    justifyContent: "center",
                }}
            >
                <div
                    className="part1"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <div
                        className="title"
                        style={{ fontSize: "30px", fontWeight: "400" }}
                    >
                        Payment With Account Details
                    </div>
                    <div
                        className="body"
                        style={{
                            paddingTop: "5%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                paddingLeft: "100px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <Text fontSize={"20px"}>
                                ● Bank A/c Name : Chandubhai S. Patel Institute
                                of Technology
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank A/c Number : 30762646817
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank A/c Type : Current A/c
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank Branch CODE : 10961
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank IFSC code : SBIN0010961
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank MICR CODE : 388002502
                            </Text>
                            <Text fontSize={"20px"}>
                                ● Bank Branch Address : Darshan Hostel,
                                Changa-Valetla Road, Changa. Dist. Anand
                            </Text>
                            {/* <Text fontSize={"20px"}>Amount : </Text> */}
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
                        paddingBottom: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: "700",
                            paddingRight: "10px",
                        }}
                    >
                        Note:
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: "700",
                        }}
                    >
                        After payment, please proceed by clicking following
                        button to fill out the form. Our coordinators will
                        contact you shortly.
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        paddingBottom: "50px",
                        justifyContent: "center",
                    }}
                >
                    <Button colorScheme="blue" mr={3}>
                        <a
                            href="https://forms.gle/DaqEYXgjcx9kCNpe6"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "white" }}
                        >
                            Submit Payment Reciept
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
