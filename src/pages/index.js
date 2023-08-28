import React, { useEffect } from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import SVGAnimation from "@/components/SVGAnimation";
import SVGAnimation2 from "@/components/SVGAnimation2";
import useMediaQuery from "@/hooks/useMediaQuery";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

const Index = () => {
  const isDesktop = useMediaQuery("(min-width: 965px)");
  /* Cursor following div states*/

  // I want to make a state to store the current position of cursor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const cursorVariants = {
    default: {
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
    },
    notDefault: {
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
      scale: 5,
      mixBlendMode: "difference",
    },
    notDefaultButBigger: {
      x: cursorPos.x - 20,
      y: cursorPos.y - 20,
      scale: 750,
      mixBlendMode: "difference",
    },
  };

  /*Icon Animation*/

  const [fill, setFill] = useState("#B7AB98");
  const [currentVaraint, setCurrentVariant] = useState("default");
  // const [curDem, setCurDem] = useState({w:10,h:10});
  const onIconEnter = () => {
    setFill("#FFFFFF");
    // setCurDem({w:20, h:20})
    setCurrentVariant("notDefault");
  };
  const onIconLeave = () => {
    setFill("#B7AB98");
    // setCurDem({w:10, h:10})
    setCurrentVariant("default");
  };

  /*Chef Drag Animation */
  const [hasClicked, setHasClicked] = useState(false);
  const eleRef = useRef(null);
  useEffect(() => {
    const clicked = (e) => {
      if (eleRef.current === e.target) {
        setHasClicked(true);
      }
    };
    window.addEventListener("click", clicked);

    return () => {
      window.removeEventListener("click", clicked);
    };
  }, []);
  console.log(hasClicked);

  return (
    <>
      <Head>
        <title>Cook-off 8.0</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      {/* body container */}
      <div className="h-[100vh] w-[100vw] text-grey flex justify-center justify-items-center no-selection">
        {isDesktop && (
          <motion.div
            // className={`w-1/3 absolute h-screen left-10 whitespace-normal justify-items-center text-9xl font-bold text-black`}
            className={`w-1/3 absolute h-screen left-10 whitespace-normal justify-items-center ${
              hasClicked ? "text-[87px]" : "text-9xl"
            } font-bold text-black`}
            onMouseEnter={() => {
              setCurrentVariant("notDefault");
            }}
            onMouseLeave={() => {
              setCurrentVariant("default");
            }}
          >
            {hasClicked
              ? "LOOK HOW THEY BUTCHERED MY BOY"
              : "DO NOT DARE DRAG OUR CHEF"}
          </motion.div>
        )}
        {/* main flex */}
        <div className="flex flex-col justify-center justify-items-center gap-36 ">
          {/* icon */}
          <div
            className=" flex justify-center relative before:absolute before:bg-dark-grey before:h-56 before:w-56 before:-z-10 before:-bottom-16 before:rounded-full"
            onMouseEnter={onIconEnter}
            onMouseLeave={onIconLeave}
            ref={eleRef}
          >
            {hasClicked ? (
              <SVGAnimation2 />
            ) : (
              <SVGAnimation fill={fill} setHasClicked={setHasClicked} />
            )}
          </div>

          {/* button */}
          <div className="flex justify-center ">
            <Link href={"/landing"}>
              <motion.button
                className={`text-grey text-xl rounded-full border-2 border-grey w-56 py-3 ${inter.className}  hover:bg-orange hover:border-4 hover:border-dark-grey hover:text-black hover:font-bold`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                START
              </motion.button>
            </Link>
          </div>
        </div>

        {/* cursor div */}
        {isDesktop && (
          <motion.div
            className="bg-orange w-10 h-10 fixed rounded-full left-0 top-0 -z-10"
            variants={cursorVariants}
            // animate="default"
            animate={currentVaraint}
          />
        )}
        {isDesktop && (
          <motion.div
            className={`w-1/3 absolute h-screen right-10 break-words justify-items-center ${
              hasClicked ? "text-[87px]" : "text-9xl"
            } font-bold text-black`}
            onMouseEnter={() => {
              setCurrentVariant("notDefault");
            }}
            onMouseLeave={() => {
              setCurrentVariant("default");
            }}
          >
            {hasClicked
              ? "LOOK HOW THEY BUTCHERED MY BOY"
              : "DO NOT DARE DRAG OUR CHEF"}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Index;
