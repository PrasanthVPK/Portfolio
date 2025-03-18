import { useEffect, useState } from "react";
import { skills_info } from "../mock";
import "./skills.css";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h2 className="text-center mb-5 skill-heading">My Skills</h2>

      <div className="px-lg-5 mx-lg-5">
        <p className="skill-text-desc" data-aos="fade-up">
          I specialize in front-end development, focusing on creating intuitive
          and responsive user interfaces that enhance user experience. My
          expertise includes building dynamic web applications with efficient
          state management and seamless navigation. I have worked extensively on
          optimizing UI/UX, ensuring accessibility, and improving application
          performance for smooth interactions across devices.
        </p>
        <p className="skill-text-desc" data-aos="fade-up">
          Beyond front-end development, I have experience in API integration and
          development, working on authentication, data security, and seamless
          third-party integrations. I have contributed to enhancing web
          application modules by implementing automated workflows, improving
          functionality, and streamlining processes to boost efficiency.
        </p>
      </div>

      <div className=" d-flex flex-column flex-lg-row flex-lg-wrap justify-content-center">
        {skills_info.map((skill, index) => (
          <div
            className={`${isMobile && "mb-5"} ${
              !isMobile && " m-4"
            } d-flex justify-content-center`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div
              key={index}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: " fit-content",
              }}
            >
              <div className="skill-icon-circle">{skill.icon}</div>
              <div className="skill-text-bar">
                <span style={{ marginLeft: "30px", marginTop: "2px" }}>
                  {skill.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div
        className={`mt-5 d-flex flex-wrap justify-content-center ${
          isMobile && "justify-content-around"
        }`}
      > */}
      {/* {skills_info.map((skill, index) => (
          <div
            key={index}
            className={`${isMobile && "col-5"} ${
              !isMobile && " me-5"
            } d-flex justify-content-center`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div
              className={`emboss-inner ${
                !isMobile && "mb-5"
              } d-flex align-items-center justify-content-center`}
            >
              <div className="mt-1 d-flex">
                <div className="me-2 skill-icon">{skill.icon}</div>
                <div className="fw-bold skill-name">{skill.name}</div>
              </div>
            </div>
          </div>
        ))} */}

      {/* </div> */}
    </>
  );
};

export default Skills;
