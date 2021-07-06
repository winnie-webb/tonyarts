import React from "react";
import logo from "../../images/tonyarts-logos_black.png";

const Header = (props) => {
  const { aboutUsRef, contactUsRef } = props;
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
            <a
              href="#"
              onClick={() => {
                aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                contactUsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
