import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, MapPin, Coffee, Wifi, Users, ChevronRight, Wind, 
  Tv, Calendar, Heart, Leaf, Key, UtensilsCrossed, Sparkles, CheckCircle,
  Plus, Minus, Plane
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function AnimatedNumber({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    
    const step = end > 100 ? Math.ceil(end / 60) : 1;
    
    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, end > 100 ? 16 : incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
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
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* Layer 1: Dot grid */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#111827 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {/* Layer 2: Gold Orbs */}
        <motion.div 
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#c9a96e] rounded-full blur-[140px] opacity-[0.07] pointer-events-none z-0" 
        />
        <motion.div 
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#c9a96e] rounded-full blur-[140px] opacity-[0.07] pointer-events-none z-0" 
        />

        {/* Layer 3: Animated Thin Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {[...Array(5)].map((_, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -100, y: -100 }}
                 animate={{ opacity: 0.08, x: 0, y: 0 }}
                 transition={{ delay: i * 0.3, duration: 1.5, ease: "easeOut" }}
                 className="absolute bg-[#c9a96e] w-[1px] h-[200px]"
                 style={{ 
                   top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, 
                   transform: 'rotate(45deg)', transformOrigin: 'top left' 
                 }}
              />
           ))}
        </div>

        {/* Layer 4: Decorative "H" */}
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-[5%] -translate-y-1/2 pointer-events-none select-none z-0 font-serif text-[#c9a96e] opacity-[0.05]"
          style={{ fontSize: '35vw', lineHeight: 1 }}
        >
          H
        </motion.div>

        {/* Layer 5: Floating Architectural Shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           {[
             { type: 'rect', w: 40, h: 2, top: '30%', left: '20%', delay: 0, dur: 5 },
             { type: 'rect', w: 60, h: 1, top: '60%', left: '80%', delay: 1, dur: 7 },
             { type: 'circle', size: 8, top: '25%', left: '70%', delay: 0.5, dur: 4 },
             { type: 'circle', size: 12, top: '75%', left: '15%', delay: 2, dur: 6 },
             { type: 'diamond', size: 12, top: '40%', left: '85%', delay: 1.5, dur: 5 },
             { type: 'diamond', size: 10, top: '65%', left: '35%', delay: 0.8, dur: 4.5 },
             { type: 'rect', w: 30, h: 2, top: '15%', left: '40%', delay: 2.5, dur: 6 },
             { type: 'circle', size: 16, top: '85%', left: '60%', delay: 1.2, dur: 5.5 },
           ].map((shape, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: shape.dur, delay: shape.delay, ease: "easeInOut" }}
                className="absolute border border-[#c9a96e] opacity-[0.12]"
                style={{
                   top: shape.top, left: shape.left,
                   width: shape.type === 'rect' ? shape.w : shape.size,
                   height: shape.type === 'rect' ? shape.h : shape.size,
                   borderRadius: shape.type === 'circle' ? '50%' : 0,
                   transform: shape.type === 'diamond' ? 'rotate(45deg)' : 'none',
                   background: shape.type === 'rect' ? '#c9a96e' : 'transparent',
                   borderWidth: shape.type === 'rect' ? 0 : 1
                }}
              />
           ))}
        </div>

        {/* Flex content wrapper — gives proper vertical centering */}
        <div className="relative z-20 flex flex-col" style={{ minHeight: '100dvh' }}>

          {/* Spacer so content clears the fixed navbar */}
          <div className="h-24 shrink-0" />

          {/* Main content — fills remaining space and centres vertically */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 py-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#c9a96e] opacity-80" />
                <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-medium">THAMEL · KATHMANDU · NEPAL</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
                className="font-serif text-[#111827] leading-[1.06] mb-6"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
              >
                Where Nepalese<br />
                Hospitality Meets<br />
                <span className="italic text-gradient-gold">Timeless Luxury</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-lg md:text-xl text-[#111827]/55 italic mb-10"
              >
                Hotel Thamel Park &amp; Spa — A refined escape in the heart of Kathmandu
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-14">
                <Button asChild data-testid="hero-btn-book" className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-10 py-6 h-auto tracking-widest uppercase text-xs">
                  <Link href="/contact">Book Your Stay</Link>
                </Button>
                <Button asChild data-testid="hero-btn-explore" variant="outline" className="rounded-none border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white px-10 py-6 h-auto tracking-widest uppercase text-xs bg-transparent">
                  <Link href="/rooms">Explore Rooms</Link>
                </Button>
              </motion.div>

              {/* Stats — inline, below buttons */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-8 lg:gap-12 pt-8 border-t border-[#ebebeb]"
              >
                {[
                  { val: <><AnimatedNumber value={84} /></>, label: "Rooms" },
                  { val: <><AnimatedNumber value={15000} />+</>, label: "Happy Guests" },
                  { val: <><AnimatedNumber value={25} />+</>, label: "Years Experience" },
                  { val: <>Premium</>, label: "Spa & Wellness" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-8">
                    <div>
                      <div className="font-serif text-2xl text-[#111827]">{s.val}</div>
                      <div className="text-[9px] uppercase tracking-widest text-[#9ca3af] mt-1">{s.label}</div>
                    </div>
                    {i < 3 && <div className="hidden sm:block w-px h-8 bg-[#ebebeb]" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Booking bar — bottom of flex container, NOT absolute */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
            className="shrink-0 bg-white/95 backdrop-blur-sm border-t border-[#e5e7eb] shadow-[0_-6px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Check In */}
              <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r border-[#f0f0f0] focus-within:bg-[#faf8f4] transition-colors" data-testid="booking-checkin">
                <div className="flex items-center gap-4">
                  <Calendar className="text-[#c9a96e] w-5 h-5 shrink-0" />
                  <div className="w-full">
                    <label className="block text-[9px] uppercase tracking-widest text-[#c9a96e] font-semibold mb-1">Check In</label>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent border-none p-0 text-sm font-medium text-[#111827] focus:outline-none cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Check Out */}
              <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r border-[#f0f0f0] focus-within:bg-[#faf8f4] transition-colors" data-testid="booking-checkout">
                <div className="flex items-center gap-4">
                  <Calendar className="text-[#c9a96e] w-5 h-5 shrink-0" />
                  <div className="w-full">
                    <label className="block text-[9px] uppercase tracking-widest text-[#c9a96e] font-semibold mb-1">Check Out</label>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={checkIn}
                      className="w-full bg-transparent border-none p-0 text-sm font-medium text-[#111827] focus:outline-none cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Room Type */}
              <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r border-[#f0f0f0] hover:bg-[#faf8f4] cursor-pointer transition-colors relative"
                onClick={() => { setShowRoomDropdown(!showRoomDropdown); setShowGuestDropdown(false); }}
                data-testid="booking-room"
              >
                <div className="flex items-center gap-4">
                  <Key className="text-[#c9a96e] w-5 h-5 shrink-0" />
                  <div className="w-full">
                    <div className="text-[9px] uppercase tracking-widest text-[#c9a96e] font-semibold mb-1">Room Type</div>
                    <div className="text-sm font-medium text-[#111827] truncate">{roomType}</div>
                  </div>
                </div>
                <AnimatePresence>
                  {showRoomDropdown && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute bottom-full left-0 w-full bg-white shadow-xl border border-[#f0f0f0] mb-1 py-2 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {[
                        { name: "Super Deluxe Twin", price: "$60/night" },
                        { name: "Super Deluxe Room", price: "$60/night" },
                        { name: "Family Room", price: "$55/night" },
                        { name: "Standard Deluxe Room", price: "$50/night" },
                      ].map(rt => (
                        <div key={rt.name} className="px-6 py-3 hover:bg-[#f8f8f8] cursor-pointer flex justify-between items-center"
                          onClick={() => { setRoomType(rt.name); setShowRoomDropdown(false); }}>
                          <span className="text-sm font-medium text-[#111827]">{rt.name}</span>
                          <span className="text-xs text-[#c9a96e]">{rt.price}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Guests */}
              <div className="flex-1 px-6 py-5 hover:bg-[#faf8f4] cursor-pointer transition-colors relative"
                onClick={() => { setShowGuestDropdown(!showGuestDropdown); setShowRoomDropdown(false); }}
                data-testid="booking-guests"
              >
                <div className="flex items-center gap-4">
                  <Users className="text-[#c9a96e] w-5 h-5 shrink-0" />
                  <div className="w-full">
                    <div className="text-[9px] uppercase tracking-widest text-[#c9a96e] font-semibold mb-1">Guests</div>
                    <div className="text-sm font-medium text-[#111827]">{adults} Adults, {children} Children</div>
                  </div>
                </div>
                <AnimatePresence>
                  {showGuestDropdown && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute bottom-full left-0 right-0 md:right-auto md:w-80 bg-white shadow-xl border border-[#f0f0f0] mb-1 p-6 z-50 cursor-default"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                  className="w-full md:w-auto rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] uppercase tracking-widest text-xs px-10 min-h-[4.5rem] h-full">
                  Search Availability
                </Button>
              </div>
            </div>
            {bookingError && (
              <div className="px-6 py-2 text-red-500 text-xs border-t border-red-100 bg-red-50">{bookingError}</div>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HOTEL EXPERIENCE */}
      <section className="bg-white">
         <div className="flex flex-col lg:flex-row min-h-screen">
            
            {/* Left: Animated Visual Panel */}
            <div className="w-full lg:w-1/2 bg-[#faf8f4] relative overflow-hidden flex items-center justify-center py-32 lg:py-0">
               {/* Huge BG Text */}
               <div className="absolute top-10 left-10 font-serif text-[#c9a96e] opacity-10 text-[8rem] leading-none z-0 select-none">
                  25+
               </div>

               {/* Floating horizontal lines */}
               {[20, 50, 80].map((top, i) => (
                 <motion.div 
                   key={i}
                   animate={{ x: [-100, typeof window !== 'undefined' ? window.innerWidth : 1000, -100] }}
                   transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                   className="absolute h-[1px] w-[200px] bg-[#c9a96e] opacity-10 z-0"
                   style={{ top: `${top}%` }}
                 />
               ))}

               {/* Centered Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                 className="relative z-10 bg-white shadow-xl p-8 max-w-sm w-full mx-6 border-t-4 border-[#c9a96e]"
               >
                  <div className="text-[10px] tracking-widest text-[#c9a96e] uppercase mb-6">Hotel Thamel Park & Spa</div>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="font-serif text-6xl text-[#c9a96e]">25</span>
                     <span className="font-serif text-4xl text-[#c9a96e]">+</span>
                  </div>
                  <div className="text-sm font-medium text-[#111827] mb-8">Years of Hospitality Excellence</div>

                  <div className="space-y-4">
                     <div className="flex justify-between items-center pb-4 border-b border-[#f0f0f0]">
                        <div className="flex items-center gap-3 text-[#4b5563] text-sm"><Star className="w-4 h-4 text-[#c9a96e]"/> Guest Rating</div>
                        <div className="font-medium text-[#111827]">4.9 ★</div>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-[#f0f0f0]">
                        <div className="flex items-center gap-3 text-[#4b5563] text-sm"><Users className="w-4 h-4 text-[#c9a96e]"/> Total Guests</div>
                        <div className="font-medium text-[#111827]">15,000+</div>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-[#f0f0f0]">
                        <div className="flex items-center gap-3 text-[#4b5563] text-sm"><Key className="w-4 h-4 text-[#c9a96e]"/> Rooms</div>
                        <div className="font-medium text-[#111827]">84</div>
                     </div>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-[#4b5563] text-sm"><Wifi className="w-4 h-4 text-[#c9a96e]"/> Services</div>
                        <div className="font-medium text-[#111827]">Premium</div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-24">
               <div>
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">HOTEL EXPERIENCE</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                    Where Nepalese Warmth Meets Modern Luxury
                  </h2>
                  <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                    Nestled in the vibrant center of Kathmandu, Hotel Thamel Park & Spa offers a rare combination of bustling city access and tranquil retreat. We redefine luxury hospitality by seamlessly blending modern comforts with authentic Nepalese warmth.
                  </p>
                  <p className="text-[#4b5563] text-lg mb-12 leading-relaxed font-light">
                    From our premium accommodations to our dedicated wellness spa, every detail is crafted to provide an unparalleled experience for the discerning traveler.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                     <div className="bg-white border border-[#f0f0f0] border-l-4 border-l-[#c9a96e] p-6 shadow-sm">
                        <Star className="w-5 h-5 text-[#c9a96e] mb-3" />
                        <h4 className="font-serif text-lg text-[#111827] mb-1">Luxury</h4>
                        <p className="text-[#4b5563] text-sm font-light">Impeccably appointed rooms</p>
                     </div>
                     <div className="bg-white border border-[#f0f0f0] border-l-4 border-l-[#c9a96e] p-6 shadow-sm">
                        <Sparkles className="w-5 h-5 text-[#c9a96e] mb-3" />
                        <h4 className="font-serif text-lg text-[#111827] mb-1">Wellness</h4>
                        <p className="text-[#4b5563] text-sm font-light">World-class spa & treatments</p>
                     </div>
                     <div className="bg-white border border-[#f0f0f0] border-l-4 border-l-[#c9a96e] p-6 shadow-sm">
                        <UtensilsCrossed className="w-5 h-5 text-[#c9a96e] mb-3" />
                        <h4 className="font-serif text-lg text-[#111827] mb-1">Dining</h4>
                        <p className="text-[#4b5563] text-sm font-light">Authentic Korean & international</p>
                     </div>
                     <div className="bg-white border border-[#f0f0f0] border-l-4 border-l-[#c9a96e] p-6 shadow-sm">
                        <MapPin className="w-5 h-5 text-[#c9a96e] mb-3" />
                        <h4 className="font-serif text-lg text-[#111827] mb-1">Heritage</h4>
                        <p className="text-[#4b5563] text-sm font-light">25 years of Thamel tradition</p>
                     </div>
                  </div>

                  <Link href="/about" className="inline-flex items-center text-[#c9a96e] hover:text-[#a07840] font-serif italic text-xl group transition-colors">
                    Discover Our Story <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 3: GARDEN VIEW KOREAN RESTAURANT */}
      <section className="bg-[#f8f8f8]">
         <div className="flex flex-col lg:flex-row min-h-screen">
            
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-24">
               <div>
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">DINING EXPERIENCE</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                    Garden View Korean Restaurant
                  </h2>
                  <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                    Step into an oasis of culinary perfection where traditional Korean flavors meet the serene beauty of our garden terrace.
                  </p>
                  <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                    Our master chefs curate an authentic dining experience using the finest ingredients, creating masterpieces that delight both the palate and the senses.
                  </p>

                  <div className="flex flex-col gap-4 mb-10">
                     <div className="bg-white p-6 shadow-sm border border-[#f0f0f0]">
                        <h4 className="font-serif text-xl text-[#111827] mb-1">Korean BBQ</h4>
                        <p className="text-[#4b5563] text-sm font-light">Authentic table-side grill experience</p>
                     </div>
                     <div className="bg-white p-6 shadow-sm border border-[#f0f0f0]">
                        <h4 className="font-serif text-xl text-[#111827] mb-1">Traditional Set Menus</h4>
                        <p className="text-[#4b5563] text-sm font-light">Curated multi-course Korean dining</p>
                     </div>
                     <div className="bg-white p-6 shadow-sm border border-[#f0f0f0]">
                        <h4 className="font-serif text-xl text-[#111827] mb-1">Garden Terrace</h4>
                        <p className="text-[#4b5563] text-sm font-light">Al fresco dining amidst lush greenery</p>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-10">
                     <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-medium">Korean Cuisine</span>
                     <span className="text-[#c9a96e]">·</span>
                     <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-medium">Garden Seating</span>
                     <span className="text-[#c9a96e]">·</span>
                     <span className="text-xs uppercase tracking-widest text-[#c9a96e] font-medium">Indoor & Outdoor</span>
                  </div>

                  <Button asChild className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-8 py-6 h-auto tracking-widest uppercase text-xs">
                     <Link href="/restaurant">View Menu</Link>
                  </Button>
               </div>
            </div>

            {/* Right: Animated Visual Showcase */}
            <div className="w-full lg:w-1/2 bg-white relative overflow-hidden flex items-center justify-center py-32 lg:py-0 border-l border-[#f0f0f0]">
               {/* BIG Background Geometric Pattern */}
               <div 
                 className="absolute inset-0 z-0 pointer-events-none"
                 style={{ 
                   backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,169,110,0.05) 40px, rgba(201,169,110,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,169,110,0.05) 40px, rgba(201,169,110,0.05) 41px)" 
                 }}
               />

               {/* 4 Corner Accents */}
               <div className="absolute top-8 left-8 w-[30px] h-[1px] bg-[#c9a96e] opacity-20" />
               <div className="absolute top-8 left-8 w-[1px] h-[30px] bg-[#c9a96e] opacity-20" />
               
               <div className="absolute top-8 right-8 w-[30px] h-[1px] bg-[#c9a96e] opacity-20" />
               <div className="absolute top-8 right-8 w-[1px] h-[30px] bg-[#c9a96e] opacity-20" />

               <div className="absolute bottom-8 left-8 w-[30px] h-[1px] bg-[#c9a96e] opacity-20" />
               <div className="absolute bottom-8 left-8 w-[1px] h-[30px] bg-[#c9a96e] opacity-20" />

               <div className="absolute bottom-8 right-8 w-[30px] h-[1px] bg-[#c9a96e] opacity-20" />
               <div className="absolute bottom-8 right-8 w-[1px] h-[30px] bg-[#c9a96e] opacity-20" />

               {/* Centered Floating Card */}
               <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                 className="relative z-10 bg-white shadow-2xl p-10 max-w-sm w-full mx-6 border-t-4 border-[#c9a96e] text-center"
               >
                  <div className="mx-auto w-16 h-16 rounded-full border border-[#f0f0f0] flex items-center justify-center mb-6">
                     <UtensilsCrossed className="w-8 h-8 text-[#c9a96e]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-serif italic text-4xl text-[#c9a96e] mb-2">Garden View</h3>
                  <p className="text-lg font-medium text-[#111827] uppercase tracking-widest mb-8 text-sm">Korean Restaurant</p>

                  <div className="flex justify-center gap-4 mb-8">
                     <span className="flex items-center gap-1 text-xs text-[#4b5563]"><Leaf className="w-3 h-3"/> Garden</span>
                     <span className="flex items-center gap-1 text-xs text-[#4b5563]"><UtensilsCrossed className="w-3 h-3"/> Korean</span>
                     <span className="flex items-center gap-1 text-xs text-[#4b5563]"><Sparkles className="w-3 h-3"/> Premium</span>
                  </div>

                  <div className="w-12 h-px bg-[#c9a96e] mx-auto opacity-30 mb-6" />
                  
                  <div className="text-[10px] tracking-widest text-[#c9a96e] uppercase">Est. 1999</div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* SECTION 4: SKYZ LOUNGE */}
      <section className="bg-white">
         <div className="flex flex-col lg:flex-row-reverse min-h-screen">
            
            {/* Right: Animated Sky/Skyline */}
            <div className="w-full lg:w-[60%] relative overflow-hidden flex items-center justify-center py-32 lg:py-0 bg-gradient-to-b from-[#fefce8] to-white">
               
               {/* Soft Circular Light Sources */}
               <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#c9a96e] rounded-full blur-[100px] opacity-[0.08] pointer-events-none" />
               <div className="absolute top-40 left-10 w-[200px] h-[200px] bg-amber-500 rounded-full blur-[80px] opacity-[0.05] pointer-events-none" />

               {/* Sky layers lines */}
               {[10, 25, 40].map((top, i) => (
                 <motion.div 
                   key={i}
                   animate={{ x: [-50, typeof window !== 'undefined' ? window.innerWidth : 1000, -50] }}
                   transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                   className="absolute h-[1px] w-[300px] bg-[#c9a96e] opacity-[0.05] z-0"
                   style={{ top: `${top}%` }}
                 />
               ))}

               {/* Abstract Skyline */}
               <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-end justify-around px-10 gap-4 opacity-[0.08]">
                 {[
                   { h: '60%', w: '12%', delay: 0.1 },
                   { h: '85%', w: '18%', delay: 0.3 },
                   { h: '45%', w: '10%', delay: 0.2 },
                   { h: '100%', w: '25%', delay: 0.5 },
                   { h: '70%', w: '15%', delay: 0.4 },
                 ].map((bldg, i) => (
                   <motion.div
                     key={i}
                     initial={{ y: 40, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: bldg.delay, duration: 0.8 }}
                     className="bg-[#c9a96e] rounded-t-sm"
                     style={{ height: bldg.h, width: bldg.w }}
                   >
                      {/* Windows pattern for some */}
                      {i % 2 === 0 && (
                        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.2 }} />
                      )}
                   </motion.div>
                 ))}
               </div>

               {/* Centered Floating Card */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                 className="relative z-10 bg-white shadow-2xl p-12 max-w-md w-full mx-6 text-center mt-8"
               >
                  {/* Decorative Ring above card */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-[#c9a96e]/30 bg-white flex items-center justify-center shadow-sm">
                     <Coffee className="w-6 h-6 text-[#c9a96e]" />
                  </div>
                  
                  <h3 className="font-serif italic text-[5rem] leading-none mb-2 text-gradient-gold">Skyz</h3>
                  <div className="text-[10px] tracking-widest text-[#111827] uppercase mb-6 font-medium">Rooftop Lounge</div>
                  
                  <div className="w-12 h-px bg-[#c9a96e] mx-auto opacity-30 mb-6" />
                  
                  <div className="text-xs text-[#4b5563] uppercase tracking-widest">Floor 8 · Open Daily · 4PM – 11PM</div>
               </motion.div>
            </div>

            {/* Left: Content */}
            <div className="w-full lg:w-[40%] flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-24">
               <div>
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">LOUNGE & BAR</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-2 leading-tight">
                    Skyz Lounge
                  </h2>
                  <p className="font-serif italic text-xl text-[#c9a96e] mb-8">Above the City. Above the Ordinary.</p>
                  
                  <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                    Elevate your evening at Skyz Lounge. Perched on our rooftop, experience breathtaking panoramic views of the Kathmandu skyline as the sun sets over the mountains.
                  </p>
                  <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                    Our master mixologists craft signature cocktails while live acoustic and jazz performances create an unforgettable ambiance of sophisticated relaxation.
                  </p>

                  <div className="space-y-6 mb-10">
                     <div className="flex gap-4 items-start">
                        <Coffee className="w-5 h-5 text-[#c9a96e] mt-1 shrink-0" />
                        <div>
                           <div className="font-medium text-[#111827] mb-1">Signature Cocktails</div>
                           <div className="text-sm text-[#4b5563] font-light">Crafted by master mixologists</div>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <Star className="w-5 h-5 text-[#c9a96e] mt-1 shrink-0" />
                        <div>
                           <div className="font-medium text-[#111827] mb-1">Panoramic Views</div>
                           <div className="text-sm text-[#4b5563] font-light">360° Kathmandu skyline</div>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <Wind className="w-5 h-5 text-[#c9a96e] mt-1 shrink-0" />
                        <div>
                           <div className="font-medium text-[#111827] mb-1">Live Entertainment</div>
                           <div className="text-sm text-[#4b5563] font-light">Jazz & acoustic evenings</div>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-10">
                     <span className="text-xs uppercase tracking-widest text-[#4b5563]">Rooftop</span>
                     <span className="text-[#c9a96e]">·</span>
                     <span className="text-xs uppercase tracking-widest text-[#4b5563]">Cocktails</span>
                     <span className="text-[#c9a96e]">·</span>
                     <span className="text-xs uppercase tracking-widest text-[#4b5563]">Sunset Views</span>
                     <span className="text-[#c9a96e]">·</span>
                     <span className="text-xs uppercase tracking-widest text-[#4b5563]">Live Music</span>
                  </div>

                  <Button asChild className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-8 py-6 h-auto tracking-widest uppercase text-xs">
                     <Link href="/contact">Reserve Your Table</Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: SPA & WELLNESS */}
      <section className="bg-[#f8f8f8]">
         <div className="flex flex-col lg:flex-row min-h-screen">
            
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 flex items-center py-32 lg:py-0 px-6 md:px-16 lg:px-24">
               <div>
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">SPA & WELLNESS</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                    Restore. Renew. Revive.
                  </h2>
                  <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                    Discover an oasis of tranquility within the city. Our premium Spa offers a holistic approach to wellness, combining ancient therapeutic traditions with modern luxury treatments.
                  </p>
                  <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                    Let our expert therapists guide you on a journey of complete relaxation, restoring balance to your mind, body, and spirit in our serene environment.
                  </p>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
                     {["Sauna", "Steam Therapy", "Relaxation Area", "Massage Therapy", "Wellness Packages", "Couples Package"].map((service, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <CheckCircle className="w-4 h-4 text-[#c9a96e]" />
                           <span className="text-[#111827] font-medium text-sm">{service}</span>
                        </div>
                     ))}
                  </div>

                  <Button asChild variant="outline" className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none uppercase tracking-widest text-xs px-8 py-6 h-auto">
                     <Link href="/spa">Explore Spa</Link>
                  </Button>
               </div>
            </div>

            {/* Right: Animated Wellness Visual Panel */}
            <div className="w-full lg:w-1/2 bg-white relative overflow-hidden flex items-center justify-center py-32 lg:py-0 border-l border-[#f0f0f0]">
               
               {/* Concentric Circles */}
               <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
                  {[
                    { size: 400, op: 0.05, speed: 40 },
                    { size: 320, op: 0.1, speed: -35 },
                    { size: 240, op: 0.15, speed: 30 },
                    { size: 160, op: 0.2, speed: -25 },
                    { size: 80, op: 0.3, speed: 20 },
                  ].map((circle, i) => (
                    <motion.div
                       key={i}
                       animate={{ rotate: 360 }}
                       transition={{ duration: Math.abs(circle.speed), repeat: Infinity, ease: "linear" }}
                       className="absolute rounded-full border border-[#c9a96e] border-dashed"
                       style={{ 
                         width: circle.size, 
                         height: circle.size, 
                         opacity: circle.op,
                         animationDirection: circle.speed < 0 ? 'reverse' : 'normal'
                       }}
                    />
                  ))}

                  {/* Center Icon */}
                  <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#f0f0f0] z-10">
                     <Sparkles className="w-8 h-8 text-[#c9a96e]" />
                  </div>

                  {/* Floating Words */}
                  <div className="absolute top-[20%] left-[20%] font-serif italic text-4xl text-[#111827] opacity-[0.08]">Serenity</div>
                  <div className="absolute bottom-[20%] right-[20%] font-serif italic text-4xl text-[#111827] opacity-[0.08]">Wellness</div>
                  <div className="absolute top-[30%] right-[15%] font-serif italic text-3xl text-[#111827] opacity-[0.08]">Balance</div>
                  <div className="absolute bottom-[30%] left-[15%] font-serif italic text-3xl text-[#111827] opacity-[0.08]">Peace</div>

                  {/* Small icons */}
                  <Leaf className="absolute top-10 left-10 w-8 h-8 text-[#c9a96e] opacity-10" />
                  <Wind className="absolute bottom-10 right-10 w-10 h-10 text-[#c9a96e] opacity-10" />
               </div>

            </div>
         </div>
      </section>

      {/* SECTION 6: NEPAL HERITAGE & HOSPITALITY */}
      <section className="py-32 bg-white border-y border-[#f0f0f0]">
         <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-6xl">
            
            <div className="text-center mb-16">
               <div className="w-[60px] h-px bg-[#c9a96e] mx-auto mb-8" />
               <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">NEPAL HERITAGE</h3>
               <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-4">25 Years of Thamel Hospitality</h2>
               <p className="font-serif italic text-xl text-[#4b5563] mb-8">Where ancient heritage meets modern luxury</p>
               
               <div className="max-w-2xl mx-auto space-y-4">
                 <p className="text-[#4b5563] font-light leading-relaxed">
                   For over two decades, Hotel Thamel Park & Spa has stood as a beacon of luxury in Kathmandu's historic center. Our legacy is built on the foundation of genuine Nepalese hospitality.
                 </p>
                 <p className="text-[#4b5563] font-light leading-relaxed">
                   We believe that true luxury lies in the warmth of our welcome, the cultural richness of our surroundings, and our unwavering commitment to exceeding every expectation.
                 </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#f8f8f8] px-8 py-12 text-center group hover:border-[#c9a96e]/30 transition-colors">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#faf8f4] flex items-center justify-center mb-6 group-hover:bg-[#c9a96e] transition-colors">
                     <Heart className="w-6 h-6 text-[#c9a96e] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-serif text-xl text-[#111827] mb-4">Nepalese Warmth</h4>
                  <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                     Our hospitality is rooted in the ancient Nepalese tradition of Atithi Devo Bhava — guest is god.
                  </p>
               </div>
               
               <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#f8f8f8] px-8 py-12 text-center group hover:border-[#c9a96e]/30 transition-colors">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#faf8f4] flex items-center justify-center mb-6 group-hover:bg-[#c9a96e] transition-colors">
                     <MapPin className="w-6 h-6 text-[#c9a96e] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-serif text-xl text-[#111827] mb-4">Thamel Spirit</h4>
                  <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                     Located in Kathmandu's most vibrant cultural district, steps from temples, markets, and mountain views.
                  </p>
               </div>

               <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#f8f8f8] px-8 py-12 text-center group hover:border-[#c9a96e]/30 transition-colors">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#faf8f4] flex items-center justify-center mb-6 group-hover:bg-[#c9a96e] transition-colors">
                     <Star className="w-6 h-6 text-[#c9a96e] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-serif text-xl text-[#111827] mb-4">Cultural Fusion</h4>
                  <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                     Where the best of Korean dining meets Nepalese hospitality under one distinguished roof.
                  </p>
               </div>
            </div>

            <div className="flex justify-center gap-4 text-[#c9a96e] opacity-50">
               <span className="text-xs">◆</span>
               <span className="text-xs">◆</span>
               <span className="text-xs">◆</span>
               <span className="text-xs">◆</span>
               <span className="text-xs">◆</span>
            </div>
         </div>
      </section>

      {/* SECTION 7: ROOMS */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
          <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">ACCOMMODATION</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-4">Luxurious Retreats</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Super Deluxe Twin", price: "60", guests: 2, desc: "Elegant retreat with twin beds and modern comfort.", amenities: [{i: Wifi, l: "Wifi"}, {i: Tv, l: "TV"}, {i: Wind, l: "AC"}, {i: Coffee, l: "Coffee"}] },
              { name: "Super Deluxe Room", price: "60", guests: 2, desc: "Spacious comfort with premium king bed setup.", amenities: [{i: Wifi, l: "Wifi"}, {i: Tv, l: "TV"}, {i: Wind, l: "AC"}, {i: Coffee, l: "Coffee"}] },
              { name: "Family Room", price: "55", guests: 4, desc: "Perfect for families, featuring interconnected spaces.", amenities: [{i: Wifi, l: "Wifi"}, {i: Tv, l: "TV"}, {i: Wind, l: "AC"}, {i: Coffee, l: "Coffee"}] },
              { name: "Standard Deluxe Room", price: "50", guests: 2, desc: "Comfortable standard room with essential amenities.", amenities: [{i: Wifi, l: "Wifi"}, {i: Tv, l: "TV"}, {i: Wind, l: "AC"}, {i: Coffee, l: "Coffee"}] }
            ].map((room, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#f0f0f0] rounded-none overflow-hidden flex flex-col group"
              >
                <div className="h-1 w-full bg-gradient-to-r from-[#c9a96e] to-[#a07840]" />
                <div className="p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-serif text-[#111827] max-w-[60%] leading-tight">{room.name}</h3>
                    <div className="text-right">
                       <div className="text-[10px] tracking-widest text-[#4b5563] uppercase mb-1">From</div>
                       <div className="font-serif text-3xl text-[#c9a96e]">${room.price}</div>
                       <div className="text-[10px] tracking-widest text-[#4b5563] uppercase mt-1">Per Night</div>
                    </div>
                  </div>
                  
                  <p className="text-[#4b5563] text-base font-light mb-8 flex-grow">{room.desc}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {room.amenities.map((am, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center p-3 bg-[#f8f8f8] border border-[#f0f0f0]">
                        <am.i className="w-4 h-4 text-[#c9a96e] mb-2" /> 
                        <span className="text-[10px] uppercase tracking-widest font-medium text-[#4b5563]">{am.l}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[#f0f0f0]">
                    <div className="flex items-center gap-2 text-[#4b5563] text-sm uppercase tracking-widest font-medium">
                      <Users className="w-4 h-4 text-[#c9a96e]" /> {room.guests} Guests
                    </div>
                    <Button asChild variant="outline" className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-none uppercase tracking-widest text-xs px-8 py-6 h-auto transition-colors">
                      <Link href="/contact">Book This Room</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-32 bg-white border-b border-[#f0f0f0]">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
           <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">GUEST EXPERIENCES</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-4">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: "Sarah Jenkins", country: "United Kingdom", text: "An absolute oasis in the middle of bustling Thamel. The attention to detail, luxury amenities, and the incredible Korean restaurant made our stay unforgettable." },
               { name: "Michael Chen", country: "Singapore", text: "The Skyz Lounge offers the best sunset views in Kathmandu. Combined with the immaculate rooms and warm Nepalese hospitality, it's a 5-star experience." },
               { name: "Elena Rossi", country: "Italy", text: "We ended our trekking journey here and the spa treatments were heavenly. Pure luxury, perfectly clean, and the staff anticipates your every need." }
             ].map((review, i) => (
                <div key={i} className="bg-white p-10 border border-[#f0f0f0] shadow-sm relative pt-16">
                   <div className="absolute top-8 left-10 font-serif text-[4rem] text-[#c9a96e] opacity-20 leading-none">"</div>
                   <div className="flex gap-1 mb-6">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />)}
                   </div>
                   <p className="text-[#4b5563] italic font-serif text-lg leading-relaxed mb-8">"{review.text}"</p>
                   <div>
                      <div className="font-medium text-[#111827] uppercase tracking-widest text-sm mb-1">{review.name}</div>
                      <div className="text-xs text-[#c9a96e]">{review.country}</div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LOCATION */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div>
                <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">LOCATION</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                  The Heart of Kathmandu
                </h2>
                <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                  Perfectly situated in Thamel, our hotel offers peaceful luxury just steps away from Kathmandu's most vibrant cultural sites, shopping, and entertainment.
                </p>

                <div className="space-y-6">
                   <div className="flex items-start gap-4 p-6 bg-white border border-[#f0f0f0]">
                      <Plane className="w-6 h-6 text-[#c9a96e] shrink-0" />
                      <div>
                         <div className="font-medium text-[#111827] mb-1">Tribhuvan International Airport</div>
                         <div className="text-sm text-[#4b5563]">5.5 km / 25 mins drive</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 bg-white border border-[#f0f0f0]">
                      <MapPin className="w-6 h-6 text-[#c9a96e] shrink-0" />
                      <div>
                         <div className="font-medium text-[#111827] mb-1">Kathmandu Durbar Square</div>
                         <div className="text-sm text-[#4b5563]">1.8 km / 10 mins walk</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 bg-white border border-[#f0f0f0]">
                      <Star className="w-6 h-6 text-[#c9a96e] shrink-0" />
                      <div>
                         <div className="font-medium text-[#111827] mb-1">Swayambhunath Stupa</div>
                         <div className="text-sm text-[#4b5563]">2.5 km / 15 mins drive</div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="h-[600px] w-full bg-gray-200 border-4 border-white shadow-xl relative">
                {/* Fallback pattern if iframe fails */}
                <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                   <MapPin className="w-12 h-12 text-[#c9a96e] opacity-50" />
                </div>
                <iframe 
                  src="https://maps.google.com/maps?q=Thamel+Kathmandu+Nepal&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="relative z-10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 max-w-4xl">
           <div className="text-center mb-16">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-4 font-medium">INFORMATION</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
             {[
               { q: "What are the check-in and check-out times?", a: "Check-in time is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in and late check-out are subject to availability." },
               { q: "Do you offer airport transfer services?", a: "Yes, we offer premium airport pickup and drop-off services. Please contact our concierge at least 24 hours prior to your arrival to arrange this." },
               { q: "Is the Korean Restaurant open to non-guests?", a: "Absolutely. The Garden View Korean Restaurant and Skyz Lounge are both open to the public. We recommend making a reservation in advance." },
               { q: "Do you have spa facilities?", a: "Yes, our luxury Spa & Wellness center offers a variety of treatments including massages, sauna, and steam therapy. Advance booking is recommended." },
               { q: "Is parking available at the hotel?", a: "We provide secure, complimentary parking for all our registered guests." },
               { q: "What is your cancellation policy?", a: "Our standard cancellation policy requires 48 hours notice prior to arrival. Specific rates or special offers may have different conditions." }
             ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-[#f0f0f0] bg-white px-6">
                   <AccordionTrigger className="text-left font-serif text-lg text-[#111827] hover:no-underline hover:text-[#c9a96e] py-6">
                      {faq.q}
                   </AccordionTrigger>
                   <AccordionContent className="text-[#4b5563] text-base font-light pb-6 leading-relaxed">
                      {faq.a}
                   </AccordionContent>
                </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 11: BOOKING CTA */}
      <section className="py-32 bg-[#faf8f4] border-t border-[#f0f0f0]">
        <div className="container mx-auto px-6 md:px-14 lg:px-20 text-center max-w-4xl">
           <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm mb-8">
              <Key className="w-6 h-6 text-[#c9a96e]" />
           </div>
           <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mb-6 leading-tight">
             Begin Your Journey<br/><span className="italic text-[#c9a96e]">to Luxury</span>
           </h2>
           <p className="text-xl text-[#4b5563] font-light mb-12">
             Experience the pinnacle of hospitality in the heart of Kathmandu.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-12 py-8 h-auto tracking-widest uppercase text-sm">
                 <Link href="/contact">Book Your Stay</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none bg-transparent uppercase tracking-widest text-sm px-12 py-8 h-auto transition-colors">
                 <Link href="/contact">Contact Us</Link>
              </Button>
           </div>
        </div>
      </section>

    </div>
  );
}
