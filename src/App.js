import "./App.css";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";
import Register from "./pages/register/Register";
import UploadImages from "./pages/admin/UploadImages";
import ContactUs from "./pages/contactUs/ContactUs";
// import Committee from "./pages/committee/Committee";
import RegisterdEvent from "./pages/registeredEvent/RegisteredEvent";
import NewCommittee from "./pages/committee/NewCommittee";
import ImageGallery from "./pages/TransactionImages/GetImages";
// import Payment from "./pages/register/Payment";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/f3d0ad4e-7a64-4571-9770-b7347920ab6d" element={<UploadImages />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="*" element={<LandingPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/committee" element={<NewCommittee />} />
                <Route path="/registeredEvents" element={<RegisterdEvent />} />
                <Route path="/paymentReceipts" element={<ImageGallery />} />
                {/* <Route path="newComm" element={<NewCommittee/>}/> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
