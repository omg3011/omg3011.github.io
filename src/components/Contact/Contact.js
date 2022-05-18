import React from "react";
import "./Contact.css";
import Github from "../../images/github.png";
import Email from "../../images/email.png";
import Linkedin from "../../images/linkedin.png";
import Joel from "../../images/logo.png";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="contact-wrapper">
          <p className="contact-title">
            I'd love to keep in touch with fellow passionate developers!
          </p>
          <div class="row contact-row">
            <div class="col test">
              <a
                href="https://www.linkedin.com/in/joel-ong-jia-quan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="" className="contact-icon" />
              </a>
              <h7>linkedin.com/in/joel-ong-jia-quan/</h7>
            </div>
            <div class="col test">
              <a
                href="https://www.github.com/omg3011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="" className="contact-icon" />
              </a>
              <h7>github.com/omg3011</h7>
            </div>
            <div class="col test">
              <a href="">
                <img src={Email} alt="" className="contact-icon" />
              </a>
              <h7>joeljoel3011@gmail.com</h7>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
