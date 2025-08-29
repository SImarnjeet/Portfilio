import { useEffect, useState } from "react";

import { Stars } from "lucide-react";

const BackgroundAnimations = () => {
  // id, size , x, y,opacity,animationDuration
  const [stars, setStars] = useState([]);
  useEffect(() => {
    generateStarsAnimation();
  }, []);

  const generateStarsAnimation = () => {
    const countStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 1000
    );
    const neonColors = [
      "#ffffff",
      "rgba(19, 0, 247)",
      "#ffffff",
      "rgba(254, 6, 110)",
      "#ffffff",
    ];

    const newStars = [];
    for (let i = 0; i < countStars; i++) {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      newStars.push({
        id: i,
        size: Math.random() * 3 +1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.3,
        animationDuration: Math.random() * 5 + 1,
        color: color,
      });
    }
    setStars(newStars);
  };
  return (
    <div className="fixed  inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((item) => (
         
          <div
            key={item.id}
            className="absolute rounded-full animate-float"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              left: `${item.x}%`,
              top: `${item.y}%`,
              opacity: `${item.opacity}`,
              background: `${item.color}`,
              animationDuration: `${item.animationDuration}`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
           
          </div>
      
      ))}
    </div>
  );
};
export default BackgroundAnimations;
