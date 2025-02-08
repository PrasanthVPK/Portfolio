import React from "react";
import { project_experience } from "../mock.tsx";

const Project = () => {
  return (
    <>
      <h1 className="mb-4">Project Experience</h1>

      {project_experience.map((value: any) => (
        <div key={value.id} className="mb-5">
          <h3 className="mb-3">{value.project_name}</h3>
          <p>{value.desc}</p>
        </div>
      ))}
    </>
  );
};

export default Project;
