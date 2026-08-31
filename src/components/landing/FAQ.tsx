import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Retirely?",
    answer: "Retirely is a retirement planning app designed to help you understand your income, spending, savings, net worth, and long-term runway in one place.",
  },
  {
    question: "Does Retirely predict the future?",
    answer: "No planning app can predict the future with certainty. Retirely models a range of assumptions so you can explore scenarios, test your spending, and make informed adjustments.",
  },
  {
    question: "Can I model different retirement dates?",
    answer: "Yes. You can adjust plan periods, active years, returns, inflation, and start dates to see how a different retirement timeline affects your projections.",
  },
  {
    question: "Where is my data stored?",
    answer: "Retirely is designed around a local-first experience, so your planning inputs and personal assumptions stay on your device unless you explicitly export or share them.",
  },
  {
    question: "Can I track net worth and goals together?",
    answer: "Yes. Retirely helps connect your portfolio, net worth, and retirement goals so you can evaluate how each decision affects the larger picture.",
  },
  {
    question: "Is this a replacement for financial advice?",
    answer: "No. Retirely is a planning tool to help you reason through your strategy. It does not replace tax, legal, or investment advice from qualified professionals.",
  },
  {
    question: "How do I manage my subscription?",
    answer: "If premium features are offered, purchases and subscriptions are managed through Apple App Store settings, where you can review, restore, or cancel access.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card border-none px-6"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
