"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Step 1",
    title: "Request a walk",
    body: "Enter your address, choose a time, and tell us any special instructions."
  },
  {
    label: "Step 2",
    title: "We assign a vetted walker",
    body: "We match you with a nearby walker who has passed our screening."
  },
  {
    label: "Step 3",
    title: "Walk complete",
    body: "Receive a photo, a short route note, and confirmation when your dog is home."
  }
];

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function HowItWorksSection() {
  return (
    <motion.section
      className="how-it-works-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="how-it-works-shell">
        <motion.div
          className="how-it-works-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="how-it-works-eyebrow">Process</p>
          <h2 className="how-it-works-title">Three steps to a walk</h2>
        </motion.div>

        <motion.div
          className="how-it-works-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.label}
              variants={stepVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -2 }}
            >
              <article className="how-it-works-step">
                <p className="how-it-works-step-label">{step.label}</p>
                <h3 className="how-it-works-step-title">{step.title}</h3>
                <p className="how-it-works-step-body">{step.body}</p>
              </article>
            </motion.div>
          ))}
        </motion.div>

        <p className="how-it-works-closing">Clear steps. Calm updates. No surprises.</p>
      </div>
    </motion.section>
  );
}
