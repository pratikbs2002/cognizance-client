import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Workshop from "./allEvents/Workshop";
import TechEvents from "./allEvents/TechEvents";
import NonTechEvents from "./allEvents/NonTechEvents";
import ComboEvents from "./comboPage/ComboEvents";
import MusicalNight from "./allEvents/MusicalNight";

const Temp = (props) => {
    return (
        <>
            <div
                style={{
                    width: "90%",
                    overflowX: "auto",
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

                        {!props.addEventModal && !props.registeredEvent && (
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
                                registeredEvent={props.registeredEvent}
                                techEvents={props?.techEvents}
                                techEventIds={props?.techEventIds}
                            />
                        </TabPanel>

                        <TabPanel>
                            <NonTechEvents
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                                registeredEvent={props.registeredEvent}
                                nonTechEvents={props?.nonTechEvents}
                                nonTechEventIds={props?.nonTechEventIds}
                            />
                        </TabPanel>

                        <TabPanel>
                            <Workshop
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                                registeredEvent={props.registeredEvent}
                                workshops={props?.workshops}
                                workShopsIds={props?.workShopsIds}
                            />
                        </TabPanel>
                        {!props.addEventModal && (
                            <TabPanel>
                                <MusicalNight
                                    registeredEvent={props.registeredEvent}
                                    isMusicalNightRegistered={
                                        props?.isMusicalNightRegistered
                                    }
                                />
                            </TabPanel>
                        )}
                        {!props.addEventModal && !props.registeredEvent && (
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
