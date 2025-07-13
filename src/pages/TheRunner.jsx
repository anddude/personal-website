import React from "react";
import { Link } from 'react-router-dom';

export default function TheRunner() {
  return (
    <>
    <div className="flex grow items-center justify-center animate-fade-in">
      <main className="px-5 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <title>The Runner</title>

      <h2 className="text-base md:text-2xl">ASSISTANT DIRECTOR - THE RUNNER (2022)</h2>

      <div className="flex justify-items-center items-center">
          <p className="shortFilms"><em>The Runner</em> &nbsp; is a short film directed by <a href="https://www.ryanmack.com/about" className="text-sunset no-underline effect-underline">
          Ryan Mack</a> and co-written/shot by his brother <a href="https://www.loganmack.com/about" className="text-sunset no-underline effect-underline">Logan Mack</a>. 
          This horror film explores themes of adversity and disability, grounded in authentic lived experience. The lead role is portrayed by an
          actor who is blind, adding a powerful layer of realism to the story. <em>The Runner</em> &nbsp; premiered at the ReelAbilities Film Festival.
</p>
        </div>

      <div className="w-full aspect-video relative">
        <iframe 
          src="https://player.vimeo.com/video/744372904?autoplay=1&muted=1&loop=1&background=0" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
          title="The Runner | Teaser Trailer"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>

    <div className="flex justify-start col-span-1">
    <Link to="/film" className="border border-sunset/50 bg-twilight hover:text-smoke hover:border-twilight/50 hover:bg-twilight/50 text-glass text-xs px-2 py-1 rounded-lg">
      Back
    </Link>
  </div>

    </main>
    </div>
    </>
  );
}