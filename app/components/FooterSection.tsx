"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function FooterSection() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" };

  return (
    <motion.footer
      className="footer-section"
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
    >
      <div className="section-shell footer-shell">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="#top" aria-label="PawWalk home">
            PawWalk
          </Link>
          <p className="footer-tagline">Flexible, vetted dog walks that fit your day.</p>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <Link className="footer-cta-link" href="#signup">
            Get early access
          </Link>
          <Link className="footer-legal-link" href="/privacy">
            Read privacy policy
          </Link>
          <Link className="footer-legal-link" href="/privacy">
            Privacy policy
          </Link>
          <Link className="footer-legal-link" href="/terms">
            Terms of service
          </Link>
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
          width: max-content;
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .footer-tagline,
        .footer-links,
        .footer-meta {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 20px;
        }

        .footer-tagline,
        .footer-meta {
          color: rgba(246, 243, 238, 0.72);
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        .footer-cta-link,
        .footer-legal-link {
          transition: color 160ms ease-out, transform 160ms ease-out;
        }

        .footer-cta-link {
          color: var(--color-accent-03);
          font-weight: 600;
        }

        .footer-legal-link {
          color: rgba(246, 243, 238, 0.82);
        }

        .footer-cta-link:hover,
        .footer-legal-link:hover {
          color: var(--color-accent-03);
          transform: translateY(-1px);
        }

        @media (min-width: 768px) {
          .footer-shell {
            grid-template-columns: minmax(0, 1fr) minmax(0, auto);
            align-items: start;
          }

          .footer-links {
            justify-content: flex-end;
          }

          .footer-meta {
            grid-column: 1 / -1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-cta-link,
          .footer-legal-link {
            transition-duration: 0.01ms;
          }

          .footer-cta-link:hover,
          .footer-legal-link:hover {
            transform: none;
          }
        }
      `}</style>
    </motion.footer>
  );
}
