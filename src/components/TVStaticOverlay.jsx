import { useState, useEffect} from "react";

export default function TVStaticOverlay() {
    const frames = [
        "/TVStatic1.png", 
        "/TVStatic2.png",
        "/TVStatic3.png", 
        "/TVStatic4.png",
        "/TVStatic5.png", 
        "/TVStatic6.png",
        "/TVStatic7.png", 
        "/TVStatic8.png",
        "/TVStatic9.png", 
        "/TVStatic10.png",
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