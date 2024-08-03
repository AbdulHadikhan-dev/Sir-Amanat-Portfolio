import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

const Hero = ({ src, title, name, array }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: array,
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main flex flex-col sm:flex-row sm:py-0 pt-20 bg-blue-50">
        <div className="left-section w-full flex flex-col justify-center text-3xl gap-4 sm:w-[50%] md:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl font-semibold">
          <div className="mx-0 flex flex-col justify-center gap-1 md:gap-2 w-full items-center sm:items-start sm:mx-6 md:mx-10 lg:mx-16 xl:mx-20">
            <span className="">{title}</span>
            <span className="">{name}</span>
            <div className={`text-[#5777ff]`}>
              <span className="typedjs" ref={el}></span>
            </div>
          </div>
          <div className="btn flex mx-8 gap-2 justify-center sm:justify-start items-center sm:mx-12 text-white lg:mx-24">
            <Link href={"/About"}>
              <button className="about-me-btn p-2 sm:p-3 text-sm rounded-sm bg-[#10171e] md:text-base">
                About me
              </button>
            </Link>
            <a href="./assets\Sir Amanat.docx" download="">
              <button className="download-cv p-2 sm:p-3 text-sm md:text-base rounded-sm bg-[#5777ff]">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="right-section w-full sm:w-[50%] sm:flex sm:justify-center overflow-hidden">
          <Image
            src={src}
            alt="auhtor-image"
            className="ml-9 sm:mx-auto"
            height={500}
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
