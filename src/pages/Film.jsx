import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Film() {
  return (
    <>
    <Navbar />
    <div className="flex grow text-center container animate-fade-in">
      <main className="container font-thasadith  p-6 max-w-3xl mx-auto text-sunset">
      <title>Film</title>
        <h1>FILM & TV</h1>
          <p className="mb-16 mt-8">I spent nearly a decade working in 
            <a href="https://www.imdb.com/name/nm6860917/?ref_=fn_all_nme_1" className="no-underline effect-underline">Film & TV</a> across a variety of roles. I specialized
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
          <img src="public/images/TellurideGroup.jpg" alt="Telluride Film Festival Group Photo"  className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" title="Annie on set with camera team" />
          <div className="overlay-text">TFF Production Group Photo 2018</div>
        </div>
        <div className="image-details-effect relative group">
          <img src="public/images/TellurideAlone.jpg" alt="Telluride Film Festival Alone Photo"   className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" title="Annie on set with camera team" />
          <div className="overlay-text">Sitting Amongst Auteurs</div>
        </div>
        </div>
      <p className="mt-8 pb-4" padding="bottom">
       <a href="https://www.telluridefilmfestival.org/"><span className="text-burntOrange font-tha-bold no-underline effect-underline">Telluride Film Festival</span></a> — My journey began as a Student Symposium 
        member (1 of 24 selected) in 2015. I returned as a volunteer, was
        later chosen as one of 12 annual Production Apprentices (“TFF Dogs”) 
        in 2018, and eventually worked as an Assistant Manager of Theater 
        Operations. I also participated in screening narrative feature 
        submissions to help narrow festival selections.
      </p>

      {/* PRODUCING */}
      <div className="grid mt-16 grid-cols-2 gap-8">

        <Link to="/chicle">
        <img 
        src="public/images//Chicle2.png" 
        alt="Chicle"
        className="
            md:w-96                
            rounded-lg         
            shadow-lg           
            hover:scale-105    
            transition-transform
            duration-200
            cursor-pointer
          "
          ></img>
        </Link>

        <Link to="/therunner">
        <img 
        src="public/images/Runner2.png" 
        alt="The Runner"
        className="
            md:w-96               
            rounded-lg         
            shadow-lg           
            hover:scale-105    
            transition-transform
            duration-200
            cursor-pointer
          "
          ></img>
        </Link>

        <Link to="/calling">
        <img 
        src="public/images/Calling2.png" 
        alt="Calling"
         className="
            md:w-96                
            rounded-lg         
            shadow-lg           
            hover:scale-105    
            transition-transform
            duration-200
            cursor-pointer
          "
        ></img>
        </Link>
        
        <Link to="/pepito">
        <img 
        src="public/images/Pepito3.jpg" 
        alt="Pepito"
        className="
            md:w-96                
            rounded-lg         
            shadow-lg           
            hover:scale-105    
            transition-transform
            duration-200
            cursor-pointer
          "
        ></img>
        </Link>

        </div>
        <p className="mt-8 pb-4">
        <a href="https://www.imdb.com/name/nm6860917/?ref_=fn_all_nme_1"><span className="text-burntOrange font-tha-bold no-underline effect-underline">Independent Producing & Assistant Directing</span></a> — Produced award-winning projects screened at
        festivals and platforms including SXSW, Outfest, Austin Film Festival,
        HBO Max, Texas Filmmakers’ Showcase, Austin Film Society and the Greek
        Drama Film Festival - to name a few!
      </p>

      {/* RAY DONOVAN */}
      <div className="font-space grid grid-cols-2 gap-8 mt-16">
        <div className="image-details-effect relative group">
          <img src="public/images/RDSet1.png" alt="Annie on set with camera team" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">Last Day on the Sound Stage</div>
        </div>

        <div className="image-details-effect relative group">
          <img src="public/images/RDSet2.jpg" alt="Behind the scenes in Yonkers" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">Behind the Scenes on Location</div>
        </div>

        <div className="image-details-effect relative group">
          <img src="public/images/RDSet3.jpg" alt="rainy practical effects" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim"  />
          <div className="overlay-text">Rain Practical Effects Set Up</div>
        </div>

        <div className="image-details-effect relative group">
          <img src="public/images/RDSet4.png" alt="NYC Waterfront Shoot" className="p-px w-full h-64 object-cover rounded-sm shadow-md image-to-dim" />
          <div className="overlay-text">NYC Waterfront Shoot</div>
        </div>
        </div>
        <p className="mt-8">
        <a href="https://www.imdb.com/title/tt14124268/"><span className="text-burntOrange font-tha-bold no-underline effect-underline">Ray Donovan The Movie (Showtime)</span></a> — After moving from LA to NYC, 
        I started from the ground up as temp Health and Safety PA. 
        On this set, I worked my way up from Office PA to On-Set Director’s Assistant and was later 
        recommended for a role at Mark Gordon Pictures which began a brief segue into the world of film/tv development.
      </p>
    </main>
    </div>
    <Footer />
    </>
  );
}