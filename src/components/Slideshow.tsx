import React from "react";
import { Carousel } from "react-bootstrap";

interface SlideshowProps {
  id: string;
  slides: string[];
}

const Slideshow = (props: SlideshowProps) => {
  return (
    <>
      <Carousel controls={props.slides.length > 0}>
        {props.slides.map((slideSrc: string, index: number) => {
          return (
            <Carousel.Item key={`slide-item-${props.id}-${index}`}>
              <img
                className="d-block w-100"
                src={`src/assets/images/portfolio/${props.id}/${slideSrc}`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slideshow;
