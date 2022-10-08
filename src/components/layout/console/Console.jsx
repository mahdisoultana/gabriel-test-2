import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useConsoleDisplay from "../../../hooks/console/useConsoleDisplay";
import ConsoleBody from "./ConsoleBody";
import ConsoleHeader from "./ConsoleHeader";
import ConsoleOpenButton from "./ConsoleOpenButton";
function Console() {
  const [fixed, setFixed] = React.useState(false);
  const { opened, setConsoleDisplay } = useConsoleDisplay();
  const height = fixed && opened ? "100vh" : !fixed && opened ? "200px" : "0";
  React.useEffect(() => {
    if (!fixed) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [fixed]);
  return (
    <motion.div
      animate={{
        transition: { duration: 1 },
        height,
      }}
      layout
      className={`block border-none bg-blue-xdark  ${
        fixed ? "fixed top-0 right-0 h-screen" : "absolute"
      } w-full bottom-0 left-0 z-[200] `}
    >
      <ConsoleOpenButton
        opened={opened}
        setConsoleDisplay={setConsoleDisplay}
      />

      <AnimatePresence>
        {opened && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0.2,
              y: "100%",
              transition: {
                duration: 1,
              },
            }}
            layout
            className={`p-4  overflow-y-auto  ${
              fixed ? "h-screen" : "h-[200px]"
            } style-scroll-dark bg-blue-xdark relative z-20 `}
          >
            <article className="  py-4    ">
              <ConsoleHeader
                fixed={fixed}
                setConsoleDisplay={setConsoleDisplay}
                setFixed={setFixed}
              />
              <ConsoleBody />
            </article>
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Console;
