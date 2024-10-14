import Socials from "../constants/Socials.js";

const Contact = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col gap-y-10 justify-center items-center ">
        <h1 className="text-4xl font-bold text-center text-white">
          Website Made by Chirag Malik
        </h1>

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
                  <span className="absolute z-1 opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-white lg:group-hover:text-sm lg:group-hover:font-bold lg:group-hover:-translate-y-10 lg:duration-700">
                    {item.title}
                  </span>
                </a>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
