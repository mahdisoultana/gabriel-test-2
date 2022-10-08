import React, { useState } from "react";

function Languages() {
  const [selected, setSelected] = useState(0);
  return (
    <ul className="flex items-center space-x-3 text-sm">
      {["en", "fr"].map((i, index) => (
        <li
          title={i.toUpperCase()}
          className={`uppercase hover:opacity-50 cursor-pointer ${
            index == selected && "text-green-400 "
          }`}
          onClick={() => setSelected(index)}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export default Languages;
