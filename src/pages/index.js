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
                Don't worry if none of these are what you are looking for. You
                can get anything done as long as it is an artwork
              </p>
              <div className="artwork__askBtn btn">Contact Us</div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default HomePage;
