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
                                <div>Mr. Harshil Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: "50px",
                                }}
                            >
                                <div>Mr. Yash Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
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
                                <div>Mr. Harshil Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: "50px",
                                }}
                            >
                                <div>Mr. Yash Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
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
                                <div>Mr. Harshil Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginLeft: "50px",
                                }}
                            >
                                <div>Mr. Yash Patel</div>
                                <div>
                                    <a href="tel:+91 635 261 5197">
                                        +91 635 261 5197
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
