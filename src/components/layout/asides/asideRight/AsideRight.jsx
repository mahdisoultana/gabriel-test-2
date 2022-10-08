import { motion } from "framer-motion";
import React, { useState } from "react";
import useAsideDisplay from "../../../../hooks/aside/useAsideDisplay";
import Contolers from "../../../styled/Contolers";
import AccordionListAside1 from "./accrodionLists1/AccordionListAside";
import AccordionListAside2 from "./accrodionLists2/AccordionListAside";
import AsideRgithHeader from "./asideRightHeader/AsideRgithHeader";

function AsideRight() {
  const [selected, setSelected] = useState(0);
  const setAsideDisplay = useAsideDisplay((s) => s.setAsideDisplay);
  const opened = useAsideDisplay((s) => s.asideRight.opened);

  function actionDisplay(pram) {
    setAsideDisplay((prevS) => ({
      ...prevS,
      asideRight: { opened: pram },
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
      className=" origin-right row-span-3 h-[130vh] overflow-y-auto style-scroll  bg-blue-medium relative  "
    >
      <Contolers
        reverse={true}
        className="left-[0px] rounded-r-md "
        onOpened={() => actionDisplay(true)}
        onClosed={() => actionDisplay(false)}
      />
      {!opened && (
        <div className="h-full w-full    pl-[10px] mb-12 ">
          <div className="h-full pb-10">
            <AsideRgithHeader setSelected={setSelected} selected={selected} />
            {selected == 0 && (
              <AccordionListAside1
                className={`border border-gray-100/10  rounded-md relative z-10 ${
                  selected == 0 ? "rounded-tl-none" : "rounded-tr-none"
                }`}
              />
            )}
            {selected == 1 && (
              <AccordionListAside2
                className={`border border-gray-100/10  rounded-md relative z-10 ${
                  selected == 0 ? "rounded-tl-none" : "rounded-tr-none"
                }`}
              />
            )}
          </div>
        </div>
      )}
    </motion.aside>
  );
}

export default AsideRight;
