import React from "react";
import logo from "../../images/tonyarts-logos_black.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logoWrapper">
        <a href="/">
          <img alt="Tonyarts logo" className="hero__logo" src={logo} />
        </a>
      </div>
      <nav>
        <ul className="header__nav">
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
