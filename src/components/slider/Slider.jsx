import React from "react";
import Slider from "react-slick";
import house from './house.jpg';
import pool from './pool.webp';


class CustomSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      easing: 'easeInCubic',
      autoplaySpeed: 4000,
      autoplay: false,
      beforeChange () {
        const current = document.querySelector('.slick-current');
        current.classList.add('slide-hide');

        console.log(current)
      },
      afterChange () {
        const current = document.querySelector('.slick-current');
        const previous = document.querySelector('.slide-hide');
        previous && previous.classList.remove('slide-hide');
      }
    };
    return (
      <Slider {...settings}>
        <img src={house} />
        <img src={pool} />
      </Slider>
    );
  }
}

export default CustomSlider;