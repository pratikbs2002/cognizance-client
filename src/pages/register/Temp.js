import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Workshop from "./Workshop";
import TechEvents from "./TechEvents";
import NonTechEvents from "./NonTechEvents";
import ComboEvents from "./ComboEvents";
import MusicalNight from "./MusicalNight";

const Temp = (props) => {
    return (
        <>
            <div
                style={{
                    width: "90%",
                }}
            >
                <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
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
                            Technical Events
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
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                backgroundColor: "rgba(0, 0, 0, 0.442)",
                                // border: "1px solid white"
                            }}
                        >
                            Non-Technical Events
                        </Tab>
                        <Tab
                            color={"white"}
                            variant="enclosed"
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                backgroundColor: "rgba(0, 0, 0, 0.442)",
                            }}
                            _selected={{
                                color: "white",
                                bg: "#161d37 !important",
                                border: "1px solid white",
                            }}
                        >
                            Technical Workshops
                        </Tab>

                        {!props.addEventModal && (
                            <Tab
                                color={"white"}
                                variant="enclosed"
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    backgroundColor: "rgba(0, 0, 0, 0.442)",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "#161d37 !important",
                                    border: "1px solid white",
                                }}
                            >
                                Musical Night
                            </Tab>
                        )}

                        {!props.addEventModal && (
                            <Tab
                                color={"white"}
                                variant="enclosed"
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    backgroundColor: "rgba(0, 0, 0, 0.442)",
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "#161d37 !important",
                                    border: "1px solid white",
                                }}
                            >
                                Combo Events
                            </Tab>
                        )}
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TechEvents
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                            />
                        </TabPanel>

                        <TabPanel>
                            <NonTechEvents
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                            />
                        </TabPanel>

                        <TabPanel>
                            <Workshop
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                            />
                        </TabPanel>
                        {!props.addEventModal && (
                            <TabPanel>
                                <MusicalNight />
                            </TabPanel>
                        )}
                        {!props.addEventModal && (
                            <TabPanel>
                                <ComboEvents />
                            </TabPanel>
                        )}
                    </TabPanels>
                </Tabs>
            </div>
        </>
    );
};

export default Temp;
