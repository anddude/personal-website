import Slider from '../components/Slider';

import BroccoliPong from '../assets/images/Broccoli-Pong.png';
import Decode from '../assets/images/decode.png';
import Personal from '../assets/images/personalWebsite.png';

import bootstrap from '../assets/images/bootstrap.svg';
import css from '../assets/images/css.svg';
import html5 from '../assets/images/html5.svg';
import javascript from '../assets/images/javascript.svg';
import mysql from '../assets/images/mysql.svg';
import postgres from '../assets/images/postgresq.svg';
import react from '../assets/images/react.svg';
import tailwind from '../assets/images/tailwind.svg';
import typescript from '../assets/images/typescript.svg';
import python from '../assets/images/python.svg';

export default function Projects() {
  const images = [
    { src: javascript, title: 'JavaScript' },
    { src: python, title: 'Python' },
    { src: react, title: 'React' },
    { src: html5, title: 'HTML5' },
    { src: css, title: 'CSS3' },
    { src: tailwind, title: 'Tailwind CSS' },
    { src: mysql, title: 'MySQL' },
    { src: postgres, title: 'PostgreSQL' },
    { src: bootstrap, title: 'Bootstrap' },
    { src: typescript, title: 'TypeScript' },
  ];
  return (
    <>
      <div className="flex grow animate-fade-in ">
        <main className="p-6 max-w-4xl mx-auto text-sunset container">
          <title>Projects</title>
          <h1>PROJECTS</h1>
          <p className="mb-16 mt-8">
            I’ve always been a lifelong learner, and diving into software
            engineering has been one of my most rewarding pursuits. My approach
            is simple: when something feels confusing or intimidating, lean in.
            That mindset has helped me build valuable skills and collaborate
            with some truly inspiring people over the years. I bring curiosity
            and a growth mindset to every project I tackle. Here are a few of my
            recent projects, with more on the way!
          </p>
          {/* card divs */}

          <div className="mt-16 p-8 justify-center grid md:grid-cols-2 gap-16 ">
            {/* Brocoli card div */}
            <div className="bg-twilight border rounded-sm shadow-md hover:shadow-smoke p-6 card-hover">
              <img
                src={BroccoliPong}
                alt="Broccoli Pong"
                className="w-full h-45 mb-4 rounded-sm shadow-[0_0_5px_rgba(58,76,160,.6)] inner-shadow"
              />

              <h2 className="font-space text-center text-neonGreen text-xl font-semibold">
                Broccoli-Pong
              </h2>

              <p className="font-space text-xs md:text-sm mt-1 md:mt-2">
                A pong-style browser game built with vanilla JavaScript.
                Features interactive DOM manipulation, basic collision
                detection, and a playful UX. Designed to strengthen logic flow
                and game loop structure fundamentals.
              </p>

              <div className="font-space grid grid-cols-2 gap-4 place-content-center text-sunset mt-6 text-center">
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen  hover:border-glass card-hover">
                  <a
                    href="https://broccoli-pong.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    Live Site
                  </a>
                </button>
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen hover:border-glass card-hover">
                  <a
                    href="https://github.com/anddude/broccoli-pong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>

            {/* Personal Website card div */}
            <div className="bg-twilight text-glass border rounded-sm shadow-md hover:shadow-smoke p-6 card-hover">
              <img
                src={Personal}
                alt="Personal Website"
                className="w-full h-45 mb-4 rounded-sm shadow-[0_0_5px_rgba(58,76,160,.6)] inner-shadow"
              />

              <h2 className="font-space text-neonGreen text-xl font-semibold">
                Personal Website
              </h2>

              <p className="font-space text-xs md:text-sm mt-1 md:mt-2">
                A personal portfolio site built with React, Tailwind, and Vite.
                Features modular components, custom animations, and responsive
                layouts. Designed to showcase projects and sharpen modern
                front-end skills.
              </p>

              <div className="font-space grid grid-cols-2 gap-4 place-content-center text-sunset mt-6 text-center">
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen hover:border-glass card-hover">
                  <a
                    href="https://annietadvick.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    Live Site
                  </a>
                </button>
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen hover:border-glass card-hover">
                  <a
                    href="https://github.com/anddude/personal-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>

            {/* Decode Game card div */}
            <div className="bg-twilight border rounded-sm shadow-md hover:shadow-smoke p-6 card-hover">
              <img
                src={Decode}
                alt="Decode Game"
                className="w-full h-45 mb-4 rounded-sm shadow-[0_0_5px_rgba(58,76,160,.6)] inner-shadow"
              />

              <h2 className="font-space text-center text-neonGreen text-xl font-semibold">
                DeCode: The Interview-Based Study Game
              </h2>

              <p className="font-space text-xs md:text-sm mt-1 md:mt-2">
                A text-based JavaScript game I built to reinforce advanced
                concepts like higher-order functions, closures, and recursion
                while making interview prep more engaging. Players unscramble
                chewed-up cue cards, battle ANXIETY, and try to land the job at
                TerryTech—with scoring, skip mechanics, and a custom review mode
                for missed questions.
              </p>

              <div className="font-space grid grid-cols-2 gap-4 place-content-center text-sunset mt-6 text-center">
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen  hover:border-glass card-hover">
                  <a
                    href="https://anddude.github.io/decode-game/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    Live Site
                  </a>
                </button>
                <button className="bg-neonGreen/80 rounded-sm border-2 border-smoke hover hover:bg-neonGreen hover:border-glass card-hover">
                  <a
                    href="https://github.com/anddude/decode-game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-twilight font-space"
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>

          <h2 className="mt-16 my-4">
            LANGUAGES, FRAMEWORKS, DATABASES & MORE!
          </h2>
          <p className="mt-4 mb-8">
            Over the past year, I’ve been diving into a range of technologies,
            continuously pushing myself to explore new tools, frameworks, and
            languages with every project. My goal is to expand my skill set
            through hands-on learning and practical application. While my
            proficiency varies across the technologies listed below, you can
            find{' '}
            <i>
              <span className="whitespace-nowrap no-underline effect-underline hover:text-shadow-sm hover:text-shadow-sunset/50 hover:not-italic">
                <a
                  href="/AnnieTadvick_Resume_4.25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  more details in my resume.
                </a>
              </span>
            </i>
          </p>

          <div className="px-4 pt-4 pb-8 w-full flex items-center justify-center">
            <Slider images={images} />
          </div>

          <div className="mt-16 inline-block px-2 py-1 border-2 border-cobalt rounded-xl font-space bg-transparent">
            <p className="text-xl pt-5 pl-5 text-glass md:text-3xl italic text-left text-shadow-xs text-shadow-smoke">
              "Simple things should be simple...complex things should be
              possible."
            </p>
            <h2 className="text-right mt-1 pr-10 text-thabold text-neonGreen/80 text-shadow-xs text-shadow-cobalt">
              — Alan Perlis
            </h2>
          </div>
        </main>
      </div>
    </>
  );
}
