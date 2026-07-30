import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import StatNumber from "./StatNumber";

/** Chapter 02 — the national pattern, on the red drench. */
export default function Problem() {
  const { problem } = site;
  return (
    <section id="problem" className="grain relative scroll-mt-24 overflow-hidden bg-red-deep px-5 py-16 text-white sm:px-10 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={problem.chapter} dark />
          <h2 className="max-w-[22ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            That's not a Mayo problem. <span className="text-blush">It's an American one.</span>
          </h2>
        </Reveal>

        {/* ledger rows, not cards — hairline-divided records */}
        <Reveal className="mt-12 grid md:grid-cols-3 md:divide-x md:divide-white/15">
          {problem.stats.map((s, i) => (
            <div key={s.big} className={`py-6 md:py-2 ${i > 0 ? "border-t border-white/15 md:border-t-0 md:pl-8" : ""} ${i < problem.stats.length - 1 ? "md:pr-8" : ""}`}>
              <StatNumber
                value={s.big}
                className="block font-display text-[clamp(3rem,6vw,4.5rem)] font-black leading-none tracking-[-0.02em] text-blush"
              />
              <p className="mt-4 text-[1rem] leading-snug text-blush-soft">{s.text}</p>
              <p className="mt-3 font-record text-[.74rem] uppercase tracking-[0.06em] text-blush/80">{s.src}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14 max-w-[62ch]">
          <p className="font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-black leading-tight">{problem.pull}</p>
          <p className="mt-6 text-[1.1rem] leading-relaxed text-blush-soft">{problem.bridge}</p>
          <p className="mt-8 max-w-[80ch] font-record text-[.76rem] leading-relaxed text-blush/80">{problem.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
