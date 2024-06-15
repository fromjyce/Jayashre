import React from "react";
import Sidebar from "./Sidebar";
import UpdateFooter from "./UpdateFooter";
import Navbar from "./Navbar";

function HeaderFooter() {
  return (
    <React.Fragment>
      <Sidebar />
      <UpdateFooter />
      <Navbar />
    </React.Fragment>
  );
}

export default HeaderFooter;
