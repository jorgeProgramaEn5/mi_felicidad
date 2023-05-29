import '../styles/Hero.css'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel({ banners }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    // console.log("select index: ", selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='contenedor_carusel' activeIndex={index} onSelect={handleSelect}>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
        <div className="m-imagen">
          <img
            className="imagen"
            alt="baner"
            src={banner.icon}
          />
        </div>
        <Carousel.Caption>
          <h3>{banner.content}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}

// render(<Carousel />);
export default Carrusel;