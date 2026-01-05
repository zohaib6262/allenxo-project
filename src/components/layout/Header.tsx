import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Solutions", href: "/services/ai-solutions" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "Cloud Services", href: "/services/cloud-services" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Product Development", href: "/services/product-development" },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blogs", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo with Icon Transition */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-allenxo flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
            <span className="text-primary-foreground font-display font-bold text-xl">
              A
            </span>
          </div>

          {/* ALLENXO Text with Transition */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: logoHovered ? 1 : 0,
              x: logoHovered ? 0 : -10,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display font-bold text-xl text-foreground"
          >
            ALLEN<span className="text-primary">XO</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <button
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium link-underline"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && (
                <div
                  className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
          >
            <Link to="/contact">LET'S TALK</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-foreground font-medium py-2"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block text-muted-foreground hover:text-foreground py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-foreground font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="w-full btn-glow bg-primary text-primary-foreground font-semibold"
              >
                <Link to="/contact">LET'S TALK</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
