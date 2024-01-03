import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container } from "@chakra-ui/react";
import Workshop from "./allEvents/Workshop";
import TechEvents from "./allEvents/TechEvents";
import NonTechEvents from "./allEvents/NonTechEvents";
// import ComboEvents from "./comboPage/ComboEvents";
import MusicalNight from "./allEvents/MusicalNight";
import { getAllEventsCount } from "../../service/eventRegistrationService";
import AdventureEvents from "./allEvents/AdventureEvnets";

const Temp = (props) => {
    const [eventWiseRegisterationCount, setEventWiseRegisterationCount] = React.useState({});

    const getEventWiseRegisterationCount = async () => {
        let res = await getAllEventsCount();
        console.log(res);
        if (res.isFound) {
            console.log(res);
            setEventWiseRegisterationCount({
                totalCount: res?.totalCount,
                isFound: true
            });
        } else {
            setEventWiseRegisterationCount({
                isFound: false
            });
        }
    };
    console.log(eventWiseRegisterationCount);
    useEffect(() => {
        if (!eventWiseRegisterationCount?.isFound) getEventWiseRegisterationCount();
    }, [eventWiseRegisterationCount?.isFound]);

    return (
        <>
            <Container maxW={{ base: "100%", md: "90%" }} width={{ base: "100%", md: "90%" }}>
                <Tabs padding={0} margin={0} isFitted variant="enclosed">
                    <TabList
                        mb="1em"
                        // display={"flex"}
                        // alignItems={"center"}
                        // justifyContent={"center"}
                        flexWrap={"wrap"}
                        gap={"2px"}
                        // overflowX={"auto"}
                    >
                        <Tab
                            color={"white"}
                            variant="enclosed"
                            _selected={{
                                color: "white",
                                bg: "#161d37 !important",
                                border: "1px solid white"
                            }}
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                backgroundColor: "rgba(0, 0, 0, 0.442)"
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
                                border: "1px solid white"
                            }}
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                backgroundColor: "rgba(0, 0, 0, 0.442)"
                                // border: "0.2px solid white",
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
                                backgroundColor: "rgba(0, 0, 0, 0.442)"
                            }}
                            _selected={{
                                color: "white",
                                bg: "#161d37 !important",
                                border: "1px solid white"
                            }}
                        >
                            Technical Workshops
                        </Tab>

                        {!props.addEventModal && !props.registeredEvent && (
                            <Tab
                                color={"white"}
                                variant="enclosed"
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    backgroundColor: "rgba(0, 0, 0, 0.442)"
                                }}
                                _selected={{
                                    color: "white",
                                    bg: "#161d37 !important",
                                    border: "1px solid white"
                                }}
                            >
                                Musical Night
                            </Tab>
                        )}

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
                                Adventure  Events
                            </Tab>
                    </TabList>

                    <TabPanels padding={0} margin={0}>
                        <TabPanel>
                            <TechEvents
                                addEventModal={props.addEventModal}
                                setAddEventData={props.setAddEventData}
                                addEventHandler={props.addEventHandler}
                                registeredEvent={props.registeredEvent}
                                techEvents={props?.techEvents}
                                techEventIds={props?.techEventIds}
                                registerCount={eventWiseRegisterationCount?.totalCount?.techCount}
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
                                registerCount={eventWiseRegisterationCount?.totalCount?.ntechCount}
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
                                registerCount={eventWiseRegisterationCount?.totalCount?.workshopCount}
                            />
                        </TabPanel>
                        {!props.addEventModal && !props.registeredEvent && (
                            <TabPanel padding={0} margin={0}>
                                <MusicalNight
                                    registeredEvent={props.registeredEvent}
                                    isMusicalNightRegistered={props?.isMusicalNightRegistered}
                                />
                            </TabPanel>
                        )}
                        {!props.addEventModal && !props.registeredEvent && (
                            <TabPanel padding={0} margin={0}>
                                <AdventureEvents 
                                    registeredEvent={props.registeredEvent}
                                />
                            </TabPanel>
                        )}
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
};

export default Temp;
