import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' ||
                           target.closest('a') !== null ||
                           target.closest('button') !== null;
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
          transition: 'transform 0.1s ease',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#2563eb',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Cursor Ring */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            width: isHovering ? '48px' : '32px',
            height: isHovering ? '48px' : '32px',
            border: `2px solid ${isHovering ? '#2563eb' : '#60a5fa'}`,
            borderRadius: '50%',
            backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
            transition: 'all 0.3s ease',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
