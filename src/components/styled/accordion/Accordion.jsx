import React from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionList from "./AccordionList";
function AccordionC({ title, data = null, custom }) {
  const [expanded, switchState] = React.useReducer((s) => !s, false);
  return (
    <article className="mt-3">
      <AccordionHeader
        title={title}
        expanded={expanded}
        onClick={switchState}
      />
      {expanded && <AccordionList data={data} custom={custom} />}
    </article>
  );
}

export default AccordionC;
