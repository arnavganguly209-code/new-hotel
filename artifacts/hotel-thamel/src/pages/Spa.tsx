import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, Wind, Sparkles, HeartPulse, Flower2 } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Traditional Korean Sauna",
    duration: "60 Min",
    price: "$45",
    desc: "Experience authentic Korean heat therapy designed to detoxify, improve circulation, and deeply relax muscles."
  },
  {
    icon: Droplets,
    title: "Steam Therapy",
    duration: "45 Min",
    price: "$35",
    desc: "Aromatherapy-infused steam sessions to clear respiratory passages and rejuvenate your skin's natural glow."
  },
  {
    icon: Leaf,
    title: "Signature Massage",
    duration: "90 Min",
    price: "$110",
    desc: "Our bespoke massage combining Korean acupressure with classic Swedish techniques for ultimate tension relief."
  },
  {
    icon: Sparkles,
    title: "Body Scrub & Polish",
    duration: "60 Min",
    price: "$85",
    desc: "Traditional Korean body scrub (Seshin) that removes dead skin cells, leaving your body silky smooth."
  },
  {
    icon: HeartPulse,
    title: "Couples Wellness",
    duration: "120 Min",
    price: "$210",
    desc: "A shared journey of relaxation in our private couples suite, including massage and private steam."
  },
  {
    icon: Flower2,
    title: "Holistic Facial",
    duration: "60 Min",
    price: "$95",
    desc: "Premium skincare treatment using natural Korean botanicals to hydrate, lift, and brighten."
  }
];

export default function Spa() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background aurora-bg">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary tracking-[0.3em] text-sm uppercase mb-4">Rejuvenate Body & Mind</h3>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-white">Korean Spa & Wellness</h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Step into a sanctuary of tranquility. Our exclusive Korean Spa brings ancient wellness traditions to the heart of Kathmandu, offering a profound journey of relaxation and renewal.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-colors group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-light text-sm mb-6 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-border/50 pt-6 mt-auto">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{service.duration}</div>
                    <div className="text-xl font-serif text-primary">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel border border-primary/20 rounded-none p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-serif text-white mb-4">Book Your Spa Experience</h2>
          <p className="text-muted-foreground mb-8 font-light">Advance booking is highly recommended to secure your preferred time and therapist.</p>
          <Link href="/contact">
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-accent uppercase tracking-widest text-sm h-14 px-10">
              Request Reservation
            </Button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
