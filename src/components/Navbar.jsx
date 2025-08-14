import { Link, useLocation } from "react-router-dom";

import WG from "../assets/images/woodgrain.png";
import Resume from "../assets/AnnieTadvick_Resume_8.25.pdf";

function Navbar({ navItems }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <Link to="/home">
            <div
              className={`font-space font-bold p-1 md:p-2 lg:p-4 text-4xl lg:text-6xl text-mustard text-shadow-sm text-shadow-burntOrange effect-box ${
                currentPath === "/home" ? "effect-box-show" : ""
              }`}
            >
              Annie Tadvick
            </div>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none text-7xl">
            <div
              className="w-[100%] h-[25%] px-[5%] bg-cover bg-mocha bg-blend-multiply opacity-50 rounded-lg"
              style={{ backgroundImage: `url(${WG})` }}
            />
          </div>
          <ul className="relative flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {navItems &&
              navItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`navbarItem ${
                      currentPath === path
                        ? "text-neonGreen/80 text-shadow-smoke text-shadow-sm"
                        : "hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            <li>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="navbarItem"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
