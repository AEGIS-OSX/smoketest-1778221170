"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "Do you run background checks on walkers?",
    answer: "Yes, every walker completes a background check and an in-person onboarding.",
  },
  {
    question: "Can I change or cancel a walk?",
    answer: "Yes, change or cancel from the app or the web form. Cancellation terms are shown when you book.",
  },
  {
    question: "Is PawWalk available in my city?",
    answer: "We are launching in select cities. Sign up for early access to get notified when we arrive in your neighborhood.",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const MotionLink = motion(Link);

export default function FaqTeaserSection() {
  return (
    <motion.section
      className="faq-teaser-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      variants={sectionVariants}
    >
      <div className="faq-teaser-shell">
        <div className="faq-teaser-intro">
          <p className="faq-teaser-eyebrow">FAQ</p>
          <h2 className="faq-teaser-title">Quick answers</h2>
        </div>

        <div className="faq-teaser-list">
          {faqItems.map((item) => (
            <motion.article
              className="faq-teaser-item"
              key={item.question}
              variants={itemVariants}
            >
              <h3 className="faq-teaser-question">{item.question}</h3>
              <p className="faq-teaser-answer">{item.answer}</p>
            </motion.article>
          ))}

          <MotionLink className="faq-teaser-link" href="/faq" whileHover={{ x: 2 }}>
            Read more FAQs
          </MotionLink>
        </div>
      </div>
    </motion.section>
  );
}
