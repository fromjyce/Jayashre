import React from "react";
import Sidebar from "./Sidebar";
import UpdateFooter from "./UpdateFooter";
import Navbar from "./Navbar";

function HeaderFooter() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <UpdateFooter />
    </React.Fragment>
  );
}

export default HeaderFooter;
