import React from "react";
import Controls from "./controls/Controls";
import MoreInfo from "./moreInfo/MoreInfo";
import PanelsPagination from "./panelsPagination/PanelsPagination";

function Nav() {
  return (
    <nav className="col-span-3 flex items-center px-6 pt-1 relative">
      <Controls />
      <PanelsPagination />
      <MoreInfo />
    </nav>
  );
}

export default Nav;
