import "./App.css";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";
import Register from "./pages/register/Register";
import UploadImages from "./pages/admin/UploadImages";
import ContactUs from "./pages/contactUs/ContactUs";
import RegisterdEvent from "./pages/registeredEvent/RegisteredEvent";
import NewCommittee from "./pages/committee/NewCommittee";
import AdminLogin from "./AdminLogin";
import { getRegisterCountService } from "./service/publicService";
import DownloadZip from "./pages/TransactionImages/DownloadZip";

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [registerCount, setRegisterCount] = useState({});

    const getRegisterCount = async () => {
        let res = await getRegisterCountService();
        if (res.isFound) {
            console.log(res);
            setRegisterCount(res);
        }
    };

    useEffect(() => {
        if (!registerCount.isFound) getRegisterCount();
    }, [registerCount.isFound]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/f3d0ad4e-7a64-4571-9770-b7347920ab6d"
                    element={
                        isAdmin ? (
                            <UploadImages registerCount={registerCount} />
                        ) : (
                            <AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
                        )
                    }
                />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="*" element={<LandingPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/committee" element={<NewCommittee />} />
                <Route path="/registeredEvents" element={<RegisterdEvent />} />
                <Route
                    path="/f3d0ad4e-7a64-4571-9770-b7347920abk18"
                    element={isAdmin ? <DownloadZip /> : <AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
