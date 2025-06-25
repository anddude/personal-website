import { Link } from 'react-router-dom';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Calling() {
  return (
   <>
    <Navbar />
    <div className="flex grow items-center justify-center text-burntOrange animate-fade-in">
      <main className="p-2 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <title>Calling</title> 

        <h2>
          PRODUCER - CALLING (2017)
        </h2>

        {/* Optional text or other column goes here */}
        <div className="flex justify-items-center items-center text-lg text-center font-thasadith">
          <p><i>Calling</i> &nbsp; is a UT graduate short film, directed by &nbsp;
          <a href="https://www.imdb.com/name/nm3252139/" className=" text-sunset no-underline effect-underline">Artemis Anastasiadou</a> and shot by <a href="https://sarahhennigan.com/" className="text-sunset no-underline effect-underline">Sarah Hennigan</a>. 
          The film explores themes of motherhood, disability, and healing from trauma. It proudly premiered at 
          the Austin Film Festival in 2017—the same year my Broad City spec script, &nbsp;
          <a href="https://austinfilmfestival.com/submit/screenplay-and-teleplay-submissions-2/2017-script-competition-semifinalists-second-rounders/" className="text-sunset hover:underline ">
          <i>Holy Grail</i></a>, &nbsp;advanced
          to the second round of the festival's script competition. <i>Calling</i>&nbsp; went on to screen at festivals 
          across the country and was featured in the Texas Filmmakers Showcase in Los Angeles. </p>
        </div>

        <div className="w-full aspect-video relative">
          <iframe
            src="https://player.vimeo.com/video/278860225?autoplay=1&muted=1&loop=1&background=0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute top-0 left-0 w-full h-full"
            title="Calling_FilmClip"
          ></iframe>
        </div>
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
