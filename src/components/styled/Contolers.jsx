import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Contolers({
  reverse = false,
  onOpened,
  onClosed,
  className = "right-0 rounded-l-md",
}) {
  const controlsBtns = [
    <button
      onClick={onOpened}
      key={1}
      title={reverse ? "Close the Panel" : "Open the Panel"}
    >
      <IoIosArrowForward className="text-white hover:text-blue-xlight" />
    </button>,
    <button
      onClick={onClosed}
      key={2}
      title={reverse ? "Open the Panel" : "Close the Panel"}
    >
      <IoIosArrowBack className="text-white hover:text-blue-xlight" />
    </button>,
  ];
  return (
    <div
      className={`z-[100] h-14 w-4 bg-blue-dark  absolute top-1/2 -translate-y-1/2  flex flex-col justify-center items-center space-y-2 ${className}`}
    >
      {reverse ? controlsBtns.reverse() : controlsBtns}
    </div>
  );
}

export default Contolers;
