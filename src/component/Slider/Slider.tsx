import React, { useEffect, useState } from "react";
import "./slider.css";

const Slider = () => {
  const [componentHeight, setComponentHeight] = useState(
    window.innerHeight - 245,
  );


  useEffect(() => {
    const handleResize = () => {
      setComponentHeight(window.innerHeight - 245);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="backgroundImageStyles sm-backgroundImageStylesSM" style={{ height: componentHeight }}>
        <div>
          <h1>
            I'm <strong>Prasanth Kumar</strong>
          </h1>
          <h2 className="taglineStyles">A Dedicated Software Engineer</h2>
        </div>
      </div>
    </>
  );
};

export default Slider;
