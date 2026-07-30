import type { ReactNode } from "react";

/** Shared section shell: consistent padding + max-width, optional tinted/drenched variants. */
export default function Section({
  id,
  variant = "plain",
  className = "",
  children,
}: {
  id?: string;
  variant?: "plain" | "tint" | "drench";
  className?: string;
  children: ReactNode;
}) {
  const bg =
    variant === "tint" ? "bg-berry-tint" : variant === "drench" ? "bg-berry-deep text-white" : "bg-white";
  return (
    <section id={id} className={`${bg} px-5 py-14 sm:px-10 md:py-22 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function H2({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <h2
      className={`mb-4 max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold tracking-[-0.015em] ${
        onDark ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p className={`mb-8 max-w-[68ch] text-[1.1rem] ${onDark ? "text-rose-soft" : "text-ink2"}`}>{children}</p>
  );
}
