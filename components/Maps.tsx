"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import StatNumber from "./StatNumber";

/** Chapter 03 — directory evidence: the stat ledger + a typewriter call log. */
export default function Maps() {
  const { maps } = site;
  const reduce = useReducedMotion();

  return (
    <section id="maps" className="scroll-mt-24 bg-tint px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={maps.chapter} />
          <h2 className="max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            Even the <span className="text-red">map</span> is wrong.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.1rem] text-ink2">{maps.lede}</p>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.05fr_.95fr]">
          {/* the evidence ledger */}
          <Reveal className="grid sm:grid-cols-2">
            {maps.wall.map((w, i) => (
              <div
                key={w.big}
                className={`py-7 ${i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"} ${i > 1 ? "border-t border-tint2" : ""} ${i === 1 ? "border-t border-tint2 sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l sm:border-tint2" : ""}`}
              >
                <StatNumber
                  value={w.big}
                  className="block font-display text-[clamp(2.6rem,5vw,3.8rem)] font-black leading-none tracking-[-0.02em] text-red"
                />
                <p className="mt-3 text-[1rem] leading-snug text-ink">{w.text}</p>
                <p className="mt-2 font-record text-[.74rem] uppercase tracking-[0.06em] text-ink3">{w.src}</p>
              </div>
            ))}
          </Reveal>

          {/* the call log, typed line by line */}
          <div>
            <p className="mb-4 font-record text-[.82rem] font-bold uppercase tracking-[0.2em] text-ink3">
              Call log — {maps.callLog.heading.toLowerCase()}
            </p>
            <div className="border-y-2 border-ink font-record text-[.95rem]">
              {maps.callLog.rows.map(([n, r], i) => (
                <motion.p
                  key={n}
                  initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex gap-5 px-1 py-3 ${i > 0 ? "border-t border-tint2" : ""}`}
                >
                  <span className="text-ink3">{n}</span>
                  <span className={i === maps.callLog.rows.length - 1 ? "font-bold text-ink" : "text-red"}>{r}</span>
                </motion.p>
              ))}
            </div>
            <Reveal className="mt-8">
              <p className="max-w-[44ch] font-display text-[clamp(1.15rem,2vw,1.5rem)] font-extrabold leading-snug">
                {maps.closing}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-12">
          <p className="max-w-[86ch] border-t-2 border-ink pt-5 text-[1.05rem] leading-relaxed text-ink2">
            <strong className="font-display text-red">The gap this project fills: </strong>
            {maps.novelty}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
