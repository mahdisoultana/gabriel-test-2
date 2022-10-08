import React from "react";
import ConsoleMessage from "../../styled/ConsoleMessage";

function ConsoleBody() {
  return (
    <article className="w-full h-full mt-[20px] px-4 space-y-2">
      <ConsoleMessage status={"error"} />
      <ConsoleMessage
        status={"warn"}
        message="51.23.2012, 12:613 Each child in a list should have a unique 'key' prop "
      />
      <ConsoleMessage
        status={"finshed"}
        message="02.03.2022, 12:522 Task Finished successfully "
      />
      <ConsoleMessage
        status={"success"}
        message="26.03.2022, 12:111 Sequence Completed"
      />
      <ConsoleMessage
        status={"success"}
        message="26.03.2022, 12:111 Sequence Completed"
      />
      <ConsoleMessage
        status={"success"}
        message="26.03.2022, 12:111 Sequence Completed"
      />
    </article>
  );
}

export default ConsoleBody;
