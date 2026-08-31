import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarClock, Landmark, ShieldCheck } from "lucide-react";

const studyModes = [
  {
    icon: CalendarClock,
    title: "Start early",
    content: "Build a plan as soon as you begin thinking about retirement so you can adjust assumptions before they become hard constraints.",
  },
  {
    icon: Landmark,
    title: "Run the numbers",
    content: "Use projections to understand how spending, income, and portfolio growth shape the lifestyle you can actually afford.",
  },
  {
    icon: ShieldCheck,
    title: "Plan with clarity",
    content: "Keep your decisions grounded in clear targets, realistic assumptions, and measurable milestones for the years ahead.",
  },
];

const Testimonials = () => {
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
            Built for the moments that matter <span className="gradient-text">most</span>
          </h2>
          <p className="text-lg text-muted-foreground">Useful whether you are starting the plan or tightening it for the next chapter.</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {studyModes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12">
                <mode.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold">{mode.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/80">{mode.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
