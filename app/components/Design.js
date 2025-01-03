/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const Services = () => {
  return (
    <main className="services mx-4 py-20 flex flex-col gap-8 md:mx-12 xl:mx-20 lg:gap-12 2xl:gap-20">
      <div className="heading w-full flex flex-col gap-2 font-bold ">
        <span className="text-4xl uppercase md:text-5xl lg:text-6xl text-center">
          My Works
        </span>
        <div className="text-[#5777ff]"></div>
      </div>
      <div className="images w-full flex justify-center items-center  md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative flex items-center"
        >
          <SwiperSlide className="absolute">
            <img
              src="design (5).jpg"
              alt="desgin_pic"
              className="h-full w-full mt-16"
            />
          </SwiperSlide>
          {/* <SwiperSlide className="absolute flex justify-center items-center">
            <img src="design (1).jpg" alt="desgin_pic" className="h-full w-full"/>
            </SwiperSlide> */}
          {/* <SwiperSlide className="absolute">
            <img src="design (2).jpg" alt="desgin_pic" className="h-full w-full"/>
            </SwiperSlide> */}
          <SwiperSlide className="absolute">
            <img
              src="design (3).jpg"
              alt="desgin_pic"
              className="h-full w-full bg-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="absolute">
            <img
              src="design (4).jpg"
              alt="desgin_pic"
              className="scale-90 bg-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="absolute">
            <img
              src="design (6).jpg"
              alt="desgin_pic"
              className="h-full w-full bg-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="images w-full max-md:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full h-[45rem]"
          style={{ padding: '40px' }}
        >
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (5).jpg"
              alt="desgin_pic"
              className="block h-full w-fit"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (1).jpg"
              alt="desgin_pic"
              className="block h-full w-fit"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (2).jpg"
              alt="desgin_pic"
              className="block  h-full w-fit"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (3).jpg"
              alt="desgin_pic"
              className="block h-full w-fit"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (4).jpg"
              alt="desgin_pic"
              className="block h-full w-fit"
            />
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide h-full bg-cover bg-center"
            style={{ width: "fit-content" }}
          >
            <img
              src="design (6).jpg"
              alt="desgin_pic"
              className="block h-full w-fit"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Services;
