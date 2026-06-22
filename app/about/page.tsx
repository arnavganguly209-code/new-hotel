"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Heart, Shield } from "lucide-react";

const milestones = [
  { year: "2009", title: "The Beginning", desc: "Founded with a vision to bring a new standard of luxury boutique hospitality to Kathmandu's bustling Thamel district." },
  { year: "2014", title: "Korean Wellness Integration", desc: "Pioneered the integration of authentic Korean Spa therapies, becoming the first of its kind in Nepal." },
  { year: "2018", title: "Garden Expansion", desc: "Unveiled our signature Garden Restaurant, transforming our courtyard into an urban oasis." },
  { year: "2023", title: "Excellence Recognition", desc: "Awarded 'Best Boutique Hotel in Kathmandu' for our unwavering commitment to guest satisfaction." }
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center mb-24 max-w-4xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary tracking-[0.3em] text-sm uppercase mb-4">Our Heritage</h3>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-white leading-tight">
              A Legacy of <br/><span className="text-gradient-gold italic">Refined Hospitality</span>
            </h1>
            <p className="text-muted-foreground text-xl font-light leading-relaxed">
              Hotel Thamel Park Spa was born from a simple yet profound desire: to create a sanctuary of elegance amidst the vibrant energy of Kathmandu. We blend the warmth of Nepalese hospitality with the sophisticated tranquility of Korean wellness traditions.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl font-serif text-white mb-6">Our Philosophy</h2>
            <p className="text-muted-foreground font-light text-lg mb-6 leading-relaxed">
              We believe that true luxury lies in the details—the unhurried interactions, the perfectly steeped cup of tea, the seamless anticipation of our guests' needs.
            </p>
            <p className="text-muted-foreground font-light text-lg mb-8 leading-relaxed">
              Our spaces are designed to calm the mind and restore the spirit. From the subtle ambient lighting in our corridors to the hand-selected organic ingredients in our restaurant, every element is an intentional choice dedicated to your wellbeing.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border/50">
              <div className="flex gap-4 items-start">
                <Heart className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-medium mb-1">Authentic Care</h4>
                  <p className="text-sm text-muted-foreground">Genuine connections with every guest.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-white font-medium mb-1">Uncompromising Quality</h4>
                  <p className="text-sm text-muted-foreground">Standards that exceed expectations.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 aspect-[4/3] bg-card border border-border/50 relative overflow-hidden flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-primary/10"></div>
             {/* Abstract geometric representation of the hotel */}
             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-32 h-32 border border-primary/30 rotate-45 flex items-center justify-center">
                  <div className="w-24 h-24 border border-primary/50 flex items-center justify-center">
                     <span className="font-serif text-4xl text-primary/40 -rotate-45">Est.</span>
                  </div>
                </div>
                <span className="text-primary font-serif tracking-[0.5em] text-xl">2009</span>
             </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Milestones that define who we are today.</p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 border-l-2 border-l-primary/50 md:group-odd:border-l-0 md:group-odd:border-r-2 md:group-odd:border-r-primary/50 md:group-odd:text-right">
                  <div className="text-primary font-serif text-xl mb-1">{item.year}</div>
                  <h4 className="text-white text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}