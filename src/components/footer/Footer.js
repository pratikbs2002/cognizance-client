// import "./Footer.css";
// import logo from "../../assets/footer/logo.jpg";
// import emailLogo from "../../assets/footer/email.png";
// import contactLogo from "../../assets/footer/contact us.png";
// import address from "../../assets/footer/adderss.png";
// import instagram from "../../assets/footer/instagram.png";
// import facebook from "../../assets/footer/facebook.png";

// import React from "react";

// export default function Footer() {
//   return (
//     <>
//       <footer style={{ marginTop: "100px" }} id="footer-section">
//         <div className="footer_container">
//           <div className="logo_container">
//             <img src={logo} alt="logo" />
//           </div>
//           <div className="cotent_container">
//             <div className="card_container">
//               <div
//                 className="card"
//                 onClick={() => {
//                   window.location = "mailto:xyz@gmail.com";
//                 }}
//               >
//                 <div className="card_logo_container">
//                   <img className="logo" src={emailLogo} alt="email" />
//                   <p>email</p>
//                 </div>
//                 xyz@gmail.com
//               </div>
//               <div
//                 className="card"
//                 onClick={() => {
//                   navigator.clipboard.writeText("0-123-4567-89");
//                   alert("Contact number coppied");
//                 }}
//               >
//                 <div className="card_logo_container">
//                   <img className="logo" src={contactLogo} alt="email" />
//                   <p>Contact Us</p>
//                 </div>
//                 0-123-4567-89
//               </div>
//               <div
//                 className="card"
//                 onClick={() => {
//                   window.open(
//                     "https://goo.gl/maps/Y6HdXpp7atfo8RAc6?coh=178571&entry=tt",
//                     "_blank"
//                   );
//                 }}
//               >
//                 <div className="card_logo_container">
//                   <img className="logo" src={address} alt="email" />
//                   <p>Address</p>
//                 </div>
//                 CHARUSAT University, Gujarat
//               </div>
//             </div>
//             <div className="social_container">
//               <div
//                 className="social_logo_container"
//                 onClick={() => {
//                   window.open("https://instagram.com", "_blank");
//                 }}
//               >
//                 <img src={instagram} alt="instargram" />
//               </div>
//               <div
//                 className="social_logo_container"
//                 onClick={() => {
//                   window.open("https://facebook.com", "_blank");
//                 }}
//               >
//                 <img className="facebook" src={facebook} alt="instargram" />
//               </div>
//             </div>
//             <div className="rights">
//               &#169;2023. Charusat. All rights revserved
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

import "./Footer.css";
import logo from "../../assets/footer/logo.jpg";
import emailLogo from "../../assets/footer/email.png";
import contactLogo from "../../assets/footer/contact us.png";
import address from "../../assets/footer/adderss.png";
import instagram from "../../assets/footer/instagram.png";
import facebook from "../../assets/footer/facebook.png";
import { React } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer style={{ marginTop: "100px" }} id="footer-section">
                <div className="footer_container">
                    <div className="cotent_container">
                        <div className="card_container">
                            <div
                                className="card"
                                onClick={() => {
                                    navigate("/contact-us");
                                }}
                                style={{
                                    height: "10vh",
                                    width: "20%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                }}
                            >
                                <div className="card_logo_container">
                                    <img
                                        className="logo"
                                        src={contactLogo}
                                        alt="email"
                                    />
                                    <p>Contact Us</p>
                                </div>
                            </div>
                            <div
                                className="card"
                                style={{
                                    height: "50vh",
                                    width: "40%",
                                    marginLeft: "5%",
                                }}
                            >
                                <div
                                    className="card_logo_container"
                                    style={{
                                        marginBottom: "20px",
                                    }}
                                >
                                    <img
                                        className="logo"
                                        src={address}
                                        alt="email"
                                    />
                                    <p>Address</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.458099229622!2d72.81789177603518!3d22.59936243198752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1701723489178!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="venue"
                                ></iframe>
                            </div>
                        </div>

                        <div className="social_container">
                            <div
                                className="social_logo_container"
                                onClick={() => {
                                    window.open(
                                        "https://www.instagram.com/cognizance23/",
                                        "_blank"
                                    );
                                }}
                            >
                                <img src={instagram} alt="instargram" />
                            </div>
                            {/* <div
                className="social_logo_container"
                onClick={() => {
                  window.open("https://facebook.com", "_blank");
                }}
              >
                <img
                  className="facebook"
                  src={facebook}
                  alt="instargram"
                />
              </div> */}
                        </div>
                        <div className="rights">
                            <span style={{ fontSize: "18px" }}>
                                &#169;2024. Charusat. All rights reserved
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
