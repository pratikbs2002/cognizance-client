import { React } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Temp from "./Temp";
import ShowRegisteredEventButton from "../registeredEvent/ShowRegisteredEventButton";
import { Container, Text } from "@chakra-ui/react";

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
            textAlign: "center",
          }}
        >
          <Text>Event Registrations</Text>
        </div>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.442)",
          }}
        >
          <ShowRegisteredEventButton />
        </Container>
        <div
          style={{
            marginTop: "10px",
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
