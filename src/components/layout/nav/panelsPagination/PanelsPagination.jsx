import styled from "@emotion/styled";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Dotted from "./Dotted";
const Pannelstyled = styled.ul`
  background-image: linear-gradient(to right, transparent 0% 95%, #131a30);
`;
function PanelsPagination() {
  const [selected, setSelected] = useState(0);
  return (
    <Pannelstyled className=" h-full flex space-x-1 pl-6 w-[60vw] overflow-hidden ">
      {[1, 2, 3, 4, 5, 6, 7].map((i, index) => (
        <li
          className={` h-full flex items-center px-2 pr-6 space-x-1 text-sm rounded-t-md w-[150px] cursor-pointer hover:opacity-50 ${
            index == selected ? "bg-blue-medium" : "bg-blue-medium/50"
          }`}
          onClick={() => setSelected(index)}
        >
          <button
            className="text-xl hover:text-red-500"
            onClick={() => alert("are sure you want to " + "react-flow Ads")}
          >
            <MdOutlineClose />
          </button>
          <p className="text-xs whitespace-nowrap">react-flow Ads </p>
        </li>
      ))}
      <Dotted />
    </Pannelstyled>
  );
}

export default PanelsPagination;
