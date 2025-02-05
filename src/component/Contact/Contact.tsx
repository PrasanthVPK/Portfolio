import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="d-lg-flex">
        <div className="col-lg-6  m-0 mb-4">
          <h1>Contact me!</h1>

          <div className="d-flex">
            <div className="m-2">
              <i className="bi bi-facebook fs-3"></i>
            </div>
            <div className="m-2">
              <i className="bi bi-whatsapp fs-3"></i>
            </div>
            <div className="m-2">
              <i className="bi bi-instagram fs-3"></i>
            </div>
            <div className="m-2">
              <i className="bi bi-twitter-x fs-3"></i>
            </div>
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
      </div>
    </>
  );
};

export default Contact;
