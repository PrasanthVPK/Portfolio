import React from "react";
import './navbar.css'
import { nav_menu } from "../mock.tsx";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
