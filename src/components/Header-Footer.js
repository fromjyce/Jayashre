import React from "react";
import Sidebar from "./Sidebar";
import UpdateFooter from "./UpdateFooter";
import Navbar from "./Navbar";

function HeaderFooter({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <main className="content">{children}</main>
      <UpdateFooter />
    </React.Fragment>
  );
}

export default HeaderFooter;
