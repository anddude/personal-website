import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TV from "../assets/images/TV.png";
import TVBackdrop from "../assets/images/TVbackdrop.jpg";
import Car from "../assets/images/car.png";
import MainKnob from "../assets/images/MainKnob.png";
import Button from "../assets/images/button.png";
import BunnyEars from "../assets/images/bunnyears.png";
import WhiteSpot from "../assets/images/whitespot.jpg";

export default function Landing() {
const navigate = useNavigate();

useEffect(() => {
  const timer2 = setTimeout(() => navigate("/home"), 6000);

  return () => {
    clearTimeout(timer2);
  };
}, []);

  return (
    <>
      <title>Welcome</title>
      <main className="flex flex-col items-center justify-center min-h-screen bg-night animate-fade-in">
        {/* TV wrapper */}
        <div className="relative w-[30vw] aspect-[4/3] flex items-center justify-center">
          {/* TV image */}
          <img
            src={TV}
            alt="TV frame"
            className="absolute w-1/2 h-1/2 object-contain z-10"
          />

          {/* TV screen */}
          <img
            src={TVBackdrop}
            alt="What is on TV?"
            className="w-[41.5%] h-[41.5%] object-cover z-[-1] crt-frame filter contrast-125 saturate-150 "
          />
           {/* <img
            src={Car}
            alt="Vroom!"
            className="absolute w-[20%] h-[11.5%] animate-car"
         /> */}
          <img src={MainKnob} className="h-[7.25%] w-[5.5%] absolute top-[48.5%] right-[27.1%] z-10"></img>
          <img src={MainKnob} className="h-[7.25%] w-[5.5%] absolute top-[55.85%] right-[27.1%] z-10 rotate-135"></img>
          <img src={Button} className="h-[1.75%] w-[1.75%] absolute top-[49.85%] left-[65.45%] z-10"></img>
          <img src={Button} className="h-[1.75%] w-[1.75%] absolute top-[52.5%] left-[65.45%] z-10"></img>
          <img src={Button} className="h-[1.75%] w-[1.75%] absolute top-[55.25%] left-[65.45%] z-10"></img>
          <img src={Button} className="h-[1.75%] w-[1.75%] absolute top-[58.25%] left-[65.45%] z-10"></img>
          <img src={Button} className="h-[1.75%] w-[1.75%] absolute top-[60.85%] left-[65.45%] z-10"></img>
          <img
            src={BunnyEars}
            alt="bunny ears"
            className="absolute w-[25%] h-[33%] object-contain z-0 top-[-3%]"
          />
        </div>

        {/* White spots */}
        <img
          src={WhiteSpot}
          className="z-20 absolute w-[5%] h-[5%] rounded-full blur-xl shadow-xl top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 animate-pulse animate-fade-in-delay-2"
        />
        <img
          src={WhiteSpot}
          className="z-20 absolute w-[3%] h-[3%] rounded-full blur-xl shadow-xl bottom-[47%] left-[45%]  -translate-x-1/4 animate-pulse animate-fade-in-delay-2"
        />
    
      </main>
    </>
  );
}