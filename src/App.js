import "./App.css";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";
import Register from "./pages/register/Register";
import UploadImages from "./pages/admin/UploadImages";
import ContactUs from "./pages/contactUs/ContactUs"
import RegisterdEvent from "./pages/registeredEvent/RegisteredEvent";
import NewCommittee from "./pages/committee/NewCommittee";
import AdminLogin from "./AdminLogin";

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/f3d0ad4e-7a64-4571-9770-b7347920ab6d"
                    element={isAdmin ? <UploadImages /> : <AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
                />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="*" element={<LandingPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/committee" element={<NewCommittee />} />
                <Route path="/registeredEvents" element={<RegisterdEvent />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
