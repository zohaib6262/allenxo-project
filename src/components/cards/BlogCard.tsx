import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  author: string;
  authorImage?: string;
  href: string;
  index?: number;
}

export function BlogCard({ title, image, date, author, authorImage, href, index = 0 }: BlogCardProps) {
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
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <span className="absolute bottom-4 right-4 text-sm font-medium text-primary bg-card/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Read More
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Calendar className="w-4 h-4" />
            {date}
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-4 line-clamp-2">
            {title}
          </h3>

          {/* Author */}
          <div className="flex items-center gap-3">
            {authorImage ? (
              <img
                src={authorImage}
                alt={author}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="text-xs text-muted-foreground">Author</p>
              <p className="text-sm font-medium text-foreground">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
