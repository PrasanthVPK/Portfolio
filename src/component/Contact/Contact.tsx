import React, { useState } from "react";
import "./contact.css";
import { contact_links } from "../mock.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await fetch("https://formspree.io/f/meoaqnky", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        } else {
          toast.error("Failed to send the message. Please try again.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
      }

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
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="d-lg-flex">
        <div className="col-lg-6 m-0 mb-4">
          <h1>Contact me!</h1>

          <div className="d-flex align-items-center p-3">
            <FontAwesomeIcon icon={faPhone} className="fs-4" />
            <p className="ms-3 mb-0">+91 77083 50638</p>
          </div>

          <div className="d-flex align-items-center p-3">
            <FontAwesomeIcon icon={faEnvelope} className="fs-4" />
            <p className="ms-3 mb-0">prasanthkumarv02@gmail.com</p>
          </div>

          <div className="d-flex mt-3 mb-3">
            {contact_links.map((value) => (
              <a
                key={value.id}
                className="me-3 icon-tags"
                href={value.link}
                target="__blank"
                rel="noopener noreferrer"
              >
                {value.icon}
              </a>
            ))}
          </div>

          <div className="pt-4 pb-4">
            <button
              type="button"
              onClick={handleDownload}
              className="my_button"
            >
              <p className="text-black m-0 p-0">Resume</p>
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
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write a Message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="my_button" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
