import "./App.css";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";
import Register from "./pages/register/Register";
import UploadImages from "./pages/admin/UploadImages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<UploadImages />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
