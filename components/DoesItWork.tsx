import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";

/** Chapter 06 — the 211 coin flip vs. navigators who follow up. */
export default function DoesItWork() {
  const { works } = site;
  return (
    <section id="works" className="grain relative scroll-mt-24 overflow-hidden bg-red-deep px-5 py-16 text-white sm:px-10 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={works.chapter} dark />
          <h2 className="max-w-[24ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            But does a better card <span className="text-blush">actually change anything?</span>
          </h2>
          <p className="mt-4 font-record text-[.9rem] font-bold uppercase tracking-[0.12em] text-blush">{works.opener}</p>
        </Reveal>

        {/* two findings, one hairline between them */}
        <Reveal className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/15">
          {works.blocks.map((b, i) => (
            <div key={b.title} className={i === 0 ? "md:pr-10" : "md:pl-10"}>
              <h3 className="text-[clamp(1.3rem,2.4vw,1.8rem)] text-blush">{b.title}</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-blush-soft">{b.text}</p>
              <p className="mt-4 font-record text-[.74rem] uppercase tracking-[0.06em] text-blush/80">{b.src}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14 max-w-[58ch]">
          <p className="font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-black leading-tight">{works.punch}</p>
          <p className="mt-6 inline-block bg-white px-5 py-3.5 font-display text-[1.1rem] font-bold text-red-deep">
            {works.rule}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
