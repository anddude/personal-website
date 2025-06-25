import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


export default function Chicle() {
  return (
    <>
    <Navbar />
    <div className="flex grow items-center justify-center text-burntOrange animate-fade-in">
      <main className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <title>Chicle</title>
     {/* Video Player */}
      <h2>
        PRODUCER - CHICLE (2019)
      </h2> 

      <div className="flex text-center text-lg font-thasadith items-center">
          <p><i>Chicle (Gum)</i> &nbsp; is a UT graduate thesis film directed by &nbsp;
          <a href="https://www.lizettebarrera.com/" className="text-sunset no-underline effect-underline">Lizette Barrera Morales</a>&nbsp; 
          and shot by <a href="https://faculty.txst.edu/profile/2109077" className="text-sunset no-underline effect-underline">Huay-Bing Law</a>. 
          The short follows an ill-tempered teenager who seeks peaceful solitude on the day of her grandfather’s passing 
          until an estranged friend unexpectedly shows up. <i>Chicle</i> &nbsp; proudly premiered at SXSW in 2019 and 
          went on to screen at over two dozen festivals across the U.S., including Outfest, the LA Latino International Film Festival, 
          and the Austin Film Society, to name a few.
</p>

        </div>

       <div className="w-full aspect-video relative">
          <iframe 
          width="300px" 
          height="150px"
          src="https://player.vimeo.com/video/315613177?autoplay=1&muted=1&loop=1&background=0" 
          frameborder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          className="absolute top-0 left-0 w-full h-full"
          title="CHICLE (GUM) TRAILER">
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js">
        </script>
    
    <div className="flex justify-start col-span-1">
    <Link to="/film" className="border border-sunset/50 bg-twilight hover:text-smoke hover:border-twilight/50 hover:bg-twilight/50 text-glass text-xs px-2 py-1 rounded-lg">
      Back
    </Link>
  </div>

    </main>
    </div>
    <Footer />
    </>
  );
}