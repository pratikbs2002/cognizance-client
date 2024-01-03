import React from 'react';
import { Container, Text } from "@chakra-ui/react";
import paintball from "../../../assets/eventImages/Paintball1.png";
import wallRap from "../../../assets/eventImages/wallrappelling.png"


const AdventureEvents = (props) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                {" "}
                <div className="exploreMore-note">
                    <span className="title">Note:</span>
                    <span className="message">Adventure Event Registration will be done offline on campus.</span>
                </div>
            </div>
            {
                !(props.registeredEvent)?(
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "600",
                            flexWrap: "wrap"
                        }}
                    >
                        <Container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            fontWeight={"800"}
                            color={"white"}
                            fontSize={"40px"}
                            width={"100%"}
                            maxW={"100%"}
                            mt={"4%"}
                            mb={"2%"}
                            textAlign={"center"}
                        >
                            <Text width={"100%"} maxW={"100%"}>
                                Adventure Events
                            </Text>
                        </Container>
                        <div
                            style={{
                                width:"350px",
                                padding:"16px",
                            }}
                        >
                            <div
                                style={{
                                    border:"1px solid white",
                                    borderRadius:"6px",
                                    overflow:'hidden',
                                    height:"450px"
                                }}
                            >
                                <img 
                                    src={paintball} 
                                    alt='paintball' 
                                    style={{
                                        objectFit:'cover',
                                        width:"100%",
                                        height:"450px",
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                width:"350px",
                                padding:"16px",
                            }}
                        >
                            <div
                                style={{
                                    border:"1px solid white",
                                    borderRadius:"6px",
                                    overflow:'hidden',
                                    height:"450px",

                                }}
                            >
                                <img 
                                    src={wallRap} 
                                    alt='paintball' 
                                    style={{
                                        objectFit:'cover',
                                        width:"100%",
                                        height:"450px",

                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ):null
            }
        </>
    )
}

export default AdventureEvents