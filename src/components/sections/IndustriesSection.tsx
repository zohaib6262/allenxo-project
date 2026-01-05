import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase, ShoppingCart, GraduationCap, Truck, Factory } from "lucide-react";

const industries = [
  { name: "Finance & Banking", icon: Briefcase },
  { name: "Retail & E-Commerce", icon: ShoppingCart },
  { name: "Ed-Tech", icon: GraduationCap },
  { name: "Logistics & Supply Chain", icon: Truck },
  { name: "Manufacturing", icon: Factory },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Our solutions enable transformation across multiple sectors, bridging innovation, scalability, and artificial intelligence to create lasting impact through efficient systems and strategic digital advancement."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
