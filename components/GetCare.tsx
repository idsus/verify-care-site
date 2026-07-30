/** Chapter 08 — real doors people can use today, matched to the barrier in the way. */
import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";

export default function GetCare() {
  const { getcare } = site;

  return (
    <section id="getcare" className="scroll-mt-24 bg-tint px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={getcare.chapter} />
          <h2 className="max-w-[22ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            Breaking barriers, <span className="text-red">starting today.</span>
          </h2>
          <p className="mt-4 max-w-[66ch] text-[1.1rem] text-ink2">{getcare.lede}</p>
        </Reveal>

        {/* playbook: one entry per barrier */}
        <Reveal className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getcare.playbook.map((p) => (
            <div key={p.barrier} className="flex flex-col border-2 border-ink bg-white p-6">
              <h3 className="text-[1.2rem] leading-snug">{p.barrier}</h3>
              <ul className="mt-4 grid gap-2 text-[.92rem] leading-snug text-ink2">
                {p.moves.map((m) => (
                  <li key={m} className="grid grid-cols-[auto_1fr] gap-2.5">
                    <span aria-hidden className="font-record font-bold text-red">→</span>
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 font-record text-[.84rem] leading-snug">
                <span className="font-bold uppercase tracking-[0.08em] text-red">Say: </span>
                “{p.say}”
              </p>
            </div>
          ))}
        </Reveal>

        {/* national directory as a records list */}
        <Reveal className="mt-16">
          <h3 className="text-[clamp(1.3rem,2.4vw,1.8rem)]">
            Eight doors that are <span className="text-red">open right now</span>
          </h3>
          <ul className="mt-6 grid border-t-2 border-ink sm:grid-cols-2">
            {getcare.directory.map((d, i) => (
              <li key={d.name} className={`grid gap-1 border-b border-line py-4 sm:grid-cols-[1fr_auto] sm:gap-6 ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8 sm:border-l sm:border-line"}`}>
                <div>
                  <p className="font-display text-[1.02rem] font-extrabold">{d.name}</p>
                  <p className="mt-0.5 text-[.9rem] leading-snug text-ink2">{d.what}</p>
                </div>
                <p className="self-center font-record text-[.82rem] font-bold text-red">{d.how}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-record text-[.76rem] uppercase tracking-[0.06em] text-ink3">{getcare.directoryNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
