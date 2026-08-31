import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Start building your baseline retirement picture",
    features: [
      "Cash-flow and net worth overview",
      "Basic retirement projection",
      "Manual plan inputs and assumptions",
      "Light and dark planning themes",
    ],
    cta: "Download Starter",
    featured: false,
  },
  {
    name: "Retirely Pro",
    price: "App Store",
    period: " pricing",
    description: "Unlock deeper planning clarity",
    features: [
      "Everything in Free",
      "Advanced goal planning and allocation views",
      "Expanded forecast scenarios",
      "Priority plan health insights",
      "Premium planning experience and exports",
    ],
    cta: "View on App Store",
    featured: true,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="plan" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Build a plan that grows with you <span className="gradient-text">over time</span>
          </h2>
          <p className="text-lg text-muted-foreground">Choose the planning depth that matches where you are today.</p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured ? "glass-card border-primary/30 glow-blue" : "glass-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="mb-1 font-display text-xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
