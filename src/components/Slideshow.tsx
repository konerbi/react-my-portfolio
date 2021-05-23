import React from "react";
import LazyLoad from "react-lazyload";

interface SlideshowProps {
  id: string;
  slides: string[];
}

const Slideshow = (props: SlideshowProps) => {
  return (
    <>
      {props.slides.map((slideSrc: string, index: number) => {
        return (
          <div key={`slide-item-${props.id}-${index}`} className={"slide-container"}>
            <LazyLoad>
              <img src={`src/assets/images/portfolio/${props.id}/${slideSrc}`} />
            </LazyLoad>
          </div>
        );
      })}
    </>
  );
};

export default Slideshow;
