import React from "react";
import { Link } from 'react-router-dom';

export default function Pepito() {
  return (
    <>
    <div className="flex grow items-center justify-center animate-fade-in">
    <main className="px-5 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <title>Pepito</title>
     {/* Video Player */}

        <h2 className="text-lg md:text-2xl">ASSISTANT DIRECTOR - PEPITO (2018)</h2> 

        <div className="flex items-center justify-center">
          <p className="shortFilms"><i>Pepito</i> &nbsp; is a heartfelt passion project directed by &nbsp;
          <a href="https://www.imdb.com/name/nm8566784/?ref_=fn_all_nme_1" className="text-sunset no-underline effect-underline">Eman Esfandi</a>&nbsp;
          and written by <a href="https://www.imdb.com/name/nm9150047/" className="text-sunset no-underline effect-underline">Isaac Garza</a> and shot by <a href="https://www.zachmorrison2go.com/narrative?fbclid=PAZXh0bgNhZW0CMTEAAafBMmD4QEE-uoQdyEFOSonFklgWDI4BJ_m30M2kqPpYCDGBih2Z7nq_h1D_SQ_aem_bxY29wyJRhR3tmKBvcvIuw" className="text-sunset no-underline effect-underline">Zach Morrison</a>. 
          In this charming short, Pepito is lovingly dragged to confession and wrestles with being seen as more than just
          mommy’s little boy. After premiering at the Austin Film Festival in 2018 and screening at several other festivals, &nbsp;
          <i>Pepito</i> &nbsp; went on to win the HBO Latinx Short Film Competition, earning a spot on Max for streaming.
</p>

        </div>

        <iframe  
       src="https://www.youtube.com/embed/cUODbw4yJdg?autoplay=1&mute=1&rel=0&playsinline=1" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen className="w-full aspect-video relative">
       </iframe>

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