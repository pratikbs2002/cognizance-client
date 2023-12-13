import React from 'react';
import{useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {Container, Tabs,TabList,TabPanels,Tab,TabPanel,} from '@chakra-ui/react'
import OrganisingCommittee from './OrganisingCommittee';
import EventCommittee from './EventCommittee';


const NewCommittee = () => {
    const navigate=useNavigate();
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
            <Container
                    mt={'2%'}
                    maxW={{ base: "100%", md: "90%" }}
                    width={{ base: "100%", md: "90%" }}
                >
                    <Tabs padding={0} margin={0} isFitted variant="enclosed">
                        <TabList
                            mb="1em"
                            flexWrap={"wrap"}
                            gap={"2px"}
                        >
                            <Tab
                                color={"white"}
                                variant="enclosed"
                                _selected={{
                                    color: "white",
                                    bg: "#161d37 !important",
                                    border: "1px solid white",
                                }}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    backgroundColor: "rgba(0, 0, 0, 0.442)",
                                    // border: "1px solid white"
                                }}
                            >
                                Organizing Committee
                            </Tab>

                            <Tab
                                color={"white"}
                                variant="enclosed"
                                _selected={{
                                    color: "white",
                                    bg: "#161d37 !important",
                                    border: "1px solid white",
                                }}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    backgroundColor: "rgba(0, 0, 0, 0.442)",
                                    // border: "1px solid white"
                                }}
                            >
                                Event Committee
                            </Tab>
                        </TabList>
                        <TabPanels padding={0} margin={0}>
                            <TabPanel>
                                <OrganisingCommittee/>
                            </TabPanel>
                            <TabPanel>
                                <EventCommittee/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
            </Container>
            </div>
        </>
    )
}

export default NewCommittee