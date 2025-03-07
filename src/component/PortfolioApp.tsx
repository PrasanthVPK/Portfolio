import React from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Slider from "./Slider/Slider.tsx";
import About from "./About/About.tsx";
import Experience from "./Experience/Experience.tsx";
import Contact from "./Contact/Contact.tsx";
import Project from "./Project/Project.tsx";

document.title = "Prasanth Kumar V"

const PortfolioApp = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="pt-6 pb-6">
          <Slider />
        </div>
        <div className="container pt-5 pb-5 ps-4 pe-4">
          <About />
        </div>
        <div className="container pt-5 pb-5 ps-4 pe-4">
          <Experience />
        </div>
        <div className="container pt-5 pb-5 ps-4 pe-4">
          <Project />
        </div>
        <div className="container pt-5 pb-5 ps-4 pe-4">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default PortfolioApp;
