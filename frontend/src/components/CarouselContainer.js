import React, { useState, useEffect } from "react";
import "./CarouselContainer.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CarouselContainer = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    centerMode: true,
    asNavFor: ".slider-nav",
    infinite: true,
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    arrows: true,
    centerMode: true,
    swipeToSlide: false,
    focusOnSelect: true,
    centerPadding: "10px",
    infinite: true,
  };

  const slidesData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <div className="slider-wrapper">
      <div className="slider-wrapper-main">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              <img
                className="slick-slide-image"
                alt="img"
                src={`https://picsum.photos/800/400?img=${slide.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbnail-slider-wrap">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
        >
          {slidesData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              <img
                className="slick-slide-image"
                alt="img"
                src={`https://picsum.photos/800/400?img=${slide.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselContainer;
