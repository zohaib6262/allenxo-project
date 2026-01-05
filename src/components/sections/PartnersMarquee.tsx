import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: "DMARC Report" },
  { name: "Success AI" },
  { name: "Traded" },
  { name: "Bent Pixels" },
  { name: "Vaultoniq" },
  { name: "TechCorp" },
];

export function PartnersMarquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
          Our Trusted Partners
        </h3>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 text-2xl font-display font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap"
            >
              {partner.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
