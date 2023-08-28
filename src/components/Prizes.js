import React, { useState } from "react";
import { motion } from "framer-motion";
import Awards from "./PrizesComps/Awards";

const Prizes = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div
      id="proxima"
      className="min-h-[100vh] w-[100vw] text-grey flex flex-col items-start justify-between gap-[3.1rem] py-16"
    >
      <p className="md:self-center  tracking-[7px] md:text-[10px] mx-[13%] md:mx-[10%] mt-10 mb-10">
        PRIZES
      </p>
      <div>
        <Awards
          title="FIRST"
          content="You’ll get like 1.5 Lakhs in cash, damm that's a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="SECOND"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="THIRD"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="FRESHERS"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <div className="parent container relative">
        <div className="text border border-x-0 border-grey w-[100vw] flex justify-between items-center">
          <p className="px-36 text-8xl font-bold tracking-wide cursor-pointer md:text-xl lg:text-6xl text-center md:pl-10 justify-self-start">
            WOMEN
          </p>
          <p className="px-36 h-20 w-[45vw] lg:w-[55vw] text-lg tracking-wide text-black md:text-xs xl:text-sm md:px-0 md:tracking-tight ">
          You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge.
          </p>
        </div>
        <div className=" overlay transition-all absolute top-0 bg-orange w-[100vw] flex justify-between items-center">
          <p className="px-36 text-8xl font-bold tracking-wide cursor-pointer md:text-xl lg:text-6xl text-center   md:pl-10 justify-self-start text-orange">
           WOMEN
          </p>
          <p className="px-36 h-20 w-[45vw] lg:w-[55vw] text-lg tracking-wide text-orange  md:text-xs md:px-0 xl:text-sm md:tracking-tight">
          You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Prizes;
