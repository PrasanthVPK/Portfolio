import React, { useState, useEffect } from "react";
import "./navbar.css";
import { nav_menu } from "../mock.tsx";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // 992px is the Bootstrap lg breakpoint
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navDiv">
        <div className="container-fluid">
          <p className="navbar-brand m-0 text-white">
            <h2 className="logoStyles m-0">
              <img
                src="/assets/images/logo.png"
                alt=""
                style={{
                  width: '70px',
                  height: '70px',
                }}
              />
            </h2>
          </p>
          <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
            style={{
              background: '#2C2C2C',
              borderRadius: '15px',
            }}
          >
            <img
              src="/assets/images/ham_menu.svg"
              alt=""
              style={{
                width: '40px',
                height: '40px',
              }}
              className={`menu-icon ${isOpen ? "rotate-icon" : ""}`}
            />
          </button>
          <div
            className="collapse navbar-collapse justify-content-lg-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 text-white">
              {nav_menu.map((value) => (
                <li key={value.id} className="nav-item text-white">
                  <p
                    className="nav-link active p-3 text-white m-0"
                    style={{ cursor: "pointer" }}
                    aria-current="page"
                    onClick={value.onClick}
                  >
                    {value.nav_name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
