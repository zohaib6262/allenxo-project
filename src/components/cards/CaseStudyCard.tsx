import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  title: string;
  image: string;
  tags: string[];
  href: string;
  index?: number;
}

export function CaseStudyCard({ title, image, tags, href, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group block bg-card border border-border rounded-2xl overflow-hidden card-hover"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
