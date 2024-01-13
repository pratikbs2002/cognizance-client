import React from 'react'
import {useNavigate} from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import {Text,Container} from '@chakra-ui/react';


const Schedule = () => {
    const navigate=useNavigate();
    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div
                        className="sphoto-gallery-back-button"
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
                        textAlign: "center"
                    }}
                >
                    <Text>Schedule for Events</Text>
                </div>
                <Container
                    mt={'2%'}
                    maxW={{ base: "100%", md: "90%" }}
                    width={{ base: "100%", md: "90%" }}
                >
                    <embed type='application/pdf' src='/pdfs/schedule.pdf' style={{width:"100%",height:"80vh"}}/>
                </Container>
            </div>
        </>
    )
}
    
export default Schedule