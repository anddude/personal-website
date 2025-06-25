import { useState, useEffect} from "react";

export default function TVStaticOverlay() {
    const frames = [
        "public/images/TVStatic1.png", 
        "public/images/TVStatic2.png",
        "public/images/TVStatic3.png", 
        "public/images/TVStatic4.png",
        "public/images/TVStatic5.png", 
        "public/images/TVStatic6.png",
        "public/images/TVStatic7.png", 
        "public/images/TVStatic8.png",
        "public/images/TVStatic9.png", 
        "public/images/TVStatic10.png",
    ];
const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setIndex((i) => (i + 1) % frames.length);
    }, 50);
    return () => clearInterval(interval);
}, [frames.length]);

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