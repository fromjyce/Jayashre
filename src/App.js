import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </React.Fragment>
  );
}

export default App;
