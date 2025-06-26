import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import WG from "../assets/images/woodgrain.png";
import Resume from "../assets/AnnieTadvick_Resume_6.25.pdf"

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="w-full">
      {/* Center container – adjust max-w as needed */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 md:p-8">
      
        {/* Left: Logo */}
        <div>
          <Link to="/home">
            <div className={`font-space font-bold p-1 md:p-2 lg:p-4 text-lg md:text-4xl lg:text-6xl text-mustard text-shadow-sm text-shadow-burntOrange effect-box ${currentPath === "/home" ? "effect-box-show" : ""}`}>
  Annie Tadvick
</div>

          </Link>
        </div>
        
        {/* Right: Navigation Links with decorative woodgrain */}
        <div className="relative">
          {/* Woodgrain background in a contained layer */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[100%] h-[25%] px-[5%] bg-cover bg-mocha bg-blend-multiply opacity-50 rounded-lg" style={{ backgroundImage: `url(${WG})` }}/>
          </div>
          <ul className="relative flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <li>
              <Link 
                to="/about" 
                className={`font-space font-bold text-base text-sm md:text-xl lg:text-2xl hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs
                  ${currentPath === "/about" ? "text-neonGreen/80 text-shadow-smoke text-shadow-sm" : "text-glass hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs"}`}
              >
                About
              </Link>
              
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`font-space font-bold text-base text-sm md:text-xl lg:text-2xl hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs
                  ${currentPath === "/projects" ? "text-neonGreen/80 text-shadow-smoke text-shadow-sm" : "text-glass hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs"}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/film" 
                className={`font-space font-bold text-base text-sm md:text-xl lg:text-2xl hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs
                  ${currentPath === "/film" ? "text-neonGreen/80 text-shadow-smoke text-shadow-sm" : "text-glass hover:text-neonGreen hover:text-shadow-sunset hover:text-shadow-xs"}`}
              >
                Film
              </Link>
            </li>
            <li>
              <a 
                href={Resume} 
                rel="noopener noreferrer"
                className="font-space font-bold text-glass text-base text-sm md:text-xl lg:text-2xl hover:text-neonGreen/80 hover:text-shadow-sunset hover:text-shadow-xs"
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

