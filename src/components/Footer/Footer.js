import React from "react";
import "./Footer.css";
import Logo from "../../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-wrapper">
        <Link className="nav-link" exact to="/#Header">
          <img src={Logo} alt="" className="footer-image" />
        </Link>
        <div className="footer-title">
          Developed by Joel using ReactJS and Bootstrap.
        </div>
        <div className="footer-credits">
          © All media, including videos, logos, and images are used for
          non-commercial identification only, and belong to their respective
          owners.
        </div>
      </div>
    </div>
  );
};

export default Footer;
