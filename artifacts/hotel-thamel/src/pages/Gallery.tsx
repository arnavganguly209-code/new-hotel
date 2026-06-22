import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Star, Leaf, Wind, Coffee, UtensilsCrossed,
  Wifi, Key, Users, MapPin, Heart, Mountain
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const GOLD = "#c9a96e";
const GOLD_LIGHT = "rgba(201,169,110,0.08)";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

export default function Gallery() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="pt-40 pb-20 px-6 md:px-14 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(17,24,39,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-2xl mx-auto">
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-[1px]" style={{ background: GOLD }} />
            <SectionLabel>Visual Journey</SectionLabel>
            <div className="w-10 h-[1px]" style={{ background: GOLD }} />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl text-[#111827] leading-tight mb-6">
            The Hotel Thamel<br /><span className="italic" style={{ color: GOLD }}>Experience</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg font-light leading-relaxed">
            A curated journey through luxury, wellness, and authentic Nepalese hospitality — told through space, light, and design.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 1. HOTEL EXPERIENCE ── */}
      <section className="py-24 px-6 md:px-14 lg:px-20 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <SectionLabel>Hotel Experience</SectionLabel>
            <h2 className="font-serif text-4xl text-[#111827]">Where Every Detail Matters</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature panel — large */}
            <motion.div variants={fadeInUp}
              className="md:col-span-2 relative overflow-hidden rounded-none min-h-[360px] flex items-end p-10 group cursor-pointer"
              style={{ background: `linear-gradient(135deg, #f5f0e8 0%, #ede5d4 100%)` }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              {/* Decorative serif bg text */}
              <div className="absolute top-6 right-6 font-serif text-[8rem] leading-none select-none pointer-events-none"
                style={{ color: GOLD, opacity: 0.07 }}>25+</div>
              {/* Corner L-shapes */}
              <div className="absolute top-4 left-4 w-6 h-[1px]" style={{ background: GOLD, opacity: 0.3 }} />
              <div className="absolute top-4 left-4 w-[1px] h-6" style={{ background: GOLD, opacity: 0.3 }} />
              <div className="absolute bottom-4 right-4 w-6 h-[1px]" style={{ background: GOLD, opacity: 0.3 }} />
              <div className="absolute bottom-4 right-4 w-[1px] h-6" style={{ background: GOLD, opacity: 0.3 }} />

              <div className="relative z-10">
                <div className="text-[9px] tracking-widest uppercase mb-3 font-medium" style={{ color: GOLD }}>Est. 1999 · Thamel, Kathmandu</div>
                <h3 className="font-serif text-3xl text-[#111827] mb-2">25 Years of Refined Hospitality</h3>
                <p className="text-[#4b5563] text-sm font-light max-w-xs">A landmark of luxury and cultural warmth at the heart of Kathmandu.</p>
              </div>
            </motion.div>

            {/* Stat panel */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              {[
                { icon: Key, label: "84 Rooms", sub: "Elegantly appointed" },
                { icon: Users, label: "15,000+ Guests", sub: "Served with pride" },
                { icon: Star, label: "4.9 Rating", sub: "Google & TripAdvisor" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} className="flex-1 bg-white border border-[#f0f0f0] p-6 flex items-center gap-5 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-[#f0f0f0] group-hover:border-[#c9a96e] transition-colors">
                    <item.icon className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-[#111827]">{item.label}</div>
                    <div className="text-xs text-[#9ca3af] font-light">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ROOMS ── */}
      <section className="py-24 px-6 md:px-14 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <SectionLabel>Accommodation</SectionLabel>
            <h2 className="font-serif text-4xl text-[#111827]">Luxurious Retreats</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Super Deluxe Twin", price: "$60", area: "32m²", desc: "Twin beds, city view, premium finish" },
              { name: "Super Deluxe Room", price: "$60", area: "35m²", desc: "King bed, refined interiors" },
              { name: "Family Room", price: "$55", area: "52m²", desc: "Separate living area, 4 guests" },
              { name: "Standard Deluxe", price: "$50", area: "28m²", desc: "Smart, elegant, well-appointed" },
            ].map((room, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(201,169,110,0.12)" }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-[#f0f0f0] overflow-hidden cursor-pointer"
              >
                {/* Visual panel */}
                <div className="relative h-48 overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(${135 + i * 30}deg, #f5f0e8, #e8dfc8)` }}>
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(rgba(201,169,110,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <span className="font-serif text-[6rem] leading-none select-none" style={{ color: GOLD, opacity: 0.12 }}>{i + 1}</span>
                  <div className="absolute top-3 left-3 text-[8px] tracking-widest uppercase font-medium" style={{ color: GOLD }}>{room.area}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${GOLD}, #a07840)` }} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#111827] mb-1">{room.name}</h3>
                  <p className="text-xs text-[#6b7280] font-light mb-4 leading-relaxed">{room.desc}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-serif text-xl" style={{ color: GOLD }}>{room.price}</span>
                      <span className="text-[10px] text-[#9ca3af] ml-1">/night</span>
                    </div>
                    <Button asChild variant="outline" className="rounded-none border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white text-[10px] uppercase tracking-widest px-4 py-2 h-auto">
                      <Link href="/contact">Book</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. DINING ── */}
      <section className="py-24 px-6 md:px-14 lg:px-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <SectionLabel>Dining</SectionLabel>
            <h2 className="font-serif text-4xl text-[#111827]">Culinary Journeys</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Garden View Korean Restaurant */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative overflow-hidden group cursor-pointer min-h-[440px]"
              whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
            >
              {/* Background visual */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f0e8d4 100%)' }}>
                {/* Korean grid pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(201,169,110,0.06) 30px,rgba(201,169,110,0.06) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(201,169,110,0.06) 30px,rgba(201,169,110,0.06) 31px)"
                }} />
                <div className="absolute top-6 right-6 font-serif text-[7rem] leading-none select-none" style={{ color: GOLD, opacity: 0.07 }}>餐</div>
              </div>

              {/* Corner accents */}
              {[['top-4 left-4', 'right'], ['top-4 right-4', 'left'], ['bottom-4 left-4', 'right'], ['bottom-4 right-4', 'left']].map(([pos], idx) => (
                <div key={idx}>
                  <div className={`absolute ${pos} w-5 h-[1px]`} style={{ background: GOLD, opacity: 0.25 }} />
                  <div className={`absolute ${pos} w-[1px] h-5`} style={{ background: GOLD, opacity: 0.25 }} />
                </div>
              ))}

              <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[440px]">
                <div className="mt-auto">
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6" style={{ borderColor: `${GOLD}40` }}>
                    <UtensilsCrossed className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <div className="text-[9px] tracking-widest uppercase mb-2 font-medium" style={{ color: GOLD }}>Dining Experience</div>
                  <h3 className="font-serif text-3xl text-[#111827] mb-3">Garden View Korean Restaurant</h3>
                  <p className="text-[#4b5563] text-sm font-light leading-relaxed mb-6 max-w-xs">
                    Authentic Korean cuisine served in a serene garden setting. Master chefs, finest ingredients.
                  </p>
                  <div className="flex gap-3">
                    {["Korean BBQ", "Garden Terrace", "Set Menus"].map(tag => (
                      <span key={tag} className="text-[9px] tracking-wider uppercase text-[#6b7280] border border-[#e5e7eb] px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skyz Lounge */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative overflow-hidden group cursor-pointer min-h-[440px]"
              whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
                {/* Stars */}
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="absolute rounded-full bg-white"
                    style={{ width: i % 3 === 0 ? 2 : 1, height: i % 3 === 0 ? 2 : 1, top: `${Math.random() * 60}%`, left: `${Math.random() * 100}%`, opacity: 0.3 + Math.random() * 0.5 }} />
                ))}
                {/* Skyline silhouette */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-6 gap-2" style={{ height: '35%' }}>
                  {[55, 80, 40, 100, 65, 45, 90, 50].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: 'rgba(201,169,110,0.08)' }} />
                  ))}
                </div>
                {/* Glow */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[80px]" style={{ background: GOLD, opacity: 0.06 }} />
              </div>

              <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-[440px]">
                <div className="mt-auto">
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6" style={{ borderColor: `${GOLD}40` }}>
                    <Coffee className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <div className="text-[9px] tracking-widest uppercase mb-2 font-medium" style={{ color: GOLD }}>Lounge & Bar</div>
                  <h3 className="font-serif text-3xl text-white mb-3">Skyz Lounge</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6 max-w-xs">
                    Rooftop luxury above Kathmandu. Signature cocktails, panoramic views, and live music.
                  </p>
                  <div className="flex gap-3">
                    {["Rooftop", "Cocktails", "Live Music"].map(tag => (
                      <span key={tag} className="text-[9px] tracking-wider uppercase text-white/40 border border-white/10 px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. SPA & WELLNESS ── */}
      <section className="py-24 px-6 md:px-14 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <SectionLabel>Spa & Wellness</SectionLabel>
            <h2 className="font-serif text-4xl text-[#111827]">Restore. Renew. Revive.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Sparkles, label: "Signature Massage", desc: "Full body relaxation therapy", accent: "#f5f0e8" },
              { icon: Wind, label: "Steam Therapy", desc: "Deep cleansing & rejuvenation", accent: "#eef5f0" },
              { icon: Leaf, label: "Sauna", desc: "Authentic dry heat experience", accent: "#f5f0e8" },
              { icon: Heart, label: "Couples Package", desc: "Shared luxury wellness journey", accent: "#f5f0f5" },
              { icon: Star, label: "Wellness Retreat", desc: "Multi-day holistic programs", accent: "#f5f0e8" },
              { icon: Sparkles, label: "Relaxation Area", desc: "Quiet sanctuary of peace", accent: "#eef5f0" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(201,169,110,0.1)" }}
                transition={{ duration: 0.3 }}
                className="p-8 cursor-pointer border border-[#f0f0f0] relative overflow-hidden"
                style={{ background: item.accent }}
              >
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full blur-[40px] pointer-events-none" style={{ background: GOLD, opacity: 0.05 }} />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 border border-[#e5e7eb]">
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h3 className="font-serif text-xl text-[#111827] mb-2">{item.label}</h3>
                <p className="text-xs text-[#6b7280] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. NEPAL HERITAGE ── */}
      <section className="py-24 px-6 md:px-14 lg:px-20 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
            <SectionLabel>Nepal Heritage</SectionLabel>
            <h2 className="font-serif text-4xl text-[#111827]">The Soul of Thamel</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large heritage panel */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="lg:col-span-2 relative overflow-hidden min-h-[400px] flex items-end p-10"
              style={{ background: 'linear-gradient(135deg, #f5ede0 0%, #ede0c8 100%)' }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none select-none overflow-hidden">
                <div className="font-serif text-[12rem] leading-none" style={{ color: GOLD, opacity: 0.06 }}>🇳🇵</div>
              </div>
              {/* Mandala-inspired ring decorations */}
              {[240, 180, 120].map((size, i) => (
                <div key={i} className="absolute top-1/2 right-16 -translate-y-1/2 rounded-full border"
                  style={{ width: size, height: size, borderColor: `${GOLD}${12 - i * 3}`, opacity: 0.4 - i * 0.1, marginRight: 0 }} />
              ))}
              <div className="relative z-10">
                <div className="text-[9px] tracking-widest uppercase mb-3 font-medium" style={{ color: GOLD }}>Atithi Devo Bhava · Guest is God</div>
                <h3 className="font-serif text-3xl text-[#111827] mb-4">25 Years Rooted in<br />Nepalese Warmth</h3>
                <p className="text-[#4b5563] text-sm font-light leading-relaxed max-w-md">
                  Our hotel is a living tribute to the ancient Nepalese tradition of hospitality. Every gesture, every service, every detail reflects the rich cultural heritage of Kathmandu.
                </p>
              </div>
            </motion.div>

            {/* Heritage cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="flex flex-col gap-4">
              {[
                { icon: MapPin, label: "Thamel District", sub: "Cultural heart of Kathmandu" },
                { icon: Mountain, label: "Himalayan Views", sub: "Steps from mountain vistas" },
                { icon: Heart, label: "Local Traditions", sub: "Authentic Nepalese warmth" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}
                  whileHover={{ x: 4 }} transition={{ duration: 0.25 }}
                  className="bg-white border border-[#f0f0f0] p-6 flex items-center gap-5 cursor-pointer hover:border-[#c9a96e] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#faf8f4] flex items-center justify-center shrink-0 border border-[#f0f0f0]">
                    <item.icon className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <div className="font-serif text-base text-[#111827]">{item.label}</div>
                    <div className="text-xs text-[#9ca3af] font-light">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center bg-white border-t border-[#f0f0f0]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl mx-auto">
          <motion.div variants={fadeInUp} className="w-12 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-[#111827] mb-4 leading-tight">
            Begin Your<br /><span className="italic" style={{ color: GOLD }}>Luxury Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#6b7280] font-light mb-10">
            Experience the pinnacle of hospitality in the heart of Kathmandu.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-none px-10 py-6 h-auto uppercase tracking-widest text-xs" style={{ background: GOLD, color: 'white' }}>
              <Link href="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none px-10 py-6 h-auto uppercase tracking-widest text-xs border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
