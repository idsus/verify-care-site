"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import Stamp from "./Stamp";

/** Chapter 04 — the pathway card, rendered as a physical paper object on black. */
export default function CardShowcase() {
  const { cardshow } = site;
  const reduce = useReducedMotion();

  return (
    <section id="card" className="grain relative scroll-mt-24 overflow-hidden bg-ink px-5 py-16 text-white sm:px-10 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={cardshow.chapter} dark />
          <h2 className="text-[clamp(2.4rem,5.5vw,4rem)]">
            {cardshow.titleA} <span className="text-blush">{cardshow.titleB}</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[1.1rem] leading-relaxed text-blush-soft">{cardshow.intro}</p>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.12fr_.88fr]">
          {/* the paper object */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 36, rotate: reduce ? -1.2 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
            whileHover={reduce ? undefined : { rotate: 0, y: -4 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduce ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white text-ink shadow-[0_40px_80px_-24px_rgba(0,0,0,.7)]"
          >
            <div className="border-b-2 border-ink px-7 pb-5 pt-7">
              <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">{cardshow.card.title}</h3>
              <p className="mt-1.5 text-[1.05rem] italic text-ink2">{cardshow.card.sub}</p>
            </div>
            <div>
              {cardshow.card.rows.map((r, i) => (
                <div key={r.k} className={`grid gap-1 px-7 py-4 sm:grid-cols-[10.5rem_1fr] sm:gap-5 ${i > 0 ? "border-t border-line" : ""}`}>
                  <p className="font-record text-[.76rem] font-bold uppercase tracking-[0.1em] text-red">{r.k}</p>
                  <p className="text-[.98rem] leading-snug">{r.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink px-7 py-4">
              <p className="font-record text-[.74rem] font-bold uppercase tracking-[0.08em] text-ink3">{cardshow.card.stamp}</p>
            </div>
            {/* the stamp across the corner */}
            <div className="absolute -right-3 -top-4 sm:-right-5">
              <Stamp rotate={7}>Verification pending</Stamp>
            </div>
          </motion.div>

          {/* the contrast + the whole project */}
          <Reveal delay={0.15}>
            <p className="font-record text-[.82rem] font-bold uppercase tracking-[0.2em] text-blush/70">Compare</p>
            <blockquote className="mt-4 border-b border-t border-white/20 py-5 text-[1.15rem] italic leading-relaxed text-blush-soft/80">
              {cardshow.contrast.bad}
              <footer className="mt-2 font-record text-[.76rem] not-italic uppercase tracking-[0.08em] text-blush/50">
                {cardshow.contrast.badSrc}
              </footer>
            </blockquote>
            <p className="mt-6 font-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-extrabold leading-snug">
              {cardshow.contrast.punch}
            </p>

            <p className="mt-10 max-w-[52ch] text-[1.08rem] leading-relaxed text-blush-soft">
              <strong className="font-display text-white">That's the whole project. </strong>
              {cardshow.thatsIt.replace("That's the whole project. ", "")}
            </p>

            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-record text-[.9rem] font-bold uppercase tracking-[0.06em]">
              {cardshow.methodLine.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  <span className={i === 1 || i === 4 ? "text-white underline decoration-red decoration-2 underline-offset-4" : "text-blush"}>
                    {m}
                  </span>
                  {i < cardshow.methodLine.length - 1 && <span aria-hidden className="text-blush/40">→</span>}
                </span>
              ))}
            </p>
            <p className="mt-6 font-record text-[.76rem] leading-relaxed text-blush/80">
              {cardshow.card.stampNote} {cardshow.card.caveat}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
