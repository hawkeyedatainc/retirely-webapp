import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-lg border border-border bg-secondary/55 p-10 text-center shadow-2xl backdrop-blur md:p-14"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Ready to see the next chapter of your life with <span className="gradient-text">more clarity</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground">
            Start planning with a retirement companion built to make spending, savings, and long-term goals easier to understand.
          </p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-foreground px-8 py-4 font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            <Apple size={22} />
            <div className="text-left">
              <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
              <div className="leading-tight">App Store</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
