"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };
  const sectionWhileInView = { opacity: 1, y: 0 };
  const navInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 };
  const itemInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };
  const imageInitial = prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" };

  return (
    <motion.section
      className="hero-section"
      id="top"
      initial={sectionInitial}
      whileInView={sectionWhileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
    >
      <div className="section-shell">
        <motion.header
          className="hero-nav"
          initial={navInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
        >
          <Link className="hero-brand" href="#top" aria-label="PawWalk home">
            PawWalk
          </Link>
          <nav className="hero-nav-links" aria-label="Primary navigation">
            <Link href="#features">Features</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#signup">Get early access</Link>
          </nav>
        </motion.header>

        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p
              className="hero-eyebrow"
              initial={itemInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut", delay: 0.05 }}
            >
              Flexible dog walking for busy city schedules
            </motion.p>
            <motion.h1
              className="hero-title"
              initial={itemInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              PawWalk: Vetted dog walks that fit your day.
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={itemInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.25 }}
            >
              Flexible scheduling, real-time updates, and vetted walkers in your neighborhood. Sign up for early access and get priority booking plus a first-walk credit.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={itemInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.35 }}
            >
              <Link className="button-primary hero-primary-cta" href="#signup">
                Get early access
              </Link>
              <Link className="hero-secondary-link" href="#features">
                See features
              </Link>
            </motion.div>
            <motion.div
              className="hero-form-note"
              initial={itemInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut", delay: 0.45 }}
            >
              <p className="hero-form-intro">
                Enter your email to join the waitlist. We will only email about early access, launches, and offers. Consent required below.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hero-media"
            initial={imageInitial}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hero-image-frame">
              <ProjectImage id="hero" className="hero-image" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 32px 0 96px;
          background: var(--color-bg);
          color: var(--color-surface);
        }

        .hero-nav {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 16px 0 32px;
          backdrop-filter: blur(12px);
        }

        .hero-brand {
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 30px;
          letter-spacing: -0.02em;
        }

        .hero-nav-links {
          display: none;
          align-items: center;
          gap: 24px;
          font-size: 14px;
          line-height: 20px;
        }

        .hero-grid {
          display: grid;
          gap: 48px;
          align-items: center;
          padding-top: 32px;
        }

        .hero-copy {
          display: grid;
          gap: 24px;
          max-width: 640px;
        }

        .hero-eyebrow {
          color: var(--color-accent-03);
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: 36px;
          line-height: 44px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .hero-subtitle,
        .hero-form-intro {
          color: rgba(246, 243, 238, 0.82);
          font-size: 16px;
          line-height: 24px;
        }

        .hero-actions {
          display: grid;
          gap: 16px;
          justify-items: start;
        }

        .hero-secondary-link {
          color: var(--color-accent-03);
          font-size: 14px;
          line-height: 20px;
        }

        .hero-media {
          min-width: 0;
        }

        .hero-image-frame {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(246, 243, 238, 0.08);
        }

        .hero-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .hero-nav-links {
            display: flex;
          }
        }

        @media (min-width: 1024px) {
          .hero-section {
            padding-bottom: 128px;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
            gap: 64px;
            padding-top: 48px;
          }

          .hero-title {
            font-size: 56px;
            line-height: 64px;
          }
        }
      `}</style>
    </motion.section>
  );
}