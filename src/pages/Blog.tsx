import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/sections/CTASection";

import blogAi from "@/assets/blog-ai.jpg";
import blogWebdev from "@/assets/blog-webdev.jpg";
import blogGenai from "@/assets/blog-genai.jpg";

const blogs = [
  {
    title: "How Developers Use AI in 2026: 5 Software Development Use Cases",
    image: blogAi,
    date: "December 31, 2025",
    author: "Sarah Johnson",
    href: "/blog/ai-in-development",
  },
  {
    title: "Custom Web App Development vs. Off-the-Shelf Solutions: Which Is Right for Your Business?",
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

const categories = ["All", "AI", "Web Development", "Mobile", "Cloud", "Design"];

export default function Blog() {
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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, tutorials, and updates from our team of technology experts. Stay ahead of the curve with the latest in software development.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.title} {...blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
