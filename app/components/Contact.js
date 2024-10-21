import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-page my-20 mx-4 flex flex-col gap-8 md:gap-12 lg:gap-20 xl:gap-24 2xl:gap-28">
      <div className="1">
        <div className="get-in-touch uppercase text-4xl font-bold text-center md:text-5xl lg:text-6xl">
          get in touch
        </div>
        <div className="lets work together text-[#5777ff] text-center italic text-sm md:text-base lg:text-lg">
          Let&apos;s Work Together
        </div>
      </div>
      <div className="2 flex flex-col gap-4 md:flex-row flex-wrap md:gap-0 md:gap-y-4 lg:flex-row lg:flex-nowrap">
        <div className="phone flex flex-col items-center md:w-1/2 md:gap-2">
          <div className="logo text-[#5777ff]">
            <LiaPhoneVolumeSolid className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" />
          </div>
          <div className="title font-semibold text-base md:text-lg 2xl:text-2xl">
            Phone & Mobile
          </div>
          <div className="detail text-gray-500 text-[10px] flex flex-col text-center md:text-sm 2xl:text-base">
            0315-0136372
          </div>
        </div>
        <div className="email flex flex-col items-center md:w-1/2 md:gap-2">
          <div className="logo text-[#5777ff]">
            <TfiEmail className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" />
          </div>
          <div className="title font-semibold text-base md:text-lg 2xl:text-2xl">
            Email & Website
          </div>
          <div className="detail text-gray-500 text-[10px] flex flex-col text-center md:text-sm 2xl:text-base">
            <span>amnt8881@gmail.com</span>
            <span className="">https://sir-amanat-portfolio.vercel.app/</span>
          </div>
        </div>
        <div className="address flex flex-col items-center md:w-1/2 md:gap-2">
          <div className="logo text-[#5777ff]">
            <SlLocationPin className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" />
          </div>
          <div className="title font-semibold text-base md:text-lg 2xl:text-2xl">
            Address
          </div>
          <div className="detail text-gray-500 text-[10px] flex flex-col text-center md:text-sm 2xl:text-base md:w-5/6">
          Muhalla Nadir Shah Colony Jam Sahib Road Nawabshah, SBA
          </div>
        </div>
        <div className="instagram flex flex-col items-center md:w-1/2 md:gap-2">
          <div className="logo text-[#5777ff]">
            <FaInstagram className="h-8 w-8 md:h-14 md:w-14 2xl:h-20 2xl:w-20" />
          </div>
          <div className="title font-semibold text-base md:text-lg 2xl:text-2xl">
            Instagram
          </div>
          <div className="detail text-gray-500 text-[10px] flex flex-col text-center md:text-sm 2xl:text-base">
            _amanat_alee
          </div>
        </div>
      </div>
      <div className="3 flex flex-col gap-2 md:mx-8 lg:mx-12 xl:mx-20">
        <div className="flex items-center">
          <div className="h-2 w-2 lg:h-4 lg:w-4 bg-[#5777ff] rounded-full flex justify-center items-center">
            <div className="h-1/3 w-1/3 bg-white rounded-full"></div>
          </div>
          <div className="w-full h-1 bg-[#5777ff] lg:h-[6px]"></div>
          <div className="h-2 w-2 lg:h-4 lg:w-4 bg-[#5777ff] rounded-full flex justify-center items-center">
            <div className="h-1/3 w-1/3 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="stroke uppercase text-4xl text-center font-bold text-transparent md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          amanat ali
        </div>
        <div className="flex items-center">
          <div className="h-2 w-2 lg:h-4 lg:w-4 bg-[#5777ff] rounded-full flex justify-center items-center">
            <div className="h-1/3 w-1/3 bg-white rounded-full"></div>
          </div>
          <div className="w-full h-1 bg-[#5777ff] lg:h-[6px]"></div>
          <div className="h-2 w-2 lg:h-4 lg:w-4 bg-[#5777ff] rounded-full flex justify-center items-center">
            <div className="h-1/3 w-1/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
