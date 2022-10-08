import React, { useId, useState } from "react";
import Accordion from "../../../../../styled/accordion/Accordion";
function Basics() {
  return <Accordion data={[ItemCell]} custom={true} title="Body Parameter" />;
}

function ItemCell() {
  return (
    <>
      <RadioWithText data={["Save the Step", "Calculate Value"]} />
    </>
  );
}

function RadioWithText({ data = [] }) {
  const id = useId();
  const [active, setActive] = useState(false);
  return (
    <>
      {data.map((i, index) => (
        <label
          className="flex items-center space-x-2 p-2 group cursor-pointer  "
          key={index}
        >
          <input
            name={id}
            type="radio"
            className="text-green-500 p-1 ring-1 ring-green-500 group-hover:opacity-80 "
          />
          <p className="text-white text-xs font-light group-hover:opacity-80">
            {i}
          </p>
        </label>
      ))}

      <div className="pl-2 pb-2">
        <input
          className="placeholder:text-blue-xlight text-xs uppercase font-base bg-blue-light rounded-lg w-full border-none "
          placeholder="url"
          type="url"
        />
      </div>
    </>
  );
}

export default Basics;
