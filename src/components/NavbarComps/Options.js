import React from "react";

const Options = () => {
  return (
    <div
      id="proxima"
      className=" flex flex-col text-[#AA9E8B] text-sm font-bold tracking-wider gap-2 items-end"
    >
      <div className="group transition ease-in-out">
        <p
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </p>
        <p
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </p>
      </div>
      <div className="group transition ease-in-out">
        <p
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </p>
        <p
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </p>
      </div>
      <div className="group transition ease-in-out">
        <p
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          PRIZES
        </p>
        <p
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          PRIZES
        </p>
      </div>
      <div className="group transition ease-in-out">
        <p
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </p>
        <p
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </p>
      </div>
    </div>
  );
};

export default Options;
