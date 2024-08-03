"use client";
import React from "react";
import Hero from "./components/Hero";
import authorImage from "@/app/assets/author-image.png";
import About from "./components/About";
import Eduaction from "./components/Eduaction";
import Contact from "./components/Contact";
import Service from "./components/Services";

export default function Home() {
  return (
    <main className="w-full bg-blue-50">
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
      <Service />
    </main>
  );
}
