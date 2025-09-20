import React from 'react';
import { Link, useParams } from 'react-router-dom';

import shortsFilmPageDetails from '../components/ShortFilmPagesDetails';

export default function CurrentShortFilmPage() {
  const { slug } = useParams();
  const filmData = shortsFilmPageDetails.find((f) => f.slug === slug);
  const { title, credit, description, video } = filmData;

  return (
    <>
      <div className="flex grow items-center justify-center animate-fade-in">
        <main className="mx-auto px-5 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <title>{title}</title>

          <h2>{credit}</h2>

          <div className="flex items-center">
            <p
              className="shortFilms"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>

          <div className="w-full aspect-video relative">
            <iframe
              width="300px"
              height="150px"
              src={video}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="absolute top-0 left-0 w-full h-full"
              title={title}
            ></iframe>
          </div>

          <div className="flex justify-start col-span-1">
            <Link
              to="/film"
              className="border border-sunset/50 bg-twilight hover:text-smoke hover:border-twilight/50 hover:bg-twilight/50 text-glass text-xs px-2 py-1 rounded-lg"
            >
              Back
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
