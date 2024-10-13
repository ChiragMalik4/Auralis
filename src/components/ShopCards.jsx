import React from "react";
import { delay, motion } from "framer-motion";
import hover_sound from "../assets/Sounds/Others/ShopCards.mp3";
import { Howl } from "howler";
import "../CSS/Card.css";

const ShopCards = ({ id, img, title, price }) => {
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
      className="w-[200px] lg:w-[220px] h-[280px] md:h-[280px] xl:w-[250px] xl:h-[330px] card group relative overflow-hidden cursor-pointer"
      onMouseEnter={playHoverSound}
      key={id}
    >
      <span className="bg w-[190px] lg:w-[210px] h-[270px] md:h-[270px] xl:w-[240px] xl:h-[320px] flex flex-col items-center">
        <div className="relative w-[98%] h-[60%] lg:h-[60%] xl:h-[60%] bg-gray-300 rounded-lg ">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="relative h-[30%] w-[96%] top-2">
          <h1 className=" relative text-black uppercase font-bold text-[0.9rem]">
            {title}
          </h1>
          <p className="relative text-gray-600 text-sm">{price}</p>
        </div>
        <button className="lg:hidden uppercase bg-black text-white p-1 rounded-lg w-full">
          Add to cart
        </button>
        <button className="hidden lg:block absolute uppercase w-[96%] bottom-[-70px] group-hover:bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-[0.4rem] rounded-lg transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </span>

      <span className="blob"></span>
    </motion.div>
  );
};

export default ShopCards;
