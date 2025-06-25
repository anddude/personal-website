import { useState, useEffect} from "react";

export default function FilmGrainOverlay() {
    const frames = [
        "/filmgrain1.png", 
        "/filmgrain2.png",
        "/filmgrain3.png",
        "/filmgrain4.png",
        "/filmgrain5.png",
        "/filmgrain6.png",
        "/filmgrain7.png",
        "/filmgrain8.png",
        "/filmgrain9.png",
        "/filmgrain10.png",
        "/filmgrain11.png",
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