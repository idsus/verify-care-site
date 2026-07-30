import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";

/** Chapter 10 — what gets measured (and what doesn't count). */
export default function Counting() {
  const { counting } = site;
  return (
    <section id="counting" className="grain relative scroll-mt-24 overflow-hidden bg-ink px-5 py-16 text-white sm:px-10 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={counting.chapter} dark />
        </Reveal>
        <div className="grid items-start gap-12 md:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <h2 className="max-w-[14ch] text-[clamp(2.2rem,5vw,3.6rem)]">
              What we're <span className="text-blush">counting.</span>
            </h2>
            <p className="mt-5 max-w-[42ch] text-[1.08rem] leading-relaxed text-blush-soft">{counting.not}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <ol className="border-t border-white/20">
              {counting.items.map((it, i) => (
                <li key={it} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-white/20 py-4">
                  <span className="font-record text-[1rem] font-bold text-blush">{String(i + 1).padStart(2, "0")}</span>
                  <span className={i === 3 ? "font-display text-[1.25rem] font-extrabold" : "text-[1.05rem] text-blush-soft"}>
                    {it}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-[52ch] font-display text-[1.2rem] font-extrabold leading-snug">{counting.last}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
