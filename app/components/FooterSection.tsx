"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-shell section-shell">
        <div className="footer-brand-block">
          <p className="footer-brand">PawWalk</p>
          <p className="footer-tagline">Flexible, vetted dog walks that fit your day.</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          <motion.a
            className="footer-cta-link"
            href="#signup"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            Get early access
          </motion.a>
          <motion.span whileHover={{ y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
            <Link className="footer-legal-link" href="/privacy">
              Read privacy policy
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
            <Link className="footer-legal-link" href="/privacy">
              Privacy policy
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -1 }} transition={{ duration: 0.16, ease: "easeOut" }}>
            <Link className="footer-legal-link" href="/terms">
              Terms of service
            </Link>
          </motion.span>
        </div>

        <p className="footer-meta">© 2026 PawWalk</p>
      </div>

      <style jsx>{`
        .footer-section {
          padding: 64px 0;
          background: var(--color-bg);
          color: var(--color-surface);
        }

        .footer-shell {
          display: grid;
          gap: 32px;
        }

        .footer-brand-block {
          display: grid;
          gap: 8px;
        }

        .footer-brand {
          font-family: var(--font-display);
          font-size: var(--type-h3-size);
          line-height: var(--type-h3-line);
          font-weight: 600;
          letter-spacing: var(--tracking-display);
        }

        .footer-tagline,
        .footer-meta,
        .footer-cta-link,
        .footer-legal-link {
          font-family: var(--font-body);
          font-size: var(--type-small-size);
          line-height: var(--type-small-line);
        }

        .footer-tagline,
        .footer-meta {
          color: rgba(246, 243, 238, 0.72);
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 24px;
          align-items: center;
        }

        .footer-cta-link,
        .footer-legal-link {
          display: inline-flex;
          color: var(--color-accent-02);
          font-weight: 600;
          transition: color 160ms ease-out;
        }

        .footer-cta-link:hover,
        .footer-legal-link:hover {
          color: var(--color-surface);
        }

        @media (min-width: 768px) {
          .footer-shell {
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: start;
          }

          .footer-meta {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </motion.footer>
  );
}
