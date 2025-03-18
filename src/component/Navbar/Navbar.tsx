import { useEffect, useState } from "react";
import { nav_menu } from "../mock";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgCss, setBgCss] = useState("navDiv");
  const [menuTextCss, setmenuTextCss] = useState("menu_text_style");
  const [image, setImage] = useState("logo.webp");

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
        setImage("logo1.webp");
      } else {
        setBgCss("navDiv");
        setmenuTextCss("menu_text_style");
        setImage("logo.webp");
      }
      if (window.scrollY > 6) {
        setImage("logo1.webp");
      } else {
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
              // background: "#2C2C2C",
              // borderRadius: "15px",
              border: "unset",
            }}
          >
            <img
              src="/assets/images/ham_menu.svg"
              alt=""
              style={{
                width: "40px",
                height: "40px",
              }}
              className={`menu-icon ${isOpen ? "rotate-icon" : ""}`}
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

        {isOpen && (
          <div
            className="sidebarMob"
            data-aos={isOpen ? "fade-left" : "fade-right"}
          >
            <button
              className="navbar-toggler p-2"
              onClick={toggleNavbar}
              style={{
                borderRadius: "15px",
              }}
            >
              <img
                src="/assets/images/cross_icon.svg"
                alt=""
                style={{
                  width: "25px",
                  height: "25px",
                }}
                className={`menu-icon ${isOpen ? "rotate-icon" : ""}`}
              />
            </button>
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
