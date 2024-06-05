import React from "react";
import Heading from "./Heading";
import BrandImgs from "./BrandImg";
import Btns from "./Btns";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <Heading />
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <Btns />

        <div className="shopping">
          <p>Also available on </p>
          <BrandImgs />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default Hero;
