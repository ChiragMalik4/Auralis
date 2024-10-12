import React, { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import transitiondown from "../assets/Sounds/SND01_sine/transition_down.wav";
import "../CSS/Welcome.css";

const Welcome = ({ onClick }) => {
  const texts = ["Clic", "t", "ente", "Aurali"];
  const lastletter = ["k", "o", "r", "s"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    // Only set up the interval if there are more items to show
    if (visibleIndex < texts.length) {
      // Set a timeout to update the visible index
      const timeoutId = setTimeout(() => {
        if (visibleIndex < 3) {
          setVisibleIndex((prevIndex) => prevIndex + 1);
        }
      }, 500); // 0.5 seconds delay

      // Cleanup function to clear timeout on component unmount
      return () => clearTimeout(timeoutId);
    }
  }, [visibleIndex, texts.length]);

  const sound = new Howl({
    src: [transitiondown],
    volume: 0.5,
    preload: true,
  });

  const playSound = () => {
    sound.play();

    return () => {
      sound.unload();
    };
  };

  const [Clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    playSound();
    setTimeout(() => {
      onClick();
    }, 800);
  };

  return (
    <div
      className={`h-[100vh] w-[100vw] flex justify-center items-center ${
        Clicked ? "disappear" : ""
      }`}
      onClick={visibleIndex === 3 && handleClick}
    >
      <div
        className={`tracking-[2rem] lg:tracking-[4rem] font-bold text-[1rem] lg:text-[2.4rem] uppercase  ${
          Clicked ? "animate-out-mobile lg:animate-out" : ""
        }`}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className={` ${
              index === visibleIndex ? "block" : "hidden"
            } transition-opacity duration-1000`}
          >
            {text}
            {lastletter.map((letter, index1) => (
              <>
                {index1 === visibleIndex && (
                  <span className="tracking-normal">{letter}</span>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
