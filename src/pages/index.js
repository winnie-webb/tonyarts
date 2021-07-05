import * as React from "react";
import "../sass/pages/index.scss";
// Layouts
import Header from "./layouts/header";
// Components
import Hero from "./components/hero";
import Artwork from "./components/artwork";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
const HomePage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Artwork></Artwork>
          <AboutUs></AboutUs>
          <ContactUs></ContactUs>
        </article>
      </main>
    </>
  );
};

export default HomePage;
