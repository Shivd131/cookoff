import React from "react";
import { useState, useEffect } from "react";

const Countdown = () => {
  const timeOfEvent = new Date(2023, 8, 24, 7, 0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = timeOfEvent - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setCountdown({ days, hours, minutes });
      }
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  });
  
  return (
    <div className="h-[100vh] w-[100vw] text-grey text-9xl font-bold  mx-32 flex flex-col gap-64 pt-10">
      <div className="text-lg font-normal tracking-[7px]">COUNTDOWN</div>
      <div className="flex gap-96 ml-16 sm:flex-col md:gap-16 justify-items-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          D A Y S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.hours}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          H O U R S
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          {countdown.days}
        </div>
        <div className="text-orange text-4xl font-semibold text-center -mt-10">
          M I N S
        </div>
      </div>
      </div>
    </div>
  );
};

export default Countdown;
