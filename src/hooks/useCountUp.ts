import { useState, useEffect, useRef } from 'react';

interface CountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  startOnView = true,
}: CountUpOptions) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * end;

      setValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { value, formatted, elementRef };
}
