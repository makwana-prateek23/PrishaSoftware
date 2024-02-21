import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
const images = {
  client1: {
    normal: require("../Components/Assets/Client1.png"),
    hover: require("../Components/Assets/Client1a.png"),
  },
  client2: {
    normal: require("../Components/Assets/Client2.png"),
    hover: require("../Components/Assets/Cient2a.png"),
  },
  client3: {
    normal: require("../Components/Assets/Client3.png"),
    hover: require("../Components/Assets/Client3a.png"),
  },
};

function AboutSwiper(images, hoverImages) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 1000 }}
      >
        {Object.keys(images).map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={hoverIndex === index ? image.hover : image.normal}
              alt={`Slide ${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AboutSwiper;
