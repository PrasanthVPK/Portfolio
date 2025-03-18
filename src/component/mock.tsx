import React, { JSX } from "react";
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
import { FaCodeBranch, FaTachometerAlt } from "react-icons/fa";
import SpeedIcon from "@mui/icons-material/Speed";
import WebIcon from "@mui/icons-material/Web";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import { SiRedux } from "react-icons/si";
import { faCode, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

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

export const skills_info = [
  {
    name: "React JS",
    icon: <FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC" }} />,
  },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B" }} />,
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="/assets/images/typescript_icon.svg"
        alt=""
        width="20"
        height="20"
        style={{ marginBottom: "5px" }}
      />
    ),
  },
  {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} style={{ color: "#F06529" }} />,
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss} />,
  },
  {
    name: "Github",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "Bootstrap",
    icon: <FontAwesomeIcon icon={faBootstrap} style={{ color: "#B197FC" }} />,
  },
];

export const education_info = [
  {
    id: 1,
    college_name: "PSG Polytechnic College",
    degree: "Diploma in Electronics and Communication Engineering",
    year_of_completion: "2020",
  },
];

export const service_info = [
  {
    id: 1,
    service_name: "Front-end Development",
    service_desc:
      " I build dynamic, responsive, and optimized UIs using React, Next.js, TypeScript, and CSS, ensuring seamless user experiences.",
    service_icon: <CodeIcon className="miui-icon-styles" />,
  },
  {
    id: 2,
    service_name: "Web Development",
    service_desc:
      "I develop scalable, SEO-friendly web applications with React, Next.js, JavaScript, and API integrations, focusing on performance and deployment.",
    service_icon: <WebIcon className="miui-icon-styles" />,
  },
  {
    id: 3,
    service_name: "UI/UX Designing",
    service_desc:
      "I craft pixel-perfect, accessible, and interactive web interfaces using HTML, CSS, Tailwind, and JavaScript frameworks to enhance user experience.",
    service_icon: <DesignServicesIcon className="miui-icon-styles" />,
  },
  {
    id: 4,
    service_name: "Version Control",
    service_desc:
      "I efficiently manage and collaborate on code using Git and GitHub, ensuring smooth development workflows and secure version control.",
    service_icon: (
      <FaCodeBranch className="miui-icon-styles" />
    ) as JSX.Element,
  },
  {
    id: 5,
    service_name: "State Management",
    service_desc:
      "I manage application state efficiently using Redux, Redux Toolkit, and React Context API, ensuring smooth data flow and enhanced performance.",
    service_icon: (<SiRedux className="miui-icon-styles" />) as JSX.Element,
  },
  {
    id: 6,
    service_name: "Performance Optimization",
    service_desc:
      "I optimize web applications for speed and efficiency by implementing lazy loading, code splitting, caching, and best practices for performance tuning.",
    service_icon: <SpeedIcon className="miui-icon-styles" />,
  },
];

export const work_experience = [
  {
    id: 1,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Jr. Software Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Feb 2024 – Present",
    img: (
      <img
        src="/assets/images/softwareeng.webp"
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
    ),
    description:
      "Developing and optimizing web applications using React, TypeScript, and Next.js. Worked on the ZITA ATS platform, focusing on UI/UX development, module revamping, API integration, and email automation. Also contributed to website deployment, SEO-based content creation, and AWS hosting.",
  },
  {
    id: 2,
    company_name: "Sense7ai Data Solution Pvt Ltd",
    role: "Front-end Developer",
    location: "Coimbatore, Tamil Nadu",
    duration: "June 2023 – Jan 2024",
    img: (
      <img
        src="/assets/images/programming.webp"
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
    ),

    description:
      "Handled assembly line installation, SMT machine procurement, vendor coordination, and material management for LED backlight modules and instrument clusters. Worked on machine panel wiring, PCB assembly, and process optimization in electronics manufacturing.",
  },
  {
    id: 3,
    company_name: "Pricol Limited",
    role: "Apprentice - Process Engineer",
    location: "Coimbatore, Tamil Nadu",
    duration: "Oct 2020 – Nov 2022",
    img: (
      <img
        src="/assets/images/printed-circuit-board.webp"
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
    ),

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

const handleScrollToSkills = () => {
  setTimeout(() => {
    const skillElement = document.getElementById("skills-section");
    if (skillElement) {
      skillElement.scrollIntoView({ behavior: "smooth" });
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

const handleScrollToService = () => {
  setTimeout(() => {
    const serviceElement = document.getElementById("service-section");
    if (serviceElement) {
      serviceElement.scrollIntoView({ behavior: "smooth" });
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
    nav_name: "Skills",
    nav_link: "#",
    onClick: handleScrollToSkills,
  },
  {
    id: 4,
    nav_name: "Service",
    nav_link: "#",
    onClick: handleScrollToService,
  },
  {
    id: 4,
    nav_name: "Experience",
    nav_link: "#",
    onClick: handleScrollToExp,
  },
  {
    id: 5,
    nav_name: "Projects",
    nav_link: "#",
    onClick: handleScrollToPortfolio,
  },
  {
    id: 6,
    nav_name: "Contact",
    nav_link: "#",
    onClick: handleScrollToContact,
  },
];

export const project_experience = [
  {
    id: 1,
    project_name: "Zita Applicant Tracking System (ATS)",
    desc1:
      "Designed and developed the UI and functionality for an Applicant Database application, optimizing performance and enhancing modules. Led the development of automated emailing with customizable templates and contributed to the Email Template Hub. Worked on AI-based features and revamped modules as per requirements.",
    company_name: "Sense7ai Data Solution Pvt Ltd",
    // img: "/assets/images/zita_logo.webp",
    img: <img src="/assets/images/zita_logo.webp" alt="" width="100px" />,
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
  },
  {
    id: 2,
    project_name: "Standalone API Module for ZITA ATS",
    desc1:
      "Led the development of a separate API module for the ZITA ATS, managing API access in AWS and Postman testing. Built a standalone API application and contributed to deployment via AWS Amplify. Enhanced system functionality through API code development.",
    company_name: "Sense7ai Data Solution Pvt Ltd",
    // img: "/assets/images/sense-logo.png",
    // img: "/assets/images/zita_logo.webp",
    img: <img src="/assets/images/zita_logo.webp" alt="" width="100px" />,
    overview:
      "A separate API module developed for ZITA ATS, allowing third-party applications to integrate seamlessly. The module provides secure API access, authentication, and data retrieval for external services.",
  },
];

export const contact_links = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        className="fs-lg-4 fs-8"
        icon={faFacebook}
        style={{ color: "#5171F1" }}
      />
    ),
    link: "https://www.facebook.com/prasanthkumarprofile",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        className="fs-lg-4 fs-8"
        icon={faInstagram}
        style={{ color: "#5171F1" }}
      />
    ),
    link: "https://www.instagram.com/prasanth_02_/",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        className="fs-lg-4 fs-8"
        icon={faLinkedin}
        style={{ color: "#5171F1" }}
      />
    ),
    link: "https://www.linkedin.com/in/prasanth-kumar-v/",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon
        className="fs-lg-4 fs-8"
        icon={faXTwitter}
        style={{ color: "#5171F1" }}
      />
    ),
    link: "https://x.com/_prasanth_002_",
  },
];
