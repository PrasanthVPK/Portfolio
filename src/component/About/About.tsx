import React, { useState } from "react";
import './about.css';
import { personal_info, skill_info } from "../mock.tsx";

const About = () => {
  const [isDropdown, setDropdown] = useState({
    personal: true,
    contact: false,
    skill: false,
  });

  const handleTogglePersonal = () => {
    setDropdown({ personal: true, contact: false, skill: false });
  };

  const handleToggleContact = () => {
    setDropdown({ personal: false, contact: true, skill: false });
  };

  const handleToggleSkill = () => {
    setDropdown({ personal: false, contact: false, skill: true });
  };

  return (
    <>
      <div
        className="d-lg-flex justify-content-lg-center align-items-lg-start"
      >
        <div className="col-lg-5 col-sm-6 d-flex justify-content-center">
          <img
            src="/assets/images/about_image.jpeg"
            alt=""
            className="aboutImageStyles"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 mt-4">
          <h1 className="mb-4">About Me</h1>
          <p className="mb-4 mt-4">
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
                Personal Info
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => handleToggleContact()}
                className="nav-link active"
              >
                Contact Info
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

          <div className="mb-4 mt-4">
            {isDropdown.personal && (
              <>
                {personal_info.map((value) => (
                  <ul className="list-unstyled" key={value.id}>
                    <li>{value.name}</li>
                    <li>{value.role}</li>
                  </ul>
                ))}
              </>
            )}

            {isDropdown.contact && (
              <>
                {personal_info.map((value) => (
                  <ul className="list-unstyled" key={value.id}>
                    <li>{value.contact}</li>
                    <li>{value.email}</li>
                    <li>{value.linkedin}</li>
                  </ul>
                ))}
              </>
            )}

            {isDropdown.skill && (
              <>
                <ul className="list-unstyled">
                  {skill_info.map((skill, index) => (
                    <li key={index}>{skill}</li>
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
