import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { work_experience } from "../mock";
import "./experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="experience-section">
      <h1 className="mb-0 mb-lg-5 mb-md-3 mt-5 text-center experience-heading">
        Work Experience
      </h1>

      <div className="d-flex flex-wrap justify-content-center">
        {work_experience.map((value, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start col-lg-6 col-md-6 col-sm-6 p-3"
          >
            <div className="number-div me-0 me-lg-4 col-2 p-4 p-lg-0">
              {value.img}
            </div>

            <div className="me-0 me-lg-3">
              <h3 className="role-styles mb-2 text-center text-lg-start">
                {value.role}
              </h3>
              <h4 className="mb-2 text-center text-lg-start">
                {value.company_name}
              </h4>
              <p className="mb-2 text-center text-lg-start">{value.duration}</p>

              <p className="text-justify">{value.description}</p>
            </div>
          </div>
        ))}

        {/* <div className="d-flex col-lg-6 col-md-6 col-sm-6  p-3">
          <div className="number-div me-3">
            <h1 className="m-0 p-0 number-text">1</h1>
          </div>

          <div className="me-3">
            <h2 className="role-styles m-0">Role</h2>
            <h4 className="m-0">Company Name</h4>
            <p className="m-0">Duration</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quasi laudantium ullam tempora voluptas. Ipsum iure,
              provident repellat porro nisi illum? Quasi, maiores rem.
              Voluptates, facere? Vero vitae enim rerum?
            </p>
          </div>
        </div>

        <div className="d-flex col-lg-6 col-md-6 col-sm-6  p-3">
          <div className="number-div me-3">
            <h1 className="m-0 p-0 number-text">1</h1>
          </div>

          <div className="me-3">
            <h2 className="role-styles m-0">Role</h2>
            <h4 className="m-0">Company Name</h4>
            <p className="m-0">Duration</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quasi laudantium ullam tempora voluptas. Ipsum iure,
              provident repellat porro nisi illum? Quasi, maiores rem.
              Voluptates, facere? Vero vitae enim rerum?
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
