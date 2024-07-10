import Carousel from 'react-bootstrap/Carousel';
import slider from '../../../../data/slider';
import React, { useState } from 'react';

function Slider() {
  const [element, setElement] = useState(0);
  const handleSelect = (selectedIndex) => {
    setElement(selectedIndex);
  };

  return (
    <Carousel
      data-bs-theme="dark"
      activeIndex={element}
      onSelect={handleSelect}
    >
      {slider.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel__box">
            <div className="carousel__box__item" id={slide.prerson.id}>
              <img
                className="d-block img__icon carousel__item"
                src={`${slide.prerson.image}`}
                alt="First slide"
              />
              <div className="carousel__info">
                <h5 className="carousel__name">{slide.prerson.name}</h5>
                <p className="carousel__text">{slide.prerson.title}</p>
              </div>
            </div>
            <div className="carousel__box__item" id={slide.prerson.id}>
              <img
                className="d-block img__icon carousel__item"
                src={`${slide.prerson2.image}`}
                alt="First slide"
              />
              <div className="carousel__info">
                <h5 className="carousel__name">{slide.prerson2.name}</h5>
                <p className="carousel__text">{slide.prerson2.title}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
