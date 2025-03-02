import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slideshow.css';

import React from 'react';
import Slider from 'react-slick';

import image1 from '../img/image4.jpg';
import image2 from '../img/image5.jpg';
import image3 from '../img/image6.jpg';

const NextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} style={{ ...style }} onClick={onClick}>
      &#9654;
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`} style={{ ...style }}
      onClick={onClick}>
      &#9664;
    </div>
  );
};

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;