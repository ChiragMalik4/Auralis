import { Link, useNavigate } from "react-router-dom";
import { Howl } from "howler";
import hover_sound from "../assets/Sounds/SND01_sine/button.wav";
import { Categories } from "../constants/NavBar/categories";

const Nav = () => {
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
    <>
      <nav
        className={`relative hidden uppercase w-full lg:flex gap-[10rem] justify-center text-[11px] text-white font-bold top-[40px] z-10`}
      >
        <div className="group">
          {Categories.map((category) => (
            <>
              <div
                className="cursor-pointer hover:text-gray-400 px-4 relative z-20"
                onMouseEnter={playHoverSound}
              >
                <a href={category.url}>{category.title}</a>
              </div>
              <div className="min-w-[100vw] hidden left-0 -top-[40px] group-hover:flex justify-center items-center absolute opacity-0 group-hover:opacity-100 bg-gray-950 p-8 rounded-b-xl shadow-xl z-10">
                <ul className="columns-4 mt-[4rem]">
                  {category.children.map((item) => (
                    <li key={item.id} className="p-2 ">
                      <Link
                        className="border-b-2 border-transparent text-white hover:border-white m-2 text-center"
                        onMouseEnter={playHoverSound}
                        to={item.url}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
        <Link
          to="/coming-up"
          className="hover:text-gray-400 z-20 relative"
          onMouseEnter={playHoverSound}
        >
          Coming Up
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-400 relative z-20"
          onMouseEnter={playHoverSound}
        >
          Contact
        </Link>
      </nav>

      <div className="fixed top-[40px] text-white right-[8rem] uppercase text-[11px] font-bold hidden lg:block z-20">
        <Link
          to="/sign-up"
          className="cursor-pointer hover:text-gray-400"
          onMouseEnter={playHoverSound}
        >
          New Account
        </Link>
      </div>
    </>
  );
};

export default Nav;
