import React from "react";
import { Container } from "@chakra-ui/react";
import mainbg from "../assets/bg8.png";
// import Committee from "./committee/Committee";
import "./ImageTransition.css";
import Navbar from "../components/navbar/Navbar";
import About from "./about/About";
import Footer from "../components/footer/Footer";
// import PhotoGallery from "./photoGallery/PhotoGallery";
// import Count from "../components/Count";
// import Home from "./home/Home";
import NewHome from "./home/NewHome";
import ScrollButton from "../components/scrollButton/ScrollButton";
// import aboutIm from "./posterCz.png";
// import aboutIm2 from "./posterCz2.png";
import aboutIm3 from "./homePage6.png";
// import AdModal from "../components/advertisement/adModel";

export default function LandingPage() {
    // const [isImage1Visible, setIsImage1Visible] = useState(true);

    // const updateCounter=async(type)=>{
    //     let data=await getVisitorCount(type);
    //     setVisitorCount(data.visitorCount);
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsImage1Visible((prev) => !prev);
    //     }, 3000);
    //
    // let data= await getTechCount();
    // setRegisterCount(data.totalCount);

    // if(sessionStorage.getItem("visit")===null){
    //     updateCounter("type=visit-pageview");
    // }else{
    //     sessionStorage.setItem("visit","x");
    //     updateCounter("type=pageview");
    // }
    //
    //     return () => clearInterval(interval);
    // }, []);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Container
                padding={0}
                margin={0}
                maxWidth={"100%"}
                backgroundImage={mainbg}
                backgroundSize="cover"
                backgroundAttachment="fixed"
                backgroundColor="blackAlpha.800"
                backdropBlur={"lg"}
                backgroundRepeat={"n  o-repeat"}
            >
                <Navbar />

                <Container marginTop={"10px"} maxWidth={{ base: "100%", md: "100%" }}>
                    {/* <video
            style={{ Width: "70%", height: "auto" }}
            src={aboutVideo}
            alt="About Video"
            autoPlay
            loop
            muted   
          /> */}
                    <img className="homePageImage1" src={aboutIm3} alt="about image1" />
                </Container>
                {/* <Home /> */}
                <NewHome />
                <About />
                <Footer />
                <ScrollButton isModalOpen={false} />
                {/* <AdModal setIsModalOpen={setIsModalOpen} /> */}
            </Container>
        </>
    );
}
