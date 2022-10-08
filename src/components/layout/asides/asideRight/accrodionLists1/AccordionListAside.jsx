import React from "react";
import Basics from "./basics/Basics";

function AccordionListAside({ className = "" }) {
  const [expanded, setExpended] = React.useState(-1);
  return (
    <section className={className}>
      {[Basics, Basics, Basics, Basics, Basics, Basics].map(
        (List, index, array) => (
          <section className={`${index == array.length - 1 && "pb-4"}`}>
            <List key={index} />
          </section>
        ),
      )}
    </section>
  );
}

export default AccordionListAside;
