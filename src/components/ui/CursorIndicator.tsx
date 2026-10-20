import React, { useEffect, useRef, useCallback } from 'react';

// ─── Helpers ────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isTouchDevice() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

// ─── Constants ──────────────────────────────────────────────────

const LERP_FACTOR = 0.18;
const CIRCLE_SIZE = 32;
const CIRCLE_HOVER = 56;
const CIRCLE_INPUT = 20;
const CIRCLE_PRESS = 22;
const DOT_SIZE = 6;
const RIPPLE_START = 20;
const RIPPLE_END = 70;
const RIPPLE_DURATION = 500;

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], .card, .faq-item, .clickable';
const INPUT_SELECTOR = 'input, textarea, select';

// ─── Component ──────────────────────────────────────────────────

export const CursorIndicator: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement>(null);

  // mutable state (no re-renders)
  const mouse = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const visible = useRef(false);
  const currentSize = useRef(CIRCLE_SIZE);
  const targetSize = useRef(CIRCLE_SIZE);
  const hoverFill = useRef(false);
  const pressed = useRef(false);
  const rafId = useRef(0);

  // ── Ripple spawner ──
  const spawnRipple = useCallback((x: number, y: number) => {
    const container = ripplesRef.current;
    if (!container) return;
    const el = document.createElement('span');
    el.style.cssText = `
      position:fixed; pointer-events:none; border-radius:50%;
      border:2px solid rgba(233,114,48,0.55); background:transparent;
      width:${RIPPLE_START}px; height:${RIPPLE_START}px;
      left:${x}px; top:${y}px;
      transform:translate(-50%,-50%) scale(1);
      opacity:1; transition:none; will-change:transform,opacity;
    `;
    container.appendChild(el);

    // force reflow then animate
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetWidth;
    const scale = RIPPLE_END / RIPPLE_START;
    el.style.transition = `transform ${RIPPLE_DURATION}ms ease-out, opacity ${RIPPLE_DURATION}ms ease-out`;
    el.style.transform = `translate(-50%,-50%) scale(${scale})`;
    el.style.opacity = '0';

    setTimeout(() => el.remove(), RIPPLE_DURATION + 50);
  }, []);

  useEffect(() => {
    // Bail out on touch devices or prefers-reduced-motion
    if (isTouchDevice() || prefersReducedMotion()) return;

    const circle = circleRef.current;
    const dot = dotRef.current;
    if (!circle || !dot) return;

    // ── Event handlers ──

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Instant dot
      dot.style.transform = `translate3d(${e.clientX - DOT_SIZE / 2}px,${e.clientY - DOT_SIZE / 2}px,0)`;

      if (!visible.current) {
        visible.current = true;
        circle.style.opacity = '1';
        dot.style.opacity = '1';
      }

      // Hover detection via delegation
      const target = e.target as HTMLElement | null;
      if (target?.closest(INPUT_SELECTOR)) {
        targetSize.current = CIRCLE_INPUT;
        hoverFill.current = false;
      } else if (target?.closest(HOVER_SELECTOR)) {
        targetSize.current = CIRCLE_HOVER;
        hoverFill.current = true;
      } else {
        targetSize.current = CIRCLE_SIZE;
        hoverFill.current = false;
      }
    };

    const onMouseDown = () => {
      pressed.current = true;
      targetSize.current = CIRCLE_PRESS;
    };

    const onClick = (e: MouseEvent) => {
      pressed.current = false;
      spawnRipple(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      pressed.current = false;
    };

    const onMouseLeave = () => {
      visible.current = false;
      circle.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const onMouseEnter = () => {
      visible.current = true;
      circle.style.opacity = '1';
      dot.style.opacity = '1';
    };

    // ── Animation loop ──

    const tick = () => {
      const cx = circlePos.current;
      cx.x = lerp(cx.x, mouse.current.x, LERP_FACTOR);
      cx.y = lerp(cx.y, mouse.current.y, LERP_FACTOR);

      // Smooth size
      const sizeTarget = pressed.current ? CIRCLE_PRESS : targetSize.current;
      currentSize.current = lerp(currentSize.current, sizeTarget, 0.15);
      const s = currentSize.current;
      const half = s / 2;

      circle.style.transform = `translate3d(${cx.x - half}px,${cx.y - half}px,0)`;
      circle.style.width = `${s}px`;
      circle.style.height = `${s}px`;

      // Fill strength
      const bg = hoverFill.current && !pressed.current
        ? 'rgba(233,114,48,0.35)'
        : 'rgba(233,114,48,0.25)';
      const border = hoverFill.current && !pressed.current
        ? '1px solid rgba(233,114,48,0.5)'
        : '1px solid rgba(233,114,48,0.35)';
      circle.style.background = bg;
      circle.style.border = border;

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('click', onClick, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('click', onClick);
      document.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [spawnRipple]);

  // Don't render anything on touch / reduced-motion (SSR-safe check via CSS)
  return (
    <>
      {/* Big trailing circle */}
      <div
        ref={circleRef}
        className="cursor-indicator-circle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: '50%',
          background: 'rgba(233,114,48,0.25)',
          border: '1px solid rgba(233,114,48,0.35)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          willChange: 'transform',
          mixBlendMode: 'normal',
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* Small instant dot */}
      <div
        ref={dotRef}
        className="cursor-indicator-circle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: '50%',
          background: '#E97230',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />
      {/* Ripple container */}
      <div
        ref={ripplesRef}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          overflow: 'visible',
        }}
      />
    </>
  );
};
