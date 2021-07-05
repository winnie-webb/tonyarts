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
          <li>
            <a className="header__navLinks" href="/about-us">
              About Us
            </a>
          </li>
          <li>
            <a className="header__navLinks" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
