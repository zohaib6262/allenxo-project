import { motion } from "framer-motion";

export function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Network lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(168, 80%, 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(168, 80%, 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Network paths */}
        <motion.path
          d="M0,100 Q200,50 400,150 T800,100 T1200,180 T1600,120"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q300,150 600,250 T1200,200 T1800,280"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,350 Q250,280 500,380 T1000,320 T1500,400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Network nodes */}
        {[
          { cx: 100, cy: 80 },
          { cx: 300, cy: 120 },
          { cx: 500, cy: 180 },
          { cx: 700, cy: 100 },
          { cx: 900, cy: 220 },
          { cx: 1100, cy: 160 },
          { cx: 1300, cy: 280 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="3"
            fill="hsl(168, 80%, 50%)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}
