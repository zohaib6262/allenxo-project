import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Award, Briefcase, ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "15+", label: "Team Members" },
  { value: "5+", label: "Years Experience" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering solutions that make a real difference for our clients' businesses.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work closely with you to understand and meet your unique needs.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every project receives our full attention and expertise.",
  },
  {
    icon: Briefcase,
    title: "Innovation-Led",
    description: "We stay ahead of the curve, bringing the latest technologies and best practices to every project.",
  },
];

const team = [
  { name: "Alex Thompson", role: "CEO & Founder" },
  { name: "Sarah Chen", role: "CTO" },
  { name: "Michael Rodriguez", role: "Lead Developer" },
  { name: "Emily Davis", role: "Design Director" },
];

export default function About() {
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
              About <span className="text-gradient">ALLENXO</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age. Our mission is to transform complex challenges into elegant, scalable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented people behind ALLENXO"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 border border-border rounded-3xl p-8 lg:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence. Check out our open positions.
              </p>
              <Button asChild className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                <Link to="/contact">
                  View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
