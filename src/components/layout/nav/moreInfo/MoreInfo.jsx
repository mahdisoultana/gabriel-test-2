import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import Languages from "./Languages";
function MoreInfo() {
  return (
    <ul className=" ml-auto  flex items-center text-base font-light ">
      <Languages />
      <li
        className="text-gray-100 text-2xl ml-6 hover:opacity-50 cursor-pointer"
        title="profile"
      >
        <AiOutlineUser />
      </li>
      <li className="w-8 h-8  ml-4">
        <img src="/logo.png" className="reset-img" />
      </li>
    </ul>
  );
}

export default MoreInfo;
