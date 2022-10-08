import React from "react";
import {
  AiFillPlayCircle,
  AiOutlineFolderOpen,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillStopCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoPlaySkipForwardCircleSharp } from "react-icons/io5";
import { RiSave3Line } from "react-icons/ri";

function Controls() {
  return (
    <article className="flex items-center space-x-6 text-xl">
      <ul className="flex items-center space-x-4 text-white">
        <li className=" hover:opacity-50 cursor-pointer  " title="Add +">
          <AiOutlinePlus />
        </li>
        <li
          className="  hover:opacity-50 cursor-pointer text-[24px]"
          title="Open New Folder  📁"
        >
          <AiOutlineFolderOpen />
        </li>
        <li
          className=" flex items-center hover:opacity-50 cursor-pointer  "
          title="Save 💾"
        >
          <RiSave3Line />
          <IoIosArrowForward className="text-sm text-blue-xlight" />
        </li>
      </ul>
      <ul className="flex items-center space-x-3 text-green-400 text-2xl">
        <li
          className="text-3xl hover:opacity-50 cursor-pointer"
          title="Start ✅"
        >
          <AiFillPlayCircle />
        </li>
        <li
          className="text-3xl hover:opacity-50 cursor-pointer"
          title="Forward ⏱"
        >
          <IoPlaySkipForwardCircleSharp />
        </li>
        <li className=" hover:opacity-50 cursor-pointer  " title="Stop ⏹">
          <BsFillStopCircleFill />
        </li>
      </ul>
    </article>
  );
}

export default Controls;
