import React from 'react';
import Slider from 'react-slick';

import SliderItem from './SliderItem';

const SliderShow = ({ movies }) => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map(movie => {
        return <SliderItem key={movie.id} movie={movie} />;
      })}
    </Slider>
  );
};

export default SliderShow;
