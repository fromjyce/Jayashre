import React from "react";
import HeaderFooter from "./components/Header-Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <React.Fragment>
      <HeaderFooter>
        <Home />
      </HeaderFooter>
    </React.Fragment>
  );
}

export default App;
