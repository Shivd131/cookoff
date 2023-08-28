import {color, easeIn, motion} from "framer-motion"

const Timeline = () => {
  const events = [
    { time: "09:00 AM", event: "Event Starts" },
    { time: "10:00 AM", event: "Placeholder" },
    { time: "11:00 AM", event: "Placeholder" },
    { time: "12:00 PM", event: "Placeholder" },
    { time: "02:00 PM", event: "Event Commences" },
  ];
  console.log(100/events.length);
  return (
    <div className="h-[100vh] relative">
      <div className="text-lg font-normal tracking-[7px] ml-40 text-grey ">TIMELINE</div>
      <div className="flex flex-col h-[85%] mt-10">
        {events.map((e,index) => {
          return (<motion.div
          key={index}
            // className={`flex ml-40 h-[20%]`}
            className={`flex ml-40 h-[${100/events.length}%] border-b-2 border-grey gap-44 text-grey text-3xl font-semibold z-20 px-10`}
            whileHover={{
                backgroundColor:"#EB5939",
                color:"rgb(13,13,13)",
            }}
            transition={{duration:0.2,ease: "circInOut"}}
>
            <div className=" flex flex-col justify-center">{e.time}</div>
            <div className="flex flex-col justify-center">{e.event}</div>
          </motion.div>);
        })}
        {/* <motion.div 
            // className={`flex ml-40 h-[20%]`}
            className={`flex ml-40 h-[${100/events.length}%] border-b-2 border-grey gap-44 text-grey text-3xl font-semibold z-20 px-10`}
            whileHover={{
                backgroundColor:"#EB5939",
                color:"rgb(13,13,13)",
            }}
            transition={{duration:0.2,ease: "circInOut"}}
>
            <div className=" flex flex-col justify-center">hh:mm AM</div>
            <div className="flex flex-col justify-center">Place</div>
          </motion.div>         */}

      </div>
    </div>
  );
};

export default Timeline;
