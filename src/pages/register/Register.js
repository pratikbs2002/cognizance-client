import { React } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Temp from "./Temp";
import ShowRegisteredEventButton from "../registeredEvent/ShowRegisteredEventButton";

export default function Register() {
    const navigate = useNavigate();
    return (
        <>
            <div className="photo-gallery-parent-container">
                <div
                    className="photo-gallery-navbar"
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        width: "100%",
                        color: "white",
                    }}
                >
                    <div
                        className="photo-gallery-back-button"
                        style={{
                            marginTop: "20px",
                        }}
                        onClick={() => navigate(-1)}
                    >
                        <IoIosArrowBack />
                        Back
                    </div>
                    <div
                        className="photo-gallery-title"
                        style={{
                            paddingRight: "100px",
                            paddingTop: "20px",
                        }}
                    >
                        <ShowRegisteredEventButton />
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
                    <Temp addEventModal={false} />
                </div>
                {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "600",
            flexWrap: "wrap"
          }}
        >
          {data.map((IData) => (
            <EventCard
              image={IData.image}
              title={IData.title}
              description={IData.description}
            />
          ))}
        </div> */}
            </div>
        </>
    );
}
