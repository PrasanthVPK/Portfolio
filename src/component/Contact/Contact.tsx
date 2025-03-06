import React, { useState } from "react";
import "./contact.css";
import { contact_links } from "../mock.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const scriptURL = "https://script.google.com/macros/s/AKfycbx_B0PEUODiGAA5F8zWEyXBYRJYPmUkXmXj3IweET2d0Qe5OQTEOopNUoTKtodcaEFHfg/exec";
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await response.text();
      if (result.includes("Success")) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed: " + result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Check console logs.");
    } finally {
      setLoading(false);
    }
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
              onClick={handleDownload}
              className="btn btn-primary"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="col-lg-6">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Write a Message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
