"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type SignupStatus = "idle" | "loading" | "success" | "error";

type SignupFormState = {
  email: string;
  consent: boolean;
  status: SignupStatus;
  source: "landing_page";
};

function getUtmValues() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
  };
}

export default function SignupSection() {
  const [formState, setFormState] = useState<SignupFormState>({
    email: "",
    consent: false,
    status: "idle",
    source: "landing_page",
  });

  const isLoading = formState.status === "loading";
  const isSuccess = formState.status === "success";
  const isError = formState.status === "error";
  const feedbackClassName = isSuccess
    ? "signup-feedback signup-feedback-success"
    : "signup-feedback signup-feedback-error";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.consent) {
      setFormState((current) => ({
        ...current,
        status: "error",
      }));
      return;
    }

    setFormState((current) => ({
      ...current,
      status: "loading",
    }));

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          source: formState.source,
          timestamp: new Date().toISOString(),
          consent: formState.consent,
          utm: getUtmValues(),
        }),
      });

      if (!response.ok) {
        throw new Error("Signup request failed");
      }

      setFormState((current) => ({
        ...current,
        status: "success",
      }));
    } catch {
      setFormState((current) => ({
        ...current,
        status: "error",
      }));
    }
  }

  return (
    <motion.section
      className="signup-section"
      id="signup"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="signup-shell">
        <div className="signup-intro">
          <p className="signup-eyebrow">Early access</p>
          <h2 className="signup-title">Get early access</h2>
          <p className="signup-body">
            Enter your email to join the waitlist. We will only email about early access, launches, and offers. Consent required below.
          </p>
        </div>

        <motion.div
          className="signup-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <form className="signup-form" onSubmit={handleSubmit} noValidate={false}>
            <div className="signup-field">
              <label className="signup-label" htmlFor="signup-email">
                Email address
              </label>
              <input
                className="signup-input"
                id="signup-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                disabled={isLoading || isSuccess}
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    email: event.target.value,
                    status: current.status === "success" ? "success" : "idle",
                  }))
                }
              />
            </div>

            <div className="signup-consent-row">
              <input
                className="signup-checkbox"
                id="signup-consent"
                name="consent"
                type="checkbox"
                required
                disabled={isLoading || isSuccess}
                checked={formState.consent}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    consent: event.target.checked,
                    status: current.status === "success" ? "success" : "idle",
                  }))
                }
              />
              <div>
                <label className="signup-consent-label" htmlFor="signup-consent">
                  Yes, I agree to receive emails and accept the privacy policy.
                </label>{" "}
                <Link className="signup-privacy-link" href="/privacy">
                  Privacy policy
                </Link>
              </div>
            </div>

            <motion.button
              className="signup-submit"
              type="submit"
              disabled={isLoading || isSuccess}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? "Submitting..." : "Get early access"}
            </motion.button>

            <p className="signup-meta">By joining, you agree to receive launch and product emails from PawWalk.</p>

            <div className={feedbackClassName} aria-live="polite" role={isError ? "alert" : "status"}>
              {isSuccess ? "Thanks for joining. Check your inbox for a confirmation and details on early access. You can unsubscribe any time." : null}
              {isError ? "Something went wrong. Please try again." : null}
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
