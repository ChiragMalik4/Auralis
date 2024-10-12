import { useState } from "react";
import { Howl, Howler } from "howler";
import type01 from "../assets/Sounds/SND01_sine/type_01.wav";
import transition1 from "../assets/Sounds/Transitions/transition1.wav";
import heroImg4 from "../assets/Hero/heroImg4.png";
import "../CSS/Hero.css";
import Nav from "./Nav";
import ShoppingCartSidebar from "./CartSidebar";
import HamburgerMenu from "./HamburgerMenu";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [Loaded, setLoaded] = useState(false);
  const [imageTransitioned, setimageTransitioned] = useState(false);
  const Navigate = useNavigate();

  const sound = new Howl({
    src: [type01],
    volume: 0.5,
    preload: true,
  });

  const playSound = () => {
    sound.play();

    return () => {
      sound.unload();
    };
  };

  const TransitionSound = new Howl({
    src: [transition1],
    volume: 0.5,
    preload: true,
  });

  const playTransitionSound = () => {
    TransitionSound.play();

    return () => {
      TransitionSound.unload();
    };
  };

  const loadTimer = () => {
    setLoaded(true);
    playTransitionSound();
    setTimeout(() => {
      setimageTransitioned(true);
    }, 500);
  };

  return (
    <div className="min-h-[100vh] fixed w-full">
      <Nav classname="relative" textcolor="text-white" />

      <HamburgerMenu />

      <ShoppingCartSidebar />

      <div className="relative h-full w-full flex-col  lg:gap-0  lg:flex-row flex items-center bg-black top-[20px]">
        <div
          className={`border-b-2 lg:absolute xl:relative lg:top-[100px] lg:left-[-10%] xl:left-[0] xl:top-[0]  transition-transform duration-500 ease-in-out transform ${
            Loaded ? "translate-x-0 appear" : "translate-x-[-100%] opacity-0"
          }`}
        >
          <img
            src={heroImg4}
            alt="hero"
            className="xl:h-[925px] lg:h-[859px] h-[450px] object-cover"
            onLoad={loadTimer}
          />
        </div>
        {imageTransitioned && (
          <div className="translate-y-12 lg:translate-y-0 xl:ml-[26.65%] lg:absolute xl:relative lg:left-[70%] lg:top-[150px] xl:left-[0] xl:top-[0] grid grid-rows-4 grid-cols-2 gap-[2.5rem] lg:gap-[5rem]">
            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0s" }}
              onAnimationStart={playSound}
            >
              A
            </div>

            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.05s" }}
              onAnimationStart={playSound}
            >
              U
            </div>

            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.1s" }}
              onAnimationStart={playSound}
            >
              R
            </div>

            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.15s" }}
              onAnimationStart={playSound}
            >
              A
            </div>

            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.2s" }}
              onAnimationStart={playSound}
            >
              L
            </div>

            <div
              className="font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.25s" }}
              onAnimationStart={playSound}
            >
              I
            </div>

            <div
              className="col-span-2 text-center font-bold lg:text-[2.4rem] animate-flicker opacity-0"
              style={{ animationDelay: "0.3s" }}
              onAnimationStart={playSound}
            >
              S
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
