import React from "react";
import Sidebar from "./Sidebar";
import UpdateFooter from "./UpdateFooter";

function HeaderFooter() {
  return (
    <React.Fragment>
      <Sidebar />
      <UpdateFooter />
    </React.Fragment>
  );
}

export default HeaderFooter;
