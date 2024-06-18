import React from "react";
import HeaderFooter from "./components/Header-Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

function App() {
  return (
    <React.Fragment>
      <HeaderFooter>
        <Achievements />
      </HeaderFooter>
    </React.Fragment>
  );
}

export default App;
