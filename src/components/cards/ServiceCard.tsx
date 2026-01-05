import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  technologies?: string[];
  index?: number;
}

export function ServiceCard({ title, description, icon, href, technologies, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group block bg-card border border-border rounded-2xl p-6 card-hover h-full"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
          <span className="text-2xl">{icon}</span>
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="badge-tech">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Arrow */}
        <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </Link>
    </motion.div>
  );
}
