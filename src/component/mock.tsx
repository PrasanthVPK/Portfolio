import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faReact,
  faJs,
  faGithub,
  faCss,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const personal_info = [
  {
    id: 1,
    name: "Prasanth Kumar V",
    role: "Jr. Software Engineer",
    contact: "+91 77083 50638",
    email: "prasanthkumarv02@gmail.com",
    linkedin: "https://www.linkedin.com/in/prasanth-kumar-v/",
    dob: "18th September 2001",
    location: "Coimbatore, Tamil Nadu, India",
  },
];

export const skill_info = [
  <FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC" }} />,
  <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B" }} />,
  <img
    src="/assets/images/typescript_icon.svg"
    alt=""
    width="40"
    height="40"
  />,
  <FontAwesomeIcon icon={faHtml5} style={{ color: "#F06529" }} />,
  <FontAwesomeIcon icon={faCss} />,
  <FontAwesomeIcon icon={faGithub} />,
  <FontAwesomeIcon icon={faBootstrap} style={{ color: "#B197FC" }} />,
];

export const education_info = [
  {
    id: 1,
    college_name: "PSG Polytechnic College",
    degree: "Diploma in Electronics and Communication Engineering",
    year_of_completion: "2020",
  },
];

export const work_experience = [
  {
    id: 1,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Jr. Software Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Feb 2024 – Present",
    img: "/assets/images/software.jpg",
    description:
      "Expertise in React, TypeScript, and CSS. Key contributions include developing the AI-powered ZITA Recruiting Web Application, web application revamping, and deployment. Worked on page optimization, module revamping, and content updates, as well as troubleshooting, debugging, and performance optimization. Delivered responsive, user-friendly designs aligned with business objectives.",
  },
  {
    id: 2,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Front-end Developer",
    location: "Coimbatore, Tamil Nadu",
    duration: "June 2023 – Jan 2024",
    img: "/assets/images/frontend.jpg",
    description:
      "Trained as Front-end Developer for Web Application Creation in platform of React, TypeScript and CSS. Involved in developing Recruiting Web Application Creation named ZITA with AI.",
  },
  {
    id: 3,
    company_name: "Pricol Limited",
    role: "Apprentice - Process Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Oct 2020 – Nov 2022",
    img: "/assets/images/electronics.jpg",
    description:
      "Assembly Line Specialist with experience in installing assembly lines for LED backlight modules and instrument clusters. Involved in purchasing SMT machines for PCB assembly, vendor handling, machine panel wiring, and material handling in electronic stores.",
  },
];

const handleScrollToHome = () => {
  setTimeout(() => {
    const homeElement = document.getElementById("home-section");

    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const handleScrollToPortfolio = () => {
  setTimeout(() => {
    const portfolioElement = document.getElementById("portfolio-section");
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const handleScrollToAbout = () => {
  setTimeout(() => {
    const aboutElement = document.getElementById("about-section");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const handleScrollToExp = () => {
  setTimeout(() => {
    const experienceElement = document.getElementById("exp-section");

    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const handleScrollToContact = () => {
  setTimeout(() => {
    const contactElement = document.getElementById("contact-section");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

export const nav_menu = [
  {
    id: 1,
    nav_name: "Home",
    nav_link: "#",
    onClick: handleScrollToHome,
  },
  {
    id: 2,
    nav_name: "About",
    nav_link: "#",
    onClick: handleScrollToAbout,
  },
  {
    id: 3,
    nav_name: "Experience",
    nav_link: "#",
    onClick: handleScrollToExp,
  },
  {
    id: 4,
    nav_name: "Portfolio",
    nav_link: "#",
    onClick: handleScrollToPortfolio,
  },
  {
    id: 5,
    nav_name: "Contact",
    nav_link: "#",
    onClick: handleScrollToContact,
  },
];

export const project_experience = [
  {
    id: 1,
    project_name: "Zita Applicant Tracking System (ATS)",
    desc1: "Designed and developed the UI and functionality for an Applicant Database application, optimizing application modules for improved performance. Played a key role in developing automated emailing functionality with user-customizable email templates and contributed to the creation of an Email Template Hub module. Worked on AI-based feature development and revamped application modules based on requirements. Additionally, contributed to the UI and functionality development of the Subscription module.",
    company_name: "Sense7ai Data Solution Pvt Ltd",
    img: "/assets/images/zita_logo.webp",
    overview: (
      <>
        <div>
          <p className="mb-3">
            An AI-powered recruiting web application designed to streamline the
            hiring process. It enables efficient applicant tracking, automated
            communication, and workflow customization, helping recruiters manage
            candidates seamlessly.
          </p>
        </div>
      </>
    ),
    desc: (
      <>
        <div>
          <div className="d-lg-flex mt-2">
            <div className="p-lg-4 col-lg-4">
              <h5>Front-End Development & UI Optimization</h5>

              <ul className="p-0">
                <p className="fs-7 p-0 list-styles">
                  Developed interactive UI components to enhance user
                  experience. Implemented React Router (v6) for smooth
                  navigation and route management. Integrated Redux & Redux
                  Toolkit for efficient state management.
                </p>
              </ul>
            </div>

            <div className="p-lg-4 col-lg-4">
              <h5>Automated Email Functionality</h5>

              <ul className="p-0">
                <p className="fs-7 p-0 list-styles">
                  Developed a custom email notification system for recruiters.
                  Integrated Formik for form handling, ensuring seamless email
                  template creation.
                </p>
              </ul>
            </div>

            <div className="p-lg-4 col-lg-4">
              <h5>Candidate Profile Management</h5>

              <ul className="p-0">
                <p className="fs-7 p-0 list-styles">
                  Implemented dynamic filtering and sorting of candidate
                  profiles. Optimized data handling and state management for
                  better performance.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    project_name: "Standalone API Module for ZITA ATS",
    desc1: "Played a key role in developing a separate API module feature in the ZITA (Applicant Tracking System) application, handling account creation for API access in AWS. Worked on both Postman testing and the development of a standalone application for the API module. Contributed to the UI and functionality development of the Subscription module and participated in the deployment of the application using AWS Amplify. Additionally, involved in API code building to enhance system functionality.",
    company_name: "Sense7ai Data Solution Pvt Ltd",
    // img: "/assets/images/sense-logo.png",
    img: "/assets/images/zita_logo.webp",
    overview:
      "A separate API module developed for ZITA ATS, allowing third-party applications to integrate seamlessly. The module provides secure API access, authentication, and data retrieval for external services.",

    desc: (
      <>
        <div>
          <div className="d-lg-flex mt-2">
            <div className="px-lg-4">
              <ul className="p-0 mt-0 custom-list">
                <li className="fs-7 list-styles">
                  Implemented secure API authentication for user account access.
                </li>
                <li className="fs-7 list-styles">
                  Developed an API key management system for external
                  integrations.
                </li>
                <li className="fs-7 list-styles">
                  Tested API requests and responses using Postman.
                </li>
                <li className="fs-7 list-styles">
                  Assisted in AWS deployment and server configuration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export const contact_links = [
  {
    id: 1,
    icon: <FontAwesomeIcon className="fs-lg-4 fs-8" icon={faFacebook} />,
    link: "https://www.facebook.com/prasanthkumarprofile",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon className="fs-lg-4 fs-8" icon={faInstagram} />,
    link: "https://www.instagram.com/prasanth_02_/",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon className="fs-lg-4 fs-8" icon={faLinkedin} />,
    link: "https://www.linkedin.com/in/prasanth-kumar-v/",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon className="fs-lg-4 fs-8" icon={faXTwitter} />,
    link: "https://x.com/_prasanth_002_",
  },
];
