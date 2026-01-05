import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { FAQSection } from "@/components/sections/FAQSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { CTASection } from "@/components/sections/CTASection";
import { NetworkBackground } from "@/components/decorations/NetworkBackground";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Star } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import caseStudyEcommerce from "@/assets/case-study-ecommerce.jpg";
import caseStudyAiEmail from "@/assets/case-study-ai-email.jpg";
import caseStudyAutomotive from "@/assets/case-study-automotive.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogWebdev from "@/assets/blog-webdev.jpg";
import blogGenai from "@/assets/blog-genai.jpg";

const services = [
  {
    title: "Cloud Services",
    description: "Secure, scalable cloud infrastructure enabling efficient data and operations.",
    icon: "☁️",
    href: "/services/cloud-services",
    technologies: ["AWS", "Terraform", "Kubernetes", "Azure", "Heroku"],
  },
  {
    title: "Artificial Intelligence",
    description: "AI systems automating workflows, enhancing analytics, and driving innovation.",
    icon: "🤖",
    href: "/services/ai-solutions",
    technologies: ["RAG", "PyTorch", "Python", "TensorFlow"],
  },
  {
    title: "Custom Web Development",
    description: "High-performance, scalable websites built for business growth and reliability.",
    icon: "🌐",
    href: "/services/web-development",
    technologies: ["Next.js", "Node", "React", "Angular", "Vue.js"],
  },
  {
    title: "Mobile App Development",
    description: "Fast, intuitive apps for iOS and Android that connect brands with their audience.",
    icon: "📱",
    href: "/services/mobile-development",
    technologies: ["React Native", "Cross-Platform", "iOS", "Android"],
  },
  {
    title: "UI/UX Design",
    description: "Creative, user-focused designs that simplify navigation and enhance engagement.",
    icon: "🎨",
    href: "/services/ui-ux-design",
    technologies: ["Figma", "Sketch", "Illustrator", "Adobe XD"],
  },
  {
    title: "Product Development",
    description: "Comprehensive product lifecycle solutions from idea to launch, driven by innovation.",
    icon: "🚀",
    href: "/services/product-development",
  },
];

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
    tags: ["Custom Web", "SaaS"],
    href: "/case-studies/ai-email",
  },
  {
    title: "Enhance Automotive Service Operations",
    image: caseStudyAutomotive,
    tags: ["Automotive", "Custom Web"],
    href: "/case-studies/automotive",
  },
];

const blogs = [
  {
    title: "How Developers Use AI in 2026: 5 Software Development Use Cases",
    image: blogAi,
    date: "December 31, 2025",
    author: "Sarah Johnson",
    href: "/blog/ai-in-development",
  },
  {
    title: "Custom Web App Development vs. Off-the-Shelf Solutions",
    image: blogWebdev,
    date: "December 25, 2025",
    author: "Michael Chen",
    href: "/blog/custom-vs-offshelf",
  },
  {
    title: "Top 10 Generative AI Companies in the USA 2026",
    image: blogGenai,
    date: "December 24, 2025",
    author: "Emily Davis",
    href: "/blog/top-genai-companies",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <NetworkBackground />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Turn Complex Business Challenges into{" "}
              <span className="text-gradient">Smart Scalable Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Building the Digital Backbone of Your Business
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">5.0</span>
                <span className="text-xs text-muted-foreground">Clutch Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <span className="text-sm font-medium text-foreground">Top Developer</span>
                <span className="text-xs text-muted-foreground">2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg"
              >
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary-foreground">A</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">ALLENXO</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Reliable & Best Custom Software Development Company
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We empower businesses with innovative digital solutions across web, mobile, cloud, AI, design, and product development. We combine technology and strategy to deliver secure, scalable, and impactful results that drive growth, efficiency, and long-term success.
              </p>
              <Button asChild variant="link" className="text-primary p-0 font-semibold">
                <Link to="/about">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Our approach blends cloud innovation, artificial intelligence, and custom development expertise to simplify complex operations, accelerate progress, and deliver lasting value through adaptive, secure, and high-performance digital solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionHeading
              title="Discover Our Latest Work"
              centered={false}
              className="mb-0"
            />
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
              <Link to="/case-studies">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Blog Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionHeading
              title="Our Latest Articles"
              centered={false}
              className="mb-0"
            />
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
              <Link to="/blog">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.title} {...blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Index;
