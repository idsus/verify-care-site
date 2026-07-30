import Image from "next/image";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import Stamp from "./Stamp";

/** Closing argument + the full visible research library. */
export default function Ending() {
  const { closing, sources } = site;
  return (
    <>
      <section className="grain relative overflow-hidden bg-ink px-5 py-20 text-white sm:px-10 md:py-28">
        <Image
          src={closing.image.src}
          alt=""
          fill
          sizes="100vw"
          aria-hidden
          className="object-cover opacity-20 grayscale contrast-125"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">
              {closing.titleA} <span className="text-blush">{closing.titleB}</span>
            </h2>
            <div className="mt-8 max-w-[46ch] font-display text-[clamp(1.15rem,2.2vw,1.5rem)] font-bold leading-snug text-blush-soft">
              {closing.failures.map((f) => (
                <p key={f}>{f}</p>
              ))}
            </div>
            <p className="mt-8 max-w-[56ch] text-[1.1rem] leading-relaxed text-blush-soft">{closing.body}</p>
            <p className="mt-12 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-black leading-tight">
              {closing.finalA}
              <br />
              <span className="text-blush">{closing.finalB}</span>
            </p>
            <div className="mt-10">
              <Stamp tone="paper" rotate={-4}>
                Case open · July 2026
              </Stamp>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="sources" className="scroll-mt-24 bg-white px-5 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[clamp(1.6rem,3.2vw,2.2rem)]">{sources.heading}</h2>
          <p className="mt-3 max-w-[64ch] text-[1rem] text-ink2">{sources.lede}</p>
          <div className="mt-8 grid gap-x-10 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
            {sources.entries.map((s) => (
              <div
                key={s.id + s.cite.slice(0, 16)}
                className="border-b border-line py-4 text-[.84rem] leading-snug"
              >
                <p className="font-display font-bold text-ink">{s.cite}</p>
                <p className="mt-1.5 text-ink2">
                  <b className="text-red">Used:</b> {s.used}
                </p>
                <p className="mt-1 text-ink2">
                  <b>Limit:</b> {s.limit}
                </p>
                <p className="mt-2 font-record text-[.76rem] uppercase tracking-[0.04em] text-ink3">{s.id}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[90ch] font-record text-[.76rem] uppercase tracking-[0.04em] text-ink3">{sources.fine}</p>
        </div>
      </footer>
    </>
  );
}
