import React from "react";
import { BsSearch } from "react-icons/bs";
function InputC({ placeholder = "functions" }) {
  return (
    <label className="relative group  block w-full ">
      <input
        className="text-blue-xlight w-full bg-transparent placeholder:text-blue-xlight outline-none border border-transparent focus:border-b-blue-xlight  "
        placeholder={placeholder}
        id={placeholder}
      />

      <BsSearch className="absolute top-1/2 right-0 -translate-y-1/2  " />
    </label>
  );
}

export default InputC;
