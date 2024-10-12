import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Socials from "../constants/Socials.js";
import { Howl } from "howler";
import STAY9 from "../assets/Sounds/interstellar/9.wav";
import hover_sound from "../assets/Sounds/SND01_sine/button.wav";
import tap_sound from "../assets/Sounds/SND01_sine/tap_01.wav";

const Footer = ({ bgcolor, textcolor }) => {
  const footerRef = useRef(null);
  const Isinview = useInView(footerRef, { amount: 0.1 });

  useEffect(() => {
    if (Isinview) {
      containerSound.play();
    }
  }, [Isinview]);

  const containerSound = new Howl({
    src: [STAY9],
    volume: 0.5,
    preload: true,
  });

  const hoverSound = new Howl({
    src: [hover_sound],
    volume: 0.5,
    preload: true,
  });

  const TapSound = new Howl({
    src: [tap_sound],
    volume: 0.5,
    preload: true,
  });

  const playHoverSound = () => {
    hoverSound.play();

    return () => {
      hoverSound.unload();
    };
  };

  const playTapSound = () => {
    TapSound.play();

    return () => {
      TapSound.unload();
    };
  };

  return (
    <footer className={` ${bgcolor} ${textcolor} py-8`} ref={footerRef}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/products/headphones"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                to="/products/earbuds"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Earbuds
              </Link>
            </li>
            <li>
              <Link
                to="/products/neckbands"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Neckbands
              </Link>
            </li>
            <li>
              <Link
                to="/products/speakers"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/products/soundbars"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Soundbars
              </Link>
            </li>
            <li>
              <Link
                to="/products/party-speakers"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Party Speakers
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/support"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Customer Support
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/returns"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link
                to="/shipping"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Shipping Information
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-700"
                onMouseEnter={playHoverSound}
                onClick={playTapSound}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About AURALIS</h3>
          <p className="text-sm leading-relaxed">
            AURALIS is committed to delivering premium audio experiences through
            our range of cutting-edge products. From headphones to party
            speakers, we provide quality sound for all occasions.
          </p>
        </div>
      </div>
      <p className="caption text-center text-n-4 lg:block mt-4">
        © {new Date().getFullYear()} AURALIS. All rights reserved.
      </p>
      <div className="w-full flex justify-center items-center mt-8">
        <ul className="flex gap-5 lg:gap-8 flex-wrap">
          {Socials.map((item) => (
            <>
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="group relative flex items-center justify-center w-10 h-10
                lg:hover:translate-y-3 lg:transition-all lg:duration-500"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`${item.id == 0 ? "bg-white rounded-full" : ""}`}
                  height={42}
                  width={42}
                />
                <span class="absolute z-1 opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-black lg:group-hover:text-sm lg:group-hover:font-bold lg:group-hover:-translate-y-10 lg:duration-700">
                  {item.title}
                </span>
              </a>
            </>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
