import "./about.css";

const About = () => {
  return (
    <>
      <h2 className="mb-4 text-center about-heading">
        About Me
      </h2>
      <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
        <div
          className="col-lg-5 d-flex justify-content-center photo_height"
          // data-aos="fade-right"
        >
          <div>
            <img
              src="/assets/images/about_photo.webp"
              alt=""
              className="aboutImageStyles"
            />
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <p className="mb-4 aboutDescription" data-aos="fade-left">
            A Front-end Developer focus on building scalable, user-friendly, and
            performance-optimized web applications, with expertise in UI
            revamping, developing AI-driven features, API integrations, and
            creating seamless user experiences.
          </p>
          <p className="mb-4 mt-4 aboutDescription" data-aos="fade-left">
            I am passionate about web performance optimization, accessibility,
            and responsive design, continuously improving my skills to stay
            updated with the latest technologies. I enjoy solving complex
            challenges and collaborating with teams to build efficient and
            high-quality applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
