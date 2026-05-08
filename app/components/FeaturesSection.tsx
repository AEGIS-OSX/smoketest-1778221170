"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const introVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const leftOriginVariants = {
  hidden: {
    opacity: 0,
    x: -24,
    y: 24,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const rightOriginVariants = {
  hidden: {
    opacity: 0,
    x: 24,
    y: 24,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <motion.section
      className="features-section"
      id="features"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="features-shell">
        <motion.div className="features-intro" variants={introVariants}>
          <p className="features-eyebrow">Features</p>
          <h2 className="features-title">What PawWalk does for you</h2>
          <p className="features-lead">
            Flexible scheduling, careful screening, and updates that keep you informed.
          </p>
        </motion.div>

        <motion.article className="feature-row" variants={leftOriginVariants}>
          <div className="feature-copy">
            <p className="feature-kicker">Flexible access</p>
            <h3 className="feature-heading">Flexible scheduling</h3>
            <p className="feature-body">
              Book walks when you need them, not when the app decides. Choose one-off
              walks, recurring slots, or same-day requests from your phone.
            </p>
          </div>
          <div className="feature-media">
            <ProjectImage id="feature_1" className="feature-image" />
          </div>
        </motion.article>

        <motion.article
          className="feature-row feature-row-reverse"
          variants={rightOriginVariants}
        >
          <div className="feature-copy">
            <p className="feature-kicker">Care standards</p>
            <h3 className="feature-heading">Vetted walkers</h3>
            <p className="feature-body">
              Each walker completes background checks, in-person interviews, and a trial
              walk. We only list walkers who meet our standards for punctuality and care.
            </p>
          </div>
          <div className="feature-media">
            <ProjectImage id="feature_2" className="feature-image" />
          </div>
        </motion.article>

        <motion.article className="feature-row" variants={leftOriginVariants}>
          <div className="feature-copy">
            <p className="feature-kicker">Live visibility</p>
            <h3 className="feature-heading">Real-time updates</h3>
            <p className="feature-body">
              Get walk start and finish notifications, photos from the route, and quick
              notes after each visit so you know your dog is safe.
            </p>
          </div>
          <div className="feature-media">
            <ProjectImage id="feature_3" className="feature-image" />
          </div>
        </motion.article>

        <motion.article
          className="feature-row feature-statement-card"
          variants={rightOriginVariants}
        >
          <div className="feature-copy">
            <p className="feature-kicker">Clear costs</p>
            <h3 className="feature-heading">Transparent pricing</h3>
            <p className="feature-body">
              Simple per-walk pricing with no hidden fees. See the cost up front and
              schedule without surprises.
            </p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
