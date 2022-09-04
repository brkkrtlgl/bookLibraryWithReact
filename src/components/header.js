import React from "react";

const Header = (props) => {
  return (
    <nav
      style={{ backgroundColor: "#8fa2ca" }}
      className="navbar navbar-expand-lg "
    >
      <div className="container-fluid">
        <a style={{ color: "#EDF2F7" }} className="navbar-brand" href="#">
          My Library
        </a>
        <button
          style={{ color: "#EDF2F7" }}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                style={{ color: "#EDF2F7" }}
                className="nav-link active"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a style={{ color: "#EDF2F7" }} className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
