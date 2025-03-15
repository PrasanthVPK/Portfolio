import React, { useEffect, useState } from "react";
import { project_experience } from "../mock.tsx";
import "./project.css";

const Project = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSelectedProject, setSelectedProject] = useState<string | null>("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDetails = (name: string) => {
    setSelectedProject(name);
  };

  return (
    <>
      <h1 className="mb-4">Project Experience</h1>

      {/* {project_experience.map((value: any) => (
        <div key={value.id} className="mb-5">
          <h3 className="mb-3">{value.project_name}</h3>
          <p>{value.desc}</p>
        </div>
      ))} */}

      <div className="d-lg-flex flex-lg-wrap justify-content-lg-center">
        {project_experience.map((value) => (
          <>
            <div
              key={value.id}
              className={`col-lg-6 p-4 ${
                isSelectedProject !== "" ? "d-none" : ""
              }`}
            >
              <div
                className={`card bg-dark text-white d-flex align-items-center ${
                  isSelectedProject !== "" ? "d-none" : "d-flex"
                }`}
                data-aos="zoom-in"
                data-aos-delay={value.id * 200}
              >
                <img
                  src={value.img}
                  style={{ width: "min-content" }}
                  alt="..."
                />
                <div className="card-img-overlay d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{value.project_name}</h5>
                    <p className="card-text">{value.company_name}</p>
                  </div>
                  <p>
                    <button
                      className="my_button"
                      onClick={() => handleDetails(value.project_name)}
                    >
                      More Details...
                    </button>
                  </p>
                </div>
              </div>
            </div>
            {isSelectedProject === value.project_name && (
              <div
                className="details-container-proj"
                data-aos="zoom-in"
                data-aos-delay={value.id * 200}
              >
                <div>
                  <h3 className="text-center">{value.project_name}</h3>
                  <p>{value.overview}</p>
                </div>
                <p>{value.desc}</p>

                <div className="d-flex justify-content-center">
                  <button
                    className="my_button"
                    onClick={() => setSelectedProject("")}
                  >
                    Return
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Project;
