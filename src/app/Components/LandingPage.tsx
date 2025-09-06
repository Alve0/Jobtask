"use client";
import Image from "next/image";
import React from "react";
import landingPageImage from "../../Assets/robot.webp";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function LandingPage() {
  let width = 40;

  // simpler slide animations with no easing or spring stuff
  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex justify-between text-gray-900">
      <div className="p-5 py-12">
        <motion.h3
          className="font-bold text-5xl"
          initial="hidden"
          animate="visible"
          variants={slideFromLeft}
        >
          We Design & Develop
        </motion.h3>

        <motion.h3
          className="font-bold text-8xl px-16 py-5 mb-5"
          initial="hidden"
          animate="visible"
          variants={slideFromLeft}
        >
          User- <br /> Friendly
        </motion.h3>

        <div className="flex items-center gap-5 mb-5 ml-8">
          <motion.div
            className="relative inline-flex h-14 w-36 items-center rounded-full border-4 border-[#F9DCDC]"
            initial={{ width: 0 }}
            animate={{ width: "9rem" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-x-4 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#FB995A]">
              <motion.div
                className="relative h-6 w-6 rounded-full shadow-lg -translate-y-2 bg-[#DF4E4E]"
                animate={{ x: [0, 0, 96, 96, 0] }}
                transition={{
                  duration: 5,
                  ease: [
                    "easeInOut",
                    [0.8, 0, 0.2, 1],
                    "linear",
                    [0.2, 0, 0, 1],
                  ],
                  times: [0, 0.2, 0.5, 0.7, 1],
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <motion.h3
            className="font-bold text-5xl"
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
          >
            Mobile & Web <br /> Apps
          </motion.h3>
        </div>

        <motion.p
          className="text-xl text-gray-600 leading-relaxed pl-32 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-semibold"> Ideas → Apps → Brands. </span>
          We're a digital agency helping startups <br /> bring their ideas to
          life with custom mobile apps, websites, and <br /> brand identity.
        </motion.p>

        <motion.button
          className="group flex bg-[#DF4E4E] text-white items-center gap-3 btn px-9 py-5 font-semibold text-lg rounded-4xl mt-8 ml-24 hover:bg-[#cc4a4a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in touch
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2 mt-1" />
        </motion.button>
      </div>

      <motion.div
        className="relative"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={landingPageImage}
          alt="landingImage"
          className="object-cover"
          width={670}
          height={775}
        />

        <div
          className="absolute top-0 left-80 h-full flex"
          style={{ width: `${width}%` }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 backdrop-blur-md bg-white/10 border-r border-white/30"
              custom={i}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
