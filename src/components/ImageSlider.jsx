import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const ImageSlider = ({ images, style }) => {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
      showStatus={false}
      swipeable={true}
      showIndicators={false}
    >
      {images.map((slide, index) => (
        <div
          key={index}
          className="relative w-full h-[400px] sm:h-max z-0 backdrop-filter"
        >
          <div className="banner-img w-full">
            <img
              src={slide.url}
              alt=""
              className="banner-img w-full h-[400px] sm:h-screen  object-cover"
            />
          </div>
          <div class="banner-info-bg">
            <h1 className="text-3xl font-bold text-white py-3">
              {slide.title}
            </h1>
            <p class="my-4">{slide.description}</p>
            <a
              href="/courses"
              className="px-2 sm:px-8 py-3 border-white border-none rounded-[20px] bg-[rgb(236,72,153)] text-white font-bold hover:bg-white hover:text-black "
            >
              Get started now
            </a>
          </div>
          <div class="overlay absolute top-0 left-0 w-full h-full"></div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
