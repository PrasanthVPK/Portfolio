import React, { useState, useEffect } from "react";
import "./navbar.css";
import { nav_menu } from "../mock.tsx";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // 992px is the Bootstrap lg breakpoint

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
      {!isMobile ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand p-2 text-white" href="#">
              <h2 className="logoStyles">VP</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-lg-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 text-white">
                {nav_menu.map((value) => (
                  <li key={value.id} className="nav-item text-white">
                    <a
                      className="nav-link active p-3 text-white"
                      aria-current="page"
                      href={value.nav_link}
                    >
                      {value.nav_name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand p-2 text-white" href="#">
              <h2 className="logoStyles">VP</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <h2 className="logoStyles">VP</h2>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {nav_menu.map((value) => (
                    <li key={value.id} className="nav-item text-white">
                      <a
                        className="nav-link active p-3 text-white"
                        aria-current="page"
                        href={value.nav_link}
                      >
                        {value.nav_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
