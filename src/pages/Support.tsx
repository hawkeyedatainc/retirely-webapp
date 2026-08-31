import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { BookOpen, Mail, MessageSquareText, ShieldCheck, User } from "lucide-react";
import AppLogo from "@/components/branding/AppLogo";

const contactCards = [
  {
    icon: User,
    title: "Developer",
    value: "HawkEye Data Solutions Inc.",
    hint: "Independent app developer and publisher.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "learn@hawkeyedata.ca",
    hint: "Best channel for support, privacy, and policy questions.",
  },
  {
    icon: ShieldCheck,
    title: "Important Boundary",
    value: "Planning tool, not financial advice",
    hint: "Retirely helps model scenarios; it does not replace professional financial guidance.",
  },
];

const supportTopics = [
  "App usage and navigation questions",
  "Premium purchase or restore-purchase issues",
  "Retirement plan input and modeling feedback",
  "Net worth, spending, or goal-tracking questions",
  "Privacy, terms, or data-handling requests",
  "Corrections, content feedback, and feature ideas",
];

const Support = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-6xl">
          <section className="mb-10 rounded-lg border border-border bg-secondary/45 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                  <MessageSquareText className="h-4 w-4" />
                  Support and contact
                </div>
                <h1 className="font-display text-4xl font-bold md:text-5xl">
                  Contact <span className="gradient-text">Retirely</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Need help with the retirement planner, premium access, plan inputs, privacy, or a content correction? Send a message and include only the details you choose to share.
                </p>
                <a
                  href="mailto:learn@hawkeyedata.ca?subject=Retirely%20Support"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  <Mail className="h-4 w-4" />
                  Email learn@hawkeyedata.ca
                </a>
              </div>
              <div className="rounded-lg border border-border bg-background/60 p-6">
                <AppLogo className="mb-5 h-16 w-16" />
                <h2 className="font-display text-2xl font-semibold">Support note</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Retirely is designed to help you reason through planning assumptions and trade-offs. It does not replace professional financial, legal, or tax advice for your specific situation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            {contactCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg border border-border bg-secondary/35 p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-base text-foreground">{card.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{card.hint}</p>
              </motion.article>
            ))}
          </section>

          <section className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <motion.article
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-lg border border-border bg-secondary/35 p-7 md:p-8"
            >
              <h2 className="font-display mb-4 text-2xl font-semibold">No account. No support form.</h2>
              <p className="text-muted-foreground">
                The app does not require your name, email, account profile, or retirement data to be sent to a server. Planning inputs stay local on the device unless you choose to export or share them.
              </p>
              <p className="mt-4 text-muted-foreground">
                This website also does not include a data-collecting support form. If you choose to email us, that message is voluntary and separate from the app.
              </p>
              <a
                href="mailto:learn@hawkeyedata.ca?subject=Retirely%20Support"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageSquareText className="h-4 w-4" />
                Open Email Draft
              </a>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-lg border border-border bg-secondary/35 p-7 md:p-8"
            >
              <BookOpen className="mb-4 h-7 w-7 text-primary" />
              <h2 className="font-display text-2xl font-semibold">What We Can Help With</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
                {supportTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </motion.article>
          </section>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Support;
