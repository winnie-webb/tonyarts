import React from "react";

const hero = ({ artworkRef }) => {
  return (
    <section className="hero flex-column">
      <div className="hero__contentWrapper">
        <h1 className="hero__heading heading">Welcome to Tonyarts</h1>
        <p className="hero__content">Where your reality becomes art</p>
        <div
          className="btn hero__btn"
          onClick={() => {
            artworkRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Discover Now
        </div>
      </div>
      <div className="hero__imageWrapper"></div>
    </section>
  );
};
export default hero;
