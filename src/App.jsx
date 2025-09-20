import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Film from './pages/Film';

import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import FilmGrainOverlay from './components/FilmGrainOverlay';
import TVStaticOverlay from './components/TVStaticOverlay';
import navItems from './components/NavbarItems';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.pcss';
import shortsFilmPageDetails from '/src/components/ShortFilmPagesDetails';
import ShortFilmPages from './pages/ShortFilmPages';

function App() {
  const location = useLocation();
  const path = location.pathname;

  const knownPaths = [
    '/home',
    '/about',
    '/projects',
    '/film',
    ...shortsFilmPageDetails.map((film) => film.path),
  ];

  const overlay =
    path === '/' ? null : knownPaths.includes(path) ? (
      <FilmGrainOverlay />
    ) : (
      <TVStaticOverlay />
    );

  return (
    <div className="relative flex flex-col min-h-screen bg-night bg-blend-multiply text-foreground">
      {overlay}
      {knownPaths.includes(path) && <Navbar navItems={navItems} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/film" element={<Film />} />
        <Route
          path="/film/:slug"
          element={
            <ShortFilmPages shortsFilmPageDetails={shortsFilmPageDetails} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {knownPaths.includes(path) && <Footer />}
    </div>
  );
}

export default App;
