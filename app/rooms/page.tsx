"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Wifi, Coffee, Tv, Wind, Bath, Users, Maximize2,
  ChevronRight, Star, CheckCircle, Sparkles
} from "lucide-react";

const GOLD = "#c9a96e";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ROOMS = [
  {
    id: "super-deluxe-twin",
    name: "Super Deluxe Twin",
    price: "60",
    size: "32m²",
    guests: 2,
    bed: "2 Twin Beds",
    desc: "Elegantly appointed twin-bed retreat combining modern comfort with warm Nepalese character. Plush bedding, city or garden outlook, and carefully curated furnishings create an atmosphere of effortless refinement.",
    highlights: ["Garden or City View", "Twin Bed Configuration", "Premium Linens", "In-Room Safe"],
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Climate Control" },
      { icon: Coffee, label: "Coffee Station" },
      { icon: Bath, label: "Rain Shower" },
      { icon: Star, label: "Turndown Service" },
    ],
    gradient: "linear-gradient(145deg, #fdf8f0 0%, #f0e6d0 100%)",
    number: "01",
  },
  {
    id: "super-deluxe-room",
    name: "Super Deluxe Room",
    price: "60",
    size: "35m²",
    guests: 2,
    bed: "1 King Bed",
    desc: "A sanctuary of warmth and understated luxury with a premium king bed, refined interiors inspired by Nepalese craftsmanship, and generous space for the discerning traveler seeking absolute comfort.",
    highlights: ["King Bed", "Spacious Layout", "Artisan Décor", "Marble Bathroom"],
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Climate Control" },
      { icon: Coffee, label: "Coffee Station" },
      { icon: Bath, label: "Marble Bathroom" },
      { icon: Sparkles, label: "Premium Toiletries" },
    ],
    gradient: "linear-gradient(145deg, #f0f5f8 0%, #d8eaf2 100%)",
    number: "02",
  },
  {
    id: "family-room",
    name: "Family Room",
    price: "55",
    size: "52m²",
    guests: 4,
    bed: "King + 2 Twins",
    desc: "Thoughtfully designed for families and groups, with generous separate living and sleeping zones, interconnecting spaces, and all the amenities required for a seamless, comfortable extended stay in Kathmandu.",
    highlights: ["Separate Living Area", "Interconnecting Layout", "4 Guests", "Extra Storage"],
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Dual Smart TV" },
      { icon: Wind, label: "Climate Control" },
      { icon: Coffee, label: "Pantry Area" },
      { icon: Bath, label: "Dual Bathrooms" },
      { icon: Users, label: "Family Amenities" },
    ],
    gradient: "linear-gradient(145deg, #f5f0f8 0%, #e8d8f0 100%)",
    number: "03",
  },
  {
    id: "standard-deluxe",
    name: "Standard Deluxe Room",
    price: "50",
    size: "28m²",
    guests: 2,
    bed: "1 Queen Bed",
    desc: "A refined and intelligent use of space — everything the modern luxury traveler requires, without excess. Smart design, quality furnishings, and impeccable service in one perfectly proportioned room.",
    highlights: ["Smart Layout", "Queen Bed", "City Views", "Essential Luxury"],
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Climate Control" },
      { icon: Coffee, label: "Kettle & Coffee" },
      { icon: Bath, label: "Rain Shower" },
      { icon: CheckCircle, label: "Nightly Turndown" },
    ],
    gradient: "linear-gradient(145deg, #f0f8f0 0%, #d8ecd8 100%)",
    number: "04",
  },
];

export default function Rooms() {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO HEADER ── */}
      <section className="relative overflow-hidden pt-44 pb-24 px-6 md:px-14 lg:px-20 bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Large bg serif letter */}
        <div className="absolute top-8 right-6 font-serif leading-none select-none pointer-events-none"
          style={{ fontSize: '18rem', color: GOLD, opacity: 0.04 }}>A</div>

        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: GOLD, filter: 'blur(120px)' }}
        />

        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-2xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px]" style={{ background: GOLD }} />
            <p className="text-[9px] uppercase tracking-[0.35em] font-semibold" style={{ color: GOLD }}>Accommodation</p>
          </motion.div>
          <motion.h1 variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111827] leading-tight mb-6">
            Luxurious<br />
            <span className="italic" style={{ color: GOLD }}>Retreats</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg font-light leading-relaxed">
            Retreat to your private sanctuary in Kathmandu. Every room is meticulously appointed to provide the utmost comfort, blending contemporary elegance with authentic Nepalese warmth.
          </motion.p>
        </motion.div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-[#f0f0f0]">
          {[
            { val: "84", label: "Total Rooms" },
            { val: "4", label: "Room Types" },
            { val: "4.9★", label: "Average Rating" },
            { val: "25+", label: "Years of Hospitality" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-serif text-2xl text-[#111827]">{s.val}</div>
              <div className="text-[9px] uppercase tracking-widest text-[#9ca3af] mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── ROOM LISTINGS ── */}
      <section className="py-20 px-6 md:px-14 lg:px-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto space-y-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              onHoverStart={() => setHoveredRoom(room.id)}
              onHoverEnd={() => setHoveredRoom(null)}
              className="bg-white overflow-hidden border border-[#f0f0f0] flex flex-col lg:flex-row group"
              style={{
                boxShadow: hoveredRoom === room.id
                  ? '0 30px 70px rgba(0,0,0,0.09), 0 4px 20px rgba(201,169,110,0.1)'
                  : '0 4px 24px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                transform: hoveredRoom === room.id ? 'translateY(-6px)' : 'translateY(0)',
              }}
            >
              {/* Left: Visual Panel */}
              <div className="lg:w-[42%] relative overflow-hidden flex items-center justify-center"
                style={{ background: room.gradient, minHeight: index % 2 === 0 ? 400 : 380 }}>

                {/* Stripe texture */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(0,0,0,0.02) 30px, rgba(0,0,0,0.02) 31px)'
                }} />

                {/* Large room number watermark */}
                <div className="absolute top-4 right-6 font-serif leading-none select-none pointer-events-none"
                  style={{ fontSize: '10rem', color: GOLD, opacity: 0.07 }}>{room.number}</div>

                {/* Ambient glow */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
                  transition={{ duration: 7 + index, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: GOLD, filter: 'blur(60px)' }}
                />

                {/* Rotating rings */}
                {[180, 130, 80].map((size, i) => (
                  <motion.div key={i}
                    animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
                    transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute rounded-full border border-dashed"
                    style={{ width: size, height: size, borderColor: GOLD, opacity: 0.07 + i * 0.03 }}
                  />
                ))}

                {/* Floating particles */}
                {[
                  { size: 3, top: '18%', left: '15%', dur: 5 },
                  { size: 4, top: '72%', left: '80%', dur: 7 },
                  { size: 3, top: '45%', left: '88%', dur: 6 },
                ].map((p, i) => (
                  <motion.div key={i}
                    animate={{ y: [0, -14, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: p.dur, delay: i * 0.8, ease: 'easeInOut' }}
                    className="absolute rounded-full"
                    style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: GOLD }}
                  />
                ))}

                {/* Corner brackets */}
                <div className="absolute top-5 left-5 w-6 h-[2px]" style={{ background: GOLD, opacity: 0.25 }} />
                <div className="absolute top-5 left-5 w-[2px] h-6" style={{ background: GOLD, opacity: 0.25 }} />
                <div className="absolute bottom-5 right-5 w-6 h-[2px]" style={{ background: GOLD, opacity: 0.25 }} />
                <div className="absolute bottom-5 right-5 w-[2px] h-6" style={{ background: GOLD, opacity: 0.25 }} />

                {/* Gold bar top */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${GOLD}, #a07840)` }} />

                {/* Center info card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative z-10 bg-white/90 backdrop-blur-sm p-8 max-w-[240px] w-full mx-6 text-center border-t-2"
                  style={{ borderTopColor: GOLD, boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}
                >
                  <div className="text-[9px] tracking-[0.25em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
                    Room {room.number}
                  </div>
                  <div className="font-serif text-xl text-[#111827] mb-4">{room.name}</div>
                  <div className="flex justify-center gap-5 text-xs text-[#6b7280]">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3" style={{ color: GOLD }} />{room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3" style={{ color: GOLD }} />{room.guests}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-[58%] flex flex-col justify-between p-8 md:p-12">
                <div>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4">
                    <div>
                      <p className="text-[9px] tracking-[0.25em] uppercase mb-2 font-semibold" style={{ color: GOLD }}>
                        {room.bed} · {room.size} · {room.guests} Guests
                      </p>
                      <h2 className="font-serif text-3xl md:text-4xl text-[#111827]">{room.name}</h2>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[9px] tracking-widest text-[#9ca3af] uppercase mb-1">From</div>
                      <div className="font-serif text-4xl" style={{ color: GOLD }}>${room.price}</div>
                      <div className="text-[9px] tracking-widest text-[#9ca3af] uppercase mt-1">Per Night</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#4b5563] text-base md:text-lg font-light leading-relaxed mb-8">{room.desc}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: GOLD }} />
                        <span className="text-sm text-[#4b5563] font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#9ca3af] mb-4 font-medium">Room Features</p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {room.amenities.map((am, idx) => (
                        <div key={idx}
                          className="flex flex-col items-center gap-2 p-3 bg-[#faf8f4] border border-[#f0f0f0] hover:border-[#c9a96e] transition-colors text-center">
                          <am.icon className="w-4 h-4" style={{ color: GOLD }} strokeWidth={1.5} />
                          <span className="text-[9px] uppercase tracking-widest text-[#6b7280] leading-tight">{am.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#f0f0f0]">
                  <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                    <Users className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                    <span className="font-medium uppercase tracking-widest text-xs">{room.guests} Guest{room.guests > 1 ? "s" : ""} · {room.bed}</span>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Button asChild variant="outline"
                      className="rounded-none border-[#e5e7eb] text-[#6b7280] hover:border-[#c9a96e] hover:text-[#c9a96e] uppercase tracking-widest text-xs px-6 py-5 h-auto flex-1 sm:flex-none transition-colors">
                      <Link href="/contact">Enquire</Link>
                    </Button>
                    <Button asChild
                      className="rounded-none text-white hover:bg-[#a07840] uppercase tracking-widest text-xs px-8 py-5 h-auto flex-1 sm:flex-none transition-colors"
                      style={{ background: GOLD }}>
                      <Link href="/contact">Book This Room</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INCLUDED IN EVERY ROOM ── */}
      <section className="py-28 px-6 md:px-14 lg:px-20 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16">
            <motion.div variants={fadeInUp} className="w-12 h-[1px] mx-auto mb-6" style={{ background: GOLD }} />
            <motion.p variants={fadeInUp} className="text-[9px] uppercase tracking-[0.3em] mb-4 font-semibold" style={{ color: GOLD }}>
              STANDARD INCLUSIONS
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-[#111827]">
              Included in Every Room
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Wifi, label: "Free High-Speed WiFi" },
              { icon: Tv, label: "Smart TV" },
              { icon: Wind, label: "Climate Control" },
              { icon: Coffee, label: "In-Room Coffee" },
              { icon: Bath, label: "Premium Toiletries" },
              { icon: Star, label: "Daily Housekeeping" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-4 p-6 bg-[#faf8f4] border border-[#f0f0f0] text-center hover:border-[#c9a96e] transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#f0f0f0]">
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
                </div>
                <span className="text-xs text-[#4b5563] font-medium leading-snug">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #fdf8f0 0%, #f5ead8 100%)' }}>
        {[360, 240, 140].map((size, i) => (
          <motion.div key={i}
            animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed pointer-events-none"
            style={{ width: size, height: size, borderColor: GOLD, opacity: 0.07 + i * 0.02 }}
          />
        ))}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="relative z-10 max-w-xl mx-auto">
          <motion.div variants={fadeInUp} className="w-12 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-[#111827] mb-4 leading-tight">
            Reserve Your<br /><span className="italic" style={{ color: GOLD }}>Perfect Room</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#6b7280] font-light mb-10">
            Contact our team to tailor the perfect stay in Kathmandu.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-none px-12 py-7 h-auto uppercase tracking-widest text-xs shadow-md"
              style={{ background: GOLD, color: 'white' }}>
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild variant="outline"
              className="rounded-none px-12 py-7 h-auto uppercase tracking-widest text-xs border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}