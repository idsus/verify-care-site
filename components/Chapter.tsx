/** Typewriter chapter slug + rule — the case-file navigation system. One story, numbered chapters. */
export default function Chapter({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="mb-8 flex items-center gap-5">
      <p
        className={`shrink-0 font-record text-[.82rem] font-bold uppercase tracking-[0.22em] ${
          dark ? "text-blush" : "text-red"
        }`}
      >
        {label}
      </p>
      <span aria-hidden className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-line"}`} />
    </div>
  );
}
