import React, { useState } from "react";
import "./contact.css";
import { contact_links } from "../mock.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import PopupModal from "../../kit/PopUp/Popup.tsx";

const Contact = () => {
  const [isResumeView, setResumeView] = useState(false);

  const handleResumeView = () => {
    setResumeView(!isResumeView);
  };

  const handleDownload = () => {
    const fileUrl = "/assets/Prasanth_Kumar_Resume.pdf"; // Correct path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Prasanth_Kumar_Resume.pdf"); // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="d-lg-flex">
        <div className="col-lg-6  m-0 mb-4">
          <h1>Contact me!</h1>

          <div className="d-flex align-items-center p-3">
            <FontAwesomeIcon icon={faPhone} className="fs-4" />
            <p className="ms-3 mb-0">+91 77083 50638</p>
          </div>

          <div className="d-flex align-items-center p-3">
            <FontAwesomeIcon icon={faEnvelope} className="fs-4" />
            <p className="ms-3 mb-0">prasanthkumarv02@gmail.com</p>
          </div>

          <div className="d-flex mt-3">
            {contact_links.map((value) => (
              <a
                key={value.id}
                className="me-3 icon-tags"
                href={value.link}
                target="__blank"
              >
                {value.icon}
              </a>
            ))}
          </div>

          <div className="pt-4 pb-4">
            <button
              type="submit"
              onClick={handleResumeView}
              className="btn btn-primary"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <input placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <input placeholder="Write a Message" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <PopupModal
          isOpen={isResumeView}
          setOpen={handleResumeView}
        >
          <iframe src="/assets/Prasanth_Kumar_Resume.pdf"></iframe>
        </PopupModal>
      </div>
    </>
  );
};

export default Contact;
