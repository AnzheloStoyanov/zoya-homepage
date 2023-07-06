import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carosel.css'

function BannerCarosel() {
  const [index, setIndex] = useState(0);
  const bander = [
    'https://ci.zoya.bg/wide-slider/summer-06-2023-wide-slider-bg.png?4',
    'https://ci.zoya.bg/wide-slider/organic-india-06-2023-wide-slider-bg.png?4',
    'https://ci.zoya.bg/wide-slider/sun-protection-06-2023-wide-slider-bg.png?4',
    'https://ci.zoya.bg/wide-slider/dary-natury-06-2023-wide-slider-bg.png?4',
    'https://ci.zoya.bg/wide-slider/decocino-06-2023-wide-slider-bg.png?4',
    'https://ci.zoya.bg/wide-slider/marnys-06-2023-wide-slider-bg.png?4',


  ]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      data-bs-theme="dark"
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000} // Adjust the interval as desired
    >
  
  {bander.map((e, index) => (
  <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={e}
      alt="Carousel slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
))}



    </Carousel>
  );
}

export default BannerCarosel;
