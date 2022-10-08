import React from "react";

function AccordionBody({ text, icon, selected, ...rest }) {
  return (
    <li
      {...rest}
      className={`flex items-center space-x-2 p-4 py-2  border-blue-light rounded-lg border-[1.5px] cursor-pointer hover:bg-blue-light ${
        selected ? "bg-blue-light text-white" : "text-blue-xlight "
      } hover:text-white`}
    >
      {icon}
      <span className=" text-sm font-normal">{text || "If ... then"}</span>
    </li>
  );
}

export default AccordionBody;
