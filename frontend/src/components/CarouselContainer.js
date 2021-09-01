import React, { useState, useEffect } from "react";
import "./CarouselContainer.css";
import Slider from "react-slick";
import Imgix from "react-imgix";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CarouselContainer = ({ carouselData, checkClick }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  let slidesData;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  function notClick() {
    if (checkClick) {
      slidesData = carouselData;
    } else {
      slidesData = [
        "https://picsum.photos/800/400?img=1",
        "https://picsum.photos/800/400?img=2",
        "https://picsum.photos/800/400?img=3",
        "https://picsum.photos/800/400?img=4",
      ];
    }
  }

  useEffect(() => {
    notClick();
  });

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

  return (
    <div className="slider-wrapper">
      <div className="slider-wrapper-main">
        {notClick()}
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {slidesData.map((slide, idx) => (
            <div className="slick-slide" key={idx}>
              <Imgix
                className="slick-slide-image"
                alt="img"
                src={slide}
                imgixParams={{
                  fit: "crop",
                  fm: "jpg",
                }}
                width={800}
                height={330}
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
          {slidesData.map((slide, idx) => (
            <div className="slick-slide" key={idx}>
              <Imgix
                className="slick-slide-image"
                alt="img"
                src={slide}
                imgixParams={{
                  fit: "crop",
                  fm: "jpg",
                }}
                width={400}
                height={140}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselContainer;
