import { motion } from "framer-motion";
import React from "react";
import { BiErrorAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { IoReloadCircleOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
function ConsoleMessage({
  status,
  message = "11.03.2022, 12:232 Error unexpected token 'class'",
}) {
  let icon = null;
  switch (status) {
    case "success":
      icon = <BsCheckCircle size={20} className="text-green-500" />;
      break;
    case "error":
      icon = <BiErrorAlt size={20} />;
      break;
    case "finshed":
      icon = <IoReloadCircleOutline size={22} />;
      break;
    case "warn":
      icon = <RiErrorWarningLine size={20} />;
      break;

    default:
      throw new Error(
        `this status '${status}' not match any of : "success" "error" "finshed" "warn" ! `,
      );
      break;
  }
  const colors = {
    error: "text-red-500",
    finshed: "text-blue-xlight",
    warn: "text-yellow-500",
    success: "text-green-500",
  };
  return (
    <motion.p
      layout
      className={`${colors[status]} text-sm font-extralight  flex items-center space-x-2`}
    >
      {icon}
      <span>{message} </span>
    </motion.p>
  );
}

export default ConsoleMessage;
