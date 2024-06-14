import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
