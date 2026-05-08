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
  const searchParams = new URLSearchParams(window.location.search);

  return {
    utm_source: searchParams.get("utm_source") ?? "",
    utm_medium: searchParams.get("utm_medium") ?? "",
    utm_campaign: searchParams.get("utm_campaign") ?? "",
    utm_content: searchParams.get("utm_content") ?? "",
    utm_term: searchParams.get("utm_term") ?? ""
  };
}

export default function SignupSection() {
  const [formState, setFormState] = useState<SignupFormState>({
    email: "",
    consent: false,
    status: "idle",
    source: "landing_page"
  });

  const isLoading = formState.status === "loading";
  const isSuccess = formState.status === "success";
  const isError = formState.status === "error";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormState((currentState) => ({
      ...currentState,
      status: "loading"
    }));

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formState.email,
          consent: formState.consent,
          source: formState.source,
          timestamp: new Date().toISOString(),
          utm: getUtmValues()
        })
      });

      if (!response.ok) {
        throw new Error("Signup request failed");
      }

      setFormState((currentState) => ({
        ...currentState,
        status: "success"
      }));
    } catch {
      setFormState((currentState) => ({
        ...currentState,
        status: "error"
      }));
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState((currentState) => ({
      ...currentState,
      email: event.target.value,
      status: currentState.status === "error" ? "idle" : currentState.status
    }));
  }

  function handleConsentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState((currentState) => ({
      ...currentState,
      consent: event.target.checked,
      status: currentState.status === "error" ? "idle" : currentState.status
    }));
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
          <p className="signup-body">Enter your email to join the waitlist. We will only email about early access, launches, and offers. Consent required below.</p>
        </div>

        <motion.div
          className="signup-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-field">
              <label className="signup-label" htmlFor="signup-email">Email address</label>
              <input
                className="signup-input"
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formState.email}
                onChange={handleEmailChange}
                required
                disabled={isLoading || isSuccess}
              />
            </div>

            <div className="signup-consent-row">
              <input
                className="signup-checkbox"
                id="signup-consent"
                name="consent"
                type="checkbox"
                checked={formState.consent}
                onChange={handleConsentChange}
                required
                disabled={isLoading || isSuccess}
              />
              <label className="signup-consent-label" htmlFor="signup-consent">Yes, I agree to receive emails and accept the privacy policy.</label>
              <Link className="signup-privacy-link" href="/privacy">Privacy policy</Link>
            </div>

            <motion.button
              className="signup-submit"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading || isSuccess}
            >
              {isLoading ? "Submitting..." : "Get early access"}
            </motion.button>

            <p className="signup-meta">By joining, you agree to receive launch and product emails from PawWalk.</p>

            <div className="signup-feedback" aria-live="polite">
              {isSuccess ? (
                <p className="signup-feedback-success">Thanks for joining. Check your inbox for a confirmation and details on early access. You can unsubscribe any time.</p>
              ) : null}
              {isError ? (
                <p className="signup-feedback-error">Something went wrong. Please try again.</p>
              ) : null}
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
