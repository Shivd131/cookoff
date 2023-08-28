import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const WelcomeMask = () => {
  const { setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="relative flex flex-col justify-center items-left gap-[8rem] py-16 px-36 h-[100vh] cursor-default   text-black bg-orange text-6xl font-bold pt-96 pl-48">
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="relative -bottom-32"
      >
        *CRITICS* SAY, &quot;THE BEST THING TO HAPPEN TO HUMANKIND&quot;
      </p>
    </div>
    // </motion.div>
  );
};

export default WelcomeMask;
