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
                <img src={wolvesArt} />
              </div>
              <div className="artwork__imageWrapper">
                <img src={spiritJM} />
              </div>
              <div className="artwork__imageWrapper">
                <img src={bob} />
              </div>
              <div className="artwork__imageWrapper">
                <img src={fishes} />
              </div>
              <div className="artwork__imageWrapper">
                <img src={carvingArt} />
              </div>
              <div className="artwork__imageWrapper">
                <img src={horsesArt} />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default HomePage;
