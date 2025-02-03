import React, { useState } from "react";
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
      <div className="d-lg-flex p-lg-5 m-lg-5">
        <div className="col-lg-6 col-sm-6 d-lg-flex justify-content-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <h1 className="mb-4">About Me</h1>
          <p>
            Motivated and detail-oriented Software Engineer specialising in
            front-end development with React, TypeScript CSS. Passionate about
            building scalable web applications and learning new technologies.
            Experienced in collaborating within agile teams to develop
            user-centric solutions and maintain high code quality.
          </p>
          <ul className="nav mb-4">
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
          {isDropdown.personal && (
            <div>
              {personal_info.map((value) => (
                <ul className="list-unstyled" key={value.id}>
                  <li>{value.name}</li>
                  <li>{value.role}</li>
                </ul>
              ))}
            </div>
          )}

          {isDropdown.contact && (
            <div>
              {personal_info.map((value) => (
                <ul className="list-unstyled" key={value.id}>
                  <li>{value.contact}</li>
                  <li>{value.email}</li>
                  <li>{value.linkedin}</li>
                </ul>
              ))}
            </div>
          )}

          {isDropdown.skill && (
            <div>
              <ul className="list-unstyled">
                {skill_info.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
