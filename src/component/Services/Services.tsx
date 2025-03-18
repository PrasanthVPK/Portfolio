import { service_info } from "../mock";
import "./service.css";

const Services = () => {
  return (
    <>
      <h2 className="mb-5 text-center service-heading">Services & Expertise</h2>

      <div className="d-flex justify-content-between flex-wrap">
        {service_info.map((values, index) => (
          <div key={index} className="card col-lg-4 justify-content-center p-4">
            <div className="d-flex justify-content-center mb-3">
              <span className="text-center d-flex justify-content-center icon-div">
                {values.service_icon}
              </span>
            </div>
            <div className="card-body p-0">
              <h5 className="card-title text-center">{values.service_name}</h5>
              <p className="card-text text-center">{values.service_desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
