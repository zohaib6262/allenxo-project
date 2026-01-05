import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  {
    title: "Cloud Services",
    description: "Secure, scalable cloud infrastructure enabling efficient data and operations. We design, implement, and manage cloud solutions that grow with your business.",
    icon: "☁️",
    href: "/services/cloud-services",
    technologies: ["AWS", "Terraform", "Kubernetes", "Azure", "Heroku", "GCP"],
  },
  {
    title: "Artificial Intelligence",
    description: "AI systems automating workflows, enhancing analytics, and driving innovation. From machine learning to natural language processing, we build intelligent solutions.",
    icon: "🤖",
    href: "/services/ai-solutions",
    technologies: ["RAG", "PyTorch", "Python", "TensorFlow", "OpenAI", "LangChain"],
  },
  {
    title: "Custom Web Development",
    description: "High-performance, scalable websites built for business growth and reliability. Modern frameworks and best practices for exceptional user experiences.",
    icon: "🌐",
    href: "/services/web-development",
    technologies: ["Next.js", "Node", "React", "Angular", "Vue.js", "TypeScript"],
  },
  {
    title: "Mobile App Development",
    description: "Fast, intuitive apps for iOS and Android that connect brands directly with their audience. Native and cross-platform solutions for maximum reach.",
    icon: "📱",
    href: "/services/mobile-development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
  },
  {
    title: "UI/UX Design",
    description: "Creative, user-focused designs that simplify navigation and enhance user engagement. Research-driven design that converts visitors into customers.",
    icon: "🎨",
    href: "/services/ui-ux-design",
    technologies: ["Figma", "Sketch", "Illustrator", "Marvel", "Adobe XD", "Framer"],
  },
  {
    title: "Product Development",
    description: "Comprehensive product lifecycle solutions from idea to launch, driven by innovation. We turn your vision into market-ready products.",
    icon: "🚀",
    href: "/services/product-development",
    technologies: ["Agile", "Scrum", "MVP", "Product Strategy", "Launch"],
  },
];

export default function Services() {
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our approach blends cloud innovation, artificial intelligence, and custom development expertise to simplify complex operations, accelerate progress, and deliver lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="A proven methodology that delivers results"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and challenges." },
              { step: "02", title: "Strategy", description: "We develop a comprehensive plan and technical approach." },
              { step: "03", title: "Development", description: "Our team builds your solution using agile methodology." },
              { step: "04", title: "Launch", description: "We deploy, monitor, and continuously improve your solution." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-display font-bold text-primary/20 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
