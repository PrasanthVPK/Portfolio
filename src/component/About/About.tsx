import React, { useState } from "react";
import './about.css';
import { education_info, skill_info } from "../mock.tsx";

const About = () => {
  const [isDropdown, setDropdown] = useState({
    education: true,
    skill: false,
  });

  const handleTogglePersonal = () => {
    setDropdown({ education: true, skill: false });
  };

  const handleToggleSkill = () => {
    setDropdown({ education: false, skill: true });
  };

  return (
    <>
      <div
        className="d-lg-flex justify-content-lg-center align-items-lg-start"
      >
        <div className="col-lg-5 col-sm-6 d-flex justify-content-center">
          <img
            src="/assets/images/about1.png"
            alt=""
            className="aboutImageStyles"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
          <h1 className="mb-4">About Me</h1>
          <p className="mb-4 mt-4 aboutDescription">
            Motivated and detail-oriented Software Engineer specialising in
            front-end development with React, TypeScript CSS. Passionate about
            building scalable web applications and learning new technologies.
            Experienced in collaborating within agile teams to develop
            user-centric solutions and maintain high code quality.
          </p>
          <ul className="nav mb-4 mt-4">
            <li className="nav-item">
              <div
                onClick={() => handleTogglePersonal()}
                className="nav-link active"
              >
                Education
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => handleToggleSkill()}
                className="nav-link active"
              >
                Skills
              </div>
            </li>
          </ul>

          <div className="m-3">
            {isDropdown.education && (
              <>
              {education_info.map((value)=>(
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
                <ul className="list-unstyled">
                  {skill_info.map((skill, index) => (
                    <li className="fs-6" key={index}>{skill}</li>
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
