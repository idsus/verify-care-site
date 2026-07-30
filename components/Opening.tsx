"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

/** Cinematic case-file opening: full-bleed treated photo, stacked headline, typewriter dateline. */
export default function Opening() {
  const { opening } = site;
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div id="top" className="grain relative flex min-h-[94svh] flex-col overflow-hidden bg-ink text-white">
      {/* documentary photo, desaturated into the dark */}
      <Image
        src={opening.image.src}
        alt={opening.image.alt}
        fill
        preload
        sizes="100vw"
        className="object-cover opacity-30 grayscale contrast-125"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 sm:px-10">
        <motion.p
          {...rise(0)}
          className="mb-10 flex items-center gap-4 font-record text-[.82rem] font-bold uppercase tracking-[0.2em] text-blush"
        >
          <span aria-hidden className="h-px w-10 bg-blush/50" />
          {opening.caseline}
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,9vw,6rem)] font-black leading-[0.96] tracking-[-0.03em]">
          <motion.span {...rise(0.1)} className="block">
            {opening.titleA}
          </motion.span>
          <motion.span {...rise(0.22)} className="block text-blush">
            {opening.titleB}
          </motion.span>
        </h1>

        <motion.p {...rise(0.36)} className="mt-8 max-w-[52ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-blush-soft">
          {opening.body}
        </motion.p>

        <motion.div {...rise(0.48)} className="mt-10">
          <a
            href={opening.ctaHref}
            className="group inline-flex items-center gap-3 font-display text-[1.1rem] font-bold text-white"
          >
            <span className="border-b-2 border-red pb-0.5 transition-colors group-hover:border-white">{opening.cta}</span>
          </a>
        </motion.div>
      </div>

      <motion.p
        {...rise(0.6)}
        className="relative mx-auto w-full max-w-6xl px-5 pb-8 font-record text-[.76rem] uppercase tracking-[0.12em] text-blush-soft/60 sm:px-10"
      >
        {opening.disclosure}
      </motion.p>
    </div>
  );
}
