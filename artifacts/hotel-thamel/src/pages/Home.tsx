import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Star, MapPin, Coffee, Wifi, Users, ChevronRight, Wind,
  Tv, Calendar, Heart, Leaf, Key, UtensilsCrossed, Sparkles, CheckCircle,
  Plus, Minus, Plane, Mountain
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const GOLD = "#c9a96e";

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const step = end > 100 ? Math.ceil(end / 60) : 1;
    const incrementTime = end > 100 ? 16 : (duration * 1000) / end;
    const timer = setInterval(() => {
      start += step;
      if (start > end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="py-20 bg-white flex items-center justify-center gap-5"
    >
      <div className="w-32 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}50)` }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD, opacity: 0.4 }} />
      <div className="w-2 h-2 rotate-45 border" style={{ borderColor: GOLD, opacity: 0.5 }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD, opacity: 0.4 }} />
      <div className="w-32 h-[1px]" style={{ background: `linear-gradient(90deg, ${GOLD}50, transparent)` }} />
    </motion.div>
  );
}

export default function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Super Deluxe Twin");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);
  const [bookingError, setBookingError] = useState("");

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      setBookingError("Please select check-in and check-out dates");
      return;
    }
    setBookingError("");
    alert(`Searching availability for ${roomType}, ${adults} Adults, ${children} Children from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white">
        {/* Dot grid */}
        <div className="absolute inset-0 z-0 opacity-[0.055] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        {/* Slow ambient gradient */}
        <motion.div
          animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 55% at 72% 38%, rgba(201,169,110,0.06) 0%, transparent 72%)' }}
        />

        {/* Gold orb glow — top right */}
        <motion.div
          animate={{ y: [0, -35, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-12%] right-[-8%] w-[640px] h-[640px] rounded-full pointer-events-none z-0"
          style={{ background: GOLD, filter: 'blur(150px)', opacity: 0.065 }}
        />
        {/* Gold orb glow — bottom left */}
        <motion.div
          animate={{ y: [0, 45, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-12%] left-[-8%] w-[640px] h-[640px] rounded-full pointer-events-none z-0"
          style={{ background: GOLD, filter: 'blur(150px)', opacity: 0.065 }}
        />

        {/* Floating diagonal lines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -120, y: -120 }}
              animate={{ opacity: 0.07, x: 0, y: 0 }}
              transition={{ delay: i * 0.3, duration: 1.6, ease: "easeOut" }}
              className="absolute bg-[#c9a96e] w-[1px] h-[220px]"
              style={{ top: `${18 + i * 15}%`, left: `${8 + i * 18}%`, transform: 'rotate(45deg)', transformOrigin: 'top left' }}
            />
          ))}
        </div>

        {/* Large decorative H */}
        <motion.div
          animate={{ scale: [0.94, 1.06, 0.94] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[4%] -translate-y-1/2 pointer-events-none select-none z-0 font-serif text-[#c9a96e]"
          style={{ fontSize: '34vw', lineHeight: 1, opacity: 0.045 }}
        >H</motion.div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[
            { type: 'rect', w: 44, h: 2, top: '30%', left: '20%', delay: 0, dur: 5 },
            { type: 'rect', w: 64, h: 1, top: '62%', left: '80%', delay: 1, dur: 7 },
            { type: 'circle', size: 9, top: '24%', left: '70%', delay: 0.5, dur: 4 },
            { type: 'circle', size: 13, top: '76%', left: '14%', delay: 2, dur: 6 },
            { type: 'diamond', size: 12, top: '40%', left: '86%', delay: 1.5, dur: 5 },
            { type: 'diamond', size: 10, top: '65%', left: '34%', delay: 0.8, dur: 4.5 },
            { type: 'rect', w: 32, h: 2, top: '14%', left: '40%', delay: 2.5, dur: 6 },
            { type: 'circle', size: 17, top: '85%', left: '60%', delay: 1.2, dur: 5.5 },
          ].map((s, i) => (
            <motion.div key={i}
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: s.dur, delay: s.delay, ease: "easeInOut" }}
              className="absolute border border-[#c9a96e]"
              style={{
                top: s.top, left: s.left,
                width: s.type === 'rect' ? s.w : s.size,
                height: s.type === 'rect' ? s.h : s.size,
                borderRadius: s.type === 'circle' ? '50%' : 0,
                transform: s.type === 'diamond' ? 'rotate(45deg)' : 'none',
                background: s.type === 'rect' ? '#c9a96e' : 'transparent',
                borderWidth: s.type === 'rect' ? 0 : 1,
                opacity: 0.11,
              }}
            />
          ))}
        </div>

        {/* Floating gold micro-particles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[
            { size: 3, top: '15%', left: '55%', dur: 6, delay: 0 },
            { size: 2, top: '35%', left: '75%', dur: 8, delay: 1 },
            { size: 4, top: '55%', left: '45%', dur: 5, delay: 2 },
            { size: 2, top: '70%', left: '65%', dur: 7, delay: 0.5 },
            { size: 3, top: '25%', left: '85%', dur: 9, delay: 1.5 },
            { size: 2, top: '80%', left: '30%', dur: 6, delay: 2.5 },
            { size: 4, top: '45%', left: '90%', dur: 7, delay: 3 },
            { size: 2, top: '10%', left: '30%', dur: 8, delay: 0.8 },
            { size: 3, top: '50%', left: '18%', dur: 7.5, delay: 1.3 },
            { size: 2, top: '88%', left: '72%', dur: 6.5, delay: 2.1 },
          ].map((p, i) => (
            <motion.div key={i}
              animate={{ y: [0, -22, 0], opacity: [0.12, 0.45, 0.12] }}
              transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
              className="absolute rounded-full"
              style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: GOLD }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col" style={{ minHeight: '100dvh' }}>
          <div className="h-24 shrink-0" />

          <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 py-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                className="flex items-center gap-4 mb-8">
                <div className="w-14 h-[2px] bg-[#c9a96e] opacity-80" />
                <span className="text-[#c9a96e] text-[10px] tracking-[0.45em] uppercase font-medium">THAMEL · KATHMANDU · NEPAL</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
                className="font-serif text-[#111827] leading-[1.05] mb-7"
                style={{ fontSize: "clamp(3rem, 5.5vw, 5.8rem)" }}
              >
                Where Nepalese<br />
                Hospitality Meets<br />
                <span className="italic text-gradient-gold">Timeless Luxury</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
                className="font-serif text-lg md:text-xl text-[#111827]/50 italic mb-12"
              >
                Hotel Thamel Park &amp; Spa — A refined escape in the heart of Kathmandu
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button asChild data-testid="hero-btn-book"
                  className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-12 py-7 h-auto tracking-widest uppercase text-xs shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Book Your Stay</Link>
                </Button>
                <Button asChild data-testid="hero-btn-explore" variant="outline"
                  className="rounded-none border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white px-12 py-7 h-auto tracking-widest uppercase text-xs bg-transparent transition-all">
                  <Link href="/rooms">Explore Rooms</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                className="flex flex-wrap items-center gap-8 lg:gap-14 pt-8 border-t border-[#e8e8e8]"
              >
                {[
                  { val: <><AnimatedNumber value={84} /></>, label: "Rooms" },
                  { val: <><AnimatedNumber value={288} />K+</>, label: "Happy Guests" },
                  { val: <><AnimatedNumber value={25} />+</>, label: "Years Experience" },
                  { val: <><AnimatedNumber value={15} />K+</>, label: "Happy Customers" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-8 lg:gap-14">
                    <div>
                      <div className="font-serif text-2xl text-[#111827]">{s.val}</div>
                      <div className="text-[9px] uppercase tracking-widest text-[#9ca3af] mt-1">{s.label}</div>
                    </div>
                    {i < 3 && <div className="hidden sm:block w-px h-8 bg-[#e8e8e8]" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* BOOKING BAR */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
            className="shrink-0 bg-white border-t-2 border-[#c9a96e]/20 shadow-[0_-8px_40px_rgba(0,0,0,0.06)]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Check In */}
              <div className="flex-1 px-8 py-7 border-b md:border-b-0 md:border-r border-[#f0f0f0] focus-within:bg-[#fdf9f4] transition-colors" data-testid="booking-checkin">
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                  <div className="w-full">
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-semibold mb-1.5" style={{ color: GOLD }}>Check In</label>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent border-none p-0 text-sm font-medium text-[#111827] focus:outline-none cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* Check Out */}
              <div className="flex-1 px-8 py-7 border-b md:border-b-0 md:border-r border-[#f0f0f0] focus-within:bg-[#fdf9f4] transition-colors" data-testid="booking-checkout">
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                  <div className="w-full">
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-semibold mb-1.5" style={{ color: GOLD }}>Check Out</label>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={checkIn}
                      className="w-full bg-transparent border-none p-0 text-sm font-medium text-[#111827] focus:outline-none cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* Room Type */}
              <div className="flex-1 px-8 py-7 border-b md:border-b-0 md:border-r border-[#f0f0f0] hover:bg-[#fdf9f4] cursor-pointer transition-colors relative"
                onClick={() => { setShowRoomDropdown(!showRoomDropdown); setShowGuestDropdown(false); }}
                data-testid="booking-room">
                <div className="flex items-center gap-4">
                  <Key className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                  <div className="w-full">
                    <div className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-1.5" style={{ color: GOLD }}>Room Type</div>
                    <div className="text-sm font-medium text-[#111827] truncate">{roomType}</div>
                  </div>
                </div>
                <AnimatePresence>
                  {showRoomDropdown && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute bottom-full left-0 w-full bg-white shadow-2xl border border-[#f0f0f0] mb-1 py-2 z-50"
                      onClick={(e) => e.stopPropagation()}>
                      {[
                        { name: "Super Deluxe Twin", price: "$60/night" },
                        { name: "Super Deluxe Room", price: "$60/night" },
                        { name: "Family Room", price: "$55/night" },
                        { name: "Standard Deluxe Room", price: "$50/night" },
                      ].map(rt => (
                        <div key={rt.name} className="px-8 py-3.5 hover:bg-[#faf8f4] cursor-pointer flex justify-between items-center"
                          onClick={() => { setRoomType(rt.name); setShowRoomDropdown(false); }}>
                          <span className="text-sm font-medium text-[#111827]">{rt.name}</span>
                          <span className="text-xs" style={{ color: GOLD }}>{rt.price}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Guests */}
              <div className="flex-1 px-8 py-7 hover:bg-[#fdf9f4] cursor-pointer transition-colors relative"
                onClick={() => { setShowGuestDropdown(!showGuestDropdown); setShowRoomDropdown(false); }}
                data-testid="booking-guests">
                <div className="flex items-center gap-4">
                  <Users className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                  <div className="w-full">
                    <div className="text-[9px] uppercase tracking-[0.2em] font-semibold mb-1.5" style={{ color: GOLD }}>Guests</div>
                    <div className="text-sm font-medium text-[#111827]">{adults} Adults, {children} Children</div>
                  </div>
                </div>
                <AnimatePresence>
                  {showGuestDropdown && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute bottom-full left-0 right-0 md:right-auto md:w-80 bg-white shadow-2xl border border-[#f0f0f0] mb-1 p-6 z-50 cursor-default"
                      onClick={(e) => e.stopPropagation()}>
                      {[
                        { label: "Adults", sub: "Ages 13+", val: adults, set: setAdults, min: 1 },
                        { label: "Children", sub: "Ages 0–12", val: children, set: setChildren, min: 0 },
                      ].map((g) => (
                        <div key={g.label} className="flex items-center justify-between mb-5">
                          <div>
                            <div className="text-sm font-medium text-[#111827]">{g.label}</div>
                            <div className="text-xs text-[#9ca3af]">{g.sub}</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <button onClick={() => g.set(Math.max(g.min, g.val - 1))}
                              className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-4 text-center text-sm font-medium">{g.val}</span>
                            <button onClick={() => g.set(g.val + 1)}
                              className="w-8 h-8 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <Button className="w-full rounded-none bg-[#111827] text-white hover:bg-[#c9a96e] mt-2"
                        onClick={(e) => { e.stopPropagation(); setShowGuestDropdown(false); }}>Done</Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* CTA */}
              <div className="flex items-stretch shrink-0">
                <Button onClick={handleSearch} data-testid="booking-submit"
                  className="w-full md:w-auto rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] uppercase tracking-widest text-xs px-12 min-h-[5.5rem] h-full shadow-none transition-colors">
                  Search Availability
                </Button>
              </div>
            </div>
            {bookingError && (
              <div className="px-8 py-2 text-red-500 text-xs border-t border-red-100 bg-red-50">{bookingError}</div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER ── */}
      <SectionDivider />

      {/* ══════════════════════════════════
          SECTION 2: HOTEL EXPERIENCE
      ══════════════════════════════════ */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* Left: Rich Animated Visual Panel */}
          <div className="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-center py-32 lg:py-0"
            style={{ background: 'linear-gradient(145deg, #fdf8f0 0%, #f5ead8 50%, #ede0c4 100%)' }}>

            {/* Diagonal stripe texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(201,169,110,0.04) 28px, rgba(201,169,110,0.04) 29px)'
            }} />

            {/* Large decorative number */}
            <div className="absolute top-6 right-8 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: '12rem', color: GOLD, opacity: 0.07 }}>25</div>

            {/* Animated sweeping horizontal lines */}
            {[20, 50, 80].map((top, i) => (
              <motion.div key={i}
                animate={{ x: ['-100%', '220%'] }}
                transition={{ duration: 16 + i * 5, repeat: Infinity, ease: 'linear' }}
                className="absolute h-[1px] w-[180px] z-0"
                style={{ top: `${top}%`, background: `linear-gradient(90deg, transparent, ${GOLD}30, transparent)` }}
              />
            ))}

            {/* Floating geometric shapes */}
            {[
              { size: 200, op: 0.06, dur: 35, dir: 1 },
              { size: 140, op: 0.1, dur: -28, dir: -1 },
              { size: 80, op: 0.15, dur: 22, dir: 1 },
            ].map((c, i) => (
              <motion.div key={i}
                animate={{ rotate: c.dir * 360 }}
                transition={{ duration: Math.abs(c.dur), repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border border-dashed"
                style={{ width: c.size, height: c.size, borderColor: GOLD, opacity: c.op }}
              />
            ))}

            {/* Gold particle dots */}
            {[
              { size: 4, top: '20%', left: '15%', dur: 5, delay: 0 },
              { size: 3, top: '70%', left: '80%', dur: 7, delay: 1 },
              { size: 5, top: '40%', left: '88%', dur: 6, delay: 0.5 },
              { size: 3, top: '80%', left: '20%', dur: 8, delay: 2 },
              { size: 4, top: '15%', left: '60%', dur: 6.5, delay: 1.5 },
            ].map((p, i) => (
              <motion.div key={i}
                animate={{ y: [0, -18, 0], opacity: [0.2, 0.55, 0.2] }}
                transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
                className="absolute rounded-full"
                style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: GOLD }}
              />
            ))}

            {/* Premium floating card */}
            <motion.div
              initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="relative z-10 bg-white p-10 max-w-sm w-full mx-6 border-t-4 border-[#c9a96e]"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.10), 0 4px 20px rgba(201,169,110,0.12)' }}
            >
              {/* Corner accents */}
              <div className="absolute bottom-5 right-5 w-5 h-[1px]" style={{ background: GOLD, opacity: 0.3 }} />
              <div className="absolute bottom-5 right-5 w-[1px] h-5" style={{ background: GOLD, opacity: 0.3 }} />

              <div className="text-[9px] tracking-[0.28em] uppercase mb-6 font-semibold" style={{ color: GOLD }}>Hotel Thamel Park &amp; Spa</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-7xl" style={{ color: GOLD }}>25</span>
                <span className="font-serif text-4xl" style={{ color: GOLD }}>+</span>
              </div>
              <div className="text-sm font-medium text-[#111827] mb-8 uppercase tracking-widest text-[10px]">Years of Hospitality Excellence</div>

              <div className="space-y-3.5">
                {[
                  { icon: Star, label: "Guest Rating", val: "4.9 ★" },
                  { icon: Users, label: "Total Guests", val: "15,000+" },
                  { icon: Key, label: "Rooms", val: "84" },
                  { icon: Wifi, label: "Services", val: "Premium" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center pb-3.5 border-b border-[#f5f5f5]">
                    <div className="flex items-center gap-3 text-[#4b5563] text-sm">
                      <row.icon className="w-4 h-4" style={{ color: GOLD }} />
                      {row.label}
                    </div>
                    <div className="font-medium text-[#111827] text-sm">{row.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.28em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>HOTEL EXPERIENCE</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-10 leading-tight">
                Where Nepalese Warmth<br />Meets Modern Luxury
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                Nestled in the vibrant center of Kathmandu, Hotel Thamel Park &amp; Spa offers a rare combination of bustling city access and tranquil retreat. We redefine luxury hospitality by blending modern comfort with authentic Nepalese warmth.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-14 leading-relaxed font-light">
                From premium accommodations to our dedicated wellness spa, every detail is crafted to provide an unparalleled experience for the discerning traveler.
              </motion.p>

              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
                {[
                  { icon: Star, title: "Luxury", desc: "Impeccably appointed rooms" },
                  { icon: Sparkles, title: "Wellness", desc: "World-class spa & treatments" },
                  { icon: UtensilsCrossed, title: "Dining", desc: "Authentic Korean & international" },
                  { icon: MapPin, title: "Heritage", desc: "25 years of Thamel tradition" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}
                    whileHover={{ x: 4 }} transition={{ duration: 0.25 }}
                    className="bg-white border border-[#f0f0f0] border-l-4 p-6 shadow-sm hover:shadow-md hover:border-l-[#c9a96e] transition-all cursor-pointer"
                    style={{ borderLeftColor: GOLD }}>
                    <item.icon className="w-5 h-5 mb-3" style={{ color: GOLD }} />
                    <h4 className="font-serif text-lg text-[#111827] mb-1">{item.title}</h4>
                    <p className="text-[#4b5563] text-sm font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href="/about" className="inline-flex items-center font-serif italic text-xl group transition-colors hover:opacity-70" style={{ color: GOLD }}>
                  Discover Our Story <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER ── */}
      <SectionDivider />

      {/* ══════════════════════════════════
          SECTION 3: KOREAN DINING
      ══════════════════════════════════ */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.28em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>CULINARY JOURNEY</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-10 leading-tight">
                Authentic Korean<br />Cuisine
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                Experience the finest Korean dining in Kathmandu at our signature Garden View Restaurant. We pride ourselves on delivering authentic flavors using traditional recipes passed down through generations.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-12 leading-relaxed font-light">
                Surrounded by lush garden views, whether you're craving classic BBQ, hearty stews, or delicate banchan — every meal is a cultural journey.
              </motion.p>

              <motion.div variants={stagger} className="grid grid-cols-2 gap-y-4 gap-x-10 mb-14">
                {["Authentic BBQ", "Private Dining", "Garden Setting", "Premium Soju", "Traditional Recipes", "Open Daily"].map((service, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                    <span className="text-[#111827] font-medium text-sm">{service}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button asChild variant="outline"
                  className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none uppercase tracking-widest text-xs px-10 py-6 h-auto">
                  <Link href="/restaurant">View Menu</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Korean Restaurant Animated Visual */}
          <div className="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-center py-32 lg:py-0"
            style={{ background: 'linear-gradient(150deg, #fdf6e8 0%, #f7edcf 60%, #ede3bf 100%)' }}>

            {/* Korean-inspired geometric grid */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(201,169,110,0.07) 40px,rgba(201,169,110,0.07) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(201,169,110,0.07) 40px,rgba(201,169,110,0.07) 41px)"
            }} />

            {/* Corner L-brackets */}
            {[
              'top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'
            ].map((pos, idx) => (
              <div key={idx}>
                <div className={`absolute ${pos} w-8 h-[2px]`} style={{ background: GOLD, opacity: 0.25 }} />
                <div className={`absolute ${pos} w-[2px] h-8`} style={{ background: GOLD, opacity: 0.25 }} />
              </div>
            ))}

            {/* Decorative Korean character */}
            <div className="absolute top-8 right-10 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: '9rem', color: GOLD, opacity: 0.06 }}>餐</div>

            {/* Animated gold ring pulses */}
            {[180, 130, 80].map((size, i) => (
              <motion.div key={i}
                animate={{ scale: [1, 1.06, 1], opacity: [0.06, 0.12, 0.06] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
                className="absolute rounded-full border"
                style={{ width: size, height: size, borderColor: GOLD }}
              />
            ))}

            {/* Floating particles */}
            {[
              { size: 3, top: '18%', left: '14%', dur: 5.5, delay: 0 },
              { size: 4, top: '75%', left: '82%', dur: 7, delay: 1 },
              { size: 3, top: '55%', left: '88%', dur: 6, delay: 2 },
              { size: 4, top: '25%', left: '78%', dur: 8, delay: 0.5 },
            ].map((p, i) => (
              <motion.div key={i}
                animate={{ y: [0, -16, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
                className="absolute rounded-full"
                style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: GOLD }}
              />
            ))}

            {/* Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="relative z-10 bg-white p-12 max-w-sm w-full mx-6 border-t-4 text-center"
              style={{ borderTopColor: GOLD, boxShadow: '0 30px 80px rgba(0,0,0,0.10), 0 4px 20px rgba(201,169,110,0.1)' }}
            >
              <div className="mx-auto w-16 h-16 rounded-full border flex items-center justify-center mb-7" style={{ borderColor: `${GOLD}40` }}>
                <UtensilsCrossed className="w-8 h-8" style={{ color: GOLD }} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif italic text-4xl mb-1" style={{ color: GOLD }}>Garden View</h3>
              <p className="text-sm font-medium text-[#111827] uppercase tracking-widest mb-8">Korean Restaurant</p>
              <div className="flex justify-center gap-5 mb-8">
                <span className="flex items-center gap-1.5 text-xs text-[#4b5563]"><Leaf className="w-3 h-3" style={{ color: GOLD }} /> Garden</span>
                <span className="flex items-center gap-1.5 text-xs text-[#4b5563]"><UtensilsCrossed className="w-3 h-3" style={{ color: GOLD }} /> Korean</span>
                <span className="flex items-center gap-1.5 text-xs text-[#4b5563]"><Sparkles className="w-3 h-3" style={{ color: GOLD }} /> Premium</span>
              </div>
              <div className="w-12 h-px mx-auto mb-6" style={{ background: GOLD, opacity: 0.3 }} />
              <div className="text-[9px] tracking-[0.28em] uppercase font-medium" style={{ color: GOLD }}>Est. 1999</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER — extra height between Dining and Lounge ── */}
      <div className="py-14 bg-white" />
      <SectionDivider />
      <div className="py-14 bg-white" />

      {/* ══════════════════════════════════
          SECTION 4: SKYZ LOUNGE
          Full dark navy — rooftop night
      ══════════════════════════════════ */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row-reverse min-h-screen">

          {/* Right: Warm Champagne Gold Visual Panel */}
          <div className="w-full lg:w-[58%] relative overflow-hidden flex items-center justify-center py-32 lg:py-0"
            style={{ background: 'linear-gradient(150deg, #fdf5e0 0%, #f5e4a8 45%, #edd898 100%)' }}>

            {/* Diagonal stripe texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 32px, rgba(160,120,64,0.05) 32px, rgba(160,120,64,0.05) 33px)'
            }} />

            {/* Warm ambient glow */}
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0.18, 0.08] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[20%] left-[30%] w-64 h-64 rounded-full pointer-events-none"
              style={{ background: '#c9a96e', filter: 'blur(80px)' }}
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[25%] right-[15%] w-44 h-44 rounded-full pointer-events-none"
              style={{ background: '#e8c87e', filter: 'blur(60px)' }}
            />

            {/* Floating gold particles */}
            {[
              { size: 4, top: '12%', left: '18%', dur: 6, delay: 0 },
              { size: 3, top: '28%', left: '78%', dur: 8, delay: 1 },
              { size: 5, top: '60%', left: '88%', dur: 5.5, delay: 0.5 },
              { size: 3, top: '75%', left: '22%', dur: 7, delay: 2 },
              { size: 4, top: '40%', left: '10%', dur: 6.5, delay: 1.5 },
              { size: 3, top: '85%', left: '65%', dur: 7.5, delay: 2.5 },
              { size: 4, top: '20%', left: '50%', dur: 5, delay: 3 },
            ].map((p, i) => (
              <motion.div key={i}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.55, 0.2] }}
                transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'easeInOut' }}
                className="absolute rounded-full"
                style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: '#a07840', opacity: 0.35 }}
              />
            ))}

            {/* Geometric floating rings */}
            {[160, 110, 70].map((size, i) => (
              <motion.div key={i}
                animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
                transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border border-dashed"
                style={{ width: size, height: size, borderColor: '#a07840', opacity: 0.1 + i * 0.04 }}
              />
            ))}

            {/* Kathmandu skyline silhouette — charcoal on gold */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around px-8 gap-3" style={{ height: '36%' }}>
              {[
                { h: '58%', w: '11%' }, { h: '82%', w: '17%' }, { h: '44%', w: '9%' },
                { h: '100%', w: '22%' }, { h: '68%', w: '13%' }, { h: '48%', w: '10%' },
                { h: '86%', w: '16%' }
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="rounded-t-[1px]"
                  style={{
                    height: b.h, width: b.w,
                    background: 'rgba(120,90,40,0.12)',
                    borderTop: '1px solid rgba(120,90,40,0.18)'
                  }}
                >
                  {i % 2 === 0 && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'radial-gradient(rgba(120,90,40,0.2) 1px, transparent 1px)',
                      backgroundSize: '8px 10px'
                    }} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Horizon line */}
            <div className="absolute bottom-[34%] left-0 right-0 h-[1px] pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(160,120,64,0.3) 40%, rgba(160,120,64,0.45) 50%, rgba(160,120,64,0.3) 60%, transparent 90%)' }} />

            {/* White card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }}
              className="relative z-10 bg-white p-12 max-w-md w-full mx-6 text-center border-t-4"
              style={{ borderTopColor: GOLD, boxShadow: '0 30px 80px rgba(120,90,40,0.15), 0 4px 20px rgba(201,169,110,0.12)' }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-[#f0f0f0]"
                style={{ boxShadow: '0 4px 16px rgba(201,169,110,0.2)' }}>
                <Coffee className="w-6 h-6" style={{ color: GOLD }} />
              </div>
              <h3 className="font-serif italic mt-4 text-[#111827]" style={{ fontSize: '4.5rem', lineHeight: 1 }}>Skyz</h3>
              <div className="text-[10px] tracking-[0.3em] text-[#6b7280] uppercase mb-6 mt-2 font-medium">Rooftop Lounge</div>
              <div className="w-14 h-px mx-auto mb-6" style={{ background: GOLD, opacity: 0.5 }} />
              <div className="text-xs text-[#6b7280] uppercase tracking-widest">Floor 8 · Open Daily · 4PM – 11PM</div>
              <div className="flex gap-3 justify-center mt-8">
                {["Cocktails", "Live Music", "Panoramic"].map(tag => (
                  <span key={tag} className="text-[9px] tracking-wider uppercase px-3 py-1.5 border"
                    style={{ color: GOLD, borderColor: `${GOLD}40` }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left: Content */}
          <div className="w-full lg:w-[42%] flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.28em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>LOUNGE &amp; BAR</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-3 leading-tight">Skyz Lounge</motion.h2>
              <motion.p variants={fadeInUp} className="font-serif italic text-xl mb-10" style={{ color: GOLD }}>
                Above the City. Above the Ordinary.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                Elevate your evening at Skyz Lounge. Perched on our rooftop, experience breathtaking panoramic views of the Kathmandu skyline as the sun sets over the mountains.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-12 leading-relaxed font-light">
                Our master mixologists craft signature cocktails while live acoustic and jazz performances create an unforgettable ambiance.
              </motion.p>

              <motion.div variants={stagger} className="space-y-6 mb-12">
                {[
                  { icon: Coffee, title: "Signature Cocktails", sub: "Crafted by master mixologists" },
                  { icon: Star, title: "Panoramic Views", sub: "360° Kathmandu skyline" },
                  { icon: Wind, title: "Live Entertainment", sub: "Jazz & acoustic evenings" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                    <item.icon className="w-5 h-5 mt-1 shrink-0" style={{ color: GOLD }} />
                    <div>
                      <div className="font-medium text-[#111827] mb-1">{item.title}</div>
                      <div className="text-sm text-[#4b5563] font-light">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-12">
                {["Rooftop", "Cocktails", "Sunset Views", "Live Music"].map((tag, i) => (
                  <span key={tag}>
                    <span className="text-xs uppercase tracking-widest text-[#4b5563]">{tag}</span>
                    {i < 3 && <span className="ml-3" style={{ color: GOLD }}>·</span>}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button asChild className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-10 py-6 h-auto tracking-widest uppercase text-xs">
                  <Link href="/contact">Reserve Your Table</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER ── */}
      <SectionDivider />

      {/* ══════════════════════════════════
          SECTION 5: SPA & WELLNESS
      ══════════════════════════════════ */}
      <section style={{ background: '#f8f8f8' }}>
        <div className="flex flex-col lg:flex-row min-h-screen">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.28em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>SPA &amp; WELLNESS</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-10 leading-tight">
                Restore. Renew. Revive.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                Discover an oasis of tranquility within the city. Our premium Spa offers a holistic approach to wellness, combining ancient therapeutic traditions with modern luxury treatments.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-12 leading-relaxed font-light">
                Let our expert therapists guide you on a journey of complete relaxation, restoring balance to your mind, body, and spirit.
              </motion.p>

              <motion.div variants={stagger} className="grid grid-cols-2 gap-y-5 gap-x-10 mb-14">
                {["Sauna", "Steam Therapy", "Relaxation Area", "Massage Therapy", "Wellness Packages", "Couples Package"].map((service, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                    <span className="text-[#111827] font-medium text-sm">{service}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button asChild variant="outline"
                  className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none uppercase tracking-widest text-xs px-10 py-6 h-auto">
                  <Link href="/spa">Explore Spa</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Animated Wellness Mandala */}
          <div className="w-full lg:w-1/2 bg-white relative overflow-hidden flex items-center justify-center py-32 lg:py-0 border-l border-[#f0f0f0]">
            <div className="relative w-full h-full flex items-center justify-center min-h-[560px]">
              {/* Concentric circles */}
              {[
                { size: 420, op: 0.05, speed: 40, dir: 1 },
                { size: 340, op: 0.09, speed: 35, dir: -1 },
                { size: 260, op: 0.13, speed: 28, dir: 1 },
                { size: 180, op: 0.18, speed: 22, dir: -1 },
                { size: 100, op: 0.26, speed: 16, dir: 1 },
              ].map((c, i) => (
                <motion.div key={i}
                  animate={{ rotate: c.dir * 360 }}
                  transition={{ duration: c.speed, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full border border-dashed"
                  style={{ width: c.size, height: c.size, borderColor: GOLD, opacity: c.op }}
                />
              ))}

              {/* Center pulsing icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-22 h-22 bg-white rounded-full flex items-center justify-center border border-[#f0f0f0] z-10"
                style={{ width: 88, height: 88, boxShadow: `0 0 0 8px white, 0 0 0 10px ${GOLD}15, 0 10px 30px rgba(0,0,0,0.07)` }}
              >
                <Sparkles className="w-9 h-9" style={{ color: GOLD }} />
              </motion.div>

              {/* Ambient wellness glow */}
              <div className="absolute w-40 h-40 rounded-full pointer-events-none"
                style={{ background: GOLD, filter: 'blur(80px)', opacity: 0.05 }} />

              {/* Floating italic words */}
              {[
                { text: "Serenity", pos: "top-[18%] left-[16%]" },
                { text: "Wellness", pos: "bottom-[18%] right-[14%]" },
                { text: "Balance", pos: "top-[28%] right-[12%]" },
                { text: "Peace", pos: "bottom-[28%] left-[12%]" },
              ].map((w, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className={`absolute font-serif italic text-3xl text-[#111827] opacity-[0.07] ${w.pos}`}>
                  {w.text}
                </motion.div>
              ))}

              <Leaf className="absolute top-10 left-10 w-9 h-9 text-[#c9a96e] opacity-[0.09]" />
              <Wind className="absolute bottom-10 right-10 w-10 h-10 text-[#c9a96e] opacity-[0.09]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER ── */}
      <SectionDivider />

      {/* ══════════════════════════════════
          SECTION 6: NEPAL HERITAGE & HOSPITALITY
      ══════════════════════════════════ */}
      <section className="py-48 bg-white relative overflow-hidden">
        {/* Warm animated background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(201,169,110,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        {/* Large mandala rings */}
        {[600, 460, 320].map((size, i) => (
          <motion.div key={i}
            animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 right-[-20%] -translate-y-1/2 rounded-full border border-dashed pointer-events-none"
            style={{ width: size, height: size, borderColor: GOLD, opacity: 0.04 + i * 0.02 }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-20">
            <motion.div variants={fadeInUp} className="w-16 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
            <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.3em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>NEPAL HERITAGE &amp; HOSPITALITY</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-5">
              25 Years of Thamel Hospitality
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-serif italic text-xl text-[#4b5563] mb-8">
              Where ancient heritage meets modern luxury
            </motion.p>
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto space-y-4">
              <p className="text-[#4b5563] font-light leading-relaxed">
                For over two decades, Hotel Thamel Park &amp; Spa has stood as a beacon of luxury in Kathmandu's historic center. Our legacy is built on the foundation of genuine Nepalese hospitality — <em>Atithi Devo Bhava</em> — guest is god.
              </p>
              <p className="text-[#4b5563] font-light leading-relaxed">
                We believe that true luxury lies in the warmth of our welcome, the cultural richness of our surroundings, and our unwavering commitment to exceeding every expectation.
              </p>
            </motion.div>
          </motion.div>

          {/* Heritage feature panels */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Heart, title: "Nepalese Warmth", desc: "Rooted in the ancient Nepalese tradition of Atithi Devo Bhava — every guest is treated as a divine gift.", accent: '#fdf8f0' },
              { icon: MapPin, title: "Thamel Spirit", desc: "Located in Kathmandu's most vibrant cultural district, steps from ancient temples, markets, and mountain vistas.", accent: '#f8fdf0' },
              { icon: Star, title: "Cultural Fusion", desc: "Where the best of Korean dining meets Nepalese hospitality and global luxury under one distinguished roof.", accent: '#fdf0f8' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(201,169,110,0.12)' }}
                transition={{ duration: 0.3 }}
                className="px-8 py-12 text-center border border-[#f0f0f0] cursor-pointer relative overflow-hidden"
                style={{ background: item.accent }}
              >
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                  style={{ background: GOLD, filter: 'blur(50px)', opacity: 0.04 }} />
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-[#ebebeb] bg-white">
                  <item.icon className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <h4 className="font-serif text-xl text-[#111827] mb-4">{item.title}</h4>
                <p className="text-sm text-[#4b5563] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Heritage marquee strip */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="flex items-center justify-center gap-5 overflow-hidden">
            {["Kathmandu", "◆", "Thamel", "◆", "Himalayas", "◆", "Culture", "◆", "Heritage", "◆", "Luxury", "◆", "Nepal"].map((item, i) => (
              <span key={i} className={item === "◆"
                ? "text-[#c9a96e] text-[10px] opacity-40"
                : "text-[9px] uppercase tracking-[0.25em] text-[#9ca3af] font-medium"}>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LUXURY DIVIDER ── */}
      <SectionDivider />

      {/* ══════════════════════════════════
          SECTION 7: ROOMS / ACCOMMODATION
      ══════════════════════════════════ */}
      <section className="py-48" style={{ background: '#f8f8f8' }}>
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-20">
            <motion.div variants={fadeInUp} className="w-16 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
            <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: GOLD }}>ACCOMMODATION</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827]">Luxurious Retreats</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(() => {
              const roomSizes = ['32m²', '35m²', '52m²', '28m²'];
              const roomGradients = [
                'linear-gradient(135deg, #fdf8f0 0%, #f0e6d0 100%)',
                'linear-gradient(135deg, #f0f5f8 0%, #dbe8f0 100%)',
                'linear-gradient(135deg, #f5f0f8 0%, #e8d8f0 100%)',
                'linear-gradient(135deg, #f0f8f0 0%, #d8ecd8 100%)',
              ];
              return [
                { name: "Super Deluxe Twin", price: "60", guests: 2, desc: "Elegant retreat with twin beds and modern comfort, bathed in natural light with garden or city views.", amenities: [{ i: Wifi, l: "Wifi" }, { i: Tv, l: "TV" }, { i: Wind, l: "AC" }, { i: Coffee, l: "Coffee" }] },
                { name: "Super Deluxe Room", price: "60", guests: 2, desc: "Spacious comfort with a premium king bed setup, plush linens, and refined interiors for the discerning traveler.", amenities: [{ i: Wifi, l: "Wifi" }, { i: Tv, l: "TV" }, { i: Wind, l: "AC" }, { i: Coffee, l: "Coffee" }] },
                { name: "Family Room", price: "55", guests: 4, desc: "Perfect for families, featuring interconnected living spaces designed for both privacy and togetherness.", amenities: [{ i: Wifi, l: "Wifi" }, { i: Tv, l: "TV" }, { i: Wind, l: "AC" }, { i: Coffee, l: "Coffee" }] },
                { name: "Standard Deluxe Room", price: "50", guests: 2, desc: "Thoughtfully designed with all essential comforts, offering a refined stay for the value-conscious guest.", amenities: [{ i: Wifi, l: "Wifi" }, { i: Tv, l: "TV" }, { i: Wind, l: "AC" }, { i: Coffee, l: "Coffee" }] },
              ].map((room, i) => (
                <motion.div key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.09), 0 4px 20px rgba(201,169,110,0.1)' }}
                  transition={{ duration: 0.35 }}
                  className="bg-white border border-[#f0f0f0] overflow-hidden flex flex-col group cursor-pointer"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                >
                  {/* Visual header panel */}
                  <div className="h-40 relative overflow-hidden flex items-center justify-center"
                    style={{ background: roomGradients[i] }}>
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(201,169,110,0.04) 24px, rgba(201,169,110,0.04) 25px)'
                    }} />
                    <span className="font-serif select-none pointer-events-none" style={{ fontSize: '7rem', color: GOLD, opacity: 0.07, lineHeight: 1 }}>{i + 1}</span>
                    <div className="absolute top-3 left-3 text-[8px] tracking-widest uppercase font-medium" style={{ color: GOLD }}>{roomSizes[i]}</div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${GOLD}, #a07840)` }} />
                  </div>

                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-serif text-[#111827] max-w-[60%] leading-tight">{room.name}</h3>
                      <div className="text-right">
                        <div className="text-[9px] tracking-widest text-[#9ca3af] uppercase mb-1">From</div>
                        <div className="font-serif text-3xl" style={{ color: GOLD }}>${room.price}</div>
                        <div className="text-[9px] tracking-widest text-[#9ca3af] uppercase mt-1">Per Night</div>
                      </div>
                    </div>

                    <p className="text-[#4b5563] text-sm font-light mb-8 flex-grow leading-relaxed">{room.desc}</p>

                    <div className="grid grid-cols-4 gap-3 mb-8">
                      {room.amenities.map((am, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-3 bg-white border border-[#f0f0f0] hover:border-[#c9a96e] transition-colors">
                          <am.i className="w-4 h-4 mb-2" style={{ color: GOLD }} />
                          <span className="text-[9px] uppercase tracking-widest font-medium text-[#4b5563]">{am.l}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[#f0f0f0]">
                      <div className="flex items-center gap-2 text-[#4b5563] text-sm uppercase tracking-widest font-medium">
                        <Users className="w-4 h-4" style={{ color: GOLD }} /> {room.guests} Guests
                      </div>
                      <Button asChild variant="outline"
                        className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-none uppercase tracking-widest text-xs px-8 py-5 h-auto transition-colors">
                        <Link href="/contact">Book This Room</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 8: TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="py-48 bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-20">
            <motion.div variants={fadeInUp} className="w-16 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
            <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: GOLD }}>GUEST EXPERIENCES</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827]">What Our Guests Say</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", country: "United Kingdom", text: "An absolute oasis in the middle of bustling Thamel. The attention to detail, luxury amenities, and the incredible Korean restaurant made our stay unforgettable." },
              { name: "Michael Chen", country: "Singapore", text: "The Skyz Lounge offers the best sunset views in Kathmandu. Combined with the immaculate rooms and warm Nepalese hospitality, it's a 5-star experience." },
              { name: "Elena Rossi", country: "Italy", text: "We ended our trekking journey here and the spa treatments were heavenly. Pure luxury, perfectly clean, and the staff anticipates your every need." },
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.07)' }}
                transition={{ duration: 0.3 }}
                className="bg-white p-10 border border-[#f0f0f0] shadow-sm relative pt-16 cursor-pointer"
              >
                <div className="absolute top-8 left-10 font-serif text-[4.5rem] leading-none" style={{ color: GOLD, opacity: 0.18 }}>"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />)}
                </div>
                <p className="text-[#4b5563] italic font-serif text-lg leading-relaxed mb-8">"{review.text}"</p>
                <div>
                  <div className="font-medium text-[#111827] uppercase tracking-widest text-xs mb-1">{review.name}</div>
                  <div className="text-xs" style={{ color: GOLD }}>{review.country}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 9: LOCATION
      ══════════════════════════════════ */}
      <section className="py-44" style={{ background: '#f8f8f8' }}>
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.3em] uppercase mb-5 font-semibold" style={{ color: GOLD }}>LOCATION</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827] mb-10 leading-tight">
                The Heart of Kathmandu
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#4b5563] text-lg mb-12 leading-relaxed font-light">
                Perfectly situated in Thamel, our hotel offers peaceful luxury just steps away from Kathmandu's most vibrant cultural sites, shopping, and entertainment.
              </motion.p>
              <motion.div variants={stagger} className="space-y-4">
                {[
                  { icon: Plane, title: "Tribhuvan International Airport", sub: "5.5 km / 25 mins drive" },
                  { icon: MapPin, title: "Kathmandu Durbar Square", sub: "1.8 km / 10 mins walk" },
                  { icon: Mountain, title: "Swayambhunath Stupa", sub: "2.5 km / 15 mins drive" },
                ].map((loc, i) => (
                  <motion.div key={i} variants={fadeInUp}
                    whileHover={{ x: 4 }} transition={{ duration: 0.25 }}
                    className="flex items-start gap-5 p-6 bg-white border border-[#f0f0f0] cursor-pointer hover:border-[#c9a96e] transition-colors">
                    <loc.icon className="w-6 h-6 shrink-0 mt-0.5" style={{ color: GOLD }} />
                    <div>
                      <div className="font-medium text-[#111827] mb-1">{loc.title}</div>
                      <div className="text-sm text-[#4b5563] font-light">{loc.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="h-[600px] w-full border-4 border-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                <MapPin className="w-12 h-12 opacity-30" style={{ color: GOLD }} />
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Thamel+Kathmandu+Nepal&output=embed"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 10: FAQ
      ══════════════════════════════════ */}
      <section className="py-44 bg-white">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16">
            <motion.div variants={fadeInUp} className="w-16 h-[1px] mx-auto mb-8" style={{ background: GOLD }} />
            <motion.p variants={fadeInUp} className="text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold" style={{ color: GOLD }}>INFORMATION</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-[#111827]">Frequently Asked Questions</motion.h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              { q: "What are the check-in and check-out times?", a: "Check-in time is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in and late check-out are subject to availability." },
              { q: "Do you offer airport transfer services?", a: "Yes, we offer premium airport pickup and drop-off services. Please contact our concierge at least 24 hours prior to your arrival to arrange this." },
              { q: "Is the Korean Restaurant open to non-guests?", a: "Absolutely. The Garden View Korean Restaurant and Skyz Lounge are both open to the public. We recommend making a reservation in advance." },
              { q: "Do you have spa facilities?", a: "Yes, our luxury Spa & Wellness center offers a variety of treatments including massages, sauna, and steam therapy. Advance booking is recommended." },
              { q: "Is parking available at the hotel?", a: "We provide secure, complimentary parking for all our registered guests." },
              { q: "What is your cancellation policy?", a: "Our standard cancellation policy requires 48 hours notice prior to arrival. Specific rates or special offers may have different conditions." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-[#f0f0f0] bg-white px-8">
                <AccordionTrigger className="text-left font-serif text-lg text-[#111827] hover:no-underline hover:text-[#c9a96e] py-7">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#4b5563] text-base font-light pb-7 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 11: BOOKING CTA
      ══════════════════════════════════ */}
      <section className="py-44 relative overflow-hidden border-t border-[#f0f0f0]"
        style={{ background: 'linear-gradient(145deg, #fdf8f0 0%, #f5ead8 100%)' }}>
        {/* Background mandala */}
        {[500, 360, 220].map((size, i) => (
          <motion.div key={i}
            animate={{ rotate: (i % 2 === 0 ? 1 : -1) * 360 }}
            transition={{ duration: 70 + i * 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed pointer-events-none"
            style={{ width: size, height: size, borderColor: GOLD, opacity: 0.06 + i * 0.02 }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-14 lg:px-20 text-center max-w-3xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp}
              className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-10 border border-[#f0f0f0]"
              style={{ boxShadow: `0 0 0 8px rgba(201,169,110,0.08)` }}>
              <Key className="w-6 h-6" style={{ color: GOLD }} />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-[#111827] mb-6 leading-tight">
              Begin Your Journey<br /><span className="italic" style={{ color: GOLD }}>to Luxury</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#4b5563] font-light mb-14">
              Experience the pinnacle of hospitality in the heart of Kathmandu.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-5">
              <Button asChild
                className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-14 py-8 h-auto tracking-widest uppercase text-xs shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Book Your Stay</Link>
              </Button>
              <Button asChild variant="outline"
                className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none bg-transparent uppercase tracking-widest text-xs px-14 py-8 h-auto transition-all">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
