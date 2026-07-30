"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Animated statistic: parses the first number out of a display string
 * ("$2.7B", "65.2%", "14") and counts it up on scroll into view.
 * Server-renders the final value, so no-JS and SEO see the real number.
 */
export default function StatNumber({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/[\d,]+(?:\.\d+)?/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reduce = useReducedMotion();
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!inView || reduce || !match) return;
    const target = parseFloat(match[0].replace(/,/g, ""));
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const grouped = match[0].includes(",");
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const num = grouped ? Math.round(v).toLocaleString("en-US") : v.toFixed(decimals);
        setText(value.replace(match[0], num));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
