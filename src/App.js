import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/Header-Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <HeaderFooter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Jayashre" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HeaderFooter>
    </BrowserRouter>
  );
}

export default App;
