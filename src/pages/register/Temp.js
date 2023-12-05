import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Workshop from "./Workshop";
import TechEvents from "./TechEvents";
import NonTechEvents from "./NonTechEvents";
import ComboEvents from "./ComboEvents";

const Temp = () => {
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
                            Combo Events & DJ Night
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TechEvents />
                        </TabPanel>

                        <TabPanel>
                            <NonTechEvents />
                        </TabPanel>

                        <TabPanel>
                            <Workshop />
                        </TabPanel>

                        <TabPanel>
                            <ComboEvents />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </>
    );
};

export default Temp;
