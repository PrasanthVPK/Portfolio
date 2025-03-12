import React from "react";
import { work_experience } from "../mock.tsx";

const Experience = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-4 mt-5">Work Experience</h1>

        {work_experience.map((value) => (
          <div key={value.id} className="d-lg-flex mb-5">
            <div className="col-lg-6">
              <h2>{value.company_name}</h2>
              <h3>{value.role}</h3>
              <h5 className="fw-normal">{value.location}</h5>
              <h6 className="fw-normal">{value.duration}</h6>
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
