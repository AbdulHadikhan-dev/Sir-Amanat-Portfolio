import Image from "next/image";
import React from "react";
import amanat from "@/app/assets/amanat.jpg"; 

const About = () => {
  return (
    <div className="about-me flex gap-8 lg:mx-12 lg:my-32">
      <div className="max-xl:hidden w-1/2 flex justify-end">
        <Image src={amanat} alt="amanat.jpeg" height={450} width={450} />
      </div>
      <div className="mx-4 flex flex-col gap-8 my-20 sm:mx-8 md:mx-10 lg:mx-0 xl:w-1/2 xl:mr-40 lg:my-0 lg:gap-12">
        <div className="heading w-fit flex flex-col gap-2">
          <span className="text-4xl font-bold md:text-5xl lg:text-6xl">
            MY BIOGRAPHY
          </span>
          <div className="bg-[#5777ff] w-full h-2"></div>
        </div>
        <div className="desc text-sm flex flex-col gap-6 md:text-[16px] lg:text-lg">
          <span className="paragraph-1">
            As a dedicated IT instructor and Freelance Graphics Designer, I am
            passionate about education as an IT instructor with several years of
            experience in the field. I enjoy sharing my knowledge and helping
            students develop their skills in various IT disciplines.
          </span>
          <span className="paragraph-2">
            In addition I am a Freelance Graphics Designer with unique blend of
            creativity and technical expertise to my work. I have honed my
            skills in creating visually compelling designs that communicate
            effectively and resonate with target audience.
          </span>
        </div>
        <div className="skill-interst flex flex-col gap-6 lg:gap-8">
          <div className="title text-3xl font-semibold md:text-4xl lg:text-5xl">
            Skill & Interest
          </div>
          <div className="skills flex flex-wrap gap-2 lg:gap-3">
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Teaching
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Microsoft Office
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Cap-Cut
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Canva
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Adobe Photoshop
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Corel-Draw
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Web Designing
            </div>
            <div className="border border-[#5777ff] text-[#5777ff] rounded-3xl px-3 py-1 text-sm cursor-pointer sm:text-[16px] lg:text-lg lg:py-[6px] lg:px-5 hover:bg-[#5777ff] hover:text-white duration-500">
              Data Entry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
