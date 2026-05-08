"use client";

import { motion, useReducedMotion } from "framer-motion";

const trustItems = [
  "Background checks on every walker",
  "Verified ID and insurance coverage",
  "Trial walks and ongoing performance reviews",
  "Clear messaging and real-time check-ins",
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="trust-safety-icon">
      <path d="M5 12.5L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TrustSafetySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="trust-safety-section"
      aria-labelledby="trust-safety-title"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
    >
      <div className="trust-safety-shell section-shell">
        <div className="trust-safety-panel">
          <div className="trust-safety-intro">
            <p className="trust-safety-eyebrow section-eyebrow">Trust &amp; Safety</p>
            <h2 className="trust-safety-title" id="trust-safety-title">
              How we keep your dog safe
            </h2>
            <p className="trust-safety-lead section-body">
              Designed for reliability, screening, and clear communication.
            </p>
          </div>

          <motion.ul
            className="trust-safety-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: prefersReducedMotion ? undefined : { staggerChildren: 0.08 },
              },
            }}
          >
            {trustItems.map((item) => (
              <motion.li
                className="trust-safety-item"
                key={item}
                variants={{
                  hidden: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
              >
                <CheckIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <style jsx>{`
        .trust-safety-section {
          padding: 96px 0;
          background: var(--color-bg);
          color: var(--color-surface);
        }

        .trust-safety-panel {
          display: grid;
          gap: 32px;
          padding: 32px;
          border-radius: var(--radius-xl);
          background: var(--color-surface);
          color: var(--color-text);
          box-shadow: var(--shadow-card);
        }

        .trust-safety-eyebrow {
          color: var(--color-primary);
        }

        .trust-safety-title {
          font-family: var(--font-display);
          font-size: var(--type-h2-mobile-size);
          line-height: var(--type-h2-mobile-line);
          font-weight: 600;
          letter-spacing: var(--tracking-display);
        }

        .trust-safety-lead {
          margin-top: 16px;
          color: var(--color-text-02);
        }

        .trust-safety-list {
          display: grid;
          gap: 16px;
          list-style: none;
        }

        .trust-safety-item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 16px;
          align-items: start;
          font-size: var(--type-body-size);
          line-height: var(--type-body-line);
        }

        .trust-safety-icon {
          width: 24px;
          height: 24px;
          color: var(--color-accent-01);
        }

        @media (min-width: 1024px) {
          .trust-safety-panel {
            grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
            gap: 48px;
            padding: 48px;
          }

          .trust-safety-title {
            font-size: var(--type-h2-desktop-size);
            line-height: var(--type-h2-desktop-line);
          }
        }
      `}</style>
    </motion.section>
  );
}