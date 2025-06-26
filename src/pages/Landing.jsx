import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import cracked from "../assets/images/cracked.png";

import TV from "../assets/images/TV.png";
import TVBackdrop from "../assets/images/TVbackdrop.jpg";
import Car from "../assets/images/car.png";
import MainKnob from "../assets/images/MainKnob.png";
import Button from "../assets/images/button.png";
import BunnyEars from "../assets/images/bunnyears.png";
import WhiteSpot from "../assets/images/whitespot.jpg";
import Fireball from "../assets/images/fireball.png";
import Fireball1 from "../assets/images/fireball1.png";
import Fireball2 from "../assets/images/fireball2.png";

export default function Landing() {

const [bgCracked, setBgCracked] = useState(false);
const [tv, setTv] = useState(false);
const [tvBg, setTvBg] = useState(false);
const [byeBunny, setByeBunny] = useState(false);
const [whiteGrow, setwhiteGrow] = useState(false);
const [whiteGrow2, setwhiteGrow2] = useState(false);
const [car, setCar] = useState(false);
const [knobs, setKnobs] = useState(false);
const [buttons1, setButtons1] = useState(false);
const [buttons2, setButtons2] = useState(false);

const [pageFadeOut, setPageFadeOut] = useState(false);


const navigate = useNavigate();

useEffect(() => {

  const timers = [
    setTimeout(() => setTv(true), 3200),
    setTimeout(() => setTvBg(true), 2500),
    setTimeout(() => setBgCracked(true), 3500),
    setTimeout(() => setByeBunny(true), 3250),
    setTimeout(() => setwhiteGrow(true), 3600),
    setTimeout(() => setwhiteGrow2(true), 3750),
    setTimeout(() => setCar(true), 3150),
    setTimeout(() => setKnobs(true), 3150),
    setTimeout(() => setButtons1(true), 3200),
    setTimeout(() => setButtons2(true), 3200),
    setTimeout(() => setPageFadeOut(true), 4125),
    setTimeout(() => navigate("/home"), 4250),
  ]

  return () => timers.forEach(clearTimeout);

  }, []);

  return (
    <>
      <title>Welcome</title>
      <main className={`relative flex flex-col items-center justify-center min-h-screen bg-night overflow-hidden transition-opacity duration-300
              ${pageFadeOut ? "opacity-0" : "opacity-100 animate-fade-in"}
              `}>


        {bgCracked && (
          <img
            src={cracked}
            alt="cracked overlay"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50 mix-blend-overlay pointer-events-none"
          />
        )}

        {tv && (
          <img
            src={Fireball}
            className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-50 mix-blend-overlay animate-grow pointer-events-none"
          />
        )}
        
        {tv && (
          <img
            src={Fireball1}
            className="absolute w-1 h-1 z-10 filter opacity-50  animate-grow pointer-events-none"
          />
        )}

        {car && (
          <img
            src={Fireball2}
            className="absolute w-2 h-2 z-0 filter opacity-50 animate-grow pointer-events-none"
          />
        )}

        {/* TV wrapper */}
        <div className="relative w-[30vw] aspect-[4/3] flex items-center justify-center">
          {/* TV image */}
          <img
            src={TV}
            alt="TV frame"
              className={`absolute w-1/2 h-1/2 object-contain z-10 ${tv ? "animate-growSpin" : ""}`}
          />

          {/* TV screen */}
          <img
            src={TVBackdrop}
            alt="What is on TV?"
            className={`w-[41.5%] h-[41.5%] object-cover z-0 crt-frame filter contrast-125 saturate-150 ${tvBg ? "animate-fade-out" : ""}`}
          />
           {car && ( <img
            src={Car}
            alt="Vroom!"
            className="absolute w-[20%] h-[11.5%] animate-car"
         /> )}

          <img src={MainKnob} className={`h-[7.25%] w-[5.5%] absolute top-[48.5%] right-[27.1%] z-10 ${knobs ? "animate-spin-knob1" : ""}`}></img>
          <img src={MainKnob} className={`h-[7.25%] w-[5.5%] absolute top-[55.85%] right-[27.1%] z-10 rotate-135 ${knobs ? "animate-spin-knob2" : ""}`}></img>
          <img src={Button} className={`h-[1.75%] w-[1.75%] absolute top-[49.85%] left-[65.45%] z-10 ${buttons1 ? "animate-b1" : ""}`}></img>
          <img src={Button} className={`h-[1.75%] w-[1.75%] absolute top-[52.5%] left-[65.45%] z-10 ${buttons2 ? "animate-b2" : ""}`}></img>
          <img src={Button} className={`h-[1.75%] w-[1.75%] absolute top-[55.25%] left-[65.45%] z-10 ${knobs ? "animate-b3" : ""}`}></img>
          <img src={Button} className={`h-[1.75%] w-[1.75%] absolute top-[58.25%] left-[65.45%] z-10 ${buttons1 ? "animate-b4" : ""}`}></img>
          <img src={Button} className={`h-[1.75%] w-[1.75%] absolute top-[60.85%] left-[65.45%] z-10 ${buttons2 ? "animate-b5" : ""}`}></img>
          <img
            src={BunnyEars}
            alt="bunny ears"
            className={`absolute w-[25%] h-[33%] object-contain z-0 top-[-3%] ${byeBunny ? "animate-grow" : ""}`}
          />
        </div>

        {/* White spots */}
        <img
          src={WhiteSpot}
          className={`z-20 absolute w-[5%] h-[5%] rounded-full blur-xl shadow-xl top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 ${whiteGrow ? "shadow-2xl shadow-burntOrange animate-fade-out scale-[10] opacity-75" : "animate-pulse"}`}
        />
        <img
          src={WhiteSpot}
          className={`z-20 absolute w-[3%] h-[3%] rounded-full blur-xl shadow-xl bottom-[47%] left-[45%]  -translate-x-1/4 ${whiteGrow2 ? "shadow-2xl shadow-neonGreen  animate-fade-out scale-[15] opacity-75" : "animate-pulse"}`}
        />
    
      </main>
    </>
  );
}