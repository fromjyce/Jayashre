import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import RouteWrapper from './components/RouteWrapper';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<RouteWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
