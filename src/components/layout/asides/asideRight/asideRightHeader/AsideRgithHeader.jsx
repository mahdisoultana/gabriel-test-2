import React from "react";

function AsideRgithHeader({ setSelected, selected }) {
  return (
    <article className="w-full h-[40px]  flex items-center  bg-blue-medium relative z-20 text-base font-light">
      <button
        className={` text-xs font-light  rounded-t-md  w-full h-full ${
          selected == 0
            ? " border border-gray-100/10 border-b-transparent   -mb-1 bg-blue-medium text-white"
            : ""
        }`}
        onClick={() => {
          setSelected(0);
        }}
      >
        Properties
      </button>
      <button
        className={` text-xs font-light  rounded-t-md   w-full h-full   ${
          selected == 1
            ? " border border-gray-100/10 border-b-transparent   -mb-1 bg-blue-medium text-white "
            : ""
        }`}
        onClick={() => {
          setSelected(1);
        }}
      >
        Varaibles
      </button>
    </article>
  );
}

export default AsideRgithHeader;
