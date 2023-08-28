import React from "react";
import cclogo from "../assets/cclogo.svg";
import Options from "./NavbarComps/Options";
import SocialHandles from "./NavbarComps/SocialHandles";
import Image from "next/image";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const FixedNavMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="fixed h-screen w-screen text-orange ">
      <div className="flex justify-between p-12 md:p-6">
        <div className="h-16 w-auto cursor-pointer logo z-40">
          <Image
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="h-16 w-auto sm:h-12"
            src={cclogo}
            alt="CC Logo"
          />
        </div>
        <Options />
      </div>
      <div
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="absolute left-[3.7rem] bottom-40 sm:hidden"
      >
        <SocialHandles />
      </div>
    </div>
  );
};

export default FixedNavMask;
