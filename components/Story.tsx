import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import Stamp from "./Stamp";
import StatNumber from "./StatNumber";

/** Chapter 01 — the Mayo lawsuits: help existed, nobody told them. */
export default function Story() {
  const { story } = site;
  return (
    <section id="story" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={story.chapter} />
          <h2 className="max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            Help existed. <span className="text-red">Nobody told them.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <p className="font-display text-[clamp(4.5rem,11vw,7.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-red">
              <StatNumber value="14" /> <span className="text-[0.45em] font-extrabold text-ink">of 20</span>
            </p>
            <p className="mt-5 max-w-[36ch] text-[clamp(1.05rem,1.7vw,1.3rem)] font-medium leading-snug">
              {story.bigCaption}
            </p>
            <div className="mt-7">
              <Stamp rotate={-4}>Paid anyway</Stamp>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {story.paras.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 max-w-[62ch] text-[1.12rem] leading-relaxed text-ink2">
                {p}
              </p>
            ))}
            <p className="mt-8 max-w-[46ch] font-display text-[clamp(1.3rem,2.4vw,1.8rem)] font-extrabold leading-snug">
              {story.pull}
            </p>
            <p className="mt-6 font-record text-[.8rem] uppercase tracking-[0.06em] text-ink3">{story.source}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
