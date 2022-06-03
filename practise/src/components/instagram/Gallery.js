import React from "react";
import "./Gallery.css";
import photo1 from "./assets/images/photo1.jpeg";
import photo2 from "./assets/images/photo2.jpeg";
import photo3 from "./assets/images/photo3.jpeg";
import photo4 from "./assets/images/photo4.jpeg";
import photo5 from "./assets/images/photo5.jpeg";
import photo6 from "./assets/images/photo6.jpeg";

function Gallery() {
  return (
    <div className="gallery">
      <img src={photo1} alt="photo1" />
      <img src={photo2} alt="photo2" />
      <img src={photo3} alt="photo3" />
      <img src={photo4} alt="photo4" />
      <img src={photo5} alt="photo5" />
      <img src={photo6} alt="photo6" />
    </div>
  );
}

export default Gallery;
