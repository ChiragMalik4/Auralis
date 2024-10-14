import { useEffect } from "react";
import Nav from "../components/Nav";
import HeadphonesList from "../constants/CategoriesShop/headphonesList";
import ShopCards from "../components/ShopCards";
import Footer from "../components/Footer";
import ShoppingCartSidebar from "../components/CartSidebar";
import HamburgerMenu from "../components/HamburgerMenu";
import Shopcardsmobile from "../components/Shopcardsmobile";
import AuralisLogoWhite from "../assets/Logo/transparent.png";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import hover_sound from "../assets/Sounds/SND02_piano/button.wav";
import Render_Sound from "../assets/Sounds/interstellar/RenderSound.wav";

const HeadphonesShop = () => {
  const RenderSound = new Howl({
    src: [Render_Sound],
    volume: 0.5,
    preload: true,
  });

  useEffect(() => {
    RenderSound.play();
  }, []);

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

  return (
    <div className="">
      <div className="h-[100px] w-full bg-gray-950 fixed z-10">
        <Link to="/" className="">
          <img
            src={AuralisLogoWhite}
            alt="whitelogo"
            className="z-20 h-[40%] lg:h-[50%] absolute right-2 top-7 lg:right-0 lg:left-10 lg:top-6 overflow-hidden"
            onMouseEnter={playHoverSound}
          />
        </Link>

        <Nav />
        <HamburgerMenu />
        <ShoppingCartSidebar />
      </div>
      <div className="h-[400px] w-full ">
        <div className="h-full w-full flex justify-center items-center bg-gray-300">
          <h1 className="text-black font-bold text-5xl lg:text-6xl xl:text-7xl uppercase mt-16">
            Headphones
          </h1>
        </div>
      </div>
      <div className="flex bg-gray-300 justify-center items-center">
        <div className="w-full lg:w-[80%] flex justify-center items-center flex-wrap gap-[4rem]">
          {HeadphonesList.map((items) => (
            <>
              <Shopcardsmobile
                key={items.id}
                id={items.id}
                title={items.name}
                price={items.price}
                img={items.img}
              />
              <div className="hidden lg:block">
                <ShopCards
                  key={items.id}
                  id={items.id}
                  title={items.name}
                  price={items.price}
                  img={items.img}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="h-[200px] w-full bg-gray-300"></div>
      <Footer bgcolor="bg-black" textcolor="text-white" />
    </div>
  );
};

export default HeadphonesShop;
