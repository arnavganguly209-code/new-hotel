import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Coffee, Tv, Wind, ShieldCheck, Bath } from "lucide-react";

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 120,
    size: "32 sqm",
    occupancy: "2 Adults",
    bed: "1 King Bed or 2 Twins",
    desc: "Elegantly appointed rooms featuring modern amenities, plush bedding, and warm wooden accents inspired by traditional Nepalese architecture.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "AC/Heating" },
      { icon: Bath, label: "Rain Shower" }
    ]
  },
  {
    id: "premium-deluxe",
    name: "Premium Deluxe",
    price: 160,
    size: "40 sqm",
    occupancy: "2 Adults",
    bed: "1 King Bed",
    desc: "Spacious luxury with enhanced city views, a comfortable seating area, and upgraded bathroom amenities for a truly relaxing stay.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Coffee, label: "Minibar" },
      { icon: ShieldCheck, label: "Safe" },
      { icon: Bath, label: "Bathtub" }
    ]
  },
  {
    id: "family",
    name: "Family Suite",
    price: 220,
    size: "55 sqm",
    occupancy: "4 Guests",
    bed: "1 King & 2 Twins",
    desc: "Perfect for families, featuring two interconnecting rooms, a separate living space, and dual bathrooms ensuring comfort for everyone.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Dual TVs" },
      { icon: Coffee, label: "Pantry" },
      { icon: Bath, label: "Dual Baths" }
    ]
  },
  {
    id: "executive",
    name: "Executive Suite",
    price: 280,
    size: "65 sqm",
    occupancy: "2 Adults",
    bed: "1 King Bed",
    desc: "The pinnacle of luxury. A magnificent suite with separate living and dining areas, premium spa-like bathroom, and exclusive lounge access.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Coffee, label: "Espresso" },
      { icon: Wind, label: "Climate Ctrl" },
      { icon: Bath, label: "Jacuzzi" }
    ]
  }
];

export default function Rooms() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <h1 className="text-5xl font-serif mb-6 text-white">Luxury Accommodations</h1>
          <p className="text-muted-foreground text-lg font-light">
            Retreat to your private sanctuary in Kathmandu. Every room is meticulously designed to provide the utmost comfort, blending contemporary elegance with subtle traditional touches.
          </p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border/50 overflow-hidden flex flex-col lg:flex-row">
                {/* Visual Placeholder since no images */}
                <div className="lg:w-2/5 bg-background p-12 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-border/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <div className="font-serif text-3xl text-primary/40 mb-4">{room.name}</div>
                  <div className="w-24 h-[1px] bg-primary/30 mb-8"></div>
                  <div className="flex gap-8 text-muted-foreground text-sm uppercase tracking-widest">
                    <span>{room.size}</span>
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-3xl font-serif text-white">{room.name}</h2>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">From</div>
                        <div className="text-2xl text-primary font-serif">${room.price}</div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                      {room.desc}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-sm uppercase tracking-widest text-white mb-4">Room Features</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {room.amenities.map((amenity, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 text-center p-3 rounded bg-background/50 border border-border/30">
                            <amenity.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            <span className="text-xs text-muted-foreground">{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-8 pt-8 border-t border-border/50">
                    <Button variant="outline" className="rounded-none border-border hover:bg-background uppercase tracking-widest text-xs h-12 px-8">
                      View Details
                    </Button>
                    <Link href="/contact">
                      <Button className="rounded-none bg-primary text-primary-foreground hover:bg-accent uppercase tracking-widest text-xs h-12 px-8">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
