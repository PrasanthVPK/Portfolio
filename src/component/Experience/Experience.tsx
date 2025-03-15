import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { work_experience } from "../mock";
import "./experience.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedRole, setSelectedRole] = useState<any>("");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDetails = (role: string) => {
    setSelectedRole((prevRole: any) => (prevRole === role ? null : role));
  };

  return (
    <div className="experience-section">
      <h1 className="mb-5 mt-2">Work Experience</h1>

      <div className="d-lg-flex flex-row justify-content-between mb-2">
        {work_experience.map((value, index) => (
          <>
            <div
              key={index}
              className={`align-items-center col-lg-3 card me-lg-4 p-3 mb-4 ${
                !isMobile && "my_card"
              } ${selectedRole !== "" ? " d-none" : "d-flex"}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                className="card-img-top"
                style={{ width: 100, height: 100, margin: 20 }}
                src={value.img}
                alt="Card cap"
              />
              <div className="p-0 pt-3 pb-3 card-body">
                <h5 className="card-title title-styles m-0">{value.role}</h5>
              </div>
              <p className="p-0 m-0 list-group-item list-styles">
                {value.company_name}
              </p>
              <p className="p-0 m-0 list-group-item list-styles">{value.location}</p>
              <p className="p-0 m-0 list-group-item list-styles">{value.duration}</p>
              <div className="card-body">
                <button
                  className="my_button"
                  onClick={() => handleDetails(value.role)}
                >
                  Read More...
                </button>
              </div>
            </div>

            {selectedRole === value.role && (
              <div
                className="details-container"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h4>{value.company_name}</h4>
                <h5>{value.role}</h5>
                <p>{value.duration}</p>
                <p>{value.description}</p>
                <button
                  className="my_button"
                  onClick={() => setSelectedRole("")}
                >
                  Return
                </button>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
