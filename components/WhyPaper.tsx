import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import StatNumber from "./StatNumber";

/** Chapter 05 — why a card and not an app. */
export default function WhyPaper() {
  const { whypaper } = site;
  return (
    <section id="whypaper" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={whypaper.chapter} />
        </Reveal>
        <div className="grid items-center gap-12 md:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <h2 className="max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)]">
              Why a card and <span className="text-red">not an app?</span>
            </h2>
            <StatNumber
              value={whypaper.stat}
              className="mt-7 block font-display text-[clamp(4rem,9vw,6rem)] font-black leading-none tracking-[-0.03em] text-red"
            />
            <p className="mt-4 max-w-[42ch] text-[1.08rem] leading-snug">{whypaper.statText}</p>
            <p className="mt-4 font-record text-[.76rem] uppercase tracking-[0.06em] text-ink3">{whypaper.src}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-[50ch] text-[clamp(1.2rem,2.2vw,1.55rem)] leading-relaxed text-ink">{whypaper.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
