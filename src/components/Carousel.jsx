import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/c1.jpg";
import image2 from "../images/c2.jpg";
import image3 from "../images/c3.jpg";
import "../styles/silder.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0.5,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
