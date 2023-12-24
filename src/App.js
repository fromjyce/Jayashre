import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
    </React.Fragment>
  );
}

export default App;
