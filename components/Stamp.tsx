"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Rubber-stamp mark: slams in with a scale+rotate spring when scrolled into view.
 * tone: "red" = pending / warning · "green" = verified (reserved) · "paper" = on dark surfaces.
 */
export default function Stamp({
  children,
  tone = "red",
  rotate = -5,
  className = "",
}: {
  children: React.ReactNode;
  tone?: "red" | "green" | "paper";
  rotate?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const color =
    tone === "green"
      ? "border-verified text-verified"
      : tone === "paper"
        ? "border-blush text-blush"
        : "border-red text-red";
  return (
    <motion.span
      initial={{ opacity: 0, scale: reduce ? 1 : 1.7, rotate }}
      whileInView={{ opacity: 0.92, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 17 }}
      className={`inline-block border-[3px] px-3.5 py-1 font-record text-[.85rem] font-bold uppercase tracking-[0.14em] ${color} ${className}`}
      style={{ rotate }}
    >
      {children}
    </motion.span>
  );
}
