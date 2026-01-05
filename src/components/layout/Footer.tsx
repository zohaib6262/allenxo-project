import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { name: "AI Services", href: "/services/ai-solutions" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Cloud Services", href: "/services/cloud-services" },
  { name: "UI/UX Design Services", href: "/services/ui-ux-design" },
  { name: "Product Development", href: "/services/product-development" },
  { name: "Mobile App Development", href: "/services/mobile-development" },
];

const quickLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left">
            Let's Make Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <Link
            to="/contact"
            className="group relative w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center btn-glow hover:bg-primary transition-all duration-300"
          >
            <span className="text-primary group-hover:text-primary-foreground font-semibold transition-colors">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      <div className="section-divider" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand with Animated Logo */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-2 w-fit"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {/* Logo Icon with Pulse Animation */}
              <motion.div
                className="relative w-10 h-10 rounded-lg bg-gradient-allenxo flex items-center justify-center overflow-hidden"
                animate={{
                  scale: logoHovered ? 1.1 : 1,
                  rotate: logoHovered ? 5 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.span
                  className="text-primary-foreground font-display font-bold text-xl"
                  animate={{
                    scale: logoHovered ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  A
                </motion.span>

                {/* Glow Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary"
                  animate={{
                    opacity: logoHovered ? [0, 1, 0] : 0,
                    scale: logoHovered ? [1, 1.3, 1.5] : 1,
                  }}
                  transition={{
                    duration: logoHovered ? 0.8 : 0.3,
                    repeat: logoHovered ? Infinity : 0,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* ALLENXO Text with Stagger Animation */}
              <div className="overflow-hidden">
                <motion.span
                  className="font-display font-bold text-xl text-foreground inline-block"
                  animate={{
                    y: logoHovered ? [-2, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {"ALLEN".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      animate={{
                        y: logoHovered ? [0, -4, 0] : 0,
                        color: logoHovered ? "#5e9c6c" : "#fafafa",
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: "easeInOut",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    className="text-primary inline-block"
                    animate={{
                      scale: logoHovered ? [1, 1.15, 1] : 1,
                    }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    XO
                  </motion.span>
                </motion.span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Join a fostering company which is big enough to support, small
              enough to care.
            </p>

            {/* Social Links with Hover Effects */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors relative overflow-hidden group"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5 relative z-10" />

                  {/* Ripple Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.name}
                    </motion.span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Receive the latest technology & business news in your inbox.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 btn-glow"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Copyright © ALLENXO | All Rights Reserved</p>
            <div className="flex gap-4">
              <Link
                to="/terms"
                className="hover:text-primary transition-colors link-underline"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors link-underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
