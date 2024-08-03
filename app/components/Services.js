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
            "An IT instructor teaches individuals or groups about information technology concepts, systems, and software. They develop and deliver educational materials and practical exercises to enhance technical skills and knowledge. Their goal is to prepare students for effective use of technology in various professional and personal contexts."
          }
        />
        <Card
          logo={<SiAdobephotoshop className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"GRAPHICS DESIGNER"}
          desc={
            "A graphic designer creates visual content to communicate messages effectively through various media. They use tools and techniques to design layouts, logos, and other graphical elements, blending artistry with functionality. Their work enhances brand identity and user experience across digital and print platforms."
          }
        />
        <Card
          logo={<FaLaptopCode className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"WEB DESIGN"}
          desc="A frontend web designer creates the visual and interactive elements of a website that users engage with directly. They design layouts, user interfaces, and ensure a seamless user experience by working with HTML, CSS, and JavaScript. Their goal is to craft aesthetically pleasing and functional websites that align with the client &#39;s objectives."
        />
        <Card
          logo={<BsDatabaseAdd className="h-10 w-10 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"/>}
          title={"DATA ENTRY"}
          desc={
            "Data entry involves inputting, updating, and managing information within digital databases or systems. It requires accuracy and attention to detail to ensure that data is correctly recorded and maintained. This task supports various functions by providing reliable and organized information for decision-making and analysis."
          }
        />
      </div>
    </main>
  );
};

export default Services;
