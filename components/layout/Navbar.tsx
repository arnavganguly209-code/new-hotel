"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Dining", path: "/restaurant" },
    { name: "Spa & Wellness", path: "/spa" },
    { name: "Gallery", path: "/gallery" },
  ];

  const sideNavLinks = [
    { name: "About", path: "/about" },
    { name: "Meetings & Weddings", path: "/contact" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms & Conditions", path: "#" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl tracking-wider text-[#111827] transition-colors">
                Hotel Thamel Park & Spa
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm tracking-wide uppercase transition-colors hover:text-[#c9a96e] ${
                    location === link.path ? "text-[#c9a96e] font-medium" : "text-[#4b5563]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 ml-4">
                <Button asChild data-testid="nav-book-now" className="bg-[#c9a96e] hover:bg-[#a07840] text-white border-none rounded-none px-8 py-6 font-serif tracking-widest uppercase text-xs">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <button
                  className="text-[#111827] hover:text-[#c9a96e] transition-colors"
                  onClick={() => setIsMobileMenuOpen(true)}
                  data-testid="button-desktop-menu"
                >
                  <Menu size={28} />
                </button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
               <button
                className="text-[#111827] hover:text-[#c9a96e] transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-mobile-menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#111827] hover:text-[#c9a96e] transition-colors"
                  data-testid="button-close-menu"
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-10 py-8">
                <div className="lg:hidden mb-12">
                   <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <div key={link.name}>
                        <Link
                          href={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="font-serif text-2xl text-[#111827] hover:text-[#c9a96e] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                   </nav>
                </div>

                <div className="w-8 h-px bg-[#c9a96e] mb-12 hidden lg:block" />

                <nav className="flex flex-col gap-6">
                  {sideNavLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm tracking-widest uppercase text-[#4b5563] hover:text-[#c9a96e] transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="h-px w-full bg-[#f0f0f0] mt-6" />
                    </div>
                  ))}
                </nav>

                <div className="mt-16">
                  <Button asChild data-testid="side-nav-book-now" className="w-full bg-[#c9a96e] text-white hover:bg-[#a07840] rounded-none py-6 uppercase tracking-widest text-xs font-serif">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book Your Stay</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}