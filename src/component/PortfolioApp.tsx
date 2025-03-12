import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Slider from "./Slider/Slider.tsx";
import About from "./About/About.tsx";
import Experience from "./Experience/Experience.tsx";
import Contact from "./Contact/Contact.tsx";
import Project from "./Project/Project.tsx";

document.title = "Prasanth Kumar V";

const PortfolioApp = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log('isMobile', isMobile)

  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <div>
          <Slider />
        </div>
        <div
          id="about-section"
          className={`d-flex flex-column justify-content-center pt-5 pb-5 ${isMobile ? 'px-4' : 'px-6'} full-height containerDiv2`}
        >
          <About />
        </div>
        <div
          id="exp-section"
          className={`d-flex flex-column justify-content-center pt-5 pb-5 ${isMobile ? 'px-4' : 'px-6'} full-height containerDiv1`}
        >
          <Experience />
        </div>
        <div
          id="portfolio-section"
          className={`d-flex flex-column justify-content-center pt-5 pb-5 ${isMobile ? 'px-4' : 'px-6'} full-height containerDiv2`}
        >
          <Project />
        </div>
        <div
          id="contact-section"
          className={`d-flex flex-column justify-content-center pt-5 pb-5 px-lg-6 ${isMobile ? 'px-4' : 'px-6'} full-height`}
        >
          <Contact />
        </div>
      </div>
    </>
  );
};

export default PortfolioApp;
