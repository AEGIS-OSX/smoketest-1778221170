"use client";

import { motion } from "framer-motion";

export default function PricingNoteSection() {
  return (
    <motion.section
      className="pricing-note-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pricing-note-shell">
        <p className="pricing-note-eyebrow">Pricing</p>
        <h2 className="pricing-note-title">Simple, predictable pricing</h2>
        <p className="pricing-note-body">Per-walk pricing shown before you confirm. No surprise fees. Early access members receive a credit toward their first walk.</p>
        <p className="pricing-note-support">See the cost up front and book with confidence.</p>
      </div>
    </motion.section>
  );
}
