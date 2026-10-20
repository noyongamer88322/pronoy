import React, { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const RippleCursor: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let nextId = 0;

    const handleClick = (e: MouseEvent) => {
      // Check if target is inside a button, nav link, or clickable interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('.clickable')
      ) {
        const id = nextId++;
        setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 650);
      }
    };

    window.addEventListener('click', handleClick, { passive: true });
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-circle"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '28px',
            height: '28px',
          }}
        />
      ))}
    </div>
  );
};
