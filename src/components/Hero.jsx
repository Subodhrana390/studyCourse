import React from "react";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  const sliderImages = [
    {
      index: 1,
      url: "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "50% Discount on all Popular Courses",
      description: " Take the first step to your journey to success with us",
    },
    {
      index: 2,
      url: "https://images.unsplash.com/photo-1692885228334-e3cdcb9cfad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "50% Discount on all Popular Courses",
      description: " Take the first step to your journey to success with us",
    },
    {
      index: 3,
      url: "https://images.unsplash.com/photo-1694823925781-61293d74cace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "50% Discount on all Popular Courses",
      description: " Take the first step to your journey to success with us",
    },
    {
      index: 4,
      url: "https://images.unsplash.com/photo-1694823925781-61293d74cace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "50% Discount on all Popular Courses",
      description: " Take the first step to your journey to success with us",
    },
    {
      index: 5,
      url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "50% Discount on all Popular Courses",
      description: " Take the first step to your journey to success with us",
    },
  ];

  return (
    <section className="relative w-full h-[400px] sm:h-screen z-0">
      <ImageSlider images={sliderImages} />
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="curve">
        <path
          d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "white" }}
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
