"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-white border-t-[2px] border-[#c9a96e] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Row 1: Logo */}
        <div className="mb-12 border-b border-[#f0f0f0] pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <h3 className="font-serif text-3xl text-[#111827]">
              Hotel Thamel Park & Spa
              <span className="block w-12 h-1 bg-[#c9a96e] mt-2 mx-auto md:mx-0"></span>
           </h3>
           <p className="text-[#4b5563] tracking-widest uppercase text-xs">Thamel, Kathmandu, Nepal</p>
        </div>

        {/* Row 2: 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="lg:col-span-1">
            <h4 className="font-serif text-lg text-[#111827] mb-6">About Us</h4>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-6">
              A sanctuary of luxury, wellness and culture in Kathmandu's heart. Experience unmatched hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaXTwitter size={18} /></a>
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaYoutube size={18} /></a>
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaTiktok size={18} /></a>
              <a href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors"><FaLinkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111827] mb-6">Hotel</h4>
            <ul className="space-y-4">
              <li><Link href="/rooms" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link href="/spa" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Spa & Wellness</Link></li>
              <li><Link href="/restaurant" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Dining</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Facilities</Link></li>
              <li><Link href="/contact" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111827] mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Meetings & Weddings</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Airport Transfer</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Room Service</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Laundry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111827] mb-6">Information</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Contact</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#4b5563] hover:text-[#c9a96e] transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-[#111827] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-[#4b5563]">
              <li><a href="tel:+97714000000" className="hover:text-[#c9a96e] transition-colors">+977-1-4XXXXXX</a></li>
              <li><a href="mailto:info@hotelthamelparkspa.com" className="hover:text-[#c9a96e] transition-colors">info@hotelthamelparkspa.com</a></li>
              <li><a href="https://wa.me/9779800000000" className="text-[#c9a96e] hover:text-[#a07840] transition-colors font-medium">WhatsApp Us</a></li>
              <li className="mt-4 leading-relaxed">Thamel, Kathmandu<br/>Bagmati Province, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Row */}
        <div className="border-t border-[#f0f0f0] pt-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md w-full">
            <h4 className="text-[#111827] font-serif mb-3 text-lg">Subscribe to Our Newsletter</h4>
            <div className="flex">
              <Input placeholder="Your email address" className="bg-[#f8f8f8] text-[#111827] border-none rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-6" />
              <Button data-testid="footer-newsletter-btn" className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] uppercase tracking-wider text-xs px-8 py-6 h-auto">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f0f0f0] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#4b5563] tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Hotel Thamel Park & Spa | Developed by <a href="https://globalorbit.com" target="_blank" rel="noopener noreferrer" className="text-[#111827] hover:text-[#c9a96e] transition-colors font-medium">Global Orbit</a>
          </p>
          <div className="flex items-center gap-3 text-[#4b5563] font-medium tracking-widest uppercase">
             <span>TripAdvisor 4.8★</span>
             <span className="text-[#f0f0f0]">|</span>
             <span>Google 4.9★</span>
             <span className="text-[#f0f0f0]">|</span>
             <span>Booking.com 9.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}