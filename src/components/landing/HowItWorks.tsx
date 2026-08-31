import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BrainCircuit, WalletCards } from "lucide-react";

const steps = [
  {
    icon: WalletCards,
    title: "Map your money",
    description: "Start with current savings, income, monthly spending, and the retirement lifestyle you want to support.",
    step: "01",
  },
  {
    icon: BrainCircuit,
    title: "Model the plan",
    description: "Adjust returns, inflation, timeline, and allocation strategy to see what your future could look like.",
    step: "02",
  },
  {
    icon: ArrowUpRight,
    title: "Act with confidence",
    description: "Use the plan health signals to decide where to save more, reduce costs, or adjust your timeline.",
    step: "03",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            A calmer way to <span className="gradient-text">plan retirement</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Retirely keeps the loop simple: understand your numbers, model your plan, and make the next move with confidence.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative text-center"
            >
              <div className="mb-4 font-display text-6xl font-bold text-primary/10">{step.step}</div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-10 hidden h-[2px] w-8 bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
