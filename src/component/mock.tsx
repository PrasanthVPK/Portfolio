import React from "react";
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
    location: "Coimbatore, Tamil Nadu, India"
  },
];

export const skill_info = [
  "React",
  "JavaScript",
  "Git and GitHub",
  "Redux",
  "Redux Toolkit",
  "CSS",
];

export const education_info = [
  {
    id: 1,
    college_name: "PSG Polytechnic College",
    degree: "Diploma in Electronics and Communication Engineering",
    year_of_completion: "2020"
  }
]

export const work_experience = [
  {
    id: 1,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Jr. Software Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Feb 2024 – Present",
    description:
      "Expertise in React, TypeScript, and CSS. Key contributions include developing the AI-powered ZITA Recruiting Web Application, web application revamping, and deployment. Worked on page optimization, module revamping, and content updates, as well as troubleshooting, debugging, and performance optimization. Delivered responsive, user-friendly designs aligned with business objectives.",
  },
  {
    id: 2,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Intern - Front-end Developer",
    location: "Coimbatore, Tamil Nadu",
    duration: "June 2023 – Jan 2024",
    description:
      "Trained as Front-end Developer for Web Application Creation in platform of React, TypeScript and CSS. Involved in developing Recruiting Web Application Creation named ZITA with AI.",
  },
  {
    id: 3,
    company_name: "Pricol Limited",
    role: "Apprentice Trainee - Process Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Oct 2020 – Nov 2022",
    description:
      "Assembly Line Specialist with experience in installing assembly lines for LED backlight modules and instrument clusters. Involved in purchasing SMT machines for PCB assembly, vendor handling, machine panel wiring, and material handling in electronic stores.",
  },
];

export const nav_menu = [
  {
    id: 1,
    nav_name: "Home",
    nav_link: "#",
  },
  {
    id: 2,
    nav_name: "About",
    nav_link: "#",
  },
  {
    id: 3,
    nav_name: "Contact",
    nav_link: "#",
  },
  {
    id: 4,
    nav_name: "Portfolio",
    nav_link: "#",
  },
];

export const project_experience = [
  {
    id: 1,
    project_name: "Zita Applicant Tracking System (ATS)",
    desc: "Designed and developed the UI and functionality for an Applicant Database application, optimizing application modules for improved performance. Played a key role in developing automated emailing functionality with user-customizable email templates and contributed to the creation of an Email Template Hub module. Worked on AI-based feature development and revamped application modules based on requirements. Additionally, contributed to the UI and functionality development of the Subscription module.",
  },
  {
    id: 2,
    project_name: "Standalone API Service",
    desc: "Played a key role in developing a separate API module feature in the ZITA (Applicant Tracking System) application, handling account creation for API access in AWS. Worked on both Postman testing and the development of a standalone application for the API module. Contributed to the UI and functionality development of the Subscription module and participated in the deployment of the application using AWS Amplify. Additionally, involved in API code building to enhance system functionality.",
  },
];

export const contact_links = [
  {
    id: 1,
    icon: <FontAwesomeIcon className="fs-4" icon={faFacebook} />,
    link: "https://www.facebook.com/prasanthkumarprofile",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon className="fs-4" icon={faInstagram} />,
    link: "https://www.instagram.com/prasanth_02_/",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon className="fs-4" icon={faLinkedin} />,
    link: "https://www.linkedin.com/in/prasanth-kumar-v/",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon className="fs-4" icon={faXTwitter} />,
    link: "https://x.com/_prasanth_002_",
  },
];
