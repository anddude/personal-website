import React, { useState, useEffect, useRef } from "react";

function Slider({ images = [] }) {
  const extendedImages =
    images.length >= 3 ? [...images, ...images.slice(0, 2)] : images;

  const [slideIndex, setSlideIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % extendedImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTransitionEnd = () => {
    if (slideIndex === images.length) {
      setTransitionEnabled(false);
      setSlideIndex(0);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 0);
    }
  };

  return (
    <div className="slider-container w-full overflow-hidden mx-auto">
      <div
        ref={sliderRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${transitionEnabled ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(-${slideIndex * (100 / 3)}%)` }}
      >
        {extendedImages.map((img, index) => {
          const src = typeof img === "object" ? img.src : img;
          const title = typeof img === "object" ? img.title : "";
          return (
            <div key={index} className="flex-none w-1/3 p-2">
              <figure className="flex flex-col items-center">
                <img
                  src={src}
                  alt={`Image ${index + 1}: ${title}`}
                  className="mx-auto w-1/2 h-auto rounded shadow-md"
                />
                {title && (
                  <figcaption className="mt-2 text-base font-space text-glass text-center">
                    {title}
                  </figcaption>
                )}
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;