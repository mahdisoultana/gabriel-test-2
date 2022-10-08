import React, { useState } from "react";
import { IoMdGitBranch } from "react-icons/io";
import AccordionBody from "./AccordionBody";

const initData = [
  { icon: <IoMdGitBranch className="text-xl" />, text: "" },
  { icon: <IoMdGitBranch className="text-xl" />, text: "" },
  { icon: <IoMdGitBranch className="text-xl" />, text: "" },
  { icon: <IoMdGitBranch className="text-xl" />, text: "" },
  { icon: <IoMdGitBranch className="text-xl" />, text: "" },
];

function AccordionList({ data, custom = false }) {
  const [selected, setSelected] = useState(-1);
  return (
    <ul className="space-y-3 pt-2 max-h-[350px] overflow-y-auto style-scroll pr-2">
      {(data || initData).map((Item, index) => {
        return custom ? (
          <Item />
        ) : (
          <AccordionBody
            key={index}
            selected={selected == index}
            onClick={() => setSelected(index)}
            {...Item}
          />
        );
      })}
    </ul>
  );
}

export default AccordionList;
