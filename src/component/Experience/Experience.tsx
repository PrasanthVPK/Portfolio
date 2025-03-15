import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { work_experience } from "../mock.tsx";
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
    setSelectedRole((prevRole) => (prevRole === role ? null : role));
  };

  {
    console.log("selectedRole", selectedRole);
  }

  return (
    <div className="experience-section">
      <h1 className="mb-5 mt-2">Work Experience</h1>

      <div className="d-lg-flex flex-row justify-content-between mb-2">
        {work_experience.map((value, index) => (
          <>
            <div
              key={index}
              className={`col-lg-3 card me-lg-4 p-3 mb-4 ${
                !isMobile && "my_card"
              } ${selectedRole !== "" ? " d-none" : "d-flex"}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                className="card-img-top"
                src={value.img}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title title-styles">{value.role}</h5>
              </div>
              <ul className="list-styles">
                <li className="list-group-item">{value.company_name}</li>
                <li className="list-group-item">{value.location}</li>
                <li className="list-group-item">{value.duration}</li>
              </ul>
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
