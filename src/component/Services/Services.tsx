import { service_info } from "../mock";
import "./service.css";

const Services = () => {
  return (
    <>
      <h2 className="mb-5 text-center service-heading">Services & Expertise</h2>

      <div className="d-flex justify-content-lg-evenly justify-content-center flex-wrap">
        {service_info.map((values, index) => (
          <div key={index} className="card swiper-slide col-8 m-4">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image d-flex align-items-center justify-content-center">
                {values.service_icon}
              </div>
            </div>

            <div className="card-content">
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
