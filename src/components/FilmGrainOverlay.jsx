import { useState, useEffect} from "react";

export default function FilmGrainOverlay() {
    const frames = [
        "public/images/filmgrain1.png", 
        "public/images/filmgrain2.png",
        "public/images/filmgrain3.png",
        "public/images/filmgrain4.png",
        "public/images/filmgrain5.png",
        "public/images/filmgrain6.png",
        "public/images/filmgrain7.png",
        "public/images/filmgrain8.png",
        "public/images/filmgrain9.png",
        "public/images/filmgrain10.png",
        "public/images/filmgrain11.png",
    ];
const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setIndex((i) => (i + 1) % frames.length);
    }, 200);
    return () => clearInterval(interval);
}, []);

return(
 <div
      className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-.5 z-0 bg-night"
      style={{
        backgroundImage: `url(${frames[index]})`,
        backgroundSize: "cover",
      }}
    />
  );
}