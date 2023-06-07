import "./App.css";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/photoGallery/PhotoGallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
