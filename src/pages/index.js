import * as React from "react";
import "../sass/pages/index.scss";
import Header from "./layouts/header";
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <section className="hero">
            <div className="hero__contentWrapper">
              <h1 className="hero__heading">Welcome to TonyArts</h1>
              <p className="hero__content">Where your reality becomes art</p>
            </div>
            <div className="hero__imageWrapper"></div>
          </section>
        </article>
      </main>
    </>
  );
};

export default HomePage;
