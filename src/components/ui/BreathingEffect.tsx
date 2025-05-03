import React, { useEffect, useState } from 'react';

export const BreathingEffect: React.FC = () => {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const breatheAnimation = () => {
      const breath = (Math.sin(Date.now() / 1000) + 1) / 2 * 0.2 + 1;
      setScale(breath);
    };
    
    const animationFrame = setInterval(breatheAnimation, 16);
    
    return () => {
      clearInterval(animationFrame);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 pointer-events-none z-10">
      <div 
        className="w-64 h-64 rounded-full bg-sky-400/20 dark:bg-sky-500/20 blur-3xl"
        style={{ 
          transform: `scale(${scale})`,
          transition: 'transform 0.5s ease-in-out',
          opacity: 0.8,
        }}
      />
    </div>
  );
};