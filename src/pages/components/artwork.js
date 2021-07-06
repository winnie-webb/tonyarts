import React from "react";

// Images
import spiritJM from "../../images/spirit-jm.jpg";
import bob from "../../images/bob-marley.jpg";
import fishes from "../../images/fishes.jpg";
import wolvesArt from "../../images/wolves.jpg";
import carvingArt from "../../images/carving.jpg";
import horsesArt from "../../images/horses.jpg";

const Artwork = ({ contactUsRef, artworkRef }) => {
  return (
    <section ref={artworkRef} className="artwork">
      <h2 className="artwork__heading heading">Most Popular</h2>
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
        <h2 className="artwork__askHeading heading">
          See anything interesting ?
        </h2>
        <p>
          Don't worry if these are not what you're looking for. You can get
          anything done as long as it is an artwork
        </p>
        <div
          className="artwork__askBtn btn"
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
export default Artwork;
