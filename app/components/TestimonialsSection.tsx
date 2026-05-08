"use client"

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const quoteList = [
  {
    className: "testimonial-primary",
    quote: "Reliable and easy. My dog gets a calm, on-time walk and I get a photo that actually shows the route.",
    meta: "Maya R., Upper West Side",
  },
  {
    className: "testimonial-secondary",
    quote: "Booked a last-minute walk and the walker showed up early. No fuss, just care.",
    meta: "Carlos M., Logan Square",
  },
  {
    className: "testimonial-tertiary",
    quote: "The vetting made the difference. I felt comfortable leaving my key and phone number.",
    meta: "Hannah T., Capitol Hill",
  },
];

const quoteContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const quoteVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsSection() {
  return (
    <motion.section
      className="testimonials-section"
      id="testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="testimonials-shell">
        <div className="testimonials-intro">
          <p className="testimonials-eyebrow">Testimonials</p>
          <h2 className="testimonials-title">Local owners who trust PawWalk</h2>
        </div>

        <div className="testimonials-grid">
          <motion.div
            className="testimonials-quotes"
            variants={quoteContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {quoteList.map((item) => (
              <motion.blockquote
                className={item.className}
                key={item.meta}
                variants={quoteVariants}
              >
                <p className="testimonial-quote">“{item.quote}”</p>
                <footer className="testimonial-meta">{item.meta}</footer>
              </motion.blockquote>
            ))}
          </motion.div>

          <motion.aside
            className="testimonials-media"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            aria-label="PawWalk customer routine image"
          >
            <ProjectImage id="social_proof" className="testimonials-image" />
            <p className="testimonials-caption">Editorial moments from real city routines.</p>
          </motion.aside>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          background: var(--color-bg);
          color: var(--color-surface-01, #f6f3ee);
          padding: 96px 24px;
        }

        .testimonials-shell {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-intro {
          max-width: 680px;
          margin-bottom: 48px;
        }

        .testimonials-eyebrow {
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          line-height: 18px;
          margin: 0 0 16px;
          text-transform: uppercase;
        }

        .testimonials-title {
          color: var(--color-surface-01, #f6f3ee);
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 30px;
          margin: 0;
        }

        .testimonials-grid {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .testimonials-quotes {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .testimonial-primary,
        .testimonial-secondary,
        .testimonial-tertiary {
          margin: 0;
          max-width: 760px;
        }

        .testimonial-primary {
          padding-top: 8px;
        }

        .testimonial-secondary {
          margin-left: 0;
          max-width: 640px;
        }

        .testimonial-tertiary {
          max-width: 560px;
        }

        .testimonial-quote {
          margin: 0;
        }

        .testimonial-primary .testimonial-quote {
          color: var(--color-surface-01, #f6f3ee);
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 44px;
        }

        .testimonial-secondary .testimonial-quote {
          color: var(--color-surface-01, #f6f3ee);
          font-family: var(--font-body);
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
        }

        .testimonial-tertiary .testimonial-quote {
          color: var(--color-surface-01, #f6f3ee);
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }

        .testimonial-meta {
          color: var(--color-accent);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          margin-top: 16px;
        }

        .testimonials-media {
          background: var(--color-surface-01, #f6f3ee);
          border-radius: 24px;
          color: var(--color-text);
          display: flex;
          flex-direction: column;
          order: -1;
          overflow: hidden;
        }

        .testimonials-image {
          aspect-ratio: 4 / 5;
          display: block;
          height: auto;
          object-fit: cover;
          width: 100%;
        }

        .testimonials-caption {
          background: var(--color-surface-01, #f6f3ee);
          color: var(--color-muted);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
          padding: 16px 24px 24px;
        }

        @media (min-width: 768px) {
          .testimonials-section {
            padding: 112px 32px;
          }

          .testimonials-title {
            font-size: 34px;
            line-height: 42px;
          }

          .testimonials-grid {
            align-items: stretch;
            display: grid;
            gap: 64px;
            grid-template-columns: minmax(0, 62fr) minmax(280px, 38fr);
          }

          .testimonials-quotes {
            gap: 48px;
          }

          .testimonial-primary .testimonial-quote {
            font-size: 48px;
            line-height: 56px;
          }

          .testimonial-secondary {
            margin-left: 48px;
          }

          .testimonial-tertiary {
            margin-left: 96px;
          }

          .testimonials-media {
            align-self: stretch;
            order: 0;
          }

          .testimonials-image {
            aspect-ratio: auto;
            flex: 1 1 auto;
            height: 100%;
            min-height: 560px;
          }
        }
      `}</style>
    </motion.section>
  );
}
