import React from "react";
import "./Header.css";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" id="Header">
      <div id="color-overlay" />
      <div className="main-info">
        {/* <h1>“If you don’t value your time, neither will others."</h1>
        <h4>- Kim Garst</h4> */}
        <h1>A Daily Coder</h1>
        <h7>- Bringing code into reality</h7>
        {/* <Typed
          className="typed-text"
          typeSpeed={40}
          backSpeed={60}
          loop
          strings={["Bringing code into reality"]}
        /> */}
      </div>
    </div>
  );
};

export default Header;
