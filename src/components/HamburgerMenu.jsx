import React, { useState } from "react";
import hover_sound from "../assets/Sounds/SND01_sine/button.wav";
import toggle_on from "../assets/Sounds/SND01_sine/toggle_on.wav";
import toggle_off from "../assets/Sounds/SND01_sine/toggle_off.wav";
import DropDownList from "./DropDownList";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      playToggleOn();
    } else {
      playToggleOff();
    }
  };

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

  const ToggleOn = new Howl({
    src: [toggle_on],
    volume: 0.5,
    preload: true,
  });

  const playToggleOn = () => {
    ToggleOn.play();

    return () => {
      ToggleOn.unload();
    };
  };

  const ToggleOff = new Howl({
    src: [toggle_off],
    volume: 0.5,
    preload: true,
  });

  const playToggleOff = () => {
    ToggleOff.play();

    return () => {
      ToggleOff.unload();
    };
  };

  return (
    <div className="z-10 relative lg:hidden">
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-[28px] left-4 bg-gray-300 uppercase font-bold text-black py-2 px-4 rounded-xl transition-transform transform ${
          isOpen ? "translate-x-[256px]" : ""
        }`}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-300 text-black shadow-xl rounded-xl transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <DropDownList />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
