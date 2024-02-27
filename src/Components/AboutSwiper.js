import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "swiper/css";

function AboutSwiper() {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  // Import images directly
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
    client4: {
      normal: require("../Components/Assets/Client3.png"),
      hover: require("../Components/Assets/Client3a.png"),
    },
  };

  return (
    <div className="about-swiper">
      <Swiper
        spaceBetween={4}
        slidesPerView={3} // Display one slide per view
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
      >
        {Object.keys(images).map((imageKey, index) => (
          <SwiperSlide key={index} className="swiper-about-slide">
            <img
              src={
                hoverIndex === index
                  ? images[imageKey].normal
                  : images[imageKey].hover
              }
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
