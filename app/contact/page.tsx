"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background aurora-bg">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary tracking-[0.3em] text-sm uppercase mb-4">Connect With Us</h3>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">Get in Touch</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Whether you are planning a stay, looking to book our Korean Spa, or have a general inquiry, our dedicated team is here to assist you with impeccable service.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 border-l-2 border-l-primary">
              <h3 className="text-2xl font-serif text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-medium mb-1">Address</div>
                    <div className="text-muted-foreground text-sm font-light leading-relaxed">
                      Thamel Marg, Kathmandu<br />
                      Bagmati Province, Nepal 44600
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-medium mb-1">Phone</div>
                    <div className="text-muted-foreground text-sm font-light">
                      <a href="tel:+97714400000" className="hover:text-primary transition-colors">+977-1-44XXXXX</a><br />
                      <a href="tel:+97714400001" className="hover:text-primary transition-colors">+977-1-44XXXX1</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-medium mb-1">Email</div>
                    <div className="text-muted-foreground text-sm font-light">
                      <a href="mailto:info@hotelthamelparkspa.com" className="hover:text-primary transition-colors">info@hotelthamelparkspa.com</a><br />
                      <a href="mailto:reservations@hotelthamelparkspa.com" className="hover:text-primary transition-colors">reservations@hotelthamelparkspa.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <div className="text-white font-medium mb-1">Hours</div>
                    <div className="text-muted-foreground text-sm font-light">
                      Reception: 24/7<br />
                      Spa: 8:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50">
                <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 py-4 rounded transition-colors uppercase tracking-widest text-xs font-semibold">
                  <FaWhatsapp size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-panel p-8 md:p-10"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-muted-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-muted-foreground">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room">Room Reservation</SelectItem>
                      <SelectItem value="spa">Spa Booking</SelectItem>
                      <SelectItem value="restaurant">Restaurant Table</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-muted-foreground">Check-in Date (Optional)</Label>
                  <Input id="checkin" type="date" className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-muted-foreground">Check-out Date (Optional)</Label>
                  <Input id="checkout" type="date" className="bg-background/50 border-border rounded-none focus-visible:ring-primary h-12 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground">Your Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we assist you?" 
                  className="bg-background/50 border-border rounded-none focus-visible:ring-primary min-h-[120px] resize-none" 
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent rounded-none h-14 uppercase tracking-widest text-sm">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] bg-card border border-border/50 p-2"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.536128038593!2d85.30501869854737!3d27.71314980649774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1deffcb8d4!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%) grayscale(80%) opacity(0.8)" }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Thamel Map"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
}