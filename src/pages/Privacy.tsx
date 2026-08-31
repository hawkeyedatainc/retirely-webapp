import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import AppLogo from "@/components/branding/AppLogo";
import { Database, EyeOff, HardDrive, Mail, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Privacy Summary",
    content: [
      "Retirely is designed to be private by default.",
      "The app does not require a personal account. It does not need your name, email address, home address, government ID, tax ID, or other personal identifiers to help you estimate retirement outcomes.",
      "Retirely does not send your planning data, income assumptions, savings, goal details, portfolio input, or values to HawkEye Data Solutions Inc. servers.",
      "HawkEye Data Solutions Inc. does not operate a server that collects, stores, sells, rents, or shares your in-app retirement data.",
    ],
  },
  {
    title: "2. Data We Do Not Collect",
    content: [
      "We do not require account creation or personal profile data in the app.",
      "We do not collect names, email addresses, phone numbers, tax information, identification numbers, precise location, device contacts, or user-generated financial records beyond what the user enters locally for planning.",
      "We do not use third-party advertising tracking, marketing pixels, or cross-app analytics in the app.",
    ],
  },
  {
    title: "3. Information Stored on Your Device",
    content: [
      "The app may store planning information locally so the experience works across sessions.",
      "Local-only data may include monthly spending assumptions, retirement timeline inputs, savings totals, portfolio totals, goal values, net worth data, theme preferences, and premium feature state.",
      "This information remains on the device and is not transmitted to HawkEye Data Solutions Inc. servers.",
    ],
  },
  {
    title: "4. Cloud or Backup Considerations",
    content: [
      "If the user syncs app data to iCloud or uses device backups, those backups are managed by Apple according to the user's settings.",
      "Retirely does not independently collect or maintain a remote copy of your retirement planning information.",
    ],
  },
  {
    title: "5. Purchases",
    content: [
      "If premium functionality is offered, purchases are handled by Apple through the App Store.",
      "HawkEye Data Solutions Inc. does not receive a full payment card number. Apple processes transaction data according to its own policies.",
      "The app may read purchase status from Apple's systems so premium features can be unlocked or restored.",
    ],
  },
  {
    title: "6. Support Emails",
    content: [
      "The app does not require users to contact support.",
      "If a user chooses to email us outside the app, that message is sent by the email provider to our email provider so we can respond.",
      "This is separate from app data collection and should not include sensitive personal or financial information unless the user chooses to provide it.",
    ],
  },
  {
    title: "7. Deletion and Control",
    content: [
      "Because planning data is stored locally and not collected by us, HawkEye Data Solutions Inc. cannot access, export, or delete the data on the user's behalf.",
      "To remove local data, users can delete the app or use any in-app reset controls provided by the application.",
      "If the device has backup settings enabled, backup copies may be managed by Apple according to the user's device and iCloud configuration.",
    ],
  },
  {
    title: "8. Changes",
    content: [
      "If our privacy practices change, this policy may be updated to reflect the new practices.",
      "The effective date and last updated date should be treated as the current policy version for this app and website.",
    ],
  },
  {
    title: "9. Contact",
    content: [
      "Questions about this Privacy Policy can be sent to HawkEye Data Solutions Inc. at learn@hawkeyedata.ca.",
    ],
  },
];

const highlights = [
  { icon: EyeOff, title: "No account", text: "No sign-up, profile, name, email, or phone number is required in the app." },
  { icon: HardDrive, title: "Local only", text: "Planning inputs, assumptions, and settings stay on the user's device." },
  { icon: Database, title: "No servers", text: "HawkEye Data Solutions Inc. does not collect or store retirement planning data remotely." },
  { icon: Mail, title: "Voluntary support", text: "Email support is optional and separate from automatic app data collection." },
];

const Privacy = () => {
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
                <ShieldCheck className="h-4 w-4" />
                Privacy Policy
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                Privacy Policy for <span className="gradient-text">Retirely</span>
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Effective date: August 31, 2026</p>
              <p className="text-sm text-muted-foreground">Last updated: August 31, 2026</p>
              <p className="mt-5 max-w-2xl text-lg text-foreground/90">
                The app is built so retirement planning inputs remain local to the user’s device.
              </p>
            </div>
            <AppLogo className="h-16 w-16 self-start md:self-center" />
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-secondary/35 p-5">
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">{item.title}</h2>
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

export default Privacy;
