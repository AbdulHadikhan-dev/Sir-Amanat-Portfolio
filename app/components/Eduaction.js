import React from "react";

const Eduaction = () => {
  return (
    <div className="eduction my-20 mx-4 md:mx-8 lg:mx-12 2xl:mx-32">
      <div className="years text-5xl text-center font-bold text-[#5777ff] md:text-6xl lg:text-7xl stroke-2 text-transparent xl:text-8xl 2xl:text-9xl mb-6 md:mb-20 lg:mb-24 xl:mb-28">
        2018 - 2024
      </div>
      <div className="main lg:flex lg:items-center lg:gap-8 ">
        <div className="left-section flex flex-col gap-6 my-8 lg:w-1/2">
          <div className="heading w-fit flex flex-col gap-2 font-bold">
            <span className="text-4xl uppercase md:text-5xl lg:text-6xl">
              Eduaction
            </span>
            <div className="w-full h-2 bg-[#5777ff]"></div>
          </div>
          <div className="desc text-sm md:text-base lg:text-lg lg:w-5/6">
            Education is a vital force that empowers individuals by expanding
            their knowledge and critical thinking skills. It opens doors to
            opportunities and helps people realize their full potential. Beyond
            academics, education fosters empathy, social responsibility, and the
            ability to navigate a changing world. By adapting to new
            technologies and methods, Ultimately, education is about more than
            just learning facts—it&apos;s about understanding and shaping the
            future.
          </div>
        </div>
        <div className="right-section flex flex-col gap-4 text-[#242b41] lg:w-1/2 xl:gap-6">
          <div className="1">
            <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Matriculation
            </div>
            <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
              BISE Hyderabad | School of Science | 2018
            </div>
          </div>
          <div className="2">
            <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Intermediate
            </div>
            <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
              BISE SBA | College of Engeneering | 2022
            </div>
          </div>
          <div className="3">
            <div className="degree font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
              BS Computer Science
            </div>
            <div className="institute text-sm text-gray-500 md:text-base lg:text-lg">
              Quaid e Awam University | Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduaction;
