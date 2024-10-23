"use client";
import React from "react";
import { FaMedal } from "react-icons/fa6";
import { RiMedalLine } from "react-icons/ri";

const Eduaction = () => {
  return (
    <div className="eduction my-20 mx-4 md:mx-8 lg:mx-12 2xl:mx-32">
      <div className="years text-5xl text-center font-bold text-[#5777ff] md:text-6xl lg:text-7xl stroke-2 text-transparent xl:text-8xl 2xl:text-9xl mb-6 md:mb-20 lg:mb-24 xl:mb-28 uppercase">
        Education
      </div>
      <div className="main flex justify-center">
        <div className="right-section flex flex-col gap-4 text-[#242b41] lg:w-full xl:gap-y-12 lg:flex-row lg:flex-wrap lg:gap-0 lg:gap-y-8 2xl:mx-24 2xl:w-[80%]">
          <div className="1 flex gap-1 items-center md:mx-14 lg:mx-0 lg:w-1/2">
            <RiMedalLine className=" h-8 w-8 lg:h-12 lg:w-12 max-sm:w-12" />
            <div className="flex flex-col">
              <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Matriculation
              </div>
              <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
                BISE Hyderabad | A-Grade | 2018 to 2020
              </div>
            </div>
          </div>
          <div className="2 flex gap-1 items-center md:mx-14 lg:mx-0 lg:w-1/2">
            <RiMedalLine className=" h-8 w-8 lg:h-12 lg:w-12 max-sm:w-12" />
            <div className="">
              <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Intermediate
              </div>
              <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
                BISE Nawabshah | A-Grade | 2020 to 2022
              </div>
            </div>
          </div>
          <div className="3 flex gap-1 items-center md:mx-14 lg:mx-0 lg:w-1/2">
            <RiMedalLine className="h-8 w-8 lg:h-12 lg:w-12 max-sm:w-10 max-sm:ml-2" />
            <div className="max-sm:ml-2">
              <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
              BS Computer Science
              </div>
              <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
                Quaid-e-Awam University | 2022 to 2026 (Expected)
              </div>
            </div>
          </div>
          <div className="4 flex gap-1 items-center md:mx-14 lg:mx-0 lg:w-1/2">
            <RiMedalLine className="h-8 w-8 lg:h-12 lg:w-12 max-sm:w-10 max-sm:ml-2" />
            <div className="max-sm:ml-2">
              <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Diploma in IT
              </div>
              <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
                Lal Computer Institute | SBTE Karachi | 2021 to 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduaction;
