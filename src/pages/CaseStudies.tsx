import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";

import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyAiEmail from "@/assets/case-study-ai-email.jpg";
import caseStudyAutomotive from "@/assets/case-study-automotive.jpg";

const caseStudies = [
  {
    title: "Fixing E-Commerce Bottlenecks",
    image: caseStudyEcommerce,
    tags: ["Custom Web", "SaaS"],
    href: "/case-studies/ecommerce",
  },
  {
    title: "Scalable AI-Powered Email Marketing Platform",
    image: caseStudyAiEmail,
    tags: ["Custom Web", "SaaS", "AI"],
    href: "/case-studies/ai-email",
  },
  {
    title: "Enhance Automotive Service Operations",
    image: caseStudyAutomotive,
    tags: ["Automotive", "Custom Web"],
    href: "/case-studies/automotive",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
