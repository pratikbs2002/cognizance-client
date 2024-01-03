import React from "react";
import { Container, Text, Box, Image } from "@chakra-ui/react";
import paintball from "../../../assets/adBanner/Paintball1.png";
import wallRap from "../../../assets/adBanner/wallrappelling.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { jsx } from "@emotion/react";

const AdventureEvents = (props) => {
    const setBgColor = (e) => {
        e.target.parentElement.style.backgroundColor = "rgba(0,0,0,0.443)";
        e.target.parentElement.style.padding = "5px";
        e.target.parentElement.style.borderRadius = "6px";
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                {" "}
                <div className="exploreMore-note">
                    <span className="title">Note:</span>
                    <span className="message">Adventure Event Registration will be done offline on campus.</span>
                </div>
            </div>
            {!props.registeredEvent ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "600",
                        flexWrap: "wrap",
                        paddingTop: "2%",
                        paddingBottom: "4%"
                    }}
                >
                    <Container
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "2%",
                            justifyContent: "center"
                        }}
                        fontWeight={"800"}
                        color={"white"}
                        fontSize={"40px"}
                        width={"100%"}
                        maxW={"100%"}
                        textAlign={"center"}
                    >
                        <Text width={"100%"} maxW={"100%"}>
                            Adventure Events
                        </Text>
                    </Container>
                    <Container
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            gap: 50
                        }}
                        flexDirection={{ base: "column", lg: "row" }}
                    >
                        <div>
                            <Box minW={{ base: "100%", lg: "33vw" }}>
                                <LazyLoadImage
                                    src={paintball}
                                    alt="paintball"
                                    style={{
                                        objectFit: "cover",
                                        aspectRatio: "5/7",
                                        borderRadius: "6px"
                                    }}
                                    effect="blur"
                                    onLoad={(e) => setBgColor(e)}
                                />
                            </Box>
                        </div>
                        <div>
                            <Box minW={{ base: "100%", lg: "33vw" }}>
                                <LazyLoadImage
                                    src={wallRap}
                                    alt="paintball"
                                    style={{
                                        objectFit: "cover",
                                        aspectRatio: "5/7",
                                        borderRadius: "6px"
                                    }}
                                    effect="blur"
                                    onLoad={(e) => setBgColor(e)}
                                />
                            </Box>
                        </div>
                    </Container>
                </div>
            ) : null}
        </>
    );
};

export default AdventureEvents;
