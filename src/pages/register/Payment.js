import React from 'react'
import qrCodeImage from "./paymentQrCode.png"
import {
    Text,
} from "@chakra-ui/react";
export default function Payment() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", width: "100%", paddingLeft: "30px", fontWeight: "800", fontSize: "30px" }}>Payment</div>
            <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }}>
                <div className='part1' style={{ display: "flex", width: "50%", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <div className='title' style={{ fontSize: "30px", fontWeight: "400" }}>
                        Payment With Account Details
                    </div>
                    <div className='body' style={{ paddingTop: "100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
                        <div><Text>Account Name : </Text></div>
                        <div></div>
                    </div>

                </div>
                <div className='part2' style={{ display: "flex", width: "50%", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <div className='title' style={{ fontSize: "30px", fontWeight: "400" }}>
                        Payment Using QR Code
                    </div>
                    <div className='body' style={{ paddingTop: "100px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
                        <div className='image'><img src={qrCodeImage} alt='qr code image' style={{ width: "200px", height: "200px" }} /></div>
                        <div>Scan the QR Code</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
