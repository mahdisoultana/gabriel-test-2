import { motion } from "framer-motion";
import React from "react";
import useAsideDisplay from "../../../../hooks/aside/useAsideDisplay";
import Contolers from "../../../styled/Contolers";
import Input from "../../../styled/input/Input";
import AccordionListAside from "./accrodionLists/AccordionListAside";
function AsideLeft() {
  const setAsideDisplay = useAsideDisplay((s) => s.setAsideDisplay);
  const opened = useAsideDisplay((s) => s.asideLeft.opened);
  function actionDisplay(pram) {
    setAsideDisplay((prevS) => ({
      ...prevS,
      asideLeft: { opened: pram },
    }));
  }
  return (
    <motion.aside
      animate={{
        width: opened ? "20px " : "250px",
        padding: opened ? "0px " : "1rem",
        transition: {
          duration: 0.4,
        },
      }}
      layout
      className="  row-span-3 h-[130vh] overflow-y-auto style-scroll  bg-blue-medium relative overflow-hidden  "
    >
      <Contolers
        onOpened={() => actionDisplay(false)}
        onClosed={() => actionDisplay(true)}
      />
      {!opened && (
        <div className="h-full w-full ">
          <div className="px-4">
            <Input />
          </div>
          <AccordionListAside />
        </div>
      )}
    </motion.aside>
  );
}

export default AsideLeft;
