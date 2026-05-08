"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const easeOut = "easeOut";

export default function HeroSection() {
  return (
    <motion.section
      className="hero-section"
      id="top"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <motion.header
        className="hero-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
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
        <motion.div className="hero-copy">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
          >
            Flexible dog walking for busy city schedules
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
          >
            PawWalk: Vetted dog walks that fit your day.
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: easeOut }}
          >
            Flexible scheduling, real-time updates, and vetted walkers in your neighborhood. Sign up for early access and get priority booking plus a first-walk credit.
          </motion.p>
          <motion.p
            className="hero-form-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
          >
            Enter your email to join the waitlist. We will only email about early access, launches, and offers. Consent required below.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
          >
            <motion.a
              className="hero-primary-cta"
              href="#signup"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
            >
              Get early access
            </motion.a>
            <motion.a
              className="hero-secondary-cta"
              href="#features"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2, ease: easeOut }}
            >
              See features
            </motion.a>
          </motion.div>
          <motion.p
            className="hero-trust-line"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
          >
            Vetted walkers. Real-time updates. Transparent pricing.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          <div className="hero-image-frame">
            <ProjectImage id="hero" className="hero-image" />
          </div>
          <motion.div
            className="hero-quote-chip"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
          >
            <p className="hero-quote">
              Reliable and easy. My dog gets a calm, on-time walk and I get a photo that actually shows the route.
            </p>
            <p className="hero-quote-meta">Maya R., Upper West Side</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
