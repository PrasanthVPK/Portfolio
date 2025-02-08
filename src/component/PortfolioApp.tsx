import React from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Slider from "./Slider/Slider.tsx";
import About from "./About/About.tsx";
import Experience from "./Experience/Experience.tsx";
import Contact from "./Contact/Contact.tsx";
import Project from "./Project/Project.tsx";

document.title = "Portfolio"

const PortfolioApp = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Slider />
        <div className="pt-5 pb-5">
          <About />
        </div>
        <div className="pt-5 pb-5">
          <Experience />
        </div>
        <div className="pt-5 pb-5">
          <Project />
        </div>
        <div className="pt-5 pb-5">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default PortfolioApp;
