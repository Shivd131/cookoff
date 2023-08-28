import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const Faqs = ({ question, answer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`${
          isHovered
            ? `bg-[#eb5939] duration-300 pb-24`
            : `bg-transparent duration-300`
        }`}
      >
        <div className="mx-[13%] md:mx-[10%]">
          <div className="flex justify-between items-center pt-7 ">
            <div className="flex items-end">
              <motion.svg
                className="w-24 lg:w-20 md:w-12"
                animate={{
                  fill: isHovered ? "#000000" : "#B5A693",
                }}
                transition={{ ease: easeInOut, duration: 0.3 }}
                width="87.5"
                height="80.5"
                viewBox="0 0 125 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.4807 69.7032H60.2409L69.672 81.8361L78.9501 92.6436L96.4358 114.564H75.8404L63.8094 99.7806L57.641 91.0123L41.4807 69.7032ZM98.0161 53.7978C98.0161 65.1831 95.858 74.869 91.5418 82.8557C87.2596 90.8423 81.414 96.9428 74.0051 101.157C66.6302 105.337 58.3377 107.427 49.1275 107.427C39.8494 107.427 31.5229 105.32 24.148 101.106C16.7731 96.8918 10.9445 90.7914 6.66229 82.8047C2.38008 74.818 0.238974 65.1491 0.238974 53.7978C0.238974 42.4126 2.38008 32.7266 6.66229 24.74C10.9445 16.7533 16.7731 10.6698 24.148 6.48959C31.5229 2.27535 39.8494 0.168229 49.1275 0.168229C58.3377 0.168229 66.6302 2.27535 74.0051 6.48959C81.414 10.6698 87.2596 16.7533 91.5418 24.74C95.858 32.7266 98.0161 42.4126 98.0161 53.7978ZM75.6365 53.7978C75.6365 46.4229 74.5319 40.2035 72.3228 35.1396C70.1478 30.0757 67.072 26.2353 63.0957 23.6184C59.1194 21.0015 54.4633 19.6931 49.1275 19.6931C43.7918 19.6931 39.1357 21.0015 35.1594 23.6184C31.183 26.2353 28.0903 30.0757 25.8813 35.1396C23.7062 40.2035 22.6186 46.4229 22.6186 53.7978C22.6186 61.1727 23.7062 67.3921 25.8813 72.456C28.0903 77.5199 31.183 81.3603 35.1594 83.9772C39.1357 86.5941 43.7918 87.9026 49.1275 87.9026C54.4633 87.9026 59.1194 86.5941 63.0957 83.9772C67.072 81.3603 70.1478 77.5199 72.3228 72.456C74.5319 67.3921 75.6365 61.1727 75.6365 53.7978ZM112.287 107.325C108.922 107.325 106.033 106.136 103.62 103.757C101.241 101.344 100.052 98.4552 100.052 95.0906C100.052 91.76 101.241 88.9051 103.62 86.5261C106.033 84.1471 108.922 82.9576 112.287 82.9576C115.549 82.9576 118.404 84.1471 120.851 86.5261C123.298 88.9051 124.522 91.76 124.522 95.0906C124.522 97.3336 123.944 99.3898 122.788 101.259C121.667 103.094 120.188 104.573 118.353 105.694C116.518 106.782 114.496 107.325 112.287 107.325Z" />
              </motion.svg>

              <div
                className={`text-[32px] lg:text-[28px] md:text-[22px] font-bold mx-10 ${
                  isHovered
                    ? `text-black duration-300`
                    : `text-[#B7AB98] duration-300`
                }`}
              >
                {question}
              </div>
            </div>

            <motion.svg
              className="w-20 lg:w-16 md:w-10"
              initial={{ rotate: 0 }}
              animate={{
                rotate: isHovered ? -135 : 0,
                fill: isHovered ? "#000000" : "#B5A693",
              }}
              transition={{ ease: easeInOut, duration: 0.3 }}
              width="53"
              height="53"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27.6614 72.3414V0.15553H45.9118V72.3414H27.6614ZM0.693695 45.3736V27.1233H72.8795V45.3736H0.693695Z" />
            </motion.svg>
          </div>
          <motion.div className="text-[18px] text-[#0d0d0d] font-semibold mt-3 ml-[138px] md:ml-[80px]">
            {answer}
          </motion.div>
        </div>
      </motion.div>

      <div className="flex w-full justify-center">
        <div className="flex border-b-[2px] border-[#AA9E8B] opacity-30 w-[75%] md:w-full" />
      </div>
    </>
  );
};

export default Faqs;
