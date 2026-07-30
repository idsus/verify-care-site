"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { site } from "@/content/site";

export default function Topbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <>
      <header className="sticky top-0 z-20 bg-ink/95 text-white backdrop-blur">
        <div className="flex items-center gap-4 px-5 py-2.5 sm:px-10">
          <a href="#top" className="whitespace-nowrap font-display text-base font-extrabold tracking-tight">
            VERIFY<span className="text-blush"> ✓ </span>CARE
          </a>
          <nav aria-label="Sections" className="ml-auto hidden flex-wrap gap-0.5 md:flex">
            {site.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded px-2.5 py-1 font-display text-[.82rem] font-semibold text-blush-soft/85 hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        {/* reading progress — the red line through the case file */}
        <motion.div aria-hidden className="h-[3px] origin-left bg-red" style={{ scaleX: progress }} />
      </header>
      <p className="bg-tint px-5 py-1.5 text-center font-record text-[.76rem] font-bold uppercase tracking-[0.08em] text-red sm:px-10">
        {site.phaseBanner}
      </p>
    </>
  );
}
