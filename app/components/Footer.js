import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#242b41] text-white text-[12px] lg:text-sm p-4 lg:p-6 w-full flex px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-28 justify-between ">
      <div className="left-section">&copy; 2024 Amanat All right reserved.</div>
      <div className="right-section links flex gap-6 items-center md:gap-8 lg:gap-12">
        <Link
          href={"https://www.instagram.com/amanat_alee?igsh=dXQzNXdhMTVmOXV5"}
        >
          <FaInstagram className="scale-150 cursor-pointer lg:h-4 lg:w-4" />
        </Link>
        <Link href={"https://www.tiktok.com/@amanat_alee?_t=8ocFgXvvIXQ&_r=1"}>
          <FaTiktok className="scale-150 cursor-pointer lg:h-4 lg:w-4" />
        </Link>
        <Link href={"https://www.facebook.com/itsHenryyyy?mibextid=ZbWKwL"}>
          <FaFacebook className="scale-150 cursor-pointer lg:h-4 lg:w-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
