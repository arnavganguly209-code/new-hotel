import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Spa", path: "/spa" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl tracking-wider text-foreground transition-colors">
                HOTEL THAMEL
                <span className="text-primary block text-xs tracking-[0.3em] font-sans">PARK SPA</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                    location === link.path ? "text-primary font-medium" : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild data-testid="nav-book-now" className="bg-primary hover:bg-primary/90 text-white border-none rounded-none px-8 py-6 font-serif tracking-widest uppercase text-xs ml-4">
                <Link href="/contact">Book Now</Link>
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-8 px-4 flex flex-col justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl tracking-widest uppercase transition-colors ${
                    location === link.path ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild data-testid="nav-mobile-book-now" className="mt-4 bg-primary text-white rounded-none px-12 py-6 font-serif tracking-widest uppercase text-sm w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Your Stay</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
