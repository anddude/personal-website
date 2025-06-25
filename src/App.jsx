import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Film from "./pages/Film";
import NotFound from "./pages/NotFound";
import TheRunner from "./pages/TheRunner";
import Chicle from "./pages/Chicle";
import Calling from "./pages/Calling";
import Pepito from "./pages/Pepito";
import Landing from "./pages/Landing";
import FilmGrainOverlay from "./components/FilmGrainOverlay";
import TVStaticOverlay from "./components/TVStaticOverlay";
import './index.pcss';

function App() {
  const location = useLocation();
  const path = location.pathname;

  // Known valid paths
  const knownPaths = [
    "/", "/home", "/about", "/projects", "/film",
    "/therunner", "/pepito", "/chicle", "/calling"
  ];

  // Determine which overlay to show
  const overlay = path === "/"
    ? null
    : knownPaths.includes(path)
      ? <FilmGrainOverlay />
      : <TVStaticOverlay />;

  return (
    <div className="relative flex flex-col min-h-screen bg-night bg-blend-multiply text-foreground">
      {overlay}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/film" element={<Film />} />
        <Route path="/therunner" element={<TheRunner />} />
        <Route path="/pepito" element={<Pepito />} />
        <Route path="/chicle" element={<Chicle />} />
        <Route path="/calling" element={<Calling />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
