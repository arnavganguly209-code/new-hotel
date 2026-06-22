"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Coffee, Wine, Sunrise } from "lucide-react";

const menus = [
  {
    category: "Korean Cuisine",
    icon: Utensils,
    items: [
      { name: "Bibimbap", desc: "Mixed rice with meat and assorted vegetables", price: "$18" },
      { name: "Bulgogi", desc: "Sizzling marinated beef with authentic sides", price: "$24" },
      { name: "Kimchi Jjigae", desc: "Spicy kimchi stew with pork and tofu", price: "$16" }
    ]
  },
  {
    category: "Nepali Specialties",
    icon: Sunrise,
    items: [
      { name: "Thakali Thali", desc: "Traditional platter with rice, lentils, and curries", price: "$15" },
      { name: "Momo Platter", desc: "Assorted steamed and pan-fried dumplings", price: "$12" },
      { name: "Himalayan Trout", desc: "Locally sourced, pan-seared with wild herbs", price: "$22" }
    ]
  },
  {
    category: "International",
    icon: Wine,
    items: [
      { name: "Grilled Salmon", desc: "Served with asparagus and lemon butter sauce", price: "$28" },
      { name: "Truffle Risotto", desc: "Creamy arborio rice with wild mushrooms", price: "$22" },
      { name: "Wagyu Tenderloin", desc: "Premium cut with roasted root vegetables", price: "$45" }
    ]
  },
  {
    category: "Breakfast & Cafe",
    icon: Coffee,
    items: [
      { name: "Continental Buffet", desc: "Fresh pastries, eggs to order, and cold cuts", price: "$18" },
      { name: "Kathmandu Morning", desc: "Sel roti, aloo dum, and masala chia", price: "$12" },
      { name: "Artisan Coffee", desc: "Single-origin beans roasted locally", price: "$5" }
    ]
  }
];

export default function Restaurant() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary tracking-[0.3em] text-sm uppercase mb-4">Culinary Excellence</h3>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white">Garden Restaurant</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Dine amidst the tranquility of our lush courtyards or in our elegant indoor setting. Experience a gastronomic journey blending authentic Korean flavors, traditional Nepalese dishes, and international classics.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 border-l-4 border-l-primary flex flex-col justify-center"
          >
            <h2 className="text-3xl font-serif text-white mb-6">Ambiance & Setting</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Our Garden Restaurant is an oasis within the city. Surrounded by exotic flora and subtle water features, it offers a peaceful retreat from the bustling streets of Thamel. As evening falls, ambient lighting creates a magical atmosphere perfect for romantic dinners or quiet reflection.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4 pt-6 border-t border-border/50">
              <div>
                <h4 className="text-primary text-sm uppercase tracking-widest mb-2">Breakfast</h4>
                <p className="text-muted-foreground text-sm">6:30 AM - 10:30 AM</p>
              </div>
              <div>
                <h4 className="text-primary text-sm uppercase tracking-widest mb-2">Lunch & Dinner</h4>
                <p className="text-muted-foreground text-sm">11:30 AM - 10:30 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Visual placeholders for restaurant ambiance */}
            <div className="bg-card border border-border/50 aspect-square flex flex-col items-center justify-center p-6 text-center group hover:bg-card/80 transition-colors">
              <Wine className="w-8 h-8 text-primary/40 mb-4 group-hover:text-primary transition-colors" strokeWidth={1} />
              <span className="font-serif text-lg text-white/70">Indoor Fine Dining</span>
            </div>
            <div className="bg-card border border-border/50 aspect-square flex flex-col items-center justify-center p-6 text-center group hover:bg-card/80 transition-colors mt-8">
              <Sunrise className="w-8 h-8 text-primary/40 mb-4 group-hover:text-primary transition-colors" strokeWidth={1} />
              <span className="font-serif text-lg text-white/70">Garden Terrace</span>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white">Signature Menus</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menus.map((menu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-transparent border-border/30 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border/50">
                      <menu.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-serif text-white">{menu.category}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {menu.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="text-white font-medium mb-1">{item.name}</h4>
                            <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                          </div>
                          <div className="font-serif text-primary whitespace-nowrap">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center pb-10">
          <Link href="/contact">
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-accent uppercase tracking-widest text-sm h-14 px-12">
              Reserve a Table
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}