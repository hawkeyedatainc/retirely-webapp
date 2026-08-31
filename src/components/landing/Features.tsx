import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRightLeft,
  BarChart3,
  CalendarRange,
  Goal,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "Cash-flow planning",
    description: "Map your monthly income, spending, and savings against retirement goals without the spreadsheet overwhelm.",
  },
  {
    icon: WalletCards,
    title: "Net worth snapshot",
    description: "Monitor account balances, investments, and overall wealth in a single view designed for quick decision-making.",
  },
  {
    icon: Goal,
    title: "Goal-based planning",
    description: "Create milestones for travel, housing, healthcare, and lifestyle upgrades, then allocate capital to each one appropriately.",
  },
  {
    icon: TrendingUp,
    title: "Projection engine",
    description: "See how your portfolio, contribution rate, and spending assumptions shape your runway over time.",
  },
  {
    icon: BarChart3,
    title: "Allocation mix",
    description: "Review primary and secondary allocations, returns, and portfolio concentration before adjusting your strategy.",
  },
  {
    icon: CalendarRange,
    title: "Retirement timeline",
    description: "Set your plan start date, active years, and retirement horizon to forecast when your plan can become self-sustaining.",
  },
  {
    icon: Landmark,
    title: "Income and spending model",
    description: "Model non-investment income, monthly needs, and inflation so your assumptions stay realistic from year to year.",
  },
  {
    icon: ShieldCheck,
    title: "Plan health checks",
    description: "Surface weak spots early with alerts that highlight whether your plan is on track or needs adjustments.",
  },
  {
    icon: Sparkles,
    title: "Clearer decisions",
    description: "Turn complex retirement data into an understandable plan with useful insights, not information overload.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            The retirement plan toolkit for <span className="gradient-text">long-term confidence</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Make decisions with a clearer view of your money, your timeline, and your future lifestyle.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
