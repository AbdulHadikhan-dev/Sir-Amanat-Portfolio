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
          href={"https://www.instagram.com/_amanat__alee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
        >
          <FaInstagram className="scale-150 cursor-pointer lg:h-4 lg:w-4" />
        </Link>
        <Link href={"https://www.tiktok.com/@_amanat__alee?is_from_webapp=1&sender_device=pc"}>
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
