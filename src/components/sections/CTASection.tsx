import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 network-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start your tech journey with{" "}
            <span className="text-gradient">ALLENXO</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Trusted by industry leaders to deliver scalable, reliable, and future-ready technology.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
          >
            <Link to="/contact">GET A FREE CONSULTATION</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
