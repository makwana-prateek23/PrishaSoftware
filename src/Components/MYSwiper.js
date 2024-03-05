import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const images = [
  { image: require("./Assets/Slide1.jpeg") },
  { image: require("./Assets/Slide-2.jpeg") },
  { image: require("./Assets/Slide-3.jpeg") },
];
const MySwiper = () => {
  // Adjust based on the total number of slides

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={-10}
        slidesPerView={"2"}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={1}
        watchOverflow={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        style={{ zIndex: 0, background: "none" }} // Set z-index here
      >
        <SwiperSlide className="swiper-slide">
          <img src={images[0].image} alt="Slide1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={images[1].image} alt="Slide2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={images[2].image} alt="Slide3" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={images[0].image} alt="Slide1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={images[1].image} alt="Slide2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={images[2].image} alt="Slide3" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
