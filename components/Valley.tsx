import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";
import StatNumber from "./StatNumber";

/** Chapter 07 — the Santa Clarita pilot ground: numbers + claims-vs-checks. */
export default function Valley() {
  const { valley } = site;
  return (
    <section id="valley" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={valley.chapter} />
          <h2 className="max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            Where we're testing it <span className="text-red">first.</span>
          </h2>
          <p className="mt-4 max-w-[64ch] text-[1.1rem] text-ink2">{valley.body}</p>
        </Reveal>

        <Reveal className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
          {valley.stats.map((s, i) => (
            <div key={s.big} className={i === 0 ? "md:pr-10" : "md:pl-10"}>
              <StatNumber
                value={s.big}
                className="block font-display text-[clamp(2.8rem,5.5vw,4.2rem)] font-black leading-none tracking-[-0.02em] text-red"
              />
              <p className="mt-4 text-[1.02rem] leading-snug text-ink">{s.text}</p>
              <p className="mt-3 font-record text-[.74rem] uppercase tracking-[0.06em] text-ink3">{s.src}</p>
            </div>
          ))}
        </Reveal>

        {/* published claims vs. our checks — the audit, previewed */}
        <Reveal className="mt-16">
          <h3 className="text-[clamp(1.3rem,2.4vw,1.8rem)]">{valley.localClaims.heading}</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="font-record text-[.78rem] font-bold uppercase tracking-[0.16em] text-ink3">What the listings say</p>
              <ul className="mt-4 border-t border-line">
                {valley.localClaims.published.map((p) => (
                  <li key={p} className="border-b border-line py-3 text-[1.08rem] italic text-ink2">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-record text-[.78rem] font-bold uppercase tracking-[0.16em] text-red">What we check, by phone</p>
              <ul className="mt-4 border-t-2 border-ink">
                {valley.localClaims.checks.map((c) => (
                  <li key={c} className="grid grid-cols-[auto_1fr] gap-3 border-b border-line py-3 text-[.98rem]">
                    <span aria-hidden className="font-record font-bold text-red">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <p className="max-w-[52ch] font-display text-[clamp(1.3rem,2.4vw,1.8rem)] font-extrabold leading-snug">
            {valley.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
