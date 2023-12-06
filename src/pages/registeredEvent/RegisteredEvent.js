import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import { getAllRegisteredEvents } from "../../service/eventService";
import Temp from "../register/Temp";
import GAuth from "../../components/GAuth";

export default function RegisterdEvent() {
    const navigate = useNavigate();

    const [data, setData] = React.useState([]);

    const getEvents = async () => {
        let data = await getAllRegisteredEvents();
        console.log(data);
        if (!data?.isAuthenticated) {
            sessionStorage.clear();
        } else if (data?.isFound) {
            let d = data?.data;
            let workshop = d?.workshop?.filter((item) => {
                return item?.isMusicalNight === false;
            });
            let musicalNight = d?.workshop?.filter((item) => {
                return item?.isMusicalNight === true;
            });
            d.workshop = workshop;
            d["musicalNight"] = musicalNight;
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
                    }}
                >
                    Event Registrations
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
                        registeredTech={data?.tech}
                        registeredNonTech={data?.nontech}
                        registeredWorkshop={data?.workshop}
                        isRegistered={data?.musicalNight?.length > 0}
                    />
                </div>
            </div>
        </>
    );
}
