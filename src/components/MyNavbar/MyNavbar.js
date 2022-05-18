import React from "react";
import "./MyNavbar.css";
import logo from "../../images/logo.png";
import Resume from "../../images/Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

// React fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-custom-2">
      <div className="container">
        <Link className="navbar-brand" exact to="/#Header">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" exact to="/#AboutMe">
                About <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/#PortfolioTop">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/#Contact">
                Contacts
              </Link>
            </li>
            <a
              type="button"
              class="btn btn-outline-secondary resume"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
