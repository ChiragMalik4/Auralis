import { useRef, useState, useEffect } from "react";
import headphones from "../assets/Hero/hero3.png";
import earbuds from "../assets/Hero/hero4.png";
import useViewportHeight from "../constants/viewportHeight";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Headphones from "../constants/headphones.js";
import Earbuds from "../constants/earbuds.js";
import Speakers from "../constants/speakers.js";
import Soundbars from "../constants/soundbars.js";
import MusicPlayers from "../constants/musicplayers.js";
import ScrollPageWithAnimation from "./ScrollPageContainer.jsx";
import ShopCards from "./ShopCards.jsx";
import STAY1 from "../assets/Sounds/interstellar/1.wav";
import STAY2 from "../assets/Sounds/interstellar/2.wav";
import STAY3 from "../assets/Sounds/interstellar/3.wav";
import STAY4 from "../assets/Sounds/interstellar/4.wav";
import STAY5 from "../assets/Sounds/interstellar/5.wav";
import STAY6 from "../assets/Sounds/interstellar/6.wav";
import STAY7 from "../assets/Sounds/interstellar/7.wav";
import STAY8 from "../assets/Sounds/interstellar/8.wav";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer.jsx";

const Test = () => {
  const viewportHeight = useViewportHeight();
  const isLgOrSmaller = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <ScrollContainer>
      <div className="relative mt-[100vh]">
        <ScrollPage
          className="min-h-[200vh] bg-gradient-to-b from-transparent to-black flex"
          ScrollPage={1}
        >
          <ScrollPageWithAnimation
            index={0}
            viewportHeight={viewportHeight}
            extraHeight={0}
            backgroundColor1="bg-gray-300"
            backgroundColor2="bg-black"
            word="HEADPHONES"
            image={headphones}
            whitecontainerleft={true}
            STAYsound={STAY1}
            WhiteContainerTitle="Wireless Headphones"
          >
            {Headphones.slice(0, isLgOrSmaller ? 3 : 6).map((items) => (
              <ShopCards
                key={items.id}
                id={items.id}
                title={items.name}
                price={items.price}
                img={items.img}
              />
            ))}
          </ScrollPageWithAnimation>
        </ScrollPage>
      </div>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={2}
          viewportHeight={viewportHeight}
          extraHeight={(100 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="EARBUDS"
          image={earbuds}
          STAYsound={STAY2}
          WhiteContainerTitle={"Earbuds"}
        >
          {Earbuds.slice(0, isLgOrSmaller ? 3 : 6).map((items) => (
            <ShopCards
              key={items.id}
              id={items.id}
              title={items.name}
              price={items.price}
              img={items.img}
            />
          ))}
        </ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={4}
          viewportHeight={viewportHeight}
          extraHeight={(200 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="NECKBANDS"
          image={earbuds}
          whitecontainerleft={true}
          STAYsound={STAY3}
          WhiteContainerTitle={"Neckbands"}
        >
          {MusicPlayers.slice(0, isLgOrSmaller ? 3 : 6).map((items) => (
            <ShopCards
              key={items.name}
              title={items.name}
              price={items.price}
              img={items.img}
            />
          ))}
        </ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={6}
          viewportHeight={viewportHeight}
          extraHeight={(300 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="SPEAKERS"
          image={earbuds}
          whitecontainerleft={false}
          STAYsound={STAY4}
          WhiteContainerTitle={"Speakers"}
        >
          {Speakers.slice(0, isLgOrSmaller ? 3 : 6).map((items) => (
            <ShopCards
              key={items.name}
              title={items.name}
              price={items.price}
              img={items.img}
            />
          ))}
        </ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={8}
          viewportHeight={viewportHeight}
          extraHeight={(400 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="SOUNDBARS"
          image={earbuds}
          whitecontainerleft={true}
          STAYsound={STAY5}
          WhiteContainerTitle={"Soundbars"}
        >
          {Soundbars.slice(0, isLgOrSmaller ? 3 : 6).map((items) => (
            <ShopCards
              key={items.name}
              title={items.name}
              price={items.price}
              img={items.img}
            />
          ))}
        </ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={10}
          viewportHeight={viewportHeight}
          extraHeight={(500 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="COMING SOON"
          whitecontainerleft={false}
          STAYsound={STAY6}
          WhiteContainerTitle={"Coming Soon"}
        ></ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={12}
          viewportHeight={viewportHeight}
          extraHeight={(600 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="COMING SOON"
          whitecontainerleft={true}
          STAYsound={STAY7}
          WhiteContainerTitle={"Coming Soon"}
        ></ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>

      <ScrollPage className="min-h-[200vh] bg-black flex" ScrollPage={2}>
        <ScrollPageWithAnimation
          index={14}
          viewportHeight={viewportHeight}
          extraHeight={(700 * viewportHeight) / 100}
          backgroundColor1="bg-gray-300"
          backgroundColor2="bg-black"
          word="COMING SOON"
          whitecontainerleft={false}
          STAYsound={STAY8}
          WhiteContainerTitle={"Coming Soon"}
        ></ScrollPageWithAnimation>
      </ScrollPage>

      <div className="relative min-h-[100vh] bg-black"></div>
      <div className="relative">
        <Footer bgcolor="bg-gray-300" textcolor="text-black" />
      </div>
    </ScrollContainer>
  );
};

export default Test;
