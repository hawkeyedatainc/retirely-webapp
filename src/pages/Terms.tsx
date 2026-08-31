import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import AppLogo from "@/components/branding/AppLogo";
import { AlertTriangle, Apple, BookOpen, Scale, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "These Terms of Use govern your use of Retirely and this website. By using the app or website, you agree to these Terms.",
      "The app is provided by HawkEye Data Solutions Inc.",
      "If you do not agree to these Terms, do not use the app or website.",
    ],
  },
  {
    title: "2. Planning Tool Only",
    content: [
      "Retirely is a financial planning tool intended to help users estimate and compare retirement scenarios.",
      "The app is not a substitute for financial, tax, legal, or investment advice from a qualified professional.",
      "The app and website are not official government services, legal advice, or individualized financial guidance.",
    ],
  },
  {
    title: "3. Planning Inputs and Assumptions",
    content: [
      "Retirely allows users to enter retirement assumptions such as income, spending, rates of return, inflation, allocation mix, and other planning variables.",
      "These inputs are estimates and may not reflect actual future market conditions, taxes, or personal circumstances.",
      "You are responsible for checking the assumptions against your own facts, preferences, and professional guidance.",
    ],
  },
  {
    title: "4. No Guarantee of Outcomes",
    content: [
      "Use of the app does not guarantee a particular retirement outcome, portfolio result, investment return, or financial security.",
      "Use of the app does not guarantee approval of any financial plan, investment strategy, or application or process.",
      "Your real-world results depend on market conditions, personal choices, taxes, and other factors outside the app.",
    ],
  },
  {
    title: "5. No Professional Advice",
    content: [
      "The app and website provide general planning support only.",
      "Nothing in the app or website is legal, tax, accounting, investment, or financial planning advice.",
      "For advice about your specific circumstances, consult appropriate professionals and official sources.",
    ],
  },
  {
    title: "6. Accuracy and Changes",
    content: [
      "We aim to provide useful planning content, but we do not promise that every estimate, suggestion, model, assumption, or recommendation is complete, current, error-free, or suitable for your situation.",
      "Market conditions, legislation, tax rules, and personal needs may change over time.",
      "If app content conflicts with your own research or professional guidance, your own professional guidance should control.",
    ],
  },
  {
    title: "7. Purchases and Premium Features",
    content: [
      "If premium features, subscriptions, trials, or one-time purchases are offered, they are handled through Apple's App Store systems unless otherwise stated.",
      "Prices, renewal terms, cancellation rights, refunds, and payment processing are controlled by Apple and your App Store account settings.",
      "Premium access may unlock additional planning tools, but it does not guarantee investment performance, accuracy, or any financial outcome.",
    ],
  },
  {
    title: "8. Your Responsibilities",
    content: [
      "You are responsible for using the app lawfully, understanding the assumptions you enter, and making your own decisions.",
      "You agree not to copy, scrape, resell, redistribute, publish, reverse engineer, interfere with, or misuse the app, website, content, design, or software except where permitted by law.",
      "You agree not to use the app or website in a way that harms HawkEye Data Solutions Inc., other users, Apple, service providers, or any third party.",
    ],
  },
  {
    title: "9. Intellectual Property",
    content: [
      "The app, website, design, software, branding, planning interface, projections, and other features are owned by HawkEye Data Solutions Inc. or its licensors, except for third-party marks and public-source references used for identification.",
      "Public references to institutions, regulations, or financial concepts are not an endorsement or affiliation.",
    ],
  },
  {
    title: "10. Availability",
    content: [
      "We may update, change, suspend, restrict, or discontinue any part of the app or website at any time without liability to you.",
      "We may change, add, remove, correct, or limit content and features at any time.",
    ],
  },
  {
    title: "11. Disclaimers",
    content: [
      "To the maximum extent permitted by law, the app and website are provided as-is and as-available, without warranties of any kind, whether express, implied, statutory, or otherwise.",
      "We disclaim warranties of accuracy, completeness, fitness for a particular purpose, merchantability, non-infringement, uninterrupted availability, and error-free operation to the maximum extent permitted by law.",
    ],
  },
  {
    title: "12. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, HawkEye Data Solutions Inc. and its owners, directors, officers, employees, contractors, licensors, and service providers will not be liable for any indirect, incidental, consequential, special, exemplary, punitive, or similar damages.",
      "This includes damages or losses related to financial decisions, model assumptions, missed opportunities, app availability, purchase issues, device issues, or decisions you make after using the app or website.",
      "Some jurisdictions do not allow certain limitations, so some limitations may not apply to you.",
    ],
  },
  {
    title: "13. Indemnity",
    content: [
      "To the maximum extent permitted by law, you agree to defend, indemnify, and hold harmless HawkEye Data Solutions Inc. from claims, losses, liabilities, damages, costs, and expenses arising from your misuse of the app or website, violation of these Terms, violation of law, or infringement of third-party rights.",
    ],
  },
  {
    title: "14. Changes to These Terms",
    content: [
      "We may update these Terms from time to time. The updated version will be posted on this page with a revised date.",
      "Your continued use of the app or website after changes means you accept the updated Terms.",
    ],
  },
  {
    title: "15. Contact",
    content: ["Questions about these Terms can be sent to learn@hawkeyedata.ca."],
  },
];

const Terms = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32"
      >
        <section className="mb-10 rounded-lg border border-border bg-secondary/45 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                <Scale className="h-4 w-4" />
                Terms of Use
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                Terms of Use for <span className="gradient-text">Retirely</span>
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Effective date: August 31, 2026</p>
              <p className="text-sm text-muted-foreground">Last updated: August 31, 2026</p>
              <p className="mt-5 max-w-2xl text-lg text-foreground/90">
                A planning tool for retirement decisions: clearer assumptions, data-backed projections, and no guarantee of outcomes.
              </p>
            </div>
            <AppLogo className="h-16 w-16 self-start md:self-center" />
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Planning tool", text: "Built to help users model retirement scenarios and make informed decisions." },
            { icon: AlertTriangle, label: "No guarantee", text: "Estimates do not guarantee investment returns or financial outcomes." },
            { icon: BookOpen, label: "Assumptions", text: "Inputs depend on the user’s real world facts and circumstances." },
            { icon: Apple, label: "App Store", text: "Purchases, refunds, and subscriptions are managed by Apple." },
          ].map((item) => (
            <article key={item.label} className="rounded-lg border border-border bg-secondary/35 p-5">
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">{item.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </section>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.02, duration: 0.35 }}
              className="rounded-lg border border-border bg-secondary/30 p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground">{section.title}</h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Terms;
