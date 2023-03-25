import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const { smalltext, buttonText, midText, image, desc, product } = heroBanner;

  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{smalltext}</p>
      <h3>{midText}</h3>
      <img src={urlFor(image)} alt="headphones" className="hero-banner-image" />
      <div>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
