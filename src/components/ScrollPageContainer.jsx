import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  useInView,
} from "framer-motion";
import VerticalWord from "./VerticalWord.jsx";

import { useEffect, useRef } from "react";
import { Howl } from "howler";

const ScrollPageWithAnimation = ({
  index,
  viewportHeight,
  backgroundColor1,
  backgroundColor2,
  word,
  image,
  extraHeight,
  whitecontainerleft,
  STAYsound,
  children,
  WhiteContainerTitle,
}) => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const Isinview = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (Isinview) {
      containerSound.play();
    }
  }, [Isinview]);

  const containerSound = new Howl({
    src: [STAYsound],
    volume: 0.5,
    preload: true,
  });

  const BorderRadiusTop = useTransform(
    scrollY,
    [
      index * viewportHeight + extraHeight,
      (index + 1) * viewportHeight + extraHeight,
    ],
    [800, 0]
  );

  const BorderRadiusBottom = useTransform(
    scrollY,
    [
      (index + 2) * viewportHeight + extraHeight,
      (index + 3) * viewportHeight + extraHeight,
    ],
    [0, 800]
  );

  const smoothBorderRadiusTop = useSpring(BorderRadiusTop, {
    stiffness: 400,
    damping: 40,
  });
  const smoothBorderRadiusBottom = useSpring(BorderRadiusBottom, {
    stiffness: 400,
    damping: 40,
  });

  return (
    <div className="flex min-h-full w-full" ref={containerRef}>
      {whitecontainerleft ? (
        <>
          <motion.div
            className={`flex-1 ${backgroundColor1} h-full w-full lg:w-[50%] overflow-hidden`}
            style={{
              borderTopRightRadius: smoothBorderRadiusTop,
              borderBottomRightRadius: smoothBorderRadiusBottom,
            }}
          >
            <div className="relative h-full flex justify-center items-center">
              <div className="lg:hidden absolute top-[17%] text-black uppercase">
                <h1 className="text-4xl text-center font-bold">
                  {WhiteContainerTitle}
                </h1>
              </div>
              <div className="relative h-[50%] flex flex-row lg:flex-row flex-wrap gap-[2rem] lg:gap-[4rem] justify-center items-center">
                {children}
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`hidden lg:block relative flex-1 ${backgroundColor2} h-full lg:w-[50%]`}
            style={{
              borderTopRightRadius: smoothBorderRadiusTop,
              borderTopLeftRadius: smoothBorderRadiusTop,
            }}
          >
            <div className="h-full flex items-center">
              <VerticalWord
                word={word}
                classname="absolute text-[4rem] font-bold"
                letterspace="my-[3rem]"
              />

              <motion.img
                src={image}
                alt=""
                className="z-1"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  stiffness: 150,
                  damping: 10,
                  delay: 0.2,
                }}
              />
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className={`hidden lg:block relative flex-1 ${backgroundColor2} h-full`}
            style={{
              borderTopLeftRadius: smoothBorderRadiusTop,
              borderBottomLeftRadius: smoothBorderRadiusBottom,
            }}
          >
            <div className="h-full flex items-center">
              <VerticalWord
                word={word}
                classname="absolute text-[4rem] font-bold right-0"
                letterspace="my-[3rem]"
              />
              <motion.img
                src={image}
                alt=""
                className="z-1"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  stiffness: 150,
                  damping: 10,
                  delay: 0.2,
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className={`flex-1 ${backgroundColor1} h-full w-full lg:w-[50%] overflow-hidden`}
            style={{
              borderTopLeftRadius: smoothBorderRadiusTop,
              borderBottomLeftRadius: smoothBorderRadiusBottom,
            }}
          >
            <div className="relative h-full flex justify-center items-center">
              <div className="lg:hidden absolute top-[17%] text-black uppercase">
                <h1 className="text-4xl text-center font-bold">
                  {WhiteContainerTitle}
                </h1>
              </div>
              <div className="relative h-[50%] flex flex-row lg:flex-row flex-wrap gap-[2rem] lg:gap-[4rem] justify-center items-center">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ScrollPageWithAnimation;
