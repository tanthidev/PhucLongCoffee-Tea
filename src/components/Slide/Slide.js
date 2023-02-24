import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({data}) {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots custom-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Delay between each slide in milliseconds
    };

    return (
      <Slider  {...settings}>
        {
          data.map((image, index)=> (
            <div className='w-full' key={index}>
              <img src={image} alt='imgs'/>
            </div>
          ))
        }
      </Slider>
    );
  }

Slide.propTypes = {
  data: PropTypes.array.isRequired,
}
export default Slide;