import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Card from "./Card";

const Services = () => {
  return (
    <main className="services mx-4 py-20 flex flex-col gap-8 md:mx-12 xl:mx-20 lg:gap-12 2xl:gap-20">
      <div className="heading w-fit flex flex-col gap-2 font-bold">
        <span className="text-4xl uppercase md:text-5xl lg:text-6xl">
          Services
        </span>
        <div className="w-full h-2 bg-[#5777ff]"></div>
      </div>
      <div className="boxes flex flex-col gap-8 md:flex-row md:flex-wrap lg:justify-evenly 2xl:gap-12">
        <Card
          logo={<FaChalkboardTeacher className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"IT INSTRUCTOR"}
          desc={
            "With over several years of experience (Since August 2022) as an IT instructor at Lal Computer Institute, I have in-depth knowledge of Information Technology concepts, including networking, programming, database management, web development, and cybersecurity. I have successfully taught students at various levels, providing them with practical skills and theoretical understanding in IT. Expertised and Strong foundation in Information Technology, with hands-on experience in key areas such as, Computer Networks, Web Designing, Programming, Database Management"
          }
        />
        <Card
          logo={<SiAdobephotoshop className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"GRAPHICS DESIGNER"}
          desc={
            "Experienced in creating visually appealing designs for a variety of platforms, including Logo Designs, Banners, Posters, Flyers, and Social Media Posts. Expertise in Video Editing for promotional content, social media, and advertisements. Proficient in using industry-standard tools like Adobe Photoshop, Canva, Corel Draw, CapCut, and other graphic design platforms to produce high-quality designs tailored to client needs."
          }
        />
        <Card
          logo={<FaLaptopCode className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"WEB DESIGN"}
          desc="Capable of creating basic, responsive, and user-friendly web interfaces using HTML, CSS, and basic JavaScript. Skilled in designing simple layouts, implementing navigation, and ensuring compatibility across browsers."
        />
        <Card
          logo={<BsDatabaseAdd className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"DATA ENTRY"}
          desc={
            "Proficient in performing basic data entry tasks with accuracy and attention to detail. Experienced in handling spreadsheets, databases, and various data management tools to ensure efficient record-keeping and data organization."
          }
        />
      </div>
    </main>
  );
};

export default Services;
