import React from "react";
import { work_experience } from "../mock.tsx";

const Experience = () => {
  return (
    <>
      <div className="p-lg-5 m-lg-5">
        <h1>Work Experience</h1>

        {work_experience.map((value) => (
          <div key={value.id} className="d-lg-flex mb-4">
            <div className="col-lg-6">
              <h2>{value.company_name}</h2>
              <h3>{value.role}</h3>
              <h4>{value.location}</h4>
            </div>
            <div className="col-lg-6">
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
