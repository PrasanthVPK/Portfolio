import React, { useEffect, useState } from "react";
import "./about.css";
import { education_info, skill_info } from "../mock.tsx";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDropdown, setDropdown] = useState({
    education: true,
    skill: false,
    certifi: false,
  });

  const handleTogglePersonal = () => {
    setDropdown({ education: true, skill: false, certifi: false });
  };

  const handleToggleSkill = () => {
    setDropdown({ education: false, skill: true, certifi: false });
  };

  const handleToggleCertifi = () => {
    setDropdown({ education: false, skill: false, certifi: true });
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
        <div className="col-lg-5 col-sm-6 d-flex justify-content-center p-6 photo_height">
          <div className="hexagon">
            <img
              src="/assets/images/about1bg.png"
              alt=""
              className="aboutImageStyles"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 aboutContentHei">
          <h1 className="mb-4">About Me</h1>
          <p className="mb-4 mt-4 aboutDescription">
            A Front-end Developer focus on building scalable, user-friendly, and
            performance-optimized web applications, with expertise in UI
            revamping, developing AI-driven features, API integrations, and
            creating seamless user experiences.
          </p>
          <p className="mb-4 mt-4 aboutDescription">
            I am passionate about web performance optimization, accessibility,
            and responsive design, continuously improving my skills to stay
            updated with the latest technologies. I enjoy solving complex
            challenges and collaborating with teams to build efficient and
            high-quality applications. Let’s connect and create something
            impactful!
          </p>
          <ul className="nav mb-4 mt-4">
            <li className="nav-item">
              <div
                onClick={() => handleTogglePersonal()}
                className={`nav-link active nav_bar_style ${
                  isDropdown.education && "nav-link_selected"
                }`}
              >
                <p className="m-0 p-0">Education</p>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => handleToggleSkill()}
                className={`nav-link active nav_bar_style ${
                  isDropdown.skill && "nav-link_selected"
                }`}
              >
                <p className="m-0 p-0">Skills</p>
              </div>
            </li>
            {/* <li className="nav-item">
              <div
                onClick={() => handleToggleCertifi()}
                className={`nav-link active nav_bar_style ${
                  isDropdown.certifi && "nav-link_selected"
                }`}
              >
                <p className="m-0 p-0">Certifications</p>
              </div>
            </li> */}
          </ul>

          <div className="m-3">
            {isDropdown.education && (
              <>
                {education_info.map((value) => (
                  <div key={value.id}>
                    <p className="fs-6 m-0">{value.degree}</p>
                    <p className="fs-6 m-0">{value.college_name}</p>
                    <p className="fs-6 m-0">{value.year_of_completion}</p>
                  </div>
                ))}
              </>
            )}

            {isDropdown.skill && (
              <>
                <ul className="list-unstyled d-flex flex-wrap">
                  {skill_info.map((skill, index) => (
                    <li
                      className="me-3 d-flex justifiy-content-center align-items-center position-relative"
                      style={{ fontSize: "42px", marginBottom: "15px" }}
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
