import { motion } from "framer-motion";
import React from "react";
import { VscDebugConsole } from "react-icons/vsc";
function ConsoleOpenButton({ opened, setConsoleDisplay }) {
  return (
    <motion.button
      onClick={() => {
        window.scrollTo(0, document.body.scrollHeight);
        setConsoleDisplay();
      }}
      animate={{
        y: opened ? "100%" : "-0%",
        // opacity: opened ? 0 : 1,
        transition: {
          delay: opened ? 0 : 1,
        },
      }}
      className="fixed bottom-[0%] bg-blue-xdark rounded-t-md p-2 flex items-center justify-center right-1/2 z-[100] "
    >
      <VscDebugConsole className="text-2xl" />
    </motion.button>
  );
}

export default ConsoleOpenButton;
