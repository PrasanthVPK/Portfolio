import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { nav_menu } from "../mock";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgCss, setBgCss] = useState("navDiv");
  const [menuTextCss, setmenuTextCss] = useState("menu_text_style");
  const [image, setImage] = useState("logo.webp");
  const [menu_image, setMenuImage] = useState("menu_icon_white.svg");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToContact = () => {
    setTimeout(() => {
      const contactElement = document.getElementById("contact-section");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgCss("navDiv1");
        setmenuTextCss("menu_text_style1");
      } else {
        setBgCss("navDiv");
        setmenuTextCss("menu_text_style");
      }
      if (window.scrollY > 6) {
        setImage("logo1.webp");
        setMenuImage("ham_menu.svg");
      } else {
        setMenuImage("menu_icon_white.svg");
        setImage("logo.webp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(window.scrollY);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary navDiv pt-2 pb-2 ${bgCss}`}
      >
        <div className="container-fluid px-5">
          <p className="navbar-brand m-0">
            <h2 className="logoStyles m-0">
              <img
                src={`/assets/images/${image}`}
                alt=""
                style={{
                  width: "40px",
                }}
              />
            </h2>
          </p>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul
              style={{ marginLeft: "5rem" }}
              className="nav justify-content-center"
            >
              {nav_menu.map((value) => (
                <li
                  key={value.id}
                  className="nav-item"
                  style={{ fontWeight: "600", color: "#C0C0C0" }}
                >
                  <span
                    className={`nav-link active px-3 ${menuTextCss} m-0`}
                    aria-current="page"
                    onClick={value.onClick}
                  >
                    {value.nav_name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="navbar-toggler p-0"
            onClick={toggleNavbar}
            style={{
              border: "unset",
            }}
          >
            <img
              src={`/assets/images/${menu_image}`}
              alt=""
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </button>

          <div className="logoStyles m-0 d-none d-lg-flex">
            <button
              className="my-button"
              onClick={() => handleScrollToContact()}
            >
              <span style={{ marginTop: "2px" }}>Connect with me!</span>
            </button>
          </div>
        </div>

        <motion.div
          className="sidebarMob"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isOpen ? "0%" : "-100%", opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="d-flex justify-content-end">
            <button
              className="navbar-toggler p-2"
              onClick={toggleNavbar}
              style={{ border: "unset" }}
            >
              <IoIosClose
                style={{ height: "auto", width: "40px", fill: "white" }}
              />
            </button>
          </div>
          <ul className="mobile_menu">
            {nav_menu.map((value) => (
              <li key={value.id}>
                <p
                  className="mobile_menu_text m-0 p-3 text-center"
                  aria-current="page"
                  onClick={() => {
                    value.onClick();
                    setIsOpen(false);
                  }}
                >
                  {value.nav_name}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
