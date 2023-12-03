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
                            variant="enclosed"
                            _selected={{
                                color: "white",
                                bg: "#161d37 !important",
                                border: "1px solid white",
                            }}
                            style={{
                                fontWeight: "bold",
                                backgroundColor: "rgba(0, 0, 0, 0.442)",
                                // border: "1px solid white"
                            }}
                        >
                            Technical Events
                        </Tab>
                        <Tab
                            variant="enclosed"
                            _selected={{
                                color: "white",
                                bg: "#161d37 !important",
                                border: "1px solid white",
                            }}
                            style={{
                                fontWeight: "bold",
                                backgroundColor: "rgba(0, 0, 0, 0.442)",
                                // border: "1px solid white"
                            }}
                        >
                            Non-Technical Events
                        </Tab>
                        <Tab
                            variant="enclosed"
                            style={{
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
                            variant="enclosed"
                            style={{
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
                            1
                            <TechEvents />
                        </TabPanel>

                        <TabPanel>
                            2
                            <NonTechEvents />
                        </TabPanel>

                        <TabPanel>
                            3
                            <Workshop />
                        </TabPanel>

                        <TabPanel>
                            4
                            <ComboEvents />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </>
    );
};

export default Temp;
