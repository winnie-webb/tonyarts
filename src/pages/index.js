import * as React from "react";
import { useRef } from "react";
import "../sass/pages/index.scss";
// Layouts
import Header from "./layouts/header";
// Components
import Hero from "./components/hero";
import Artwork from "./components/artwork";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Footer from "./layouts/footer";
const HomePage = () => {
  const aboutUsRef = useRef();
  const contactUsRef = useRef();
  const artworkRef = useRef();
  return (
    <>
      <Header aboutUsRef={aboutUsRef} contactUsRef={contactUsRef}></Header>
      <main>
        <article>
          <Hero artworkRef={artworkRef}></Hero>
          <Artwork
            artworkRef={artworkRef}
            contactUsRef={contactUsRef}
          ></Artwork>
          <AboutUs
            contactUsRef={contactUsRef}
            aboutUsRef={aboutUsRef}
          ></AboutUs>
          <ContactUs contactUsRef={contactUsRef}></ContactUs>
          <Footer></Footer>
        </article>
      </main>
    </>
  );
};

export default HomePage;
