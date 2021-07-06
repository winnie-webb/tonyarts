import React from "react";

const AboutUs = ({ aboutUsRef, contactUsRef }) => {
  return (
    <section ref={aboutUsRef} className="about-us flex-column">
      <div className="about-us__imageWrapper"></div>
      <div className="about-us__contentWrapper">
        <h2 className="about-us__heading heading">What we're about</h2>
        <p className="about-us__content">
          Tonyarts is currently captained by a well known artist, Anthony Lname,
          in the St.James region of Jamaica. He can do anything that has to do
          with creativeness. Here at Tonyarts we accept any request you have and
          strive to do our absolute best in turning <b>your reality into art</b>
        </p>
        <div
          className="about-us__btn btn"
          onClick={() => {
            contactUsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
