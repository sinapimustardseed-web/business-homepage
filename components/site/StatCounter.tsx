"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up from 0 to `target` once the element scrolls into view (X-PILE /
 * AirDome stats). Under prefers-reduced-motion it shows the final value
 * immediately. Presentation only.
 */
export default function StatCounter({
  target,
  className,
  delay = 0,
}: {
  target: number;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Reduced motion: show the final value immediately (external-system read on mount).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    let raf = 0;
    let started = false;
    const duration = 1500;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const run = () => {
      if (started) return;
      started = true;
      let begin = 0;
      const step = (now: number) => {
        if (!begin) begin = now + delay;
        if (now < begin) {
          raf = requestAnimationFrame(step);
          return;
        }
        const p = Math.min(1, (now - begin) / duration);
        setValue(Math.round(target * ease(p)));
        if (p < 1) raf = requestAnimationFrame(step);
        else setValue(target);
      };
      raf = requestAnimationFrame(step);
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return () => cancelAnimationFrame(raf);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, delay]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
