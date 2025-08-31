import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="cursor-glow"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
