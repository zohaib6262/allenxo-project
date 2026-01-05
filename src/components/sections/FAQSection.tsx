import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does ALLENXO provide?",
    answer: "ALLENXO provides advanced cloud, AI, web, and mobile development services. We focus on scalable technology solutions that help organizations improve performance, efficiency, and digital transformation across industries."
  },
  {
    question: "What are your engagement models?",
    answer: "ALLENXO provides adaptable engagement models, including fixed-cost, hourly, and dedicated resource options. Our approach ensures flexibility, cost control, and transparency across all project stages and business needs."
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "Security is integral to our workflow. We use encrypted storage, restricted access, and NDAs to protect client data and maintain complete confidentiality across all projects."
  },
  {
    question: "How do you manage project timelines and delivery?",
    answer: "Our agile framework ensures timely project completion through milestone tracking, sprint planning, and regular progress evaluations to maintain quality, transparency, and delivery consistency."
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We support businesses of all sizes, from startups to large enterprises, offering scalable solutions and flexible engagement models to match growth stages and objectives."
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
