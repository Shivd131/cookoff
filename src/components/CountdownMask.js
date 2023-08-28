import { useAppContext } from "@/context/appContext";

const CountdownMask = () => {
    const {setIsHoveredOnSmall} = useAppContext();
  return (
    <div className="relative h-[100vh] bg-orange pl-36">
        <div className="h-[20vh]"></div>
      <p
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="text-8xl font-bold"
      >
        AND AS THE SANDS OF TIME FALL, WE DRAW NEARER TO THE EMBRACE OF OBLIVION
      </p>
    </div>
  );
};

export default CountdownMask;
