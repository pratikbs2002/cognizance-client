import React from "react";
import "./Spnonsor.css";
import d_vivid from "../../assets/sponsor_logo/d-vivid.png";
import amul from "../../assets/sponsor_logo/amul.jpg";
const Sponsors = () => {
    const arr = [
        {
            title: "Title Sponsor",
            logo: amul
        },
        {
            title: "Platinum Sponsor",
            logo: d_vivid
        }
    ];

    return (
        <>
            <div
                style={{
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "space-around",
                    width: "80%",
                    margin: "auto",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "40px"  
                }}
            >
                {arr.map(({ title, logo }) => (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                            // justifyContent: "center",
                            // width: "100%"
                        }}
                    >
                        <span className="sp-title">{title}</span>
                        <img src={logo} alt="sponsor" className="sp-img" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sponsors;
