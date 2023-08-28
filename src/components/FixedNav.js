import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Options from "./NavbarComps/Options";
import cclogo from "../assets/cclogo.svg";
import SocialHandles from "./NavbarComps/SocialHandles";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import BurgerSVG from "./BurgerSVG";
import Link from "next/link";

const FixedNav = () => {
  const isMobile = useMediaQuery("(max-width:632px)");
  const [isToggled, setIsToggled] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsToggled(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  if (!isMobile) {
    return (
      <div className="fixed h-screen w-screen text-orange">
        <div className="flex justify-between p-12 md:p-6">
          <div className="h-16 w-auto cursor-pointer logo z-40">
            <Image className="h-16 w-auto sm:h-12" src={cclogo} alt="CC Logo" />
          </div>
          <Options />
        </div>
        <div className="absolute left-[3.7rem] bottom-40 sm:hidden">
          <SocialHandles />
        </div>
      </div>
    );
  }

  return (
    <div>
      {isToggled ? (
        <div className="fixed right-0 h-screen w-5/12 bg-orange z-40 flex flex-col pl-10 justify-evenly" ref={navbarRef}>
          <Link href="/landing" className="text-3xl font-black">Home</Link>
          <Link href="/landing" className="text-3xl font-black">About</Link>
          <Link href="/landing" className="text-3xl font-black">Timeline</Link>
          <Link href="/landing" className="text-3xl font-black">FAQ&apos;s</Link>
          <Link href="/landing" className="text-3xl font-black">Socials</Link>
        </div>
      ) : (
        <BurgerSVG setIsToggled={setIsToggled} />
      )}
    </div>
  );
};

export default FixedNav;
