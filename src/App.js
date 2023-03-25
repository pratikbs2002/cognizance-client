import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import MainCarousel from "./components/MainCarousel";
import Committee from "./pages/committee/Committee";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      {/* <Committee /> */}
    </Fragment>
  );
}

export default App;
