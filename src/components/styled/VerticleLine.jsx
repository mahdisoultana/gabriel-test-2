import React from "react";

function VerticalLine({ className = " left-0 bg-blue-dark" }) {
  return <span className={"w-[2px] h-full  absolute " + className}></span>;
}

export default VerticalLine;
