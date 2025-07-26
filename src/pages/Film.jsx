import React from "react";
import { Link } from 'react-router-dom';
import shortsFilmPageDetails from '../components/ShortFilmPagesDetails';

import TellurideGroup from "../assets/images/TellurideGroup.jpg";
import TellurideAlone from "../assets/images/TellurideAlone.jpg";

import RD1 from "../assets/images/RDSet1.png";
import RD2 from "../assets/images/RDSet2.jpg";
import RD3 from "../assets/images/RDSet3.jpg";
import RD4 from "../assets/images/RDSet4.png";

export default function Film() {
  return (
    <>
    <div className="flex grow text-center container animate-fade-in">
      <main className="container font-thasadith p-6 max-w-4xl mx-auto text-sunset">
      <title>Film</title>
        <h1>FILM & TV</h1>
          <p className="mb-16 mt-8">I spent nearly a decade working in &nbsp;
            <a href="https://www.imdb.com/name/nm6860917/?ref_=fn_all_nme_1" target="_blank" rel="noopener noreferrer" className="text-burntOrange no-underline effect-underline">Film & TV</a>&nbsp; across a variety of roles. I specialized
            in leading creative teams, managing high-pressure logistics, and 
            delivering powerful visual storytelling — skills that now inform my 
            approach to software development.
          </p>

          <div className="bg-cobalt/50 py-2 px-3 justify-center rounded-xl inline-block">
            <h2 className="m-0">SELECTED HIGHLIGHTS:</h2>
          </div>
          

      {/* TELLURIDE */}

      <div className="font-space grid grid-cols-2 gap-4 mt-16">
        <div className="image-details-effect relative group">
          <img src={TellurideGroup} alt="Telluride Film Festival Group Photo"  className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" title="Annie on set with camera team" />
          <div className="overlay-text">TFF Production Group Photo 2018</div>
        </div>
        <div className="image-details-effect relative group">
          <img src={TellurideAlone} alt="Telluride Film Festival Alone Photo"   className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" title="Annie on set with camera team" />
          <div className="overlay-text">Sitting Amongst Auteurs</div>
        </div>
        </div>
      <p className="mt-8 pb-4" padding="bottom">
       <a href="https://www.telluridefilmfestival.org/" target="_blank" rel="noopener noreferrer"><span className="text-burntOrange font-thabold no-underline effect-underline">Telluride Film Festival</span></a> — My journey began as a Student Symposium 
        member (1 of 24 selected) in 2015. I returned as a volunteer, was
        later chosen as one of 12 annual Production Apprentices (“TFF Dogs”) 
        in 2018, and eventually worked as an Assistant Manager of Theater 
        Operations. I also participated in screening narrative feature 
        submissions to help narrow festival selections.
      </p>

      {/* PRODUCING */}
      <div className="grid mt-16 grid-cols-2 gap-8">
        {shortsFilmPageDetails.map(({ slug, title, poster }) => (
          <Link key={slug} to={`/film/${slug}`}>
          <img 
            src={poster} 
            alt={title}
            className="
                md:w-96                
                rounded-lg         
                shadow-lg           
                hover:scale-105    
                transition-transform
                duration-200
                cursor-pointer
                "
           />
          </Link>
           ))}
      </div>

        <p className="mt-8 pb-4">
        <a href="https://www.imdb.com/name/nm6860917/?ref_=fn_all_nme_1" target="_blank" rel="noopener noreferrer"><span className="text-burntOrange font-thabold no-underline effect-underline">Independent Producing & Assistant Directing</span></a> — Produced award-winning projects screened at
        festivals and platforms including SXSW, Outfest, Austin Film Festival,
        HBO Max, Texas Filmmakers’ Showcase, Austin Film Society and the Greek
        Drama Film Festival - to name a few!
      </p>

      {/* RAY DONOVAN */}
      <div className="font-space grid grid-cols-2 gap-8 mt-16">
        <div className="image-details-effect relative group">
          <img src={RD1} alt="Annie on set with camera team" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">Last Day on the Sound Stage</div>
        </div>

        <div className="image-details-effect relative group">
          <img src={RD2} alt="Behind the scenes in Yonkers" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">Behind the Scenes on Location</div>
        </div>

        <div className="image-details-effect relative group">
          <img src={RD3} alt="rainy practical effects" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim"  />
          <div className="overlay-text">Rain Practical Effects Set Up</div>
        </div>

        <div className="image-details-effect relative group">
          <img src={RD4} alt="NYC Waterfront Shoot" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">NYC Waterfront Shoot</div>
        </div>
        </div>
        <p className="mt-8">
        <a href="https://www.imdb.com/title/tt14124268/" target="_blank" rel="noopener noreferrer"><span className="text-burntOrange font-thabold no-underline effect-underline">Ray Donovan The Movie (Showtime)</span></a> — After moving from LA to NYC, 
        I started from the ground up as temp Health and Safety PA. 
        On this set, I worked my way up from Office PA to On-Set Director’s Assistant and was later 
        recommended for a role at Mark Gordon Pictures which began a brief segue into the world of film/tv development.
      </p>
    </main>
    </div>
    </>
  );
}