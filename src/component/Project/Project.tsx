import { project_experience } from "../mock";
import "./project.css";

const Project = () => {
  return (
    <>
      <h1 className="mb-5 project-heading text-center">Project Experience</h1>

      <div className="d-lg-flex" data-aos="fade-in">
        {project_experience.map((values, index) => (
          <div
            key={index}
            className="col-lg-6 p-4 d-lg-flex bg-white mx-2 mb-5 mb-lg-0 project-card"
          >
            <div className="d-flex align-items-center justify-content-center mx-lg-4 m-0">
              {values.img}
            </div>

            <div>
              <h4>{values.project_name}</h4>
              <h5>{values.company_name}</h5>
              <div>{values.desc1}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
