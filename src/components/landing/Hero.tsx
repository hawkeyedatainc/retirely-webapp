import { motion } from "framer-motion";
import { Apple, ArrowRight } from "lucide-react";

import homePreview from "@/assets/screenshots/IMG_6067.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,0.15),rgba(15,23,42,0)_36%,rgba(56,189,248,0.12)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-20 border-b border-border/40 bg-background/35 backdrop-blur-sm" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
              Build a retirement plan that feels <span className="gradient-text">clear and achievable.</span>
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0 md:text-xl">
              Model your cash flow, net worth, lifestyle goals, and long-term runway in one calm, data-first retirement app.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
              >
                <Apple size={20} />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
                  <div className="leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/75"
              >
                Explore features
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              {[
                ["40y+", "Plan horizon"],
                ["Net worth", "See your balance"],
                ["Goals", "Track priorities"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg border border-border/60 bg-secondary/45 p-4">
                  <div className="font-display text-lg font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="phone-frame w-[280px] overflow-hidden bg-slate-950 md:w-[310px]">
                <img
                  src={homePreview}
                  alt="Retirely home screen preview"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
