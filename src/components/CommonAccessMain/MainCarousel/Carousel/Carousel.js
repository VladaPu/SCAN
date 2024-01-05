import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

import clock from "./clock.svg";
import lens from "./lens.svg";
import shield from "./shield.svg";
import { ReactComponent as RightChevron } from "./right-chevron.svg";
import { ReactComponent as LeftChevron } from "./left-chevron.svg";
import { useSelector } from "react-redux";

const SliderData = [
  {
    img: clock,
    text: "Высокая и оперативная скорость обработки заявки",
  },
  {
    img: lens,
    text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
  },
  {
    img: shield,
    text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  },
  {
    img: clock,
    text: "Высокая и оперативная скорость обработки заявки",
  },
];

const Arrow = ({ className, style, onClick, direction, Component }) => {
  return (
    <Component
      className={className}
      style={{ ...style }}
      onClick={onClick}
      direction={direction}
    />
  );
};

const Carousel = () => {
  const newWidth = useSelector((state) => state.app.width);
  const slidesToShow = newWidth < 1100 ? 1 : 3;

  const settings = {
    slidesToScroll: 1,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    nextArrow: <Arrow Component={RightChevron} direction="right" />,
    prevArrow: <Arrow Component={LeftChevron} direction="left" />,
  };

  return (
    <div>
      <h2 className="slider__title">почему именно мы</h2>
      <div className="slider">
        <Slider {...settings}>
          {SliderData.map((item, index) => (
            <div key={index}>
              <div className="slider__card">
                <img
                  className="card__img"
                  src={item.img}
                  alt={`card${index}`}
                />
                <section className="card__section">{item.text}</section>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
