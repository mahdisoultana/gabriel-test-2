import { motion } from "framer-motion";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  VscDebugConsole,
  VscEmptyWindow,
  VscMultipleWindows,
  VscWindow,
} from "react-icons/vsc";
const DeleteBin6Line = motion(RiDeleteBin6Line);
const Console = motion(VscDebugConsole);
const EmptyWindow = motion(VscEmptyWindow);
const MultipleWindows = motion(VscMultipleWindows);
const Window = motion(VscWindow);

function ConsoleHeader({ setConsoleDisplay, setFixed, fixed }) {
  return (
    <header className="p-8 py-2  bg-blue-xdark z-10  flex items-center justify-between absolute top-[2px] w-full left-0">
      <p className="flex items-center space-x-2 text-sm">
        <span className="-mb-1 block">
          <Console layout className="text-lg" />
        </span>
        <motion.span layout> Console</motion.span>
      </p>
      {!fixed && (
        <button
          className="block ml-auto mr-12 text-lg"
          title="Delete Console "
          onClick={setConsoleDisplay}
        >
          <DeleteBin6Line layout className="hover:text-red-500" />
        </button>
      )}
      <ul className="flex items-center space-x-4 ">
        <li>
          <EmptyWindow
            layout
            title="MultipleWindows"
            className="hover:text-indigo-600 cursor-pointer"
          />
        </li>

        <li>
          <MultipleWindows
            layout
            title="EmptyWindow"
            className="hover:text-indigo-600 cursor-pointer"
          />
        </li>
        <li onClick={() => setFixed((prevS) => !prevS)}>
          <Window
            layout
            title={fixed ? "Minimise Window" : "agrendir Window"}
            className={`hover:text-indigo-600 cursor-pointer ${
              fixed && "text-red-500"
            }`}
          />
        </li>
      </ul>
    </header>
  );
}

export default ConsoleHeader;
