/** Giant outlined section number — the page's recurring design motif. */
export default function Watermark({ n, dark = false }: { n: string; dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute -top-6 right-0 select-none font-display text-[clamp(6rem,16vw,13rem)] font-extrabold leading-none tracking-tighter ${
        dark ? "opacity-[.14]" : "opacity-[.55]"
      }`}
      style={{
        WebkitTextStroke: dark ? "2px rgba(240,185,203,.55)" : "2px #f3dde5",
        color: "transparent",
      }}
    >
      {n}
    </span>
  );
}
