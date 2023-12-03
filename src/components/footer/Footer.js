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

import React from "react";

export default function Footer() {
    return (
        <>
            <footer
                style={{ marginTop: "100px" }}
                id="footer-section"
            >
                <div className="footer_container">
                    <div className="cotent_container">
                        <div className="card_container">
                            <div
                                className="card"
                                onClick={() => {
                                    window.location =
                                        "mailto:xyz@gmail.com";
                                }}
                            >
                                <div className="card_logo_container">
                                    <img
                                        className="logo"
                                        src={emailLogo}
                                        alt="email"
                                    />
                                    <p>Email</p>
                                </div>
                                <span style={{ fontSize: "18px" }}>
                                    cognizance@charusat.edu.in
                                </span>
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        "0-123-4567-89"
                                    );
                                    alert("Contact number coppied");
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
                                <span style={{ fontSize: "18px" }}>
                                    +91 8200778757
                                </span>
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    window.open(
                                        "https://goo.gl/maps/Y6HdXpp7atfo8RAc6?coh=178571&entry=tt",
                                        "_blank"
                                    );
                                }}
                            >
                                <div className="card_logo_container">
                                    <img
                                        className="logo"
                                        src={address}
                                        alt="email"
                                    />
                                    <p>Address</p>
                                </div>
                                <span style={{ fontSize: "18px" }}>
                                    CHARUSAT Campus, Highway, Off,
                                    Nadiad - Petlad Rd, Changa,
                                    Gujarat 388421
                                </span>
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
                                <img
                                    src={instagram}
                                    alt="instargram"
                                />
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
                                &#169;2024. Charusat. All rights
                                revserved
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
