import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default  text-black bg-orange pt-32">
      <div
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] text-[#B7AB98] mb-10 tracking-[7px]"
      >
        ABOUT EVENT
      </div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-grey"
      >
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          Cook off is <span className="text-black">CodeChef VIT</span>&apos;s
          flagship competitive coding event that tests the coding skills of tech
          participants to develop their competitive coding skills and test their
          abilities. Cook Off 7.0 will be the seventh edition through which we
          hope to broaden the horizons of the participants.
        </p>
      </div>
    </div>

    // </motion.div>
  );
};

export default AboutMask;
