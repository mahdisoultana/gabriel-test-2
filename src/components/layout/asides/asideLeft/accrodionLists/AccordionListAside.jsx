import React from "react";
import Basics from "./basics/Basics";

function AccordionListAside() {
  return [Basics, Basics, Basics, Basics, Basics, Basics].map(
    (List, index, array) => (
      <section key={index} className={index == array.length - 1 && "pb-4"}>
        <List />
      </section>
    ),
  );
}

export default AccordionListAside;
