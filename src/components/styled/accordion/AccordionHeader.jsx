import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function AccordionHeader({ title, expanded, ...rest }) {
  return (
    <Button
      {...rest}
      className={`w-full justify-start p-2   font-light  text-sm capitalize space-x-1 flex items-center cursor-pointer ${
        expanded ? "text-white" : "text-blue-xlight"
      }`}
    >
      <motion.span animate={{ rotate: expanded ? "0deg" : "-90deg" }}>
        <IoIosArrowDown />
      </motion.span>
      <span>{title || "Basic"}</span>
    </Button>
  );
}

export default AccordionHeader;
