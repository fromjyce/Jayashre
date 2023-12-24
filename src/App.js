import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </React.Fragment>
  );
}

export default App;
