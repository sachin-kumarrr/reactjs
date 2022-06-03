import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61XJMtByggL._SX3000_.jpg"
          alt="amazon banner"
        />
        {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286684220_.jpg */}
        <div className="home_row1">
          <Product
            id="1"
            title="GoPro HERO10 Black - Waterproof Action Camera with Front LCD and Touch
          Rear Screens, 5.3K60 Ultra HD Video, 23MP Photos, 1080p Live
          Streaming, Webcam, Stabilization"
            price={4990}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Iyd3w+bKL._AC_UY218_.jpg"
          />
          <Product
            id="2"
            title="Insta360 ONE X2 Action Camera|5.7k 360 Capture| Steady Cam Mode| FlowState Stabilization| Ultra Bright Screen| Waterproof to 10m|4-Mic 360 Audio |Time Shift | Voice Control | Invisible Selfie Stick"
            price={3997}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PKO99vL5L._SL1500_.jpg"
          />
          <Product
            id="3"
            title="GoPro HERO9 Black - Waterproof Action Camera with Front LCD and Touch
            Rear Screens, 5K Ultra HD Video, 20MP Photos, 1080p Live Streaming, Webcam, Stabilization"
            price={3690}
            rating={4}
            image="https://m.media-amazon.com/images/I/61cXVTL32qL._SL1500_.jpg"
          />
        </div>

        <div className="home_row2">
        <Product
            id="4"
            title="Apple iPhone 13 (128GB) - Midnight | 15 cm (6.1-inch) Super Retina XDR display | A14 Bionic chip"
            price={7399}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
          />
           <Product
            id="5"
            title="Apple iPhone 12 (128GB) - Blue | 6.1-inch (15.5 cm diagonal) Super Retina XDR display "
            price={5999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
          />
          <Product
            id="6"
            title="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage) | 48MP Main Camera with Sony IMX 789 Lens"
            price={7190}
            rating={4}
            image="https://m.media-amazon.com/images/I/61IahEs7nEL._SL1500_.jpg"
          />
          <Product
            id="7"
            title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) | 5G Ready powered by Galaxy’s first 4nm processor"
            price={1099}
            rating={4}
            image="https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg"
          />
        </div>
        <div className="home_row3">
        <Product
            id="8"
            title="2021 Apple MacBook Pro (14-inch/35.97 cm, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
            price={1940}
            rating={5}
            image="https://m.media-amazon.com/images/I/61vFO3R5UNL._SX679_.jpg"
          />
          <Product
            id="9"
            title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Purple (5th Generation"
            price={5490}
            rating={3}
            image="https://m.media-amazon.com/images/I/61k05QwLuML._SX679_.jpg"
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
