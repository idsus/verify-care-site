import { site } from "@/content/site";
import Reveal from "./Reveal";
import Chapter from "./Chapter";

/** Chapter 09 — the seven-stage research plan as a case timeline. */
export default function Plan() {
  const { plan } = site;
  return (
    <section id="plan" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Chapter label={plan.chapter} />
          <h2 className="max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)]">
            The research <span className="text-red">plan.</span>
          </h2>
          <p className="mt-4 max-w-[58ch] text-[1.1rem] text-ink2">{plan.lede}</p>
        </Reveal>
        <Reveal className="mt-10 border-t-2 border-ink">
          {plan.stages.map((s, i) => (
            <div key={s.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[5rem_14rem_1fr] sm:gap-6">
              <p className="font-record text-[1.05rem] font-bold text-red">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-[1.15rem]">{s.title}</h3>
              <p className="max-w-[62ch] text-[.98rem] leading-relaxed text-ink2">{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
