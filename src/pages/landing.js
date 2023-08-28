"use client";
import useMousePosition from "../utils/useMousePosition";
import Image from "next/image";
import { Inter } from "next/font/google";
import FixedNav from "@/components/FixedNav";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Countdown from "@/components/Countdown";
import Banner from "@/components/Banner";
import Prizes from "@/components/Prizes";
import Faqs from "@/components/Faqs";
import RegisterNow from "@/components/RegisterNow";
import OtherEvents from "@/components/OtherEvents";
import Socials from "@/components/Socials";
import Welcome from "@/components/Welcome";
import { useAppContext } from "@/context/appContext";
// import styles from "../styles/page.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AboutMask from "@/components/AboutMask";
import WelcomeMask from "@/components/WelcomeMask";
import CountdownMask from "@/components/CountdownMask";
import BannerMask from "@/components/BannerMask";
import RegisterNowMask from "@/components/RegisterNowMask";
import PrizesMask from "@/components/PrizesMask";
import TimelineMask from "@/components/TimelineMask";
import OtherEventsMask from "@/components/OtherEventsMask";
import FaqsMask from "@/components/FaqsMask";
import SocialsMask from "@/components/SocialsMask";
import FillerMask from "@/components/FillerMask";
import FillerMask2 from "@/components/FillerMask2";
import useMediaQuery from "@/hooks/useMediaQuery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { setInnerHeight, scrollPosition, setScrollPosition, size } =
    useAppContext();

  const isNotMobile = !useMediaQuery("(max-width:632px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  });
  const { x, y } = useMousePosition();

  return (
    <main className="h-[980vh] w-[100vw] relative cursor-default overflow-x-hidden">
      <div className="absolute w-[100vw]">
        <FixedNav />
        <Welcome />
        <About />
        <Timeline />
        <Banner />
        <RegisterNow />
        <Prizes />
        <Countdown />
        <OtherEvents />
        <Faqs />
        <Socials />
      </div>
      {isNotMobile && (
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${
              y - size / 2 + scrollPosition
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          className="one mask-content -z-30"
        >
          <WelcomeMask />
          <AboutMask />
          <FillerMask />
          <FillerMask2 />
          <CountdownMask />
          <FillerMask2 />
          <FillerMask2 />
        </motion.div>
      )}
    </main>
  );
}
