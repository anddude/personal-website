import { useState, useEffect } from 'react';

import TVS1 from '../assets/images/TVStatic1.png';
import TVS2 from '../assets/images/TVStatic2.png';
import TVS3 from '../assets/images/TVStatic3.png';
import TVS4 from '../assets/images/TVStatic4.png';
import TVS5 from '../assets/images/TVStatic5.png';
import TVS6 from '../assets/images/TVStatic6.png';
import TVS7 from '../assets/images/TVStatic7.png';

export default function TVStaticOverlay() {
  const frames = [TVS1, TVS2, TVS3, TVS4, TVS4, TVS5, TVS6, TVS7];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, 50);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div
      className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-.5 z-0 bg-night"
      style={{
        backgroundImage: `url(${frames[index]})`,
        backgroundSize: 'cover',
      }}
    />
  );
}
