import Benefits from "../constants/services.js";
import { motion } from "framer-motion";
import { Howl } from "howler";
import transition_up from "../assets/Sounds/SND01_sine/transition_up.wav";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const serviceSound = new Howl({
    src: [transition_up],
    volume: 0.5,
    preload: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "Spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="relative h-full w-full bg-gray-300">
      <div className="container p-10">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-center text-3xl text-black font-bold"
        >
          Pure Tone, In Your Zone
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-center text-gray-500 mt-2 px-[25rem]"
        >
          Plug in and let your mind wander. Experience complete immersion as you
          tune out the distractions.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="mt-10 flex gap-[15rem] justify-center items-center"
      >
        {Benefits.map((benefit) => (
          <motion.div
            variants={cardVariants}
            key={benefit.id}
            className={`${benefit.id === 3 ? "w-[8%]" : "w-[4.5%]"}`}
          >
            <img src={benefit.img} alt="" />
            <h1
              className={`text-xl text-gray-500 font-bold text-center ${
                benefit.id === 3 ? "translate-y-[-55%]" : ""
              } mt-4`}
            >
              {benefit.desc}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
