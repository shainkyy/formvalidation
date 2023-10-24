import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light " href="#">
            FormValidation
          </a>
          <button
            className="navbar-toggler text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a
                  className="nav-link  text-light "
                  aria-current="page"
                  href="#"
                >
                  Simple
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  AddingDynamic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  FileUpload
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  Reset
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  MultiStep
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
