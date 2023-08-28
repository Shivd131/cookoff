import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const WindowMask = () => {
  const { x, y } = useMousePosition();
  const {
    isHovered,
    setIsHovered,
    isHoveredOnSmall,
    setIsHoveredOnSmall,
    innerHeight,
    setInnerHeight,
    scrollPosition,
    setScrollPosition,
    size,
  } = useAppContext();
  return (
    // <motion.div
    //     animate={{
    //       WebkitMaskPosition: `${x - size / 2}px ${
    //         y + scrollPosition - size / 2 - innerHeight
    //       }px`,
    //       WebkitMaskSize: `${size}px`,
    //     }}
    //     transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    //     className="mask-content one flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh]  text-grey bg-orange"
    //   >
    // <motion.div
    //   animate={{
    //     WebkitMaskPosition: `${x - size / 2}px ${
    //       y + scrollPosition - size / 2 - innerHeight
    //     }px`,
    //     WebkitMaskSize: `${size}px`,
    //   }}
    //   transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    //   className="mask-content one"
    // >
    <div className="flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh] relative cursor-default text-grey bg-orange">
      {/* <motion.div
        className="mask-content flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh]  text-grey bg-orange"
      > */}
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="text-lg font-normal tracking-[0.15rem]"
      >
        ABOUT EVENT
      </p>
      <p
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="text-left text-4xl tracking-wide font-bold leading-relaxed"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed
        illum autem perferendis, nobis dolore ad asperiores quod necessitatibus
        minus eligendi temporibus ex, officiis consectetur provident facilis
        fugiat sequi iusto perspiciatis beatae excepturi assumenda. Commodi non
        at nam labore magnam, officia repudiandae. Reiciendis excepturi, sit
        ratione minus omnis ab eos iusto ipsam alias quia?
      </p>
    </div>
    // </motion.div>
  );
};

export default WindowMask;
