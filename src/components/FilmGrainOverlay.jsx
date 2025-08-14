import { useState, useEffect } from "react";

import fg1 from "../assets/images/filmgrain1.png";
import fg2 from "../assets/images/filmgrain2.png";
import fg3 from "../assets/images/filmgrain3.png";
import fg4 from "../assets/images/filmgrain4.png";
import fg5 from "../assets/images/filmgrain5.png";
import fg6 from "../assets/images/filmgrain6.png";
import fg7 from "../assets/images/filmgrain7.png";
import fg8 from "../assets/images/filmgrain8.png";
import fg9 from "../assets/images/filmgrain9.png";
import fg10 from "../assets/images/filmgrain10.png";
import fg11 from "../assets/images/filmgrain11.png";

export default function FilmGrainOverlay() {
  const frames = [fg1, fg2, fg3, fg4, fg5, fg6, fg7, fg8, fg9, fg10, fg11];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-50 z-0 bg-night"
      style={{
        backgroundImage: `url(${frames[index]})`,
        backgroundSize: "cover",
      }}
    />
  );
}
