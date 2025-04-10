import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { service_info } from "../mock";
import "./service.css";

const Services = () => {
  // const [chunkSize, setChunkSize] = useState(3);
  const [groupedServices, setGroupedServices] = useState<any[][]>([]);

  const getChunkSize = (width: number) => {
    if (width < 576) return 1;
    if (width < 992) return 2;
    return 3;
  };

  const chunkArray = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  useEffect(() => {
    const handleResize = () => {
      const newSize = getChunkSize(window.innerWidth);
      setGroupedServices(chunkArray(service_info, newSize));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <h2 className="mb-5 text-center service-heading">Services & Expertise</h2>

      <div
        id="carouselControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {groupedServices.map((group, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-evenly">
                {group.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="card col-12 col-sm-10 col-md-6 col-lg-4 mx-3"
                  >
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image d-flex align-items-center justify-content-center">
                        {service.service_icon}
                      </div>
                    </div>

                    <div className="card-content">
                      <h5 className="card-title text-center">
                        {service.service_name}
                      </h5>
                      <p className="card-text text-center">
                        {service.service_desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-primary mx-2 align-items-center d-flex"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="prev"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="btn btn-primary mx-2 align-items-center d-flex"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="next"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
