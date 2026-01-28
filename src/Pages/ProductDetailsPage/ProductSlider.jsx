import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ images }) => {
  const mainSettings = {
    asNavFor: ".thumb-slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  const thumbSettings = {
    asNavFor: ".main-slider",
    slidesToShow: Math.min(images.length, 3),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="single-thumb-detail">
      <Slider {...mainSettings} className="main-slider">
        {images.map((img, i) => (
          <div key={i} className="single-thumb">
            <a href="#"><img alt={`product-${i}`} src={img} /></a>
          </div>
        ))}
      </Slider>

      <Slider {...thumbSettings} className="thumb-slider">
        {images.map((img, i) => (
          <div key={i} className="pager-thumb">
            <img src={img} alt={`thumb-${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
