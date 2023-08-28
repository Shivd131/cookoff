import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import TitleSVG from "./TitleSVG";
import TitleSVGMobile from "./TitleSVGMobile";
import Link from "next/link";

const Welcome = () => {
  const isMid = useMediaQuery("(max-width:1012px)");
  console.log("isMid"+isMid)

  return (
    <div className="h-[100vh] w-[100vw] cursor-default flex flex-col justify-center">
     {isMid && <TitleSVGMobile/>}
     {!isMid && <TitleSVG/>}
     <div className="flex justify-center z-10">
            <Link href={"/landing"}>
              <motion.button
                className={`text-grey text-xl rounded-full border-2 border-grey w-56 py-3 hover:bg-orange hover:border-4 hover:border-dark-grey hover:text-black hover:font-bold sm:bg-orange sm:text-black sm:font-semibold sm:border-dark-grey`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                REGISTER
              </motion.button>
            </Link>
          </div>
    </div>
    // <div className="h-[100vh] w-[100vw] cursor-default flex flex-col justify-center">
    //   <motion.div
    //     className="flex justify-center text-grey text-9xl font-semibold z-50 "
    //     whileHover={{ scale: 1.2 }}
    //   >
    //     COOK
    //     <span className="mx-[0.5ch] text-orange">OFF</span>
    //     {/* {isMid && <br />} */}
    //     <span className="relative mx-[0.08ch] before:content-ChefCap before:absolute before:-top-[4.5rem] before:-right-16 before:-z-10">
    //       8.0
    //     </span>
    //   </motion.div>
    // </div>

  );
};

export default Welcome;
