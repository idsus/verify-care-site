import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";

/** Chapter 11 — what could go wrong, said plainly, plus can/cannot claim. */
export default function Risks() {
  const { risks } = site;
  return (
    <section id="risks" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={risks.chapter} />
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            What could <span className="text-red">go wrong.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10 grid border-t-2 border-ink sm:grid-cols-2">
          {risks.items.map((r, i) => (
            <div key={r.b} className={`border-b border-line py-6 ${i % 2 === 0 ? "sm:pr-10" : "sm:border-l sm:border-line sm:pl-10"}`}>
              <p className="font-display text-[1.2rem] font-extrabold">{r.b}</p>
              <p className="mt-2 max-w-[52ch] text-[1rem] leading-relaxed text-ink2">{r.t}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <p className="inline-block bg-ink px-5 py-3.5 font-display text-[1.05rem] font-bold text-white">{risks.note}</p>
        </Reveal>

        {/* said plainly — the claims ledger */}
        <Reveal className="mt-16">
          <h3 className="text-[clamp(1.3rem,2.4vw,1.8rem)]">{risks.honesty.heading}</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="font-record text-[.78rem] font-bold uppercase tracking-[0.16em] text-verified">What we can already say</p>
              <ul className="mt-4 border-t-2 border-verified">
                {risks.honesty.can.map((c) => (
                  <li key={c} className="grid grid-cols-[auto_1fr] gap-3 border-b border-line py-3 text-[.98rem]">
                    <span aria-hidden className="font-record font-bold text-verified">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-record text-[.78rem] font-bold uppercase tracking-[0.16em] text-red">What we can't say yet</p>
              <ul className="mt-4 border-t-2 border-red">
                {risks.honesty.cannot.map((c) => (
                  <li key={c} className="grid grid-cols-[auto_1fr] gap-3 border-b border-line py-3 text-[.98rem]">
                    <span aria-hidden className="font-record font-bold text-red">✗</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 max-w-[76ch] font-record text-[.78rem] leading-relaxed text-ink3">{risks.honesty.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
