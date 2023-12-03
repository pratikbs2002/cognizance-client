import React from "react";
import qrCodeImage from "./paymentQrCode.png";
import { Text } from "@chakra-ui/react";
export default function Payment(props) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    paddingLeft: "30px",
                    fontWeight: "500",
                    fontSize: "30px",
                    paddingTop: "80px",
                    paddingBottom: "50px",
                }}
            >
                Payment | ₹{props.price}/-
            </div>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <div
                    className="part1"
                    style={{
                        borderRight: "2px solid #282b35",
                        display: "flex",
                        width: "50%",
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
                            paddingTop: "100px",
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
                            <Text fontSize={"20px"}>Bank Name : </Text>
                            <Text fontSize={"20px"}>Branch Name : </Text>
                            <Text fontSize={"20px"}>IFSC Code : </Text>
                            <Text fontSize={"20px"}>Account No : </Text>
                            {/* <Text fontSize={"20px"}>Amount : </Text> */}
                        </div>
                    </div>
                </div>
                <div
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
                </div>
            </div>
        </div>
    );
}
