import React from "react";

const Awards = (props) => {
  return (
    <div>
      <div className="parent container relative">
        <div className="text border border-b-0 border-x-0 border-grey w-[100vw] flex justify-between  items-center">
          <p className="px-36 text-8xl font-bold tracking-wide lg:text-6xl cursor-pointer md:text-xl text-center   md:pl-10 justify-self-start">
            {props.title}
          </p>
          <p className="px-36 h-20 w-[45vw] lg:w-[55vw] text-lg tracking-wide  text-black md:text-xs xl:text-sm md:px-0 md:tracking-tighter">
            {props.content}
          </p>
        </div>
        <div className=" overlay transition-all absolute top-0 bg-orange w-[100vw] text-center flex justify-between items-center">
          <p className="px-36 text-8xl font-bold tracking-wide lg:text-6xl cursor-pointer md:text-xl text-center   md:pl-10 justify-self-start text-orange ">
            {props.title}
          </p>
          <p className="px-36 h-20 w-[45vw] lg:w-[55vw] text-lg tracking-wide text-orange  md:text-xs md:px-0 xl:text-sm md:tracking-tighter">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
