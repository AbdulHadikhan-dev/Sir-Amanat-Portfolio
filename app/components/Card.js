import React from "react";

const Card = ({ logo, title, desc }) => {
  return (
    <div className="box rounded-sm border flex flex-col gap-4 p-4 md:w-[45%] 2xl:w-[30%] 2xl:p-6 hover:text-[#5777ff] duration-300 hover:scale-105 hover:bottom-4">
      <div className="logo p-4 border rounded-full h-fit w-fit mx-auto 2xl:p-6 border-gray-300 duration-300">
        {logo}
      </div>
      <div className="title text-center text-2xl font-semibold lg:text-3xl 2xl:text-4xl duration-300">
        {title}
      </div>
      <span className="desc text-center text-[12px] text-gray-500 lg:text-sm 2xl:text-[15px]">
        {desc}
      </span>
    </div>
  );
};

export default Card;
