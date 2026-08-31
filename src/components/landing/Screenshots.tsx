import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import fireTarget from "@/assets/screenshots/IMG_6070.png";
import buildYourPlan from "@/assets/screenshots/IMG_6068.png";
import glidepath from "@/assets/screenshots/IMG_6069.png";
import stressTest from "@/assets/screenshots/IMG_6071.png";
import debtVsInvest from "@/assets/screenshots/IMG_6072.png";
import home from "@/assets/screenshots/IMG_6067.png";

const screens = [
  {
    title: "Home",
    description: "Retirely’s home dashboard shows a net worth snapshot with annual spend, liquidity, portfolio, income, and active goals.",
    src: home,
  },
  {
    title: "Build your plan",
    description: "The plan builder presents a feasible status, primary gap, and years while letting you edit spending, growth, and allocations.",
    src: buildYourPlan,
  },
  {
    title: "Glidepath",
    description: "This screen visualizes long-term terminal value growth over time with the runway curve and year-by-year holding values.",
    src: glidepath,
  },
  {
    title: "FIRE target",
    description: "The FIRE target card shows the target number, present invested amount, shortfall, and the amount you still need to reach the goal.",
    src: fireTarget,
  },
  {
    title: "Debt vs invest",
    description: "The debt-versus-invest comparison highlights the monthly action, plan audit, and the tradeoff between paying down debt or investing more.",
    src: debtVsInvest,
  },
  {
    title: "Stress test",
    description: "The stress-test screen lays out shock-tested outcomes, the modeled shortfall, and whether the plan still clears the target after a market drop.",
    src: stressTest,
  },
];

const Screenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(217,24,46,0.08),transparent)]" />
      <div className="container relative z-10 mx-auto px-6">
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
            A modern retirement planner built around the decisions that matter most: runway,
            target, glidepath, and stress tests.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mx-auto w-full max-w-[320px]"
            >
              <div className="phone-frame overflow-hidden bg-white transition-transform duration-500 hover:-translate-y-1">
                <div className="w-full overflow-hidden rounded-[2rem] bg-[#f7f3ee]">
                  <img
                    src={screen.src}
                    alt={`${screen.title} app screenshot`}
                    className="h-auto w-full object-contain object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-border bg-secondary/40 p-4">
                <h3 className="font-display text-lg font-semibold">{screen.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
