import React from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Slider from "./Slider/Slider.tsx";
import About from "./About/About.tsx";
import Experience from "./Experience/Experience.tsx";

const PortfolioApp = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Experience />
    </>
  );
};

export default PortfolioApp;
