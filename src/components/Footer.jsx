import WG from '../assets/images/woodgrain.png';
import { useState } from 'react';

function Footer() {
  const [hoverCalendly, setHoverCalendly] = useState(false);

  return (
    <footer className=" text-cobalt text-center z-10">
      <div className="pt-[5%] bottom-[0%] left-[120%] ">
        <p className="py-2 font-space text-mustard text-shadow-sm text-shadow-burntOrange ">
          Let's Connect!
        </p>

        {/* Social Links */}
        <div className="relative flex justify-center space-x-4 text-sm">
          <div
            className=" absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-cover bg-mocha bg-blend-multiply rounded-lg opacity-50 "
            style={{ backgroundImage: `url(${WG})` }}
          ></div>

          {/* Calendly */}
          <a
            href="https://calendly.com/annietadvick/30min"
            className="relative w-[28px] h-[28px] inline-block group"
            onMouseEnter={() => setHoverCalendly(true)}
            onMouseLeave={() => setHoverCalendly(false)}
            aria-label="Schedule a chat"
          >
            {/* Calendar Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out 
      ${
        hoverCalendly
          ? 'opacity-0 rotate-[360deg] scale-75'
          : 'opacity-100 rotate-0 scale-100'
      }`}
            >
              <path d="M11 14h1v4" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </svg>

            {/* Coffee Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out 
      ${
        hoverCalendly
          ? 'opacity-100 rotate-0 scale-100'
          : 'opacity-0 -rotate-[360deg] scale-75'
      }`}
            >
              <path d="M10 2v2" />
              <path d="M14 2v2" />
              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
              <path d="M6 2v2" />
            </svg>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/annie-tadvick-92187165/"
            className="hover:animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/anddude">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github hover:animate-pulse "
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:annietadvick@gmail.com?subject=My%20Let'sConnect&body=My%20Body"
            className="hover:animate-pulse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </a>
        </div>

        <p className="text-xs pt-10 text-neonGreen/50 mt-8">
          &copy; 2025 - Made By Annie Tadvick
        </p>
      </div>
    </footer>
  );
}

export default Footer;
