import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getAllRegisteredEvents } from "../../service/eventService";
import Temp from "../register/Temp";

export default function RegisterdEvent() {
    const navigate = useNavigate();

    const [data, setData] = React.useState([]);

    const getEvents = async () => {
        let data = await getAllRegisteredEvents();
        // console.log(data);
        if (!data?.isAuthenticated) {
            sessionStorage.clear();
        } else if (data?.isFound) {
            let d = data?.data;
            setData(d);
        }
    };

    React.useEffect(() => {
        getEvents();
    }, []);
    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div
                        className="photo-gallery-back-button"
                        onClick={() => navigate(-1)}
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
                    Registered Events
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Temp
                        addEventModal={false}
                        registeredEvent={true}
                        techEvents={data?.techEvents}
                        nonTechEvents={data?.nonTechEvents}
                        workshops={data?.workshops}
                        techEventIds={data?.techEventIds}
                        nonTechEventIds={data?.nonTechEventIds}
                        workShopsIds={data?.workShopsIds}
                        isMusicalNightRegistered={
                            data?.isMusicalNightRegistered
                        }
                    />
                </div>
            </div>
        </>
    );
}
