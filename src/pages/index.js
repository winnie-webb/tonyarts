import * as React from "react";
import "../sass/pages/index.scss";
import Header from "./layouts/header";
import spiritJM from "../images/spirit-jm.jpg";
import bob from "../images/bob-marley.jpg";
import fishes from "../images/fishes.jpg";
import wolvesArt from "../images/wolves.jpg";
import carvingArt from "../images/carving.jpg";
import horsesArt from "../images/horses.jpg";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <section className="hero">
            <div className="hero__contentWrapper">
              <h1 className="hero__heading">Welcome to Tonyarts</h1>
              <p className="hero__content">Where your reality becomes art</p>
              <div className="btn hero__btn">Discover Now</div>
            </div>
            <div className="hero__imageWrapper"></div>
          </section>
          <section className="artwork">
            <h2 className="artwork__heading">Get Started</h2>
            <div className="artwork-view">
              <div className="artwork__imageWrapper">
                <img src={wolvesArt} alt="Painting of wolves" />
              </div>
              <div className="artwork__imageWrapper">
                <img src={spiritJM} alt="Jamaican Art" />
              </div>
              <div className="artwork__imageWrapper">
                <img src={bob} alt="Bob Marley painting" />
              </div>
              <div className="artwork__imageWrapper">
                <img src={fishes} alt="Painting of two fishes" />
              </div>
              <div className="artwork__imageWrapper">
                <img src={carvingArt} alt="Jamaican Sculpture" />
              </div>
              <div className="artwork__imageWrapper">
                <img src={horsesArt} alt="Oil painting of two horses" />
              </div>
            </div>
            <div className="artwork__ask">
              <h2 className="artwork__askHeading">
                See anything interesting ?
              </h2>
              <p>
                Don't worry if these are not what you're looking for. You can
                get anything done as long as it is an artwork
              </p>
              <div className="artwork__askBtn btn">Contact Us</div>
            </div>
          </section>
          <section className="about-us">
            <div className="about-us__imageWrapper"></div>
            <div className="about-us__contentWrapper">
              <h2 className="about-us__heading">What we're about</h2>
              <p className="about-us__content">
                Tonyarts is currently captained by a well known artist, Anthony
                Lname, in the St.James region of Jamaica. He can do anything
                that has to do with creativeness. Here at Tonyarts we accept any
                request you have and strive to do our absolute best in turning{" "}
                <b>your reality into art</b>
              </p>
              <div className="about-us__btn btn">Contact Us</div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default HomePage;
