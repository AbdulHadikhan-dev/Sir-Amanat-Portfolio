"use client";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Sidemenu from "./Sidemenu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [height, setHeight] = useState("h-0");

  const handleToggleSideMenu = () => {
    if (height === "h-0") {
      setHeight("h-64");
    } else {
      setHeight("h-0");
    }
  };

  const handleHome = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const handleAbout = () => {
    document.body.scrollTop = 540; // For Safari
    document.documentElement.scrollTop = 540; // For Chrome, Firefox, IE and Opera
  };

  const handleService = () => {
    document.body.scrollTop = 3980; // For Safari
    document.documentElement.scrollTop = 3980; // For Chrome, Firefox, IE and Opera
  };

  const handleContact = () => {
    document.body.scrollTop = 2200; // For Safari
    document.documentElement.scrollTop = 2200; // For Chrome, Firefox, IE and Opera
  };
  const handleEducation = () => {
    document.body.scrollTop = 1440; // For Safari
    document.documentElement.scrollTop = 1440; // For Chrome, Firefox, IE and Opera
  };
  const handleDesign = () => {
    document.body.scrollTop = 2980; // For Safari
    document.documentElement.scrollTop = 2980; // For Chrome, Firefox, IE and Opera
  };
  return (
    <>
      <header className="fixed body-font z-40 w-full flex justify-center">
        <div className="w-full mx-auto flex flex-wrap px-16 p-5 max-sm:pt-4 sm:pt-6 flex-col max-md:flex-row max-md:mb-0 md:flex-row items-center max-md:p-6 max-sm:p-3 max-md:justify-between fixed bg-[#5777ff] bg-opacity-10 backdrop-blur-lg max-xl:px-14 max-lg:px-8">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 max-md:mb-0 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl max-lg:text-base">
              Amanat Portfolio
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center max-md:hidden">
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleHome}
            >
              Home
            </a>
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleAbout}
            >
              About
            </a>
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleEducation}
            >
              Education
            </a>
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleContact}
            >
              Contact
            </a>
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleDesign}
            >
              my Designs
            </a>
            <a
              className="mr-5 lg:mr-4 hover:text-[#5777ff] cursor-pointer font-medium text-lg duration-300  max-xl:text-base max-lg:text-sm"
              onClick={handleService}
            >
              Services
            </a>
          </nav>
          <div className="sidebar md:hidden" onClick={handleToggleSideMenu}>
            {height === "h-0" && <LuMenu className="h-8 w-8" />}
            {height === "h-64" && <RxCross2 className="h-8 w-8" />}
          </div>
          <a href="Amanat CV.docx" download className="max-md:hidden">
            <button className="inline-flex items-center bg-[#5777ff] border-[#5777ff] text-white border py-1 px-3 focus:outline-none hover:bg-white hover:text-[#5777ff] duration-300 rounded text-base mt-4 md:mt-0 hover:border-[#5777ff] max-lg:text-sm">
              Download CV
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
      <Sidemenu
        height={height}
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleContact={handleContact}
        handleEducation={handleEducation}
        handleService={handleService}
        handleDesign={handleDesign}
      />
    </>
  );
};

export default Navbar;
