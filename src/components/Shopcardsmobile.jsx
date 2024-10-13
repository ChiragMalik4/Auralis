import React from "react";
import { delay, motion } from "framer-motion";
import hover_sound from "../assets/Sounds/Others/ShopCards.mp3";
import { Howl } from "howler";
import axios from "axios";
import "../CSS/Card.css";

const Shopcardsmobile = ({ id, img, title, price }) => {
  const hoverSound = new Howl({
    src: [hover_sound],
    volume: 0.5,
    preload: true,
  });

  const playHoverSound = () => {
    hoverSound.play();

    return () => {
      hoverSound.unload();
    };
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "Spring",
        stiffness: 150,
        damping: 10,
        delay: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      className="lg:hidden w-full sm:w-[60%] md:w-[50%] h-[200px] card group relative overflow-hidden cursor-pointer"
      onMouseEnter={playHoverSound}
    >
      <span className="bg w-[98%] h-[190px] flex items-center">
        <div className=" w-[50%] h-[190px] bg-gray-300 rounded-lg flex justify-center items-center">
          <img src={img} alt={title} className="object-cover" />
        </div>
        <div className=" relative flex flex-col pt-4 h-[190px] w-[50%]">
          <h1 className=" relative text-black uppercase font-bold text-[0.9rem] px-2">
            {title}
          </h1>
          <p className="absolute text-gray-600 text-sm bottom-12 px-2">
            Price: {price}
          </p>

          <button className="lg:hidden absolute uppercase bg-black text-white p-2 mx-1 bottom-0  rounded-lg w-[97%]">
            Add to cart
          </button>
        </div>
      </span>

      <span className="blob w-full"></span>
    </motion.div>
  );
};

export default Shopcardsmobile;
