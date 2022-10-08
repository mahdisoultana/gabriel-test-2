import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
function Dotted() {
  const [open, setOpen] = useState(false);
  return (
    <ul
      className={`w-[9px] h-7 ${
        open ? "border-green-500 border bg-blue-dark " : "bg-blue-light "
      } rounded-full absolute   z-[30] top-1/2 -translate-y-[40%] right-[16%] flex items-center justify-center flex-col space-y-[3px] cursor-pointer hover:bg-blue-xlight`}
      onClick={() => setOpen((prevS) => !prevS)}
    >
      {[1, 2, 3].map((i) => (
        <li
          key={i}
          className={`w-[3px] h-[3px] rounded-full   ${
            open ? "bg-green-100" : "bg-white"
          } `}
        ></li>
      ))}
      {open && (
        <ul className="absolute top-full w-[190px] min-h-[100px] rounded-lg shadow-xl shadow-blue-xdark/50 left-1/2 -translate-x-1/2   bg-blue-dark z-[30]">
          {[1, 2, 3, 4].map((i, index, arr) => (
            <li
              key={index}
              className={` flex items-center p-2 pr-6 space-x-1 text-sm rounded-t-md  cursor-pointer hover:bg-blue-light/20 border-b ${
                index !== arr.length - 1
                  ? "border-b-blue-xdark"
                  : "border-transparent"
              } `}
            >
              <button
                className="text-xl hover:text-red-500"
                onClick={() =>
                  alert("are sure you want to " + "react-flow Ads")
                }
              >
                <MdOutlineClose />
              </button>
              <p className="text-xs whitespace-nowrap">react-flow Ads </p>
            </li>
          ))}
        </ul>
      )}
    </ul>
  );
}

export default Dotted;
