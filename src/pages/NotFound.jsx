import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex grow">
      <main className="grid items-center justify-items-center max-w-5xl mx-auto ">
        <title>Easter Egg</title>
          <div className="bg-black px-10 animate-fade-in-delay-4"><h2>ERROR 404: PAGE NOT FOUND</h2></div>
          
        
      </main>
    </div>
  );
}
