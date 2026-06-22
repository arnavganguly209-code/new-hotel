import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaTripadvisor, FaGoogle, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTripadvisor, SiGoogle, SiBookingdotcom } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#0a0d14] border-t border-border/40 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl tracking-wider text-white mb-4">
              HOTEL THAMEL
              <span className="text-primary block text-xs tracking-[0.3em] font-sans mt-1">PARK SPA</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 pr-4">
              Experience the perfect blend of premium luxury, traditional Korean wellness, and warm Nepalese hospitality in the vibrant heart of Kathmandu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <SiTripadvisor />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Location</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Offers & Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Accommodation</h4>
            <ul className="space-y-4">
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Deluxe Room</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Premium Deluxe</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Family Room</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Executive Room</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Experiences</h4>
            <ul className="space-y-4">
              <li><Link href="/spa" className="text-muted-foreground hover:text-primary transition-colors text-sm">Korean Spa</Link></li>
              <li><Link href="/spa" className="text-muted-foreground hover:text-primary transition-colors text-sm">Massage Therapy</Link></li>
              <li><Link href="/restaurant" className="text-muted-foreground hover:text-primary transition-colors text-sm">Garden Restaurant</Link></li>
              <li><Link href="/restaurant" className="text-muted-foreground hover:text-primary transition-colors text-sm">Korean Cuisine</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Thamel, Kathmandu<br/>Nepal, 44600</li>
              <li><a href="tel:+9771000000" className="hover:text-primary transition-colors">+977-1-4XXXXXX</a></li>
              <li><a href="mailto:info@hotelthamelparkspa.com" className="hover:text-primary transition-colors">info@hotelthamelparkspa.com</a></li>
              <li>
                <a href="https://wa.me/9779800000000" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-2">
                  <FaWhatsapp size={18} /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md w-full">
            <h4 className="text-white font-serif mb-2">Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="bg-transparent border-border rounded-none focus-visible:ring-primary" />
              <Button className="rounded-none bg-primary text-primary-foreground hover:bg-accent uppercase tracking-wider text-xs">Subscribe</Button>
            </div>
          </div>
          <div className="flex items-center gap-6 text-2xl text-muted-foreground">
            <SiTripadvisor className="hover:text-[#34E0A1] transition-colors cursor-pointer" />
            <SiGoogle className="hover:text-[#DB4437] transition-colors cursor-pointer" />
            <SiBookingdotcom className="hover:text-[#003580] transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground/60 border-t border-border/40 pt-6">
          <p>&copy; {new Date().getFullYear()} Hotel Thamel Park Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
