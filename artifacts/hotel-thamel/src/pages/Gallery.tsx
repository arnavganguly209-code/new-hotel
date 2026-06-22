import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Star, Leaf, Wind, Coffee, UtensilsCrossed,
  Users, MapPin, Heart, Mountain, ChevronRight
} from "lucide-react";

const GOLD = "#c9a96e";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CATEGORIES = [
  "All", "Reception", "Garden Area", "Breakfast Area",
  "Guest Rooms", "Bathroom", "Restaurant", "Skyz Lounge", "Spa & Wellness"
];

type PanelConfig = {
  id: string;
  category: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bg: string;
  accent: string;
  watermark: string;
  tags: string[];
  span?: string;
};

const PANELS: PanelConfig[] = [
  {
    id: "reception",
    category: "Reception",
    label: "Grand Entrance",
    title: "The Reception",
    subtitle: "Where your journey begins",
    description: "A warm, luminous welcome awaits at the heart of Hotel Thamel Park & Spa. Warm ivory marble, hand-crafted gold detailing, and the subtle scent of Nepalese flowers define your first impression.",
    bg: "linear-gradient(135deg, #fdf8f0 0%, #f5ead8 60%, #ede0c4 100%)",
    accent: "#c9a96e",
    watermark: "R",
    tags: ["Concierge", "Luggage Service", "24/7 Service"],
    span: "lg:col-span-2",
  },
  {
    id: "garden",
    category: "Garden Area",
    label: "Outdoor Sanctuary",
    title: "The Garden",
    subtitle: "Nature woven into luxury",
    description: "Lush greenery and curated blooms frame our serene garden terrace — a hidden retreat in the heart of Thamel.",
    bg: "linear-gradient(145deg, #f0f8f0 0%, #ddf0dd 55%, #c8e8c8 100%)",
    accent: "#5a8a5a",
    watermark: "G",
    tags: ["Garden Terrace", "Seating", "Events"],
  },
  {
    id: "breakfast",
    category: "Breakfast Area",
    label: "Morning Ritual",
    title: "Breakfast Lounge",
    subtitle: "A golden start to every day",
    description: "Wake to a spread of continental and Nepalese delicacies served in a sunlit champagne-gold setting that makes every morning feel like a celebration.",
    bg: "linear-gradient(150deg, #fefaee 0%, #f8edca 55%, #f0e0a0 100%)",
    accent: "#b8901e",
    watermark: "B",
    tags: ["Continental", "Nepalese", "7AM – 10AM"],
    span: "lg:col-span-2",
  },
  {
    id: "guestrooms",
    category: "Guest Rooms",
    label: "Private Sanctuary",
    title: "Guest Rooms",
    subtitle: "84 rooms of refined comfort",
    description: "Each room is an intimate world of precision and warmth — plush linens, bespoke furniture, and views of Thamel's rooftops.",
    bg: "linear-gradient(135deg, #faf6ee 0%, #f0e6d0 55%, #e4d4b4 100%)",
    accent: "#c9a96e",
    watermark: "4",
    tags: ["84 Rooms", "City View", "King or Twin"],
  },
  {
    id: "bathroom",
    category: "Bathroom",
    label: "Marble Sanctuary",
    title: "Bathroom Experience",
    subtitle: "Spa-grade luxury in every room",
    description: "Rain showers, marble surfaces, and hand-selected bath amenities transform your daily ritual into a moment of pure indulgence.",
    bg: "linear-gradient(150deg, #fafafa 0%, #f2f0ee 50%, #e8e4de 100%)",
    accent: "#9ca3af",
    watermark: "M",
    tags: ["Rain Shower", "Marble Finish", "Premium Amenities"],
  },
  {
    id: "restaurant",
    category: "Restaurant",
    label: "Culinary Journey",
    title: "Garden View Restaurant",
    subtitle: "Authentic Korean cuisine",
    description: "Traditional Korean recipes, master chefs, and a garden setting create an unrivaled dining experience — the finest Korean table in Kathmandu.",
    bg: "linear-gradient(135deg, #fdf6e8 0%, #f5e8c4 55%, #edda9a 100%)",
    accent: "#c9a96e",
    watermark: "餐",
    tags: ["Korean BBQ", "Garden View", "Private Dining"],
    span: "lg:col-span-2",
  },
  {
    id: "skyz",
    category: "Skyz Lounge",
    label: "Rooftop Experience",
    title: "Skyz Lounge",
    subtitle: "Above the city, above the ordinary",
    description: "Signature cocktails, live jazz, and panoramic views of Kathmandu's skyline from the 8th floor — an evening you will not forget.",
    bg: "linear-gradient(150deg, #fdf5e0 0%, #f5e4a8 50%, #edd898 100%)",
    accent: "#a07840",
    watermark: "S",
    tags: ["Floor 8", "Cocktails", "4PM – 11PM"],
  },
  {
    id: "spa",
    category: "Spa & Wellness",
    label: "Holistic Wellness",
    title: "Spa & Wellness",
    subtitle: "Restore. Renew. Revive.",
    description: "Ancient therapeutic traditions meet modern luxury treatments. Our expert therapists guide you on a journey of complete restoration.",
    bg: "linear-gradient(145deg, #f5f0e8 0%, #ede4d0 55%, #e0d0b4 100%)",
    accent: "#c9a96e",
    watermark: "✦",
    tags: ["Massage", "Sauna", "Steam Room"],
  },
];

function GalleryPanel({ panel, index }: { panel: PanelConfig; index: number }) {
  const isWide = panel.span === "lg:col-span-2";

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: `0 30px 70px rgba(0,0,0,0.09), 0 4px 20px rgba(201,169,110,0.1)` }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden cursor-pointer group ${panel.span || ""}`}
      style={{ minHeight: isWide ? 420 : 360 }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: panel.bg }} />

      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(0,0,0,0.02) 28px, rgba(0,0,0,0.02) 29px)'
      }} />

      {/* Large watermark */}
      <div className="absolute top-4 right-6 font-serif leading-none select-none pointer-events-none z-0"
        style={{ fontSize: isWide ? '11rem' : '8rem', color: panel.accent, opacity: 0.07 }}>
        {panel.watermark}
      </div>

      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: panel.accent, filter: 'blur(60px)' }}
      />

      {/* Floating particles */}
      {[
        { size: 3, top: '15%', left: '12%', dur: 5 + index * 0.3 },
        { size: 4, top: '70%', left: '82%', dur: 7 + index * 0.2 },
        { size: 3, top: '35%', left: '88%', dur: 6 + index * 0.4 },
      ].map((p, i) => (
        <motion.div key={i}
          animate={{ y: [0, -16, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{ repeat: Infinity, duration: p.dur, delay: i * 0.8, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: panel.accent }}
        />
      ))}

      {/* Animated sweeping line */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 18 + index * 2, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[1px] w-[160px] top-1/2 z-0"
        style={{ background: `linear-gradient(90deg, transparent, ${panel.accent}30, transparent)` }}
      />

      {/* Corner L-brackets */}
      <div className="absolute top-5 left-5 w-6 h-[2px]" style={{ background: panel.accent, opacity: 0.25 }} />
      <div className="absolute top-5 left-5 w-[2px] h-6" style={{ background: panel.accent, opacity: 0.25 }} />
      <div className="absolute bottom-5 right-5 w-6 h-[2px]" style={{ background: panel.accent, opacity: 0.25 }} />
      <div className="absolute bottom-5 right-5 w-[2px] h-6" style={{ background: panel.accent, opacity: 0.25 }} />

      {/* Rotating rings */}
      {[100, 70].map((size, i) => (
        <motion.div key={i}
          animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-8 right-8 rounded-full border border-dashed"
          style={{ width: size, height: size, borderColor: panel.accent, opacity: 0.08 + i * 0.04 }}
        />
      ))}

      {/* Content overlay — slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-10">
        <div>
          <div className="text-[9px] tracking-[0.28em] uppercase mb-2 font-semibold"
            style={{ color: panel.accent }}>
            {panel.label}
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-[#111827] mb-1">{panel.title}</h3>
          <p className="font-serif italic text-sm text-[#4b5563] mb-4">{panel.subtitle}</p>

          {/* Description — visible on wide panels, hover on small */}
          <p className={`text-sm text-[#4b5563] font-light leading-relaxed mb-5 max-w-lg ${isWide ? 'block' : 'hidden md:block'}`}>
            {panel.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {panel.tags.map(tag => (
              <span key={tag} className="text-[9px] tracking-widest uppercase px-3 py-1.5 border bg-white/60"
                style={{ color: panel.accent, borderColor: `${panel.accent}30` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c9a96e]/20 transition-all duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: `linear-gradient(90deg, ${panel.accent}, transparent)` }} />
    </motion.div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PANELS
    : PANELS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="pt-44 pb-16 px-6 md:px-14 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Large serif bg text */}
        <div className="absolute top-8 right-8 font-serif leading-none select-none pointer-events-none text-[#c9a96e] opacity-[0.04]"
          style={{ fontSize: '18rem' }}>
          G
        </div>

        <motion.div initial="hidden" animate="visible" variants={stagger}
          className="relative z-10 max-w-3xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px]" style={{ background: GOLD }} />
            <p className="text-[9px] uppercase tracking-[0.35em] font-semibold" style={{ color: GOLD }}>Visual Journey</p>
          </motion.div>
          <motion.h1 variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#111827] leading-tight mb-6">
            The Hotel Thamel<br />
            <span className="italic" style={{ color: GOLD }}>Experience</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg font-light leading-relaxed max-w-xl">
            A curated journey through luxury, wellness, and authentic Nepalese hospitality — told through space, light, and design.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-[#f0f0f0] shadow-sm">
        <div className="px-6 md:px-14 lg:px-20 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="whitespace-nowrap text-[9px] uppercase tracking-widest px-5 py-2.5 transition-all duration-200 shrink-0"
              style={activeFilter === cat
                ? { background: GOLD, color: 'white' }
                : { background: 'transparent', color: '#6b7280', border: '1px solid #f0f0f0' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── GALLERY GRID ── */}
      <section className="py-16 px-6 md:px-14 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 col-span-full"
            >
              {filtered.map((panel, i) => (
                <GalleryPanel key={panel.id} panel={panel} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-16 bg-[#faf8f4] border-y border-[#f0f0f0]">
        <div className="px-6 md:px-14 lg:px-20 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "84", label: "Luxury Rooms" },
              { val: "288K+", label: "Happy Guests" },
              { val: "25+", label: "Years Experience" },
              { val: "4.9★", label: "Guest Rating" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="font-serif text-3xl md:text-4xl text-[#111827] mb-2">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest text-[#9ca3af]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="max-w-xl mx-auto">
          <motion.div variants={fadeInUp} className="w-12 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-[#111827] mb-4 leading-tight">
            Begin Your<br /><span className="italic" style={{ color: GOLD }}>Luxury Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#6b7280] font-light mb-10">
            Experience the pinnacle of hospitality in the heart of Kathmandu.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-none px-12 py-7 h-auto uppercase tracking-widest text-xs shadow-md hover:shadow-lg transition-shadow"
              style={{ background: GOLD, color: 'white' }}>
              <Link href="/contact">Book Your Stay</Link>
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
