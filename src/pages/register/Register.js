import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
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
            height: "91vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "100px",
            color: "white",
            fontWeight: "600",
          }}
        >
          COMING SOON
        </div>
      </div>
    </>
  );
}
