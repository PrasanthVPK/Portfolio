import React from "react";
import "./slider.css";

const Slider = () => {
  const bannerStyle = {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB)", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "right", // Align the background image to the right
    height: "100vh", // You can adjust the height
    backgroundAttachment: "fixed", // This will keep the image fixed
  };
  return (
    <>
      <div className="backgroundImageStyles sm-backgroundImageStylesSM" style={{ height: window.innerHeight -56 }}>
        <div>
          <h1>
            I'm <strong>Prasanth Kumar</strong>
          </h1>
          <h2>A Dedicated Software Engineer</h2>
        </div>
      </div>
    </>
  );
};

export default Slider;
