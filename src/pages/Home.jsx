import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import LongPic from "../assets/images/LongPic.jpg";

export default function Home() {
  return (
    <>
    <Navbar />   
    <div className="flex grow font-thasadith text-sunset bg-background container text-center animate-fade-in">
      <title>Annie Tadvick</title>
    <main className="  
    w-full
    max-w-5xl 
    mx-auto
    grid 
    grid-cols-1
    md:grid-cols-2  
    gap-12
    items-center
    justify-items-center  
    p-4
    flex-col">

      <div>
        <div className="image-details-effect relative group">
          <img 
          src={LongPic} 
          alt="New York City's winter" 
          className="p-px w-auto h-80 mx-auto mb-6 object-cover rounded-sm shadow-md image-to-dim"
          />
          <div className="text-neonGreen font-space overlay-text">Film Photo by &nbsp;<a href="https://www.imdb.com/name/nm7670398/" className="no-underline effect-underline">Morgan Armstrong</a></div>
          </div>
      </div>
      
      <div>
        <h1>
        HOWDY {cowboy}
        </h1>
        <p>
          I'm Annie — a filmmaker turned software engineer with a passion for building thoughtful,
          human-centered digital experiences. After years of managing fast-paced productions and solving
          high-stakes problems behind the scenes, I pivoted into tech to bring that same creative energy and
          attention to detail to the world wide web. Stay a little while to check out my projects. 
          Thanks for stopping by and don't be a stranger - <a href="https://calendly.com/annietadvick/30min">
          <i><span className="hover:text-shadow-sm hover:text-shadow-sunset/50 hover:not-italic no-underline effect-underline">
          let's grab a cup of coffee and chat!</span></i></a> 
        </p>
      </div>
    </main>
    </div>
   <Footer />
  </>
  );
}

const cowboy = "\u{1F920}";
