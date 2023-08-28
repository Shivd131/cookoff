import React from "react";
import ChefCapSVG from "./ChefCapSVG";
import Link from "next/link";
import { motion } from "framer-motion";
import TraingleSVG from "./TraingleSVG";

const Socials = () => {
  return (
    <div className="flex ml-40 py-10 border-t-2 border-grey h-[57vh] gap-20">
      <div className="flex flex-col justify-center">
        <ChefCapSVG />
      </div>
      <div className="flex flex-col justify-between py-20 items-center">
        <div className="text-lg font-normal tracking-[7px] text-grey ">
          CODECHEF VIT
        </div>
        <div className="text-lg font-normal tracking-[7px] text-grey ">
          COOKOFF 8.0
        </div>
        <div className="z-10">
          <Link href={"/landing"}>
            <motion.button
              className={` text-xl rounded-full border-2 border-grey w-56 py-3 bg-orange hover:border-4 hover:border-dark-grey text-black hover:font-bold z-10`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              REGISTER
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-20">
        <div className="text-lg font-normal tracking-[7px] text-grey ">
          OTHER EVENTS
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">Tech Talks 4.0</p></Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">ClueMinati</p></Link>
        </div>
      </div>
      <div className="flex flex-col py-20">
        <div className="text-lg font-normal tracking-[7px] text-grey ">
          NAVIGATION
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">Portal</p></Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">About</p></Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">Timeline</p></Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG/>
          <Link href={"/landing"}><p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100">FAQ&apos;s</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
