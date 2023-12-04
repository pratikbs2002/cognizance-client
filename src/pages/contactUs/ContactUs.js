import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";

export default function ContactUs() {
    const navigate = useNavigate();
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
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        fontSize: "40px",
                        fontWeight: "800",
                        color: "white",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.442)",
                    }}
                >
                    <u>Contact Us</u>
                </div>
                <div
                    style={{
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            paddingBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Registrations related queries
                        </div>
                        <div
                            style={{
                                marginTop: "10px",
                                fontWeight: "500",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                <div>Pratik Suthar</div>
                                <div>
                                    <a href="tel:+91 76983 62613">
                                        +91 76983 62613
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                marginTop: "10px",
                                fontWeight: "500",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                <div>Ketan Tiwari</div>
                                <div>
                                    <a href="tel:+91 70693 12561">
                                        +91 70693 12561
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            paddingBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Accomodation & Transport related queries
                        </div>
                        <div
                            style={{
                                marginTop: "10px",
                                fontWeight: "500",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                <div>Srushti Gajjar</div>
                                <div>
                                    <a href="tel:+91 94095 47741">
                                        +91 94095 47741
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            paddingBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Any other queries
                        </div>
                        <div
                            style={{
                                marginTop: "10px",
                                fontWeight: "500",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <div>
                                <div>Jay Shah</div>
                                <div>
                                    <a href="tel:+91 820007 78757">
                                        +91 820007 78757
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            paddingBottom: "30px",
                            fontSize: "20px",
                            fontWeight: "600",
                        }}
                    >
                        <div>Email</div>
                        <div
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            <a href="cognizance@charusat.edu.in">
                                cognizance@charusat.edu.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
