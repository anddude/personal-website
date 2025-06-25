import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Film from "./pages/Film.jsx";
import NotFound from "./pages/NotFound.jsx";
import TheRunner from "./pages/TheRunner.jsx";
import Chicle from "./pages/Chicle.jsx";
import Calling from "./pages/Calling.jsx";
import Pepito from "./pages/Pepito.jsx";
import Landing from "./pages/Landing.jsx";
import FilmGrainOverlay from "./components/FilmGrainOverlay.jsx";
import TVStaticOverlay from "./components/TVStaticOverlay.jsx";
import './index.pcss';

function App() {
  const location = useLocation();
  const path = location.pathname;

  const knownPaths = [
    "/", "/home", "/about", "/projects", "/film",
    "/therunner", "/pepito", "/chicle", "/calling"
  ];

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
