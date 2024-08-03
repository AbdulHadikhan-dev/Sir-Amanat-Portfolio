"use client";
import React from "react";

const Navbar = () => {
  const handleHome = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const handleAbout = () => {
    document.body.scrollTop = 540; // For Safari
    document.documentElement.scrollTop = 540; // For Chrome, Firefox, IE and Opera
  };

  const handleService = () => {
    document.body.scrollTop = 2980; // For Safari
    document.documentElement.scrollTop = 2980; // For Chrome, Firefox, IE and Opera
  };

  const handleContact = () => {
    document.body.scrollTop = 2200; // For Safari
    document.documentElement.scrollTop = 2200; // For Chrome, Firefox, IE and Opera
  };
  const handleEducation = () => {
    document.body.scrollTop = 1440; // For Safari
    document.documentElement.scrollTop = 1440; // For Chrome, Firefox, IE and Opera
  };
  return (
    <header className="fixed top-0 w-full flex justify-center">
      <nav className="rounded-lg h-fit w-fit p-3 text-[12px] my-6 sm:text-[16px] lg:text-lg sm:p-3 md:p-4 bg-[#242b4199] text-white backdrop-blur-md">
        <ul className="flex gap-2 md:gap-3 lg:gap-4">
          <li onClick={handleHome} className="cursor-pointer">
            Home
          </li>
          <li onClick={handleAbout} className="cursor-pointer">
            About
          </li>
          <li onClick={handleEducation} className="cursor-pointer">
            Education
          </li>
          <li onClick={handleContact} className="cursor-pointer">
            Contact
          </li>
          <li onClick={handleService} className="cursor-pointer">
            Services
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
