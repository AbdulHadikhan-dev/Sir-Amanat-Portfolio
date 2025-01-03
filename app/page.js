"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

import Hero from "./components/Hero";
import authorImage from "@/app/assets/png.png";
import About from "./components/About";
import Eduaction from "./components/Eduaction";
import Contact from "./components/Contact";
import Service from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Design from "./components/Design";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar bg-[#5777ff] h-2 lg:h-3 fixed w-full z-50"/>
      <main className="w-full bg-blue-50">
        <Navbar />
        <Hero
          title="Hi, Everyone 👏,"
          name="I am Amanat Alee"
          array={["IT Instructor.", "Graphics Designing.", "Freelancer."]}
          src={authorImage}
        />
        <div className="w-full h-2 bg-[#242b41]"></div>
        <About />
        <div className="w-full h-2 bg-[#242b41]"></div>
        <Eduaction />
        <div className="w-full h-2 bg-[#242b41]"></div>
        <Contact />
        <div className="w-full h-2 bg-[#242b41]"></div>
        <Design/>
        <div className="w-full h-2 bg-[#242b41]"></div>
        <Service />
        <Footer />
      </main>
    </>
  );
}
