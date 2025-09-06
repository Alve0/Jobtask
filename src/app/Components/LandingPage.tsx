"use client";
import Image from "next/image";
import React from "react";
import landingPageImage from "../../Assets/robot.webp";
import arrow from "../../Assets/right-arrow.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function LandingPage() {
  let width = 40;
  return (
    <div className="flex justify-between text-gray-900">
      <div className="p-5 py-12">
        <h3 className="font-bold text-5xl ">We Design & Develop</h3>
        <h3 className="font-bold text-8xl px-16 py-5 mb-5">
          User- <br /> Friendly
        </h3>
        <div className="flex items-center gap-5 mb-5 ml-8">
          <div className="relative inline-flex h-14 w-36 items-center rounded-full border-4 border-[#F9DCDC]">
            <div className="absolute inset-x-4 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#FB995A]">
              <motion.div
                className="relative h-6 w-6 rounded-full shadow-lg -translate-y-2 bg-[#DF4E4E]"
                animate={{ x: [0, 96, 96, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                  times: [1, 0.2, 0.5, 0.7, 2],
                }}
              />
            </div>
          </div>
          <h3 className="font-bold text-5xl">
            Mobile & Web <br /> Apps
          </h3>
        </div>

        <p className="text-xl text-gray-600  leading-relaxed pl-32 pt-6 ">
          <span className="font-semibold"> Ideas → Apps → Brands. </span>
          We're a digital agency helping startups <br /> bring their ideas to
          life with custom mobile apps, websites, and <br /> brand identity.
        </p>
        <button
          className="group flex bg-[#DF4E4E] text-white items-center gap-3 btn px-9 py-5 font-semibold text-lg rounded-4xl mt-8 ml-24
    hover:bg-[#cc4a4a] transition-colors duration-300"
        >
          Get in touch
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2 mt-1" />
        </button>
      </div>
      <div className="relative">
        {/* Background image */}
        <Image
          src={landingPageImage}
          alt="landingImage"
          className="object-cover"
          width={670}
          height={775}
        />

        {/* Blur windows covering only 40% of image */}
        <div
          className={`absolute top-0 left-80 h-full flex`}
          style={{ width: `${width}%` }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-1 backdrop-blur-md bg-white/10 border-r border-white/30"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
