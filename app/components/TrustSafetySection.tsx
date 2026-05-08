"use client"

import { motion } from "framer-motion"

const checklistItems = [
  "Background checks on every walker",
  "Verified ID and insurance coverage",
  "Trial walks and ongoing performance reviews",
  "Clear messaging and real-time check-ins",
]

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 16,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

export default function TrustSafetySection() {
  return (
    <motion.section
      className="trust-safety-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="trust-safety-title"
    >
      <div className="trust-safety-shell">
        <div className="trust-safety-panel">
          <div className="trust-safety-intro">
            <p className="trust-safety-eyebrow">Trust &amp; Safety</p>
            <h2 className="trust-safety-title" id="trust-safety-title">
              How we keep your dog safe
            </h2>
            <p className="trust-safety-lead">
              Designed for reliability, screening, and clear communication.
            </p>
          </div>

          <div>
            <motion.ul
              className="trust-safety-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.08 }}
            >
              {checklistItems.map((item) => (
                <motion.li
                  className="trust-safety-item"
                  key={item}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span aria-hidden="true">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <p className="trust-safety-note">Care standards are built into every booking.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-safety-section {
          background: var(--color-bg);
          color: var(--color-text);
          padding: 96px 24px;
        }

        .trust-safety-shell {
          margin: 0 auto;
          max-width: 1120px;
        }

        .trust-safety-panel {
          align-items: start;
          background: var(--color-primary);
          border-radius: 32px;
          color: var(--color-bg);
          display: grid;
          gap: 64px;
          grid-template-columns: minmax(0, 46%) minmax(0, 54%);
          padding: 64px;
        }

        .trust-safety-intro {
          display: grid;
          gap: 24px;
        }

        .trust-safety-eyebrow {
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          line-height: 18px;
          margin: 0;
          text-transform: uppercase;
        }

        .trust-safety-title {
          color: var(--color-bg);
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 42px;
          margin: 0;
          max-width: 520px;
        }

        .trust-safety-lead {
          color: var(--color-bg);
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          margin: 0;
          max-width: 440px;
        }

        .trust-safety-list {
          display: grid;
          gap: 16px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .trust-safety-item {
          align-items: baseline;
          color: var(--color-bg);
          display: grid;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 600;
          gap: 16px;
          grid-template-columns: 24px 1fr;
          line-height: 28px;
          margin: 0;
        }

        .trust-safety-item span:first-child {
          color: var(--color-accent);
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
        }

        .trust-safety-note {
          color: var(--color-bg);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 32px 0 0;
          opacity: 0.72;
        }

        @media (max-width: 767px) {
          .trust-safety-section {
            padding: 96px 16px;
          }

          .trust-safety-panel {
            border-radius: 24px;
            gap: 48px;
            grid-template-columns: 1fr;
            padding: 48px 24px;
          }

          .trust-safety-title {
            font-size: 28px;
            line-height: 36px;
          }
        }
      `}</style>
    </motion.section>
  )
}
