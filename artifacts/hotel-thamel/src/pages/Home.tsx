import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, MapPin, Coffee, Wifi, Users, ChevronRight, Wind, Droplet,
  Tv, ShieldCheck, Dumbbell, Calendar, Heart, 
  Plane, Utensils, Key, UtensilsCrossed, Sparkles, Leaf, CheckCircle
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] overflow-hidden bg-white">
        
        {/* Very subtle dot grid pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(rgba(17,24,39,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        
        {/* Soft ambient golden orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#c9a96e] rounded-full blur-[120px] opacity-[0.06] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a96e] rounded-full blur-[100px] opacity-[0.06] pointer-events-none" />

        {/* Right side decorative: Giant barely-visible serif "H" */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <div className="font-serif text-[#c9a96e]" style={{ fontSize: '35vw', lineHeight: 1, opacity: 0.06 }}>H</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[60%] h-[60%] border border-[#c9a96e]/10 rounded-full absolute" />
             <div className="w-[80%] h-[80%] border border-[#c9a96e]/5 rounded-full absolute" />
             <Star className="absolute top-[20%] left-[30%] text-[#c9a96e]/20 w-8 h-8" />
             <Leaf className="absolute bottom-[30%] right-[20%] text-[#c9a96e]/20 w-10 h-10" />
             <Wind className="absolute top-[50%] right-[10%] text-[#c9a96e]/20 w-6 h-6" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-40 left-0 right-0 z-10 px-6 md:px-14 lg:px-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#c9a96e] opacity-80" />
              <span className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-medium">THAMEL · KATHMANDU · NEPAL</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[#111827] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
            >
              Experience Luxury,<br />
              <span className="italic text-gradient-gold">Wellness & Comfort</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
               <p className="font-serif text-xl md:text-2xl text-[#111827]/70 italic">at Hotel Thamel Park & Spa</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col md:flex-row md:items-center gap-8 mb-4">
              <p className="text-[#4b5563] max-w-md text-lg font-light leading-relaxed">
                A sanctuary of luxury, wellness and culture in Kathmandu's heart.
              </p>
              <div className="flex gap-4">
                <Button asChild data-testid="hero-btn-book" className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-8 py-6 h-auto tracking-widest uppercase text-xs">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button asChild data-testid="hero-btn-explore" variant="outline" className="rounded-none border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white px-8 py-6 h-auto tracking-widest uppercase text-xs bg-transparent">
                  <Link href="/rooms">Explore Rooms</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="absolute bottom-24 left-0 right-0 z-20 px-6 md:px-14 lg:px-20 hidden md:flex items-center gap-12"
        >
          {[
            { label: "Rooms", val: "84" },
            { label: "Happy Guests", val: "15,000+" },
            { label: "Years Experience", val: "25+" },
            { label: "Spa & Wellness", val: "Premium" }
          ].map((s, i) => (
             <div key={i} className="flex items-center gap-6">
                <div>
                   <div className="font-serif text-2xl text-[#111827]">{s.val}</div>
                   <div className="text-[10px] uppercase tracking-widest text-[#4b5563] mt-1">{s.label}</div>
                </div>
                {i < 3 && <div className="w-px h-10 bg-[#f0f0f0]" />}
             </div>
          ))}
        </motion.div>

        {/* Booking bar pinned to bottom */}
        <motion.div 
          initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-30 bg-white border-t border-[#e5e7eb] flex flex-col md:flex-row"
        >
           {[
             { label: "Check In", icon: Calendar, val: "Select Date" },
             { label: "Check Out", icon: Calendar, val: "Select Date" },
             { label: "Room Type", icon: Key, val: "Super Deluxe Twin ($60)" },
             { label: "Guests", icon: Users, val: "2 Adults, 0 Children" }
           ].map((item, i) => (
              <div key={i} className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-[#f0f0f0] hover:bg-[#f8f8f8] cursor-pointer transition-colors" data-testid={`booking-bar-${i}`}>
                 <item.icon className="text-[#c9a96e] w-5 h-5" />
                 <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#c9a96e] font-medium">{item.label}</div>
                    <div className="text-sm font-medium text-[#111827] truncate w-32">{item.val}</div>
                 </div>
              </div>
           ))}
           <div className="p-0 flex items-center justify-center shrink-0 h-full">
             <Button asChild data-testid="booking-bar-btn" className="w-full md:w-auto rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] uppercase tracking-widest text-xs px-12 h-full min-h-[4rem]">
               <Link href="/contact">Search Availability</Link>
             </Button>
           </div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT / OVERVIEW */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
               <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-6 font-medium">OVERVIEW</h3>
               <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                 A Sanctuary of Elegance in Thamel's Heart
               </h2>
               <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                 Nestled in the vibrant center of Kathmandu, Hotel Thamel Park & Spa offers a rare combination of bustling city access and tranquil retreat. We redefine luxury hospitality by seamlessly blending modern comforts with authentic Nepalese warmth.
               </p>
               <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                 From our premium accommodations to our dedicated wellness spa, every detail is crafted to provide an unparalleled experience for the discerning traveler.
               </p>
               
               <div className="flex flex-wrap gap-4 mb-10">
                 {['Luxury', 'Authenticity', 'Wellness', 'Hospitality'].map(pill => (
                   <span key={pill} className="px-4 py-1.5 border border-[#c9a96e] text-[#c9a96e] text-xs uppercase tracking-widest rounded-full font-medium">
                     {pill}
                   </span>
                 ))}
               </div>

               <Button asChild data-testid="about-link" variant="link" className="text-[#c9a96e] hover:text-[#a07840] p-0 text-lg group h-auto font-serif italic">
                 <Link href="/about">
                   Discover Our Story <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </Link>
               </Button>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                 <span className="font-serif text-[#c9a96e] opacity-[0.08]" style={{ fontSize: '20vw', lineHeight: 0.8 }}>HTPS</span>
               </div>
               
               <div className="relative z-10 w-full max-w-md bg-white p-10 border-l-4 border-[#c9a96e] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                 <p className="font-serif text-xl text-[#111827] italic mb-6 leading-relaxed">
                   "Our vision was to create a space where the chaos of the city fades away, leaving only peace, comfort, and extraordinary service."
                 </p>
               </div>

               <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 gap-4 pt-12">
                  {[
                    { val: "84", label: "ROOMS" },
                    { val: "15k+", label: "GUESTS" },
                    { val: "25+", label: "YEARS" },
                    { val: "1", label: "SPA" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                       <div className="font-serif text-2xl text-[#111827] mb-1">{item.val}</div>
                       <div className="text-[9px] font-medium tracking-wider uppercase text-[#c9a96e]">{item.label}</div>
                    </div>
                  ))}
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ROOMS */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-4 font-medium">ROOMS & SUITES</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827]">Luxurious Accommodation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { name: "Super Deluxe Twin", price: "60", guests: 2, desc: "Elegant retreat with twin beds and modern comfort.", amenities: ["AC", "TV", "Wifi", "Minibar"] },
              { name: "Super Deluxe Room", price: "60", guests: 2, desc: "Spacious comfort with premium king bed setup.", amenities: ["AC", "TV", "Wifi", "City View"] },
              { name: "Family Room", price: "55", guests: 4, desc: "Perfect for families, featuring interconnected spaces.", amenities: ["AC", "TV", "Wifi", "Living Area"] },
              { name: "Standard Deluxe", price: "50", guests: 2, desc: "Comfortable standard room with essential amenities.", amenities: ["AC", "TV", "Wifi", "Work Desk"] }
            ].map((room, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0 }}
                whileHover={{ y: -6 }}
                className="bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#f0f0f0] rounded-none overflow-hidden flex flex-col group h-full"
              >
                <div className="h-1 w-full bg-gradient-to-r from-[#c9a96e] via-[#a07840] to-[#c9a96e]" />
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-[#111827] max-w-[70%]">{room.name}</h3>
                    <div className="flex flex-col items-end">
                       <span className="text-sm tracking-widest text-[#4b5563] uppercase mb-1">From</span>
                       <span className="font-serif text-2xl text-[#c9a96e]">${room.price}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#4b5563] text-sm font-light mb-6 flex-grow">{room.desc}</p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                    {room.amenities.map((am, idx) => (
                      <span key={idx} className="text-xs text-[#4b5563] flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[#c9a96e]" /> {am}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#f0f0f0]">
                    <div className="flex items-center gap-2 text-[#4b5563] text-sm">
                      <Users className="w-4 h-4" /> {room.guests} Guests
                    </div>
                    <Button asChild data-testid={`room-btn-${i}`} variant="outline" className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-none uppercase tracking-widest text-xs h-auto py-2 px-4 transition-colors">
                      <Link href="/contact">Book</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SPA & WELLNESS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-5">
              <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-6 font-medium">SPA & WELLNESS</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-8 leading-tight">
                Restore. Renew. Revive.
              </h2>
              <p className="text-[#4b5563] text-lg mb-6 leading-relaxed font-light">
                Discover an oasis of tranquility within the city. Our premium Spa offers a holistic approach to wellness, combining ancient therapeutic traditions with modern luxury treatments.
              </p>
              <p className="text-[#4b5563] text-lg mb-10 leading-relaxed font-light">
                Let our expert therapists guide you on a journey of complete relaxation, restoring balance to your mind, body, and spirit in our serene environment.
              </p>

              <div className="space-y-4 mb-10">
                {["Sauna", "Steam Therapy", "Relaxation Area", "Massage Therapy", "Wellness Packages", "Couples Package"].map((service, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-[#c9a96e]" />
                    <span className="text-[#111827] font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild data-testid="spa-btn" className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-8 py-6 h-auto tracking-widest uppercase text-xs">
                <Link href="/spa">Explore Spa</Link>
              </Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-7 relative h-[600px] w-full bg-white flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border-[1px] border-[#c9a96e]/10 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="w-[60%] h-[60%] border-[1px] border-[#c9a96e]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                  <div className="w-[40%] h-[40%] bg-[#f8f8f8] rounded-full" />
               </div>
               
               <Droplet className="absolute top-[30%] left-[20%] w-16 h-16 text-[#c9a96e]/20 animate-pulse" />
               <Wind className="absolute bottom-[20%] right-[30%] w-20 h-20 text-[#c9a96e]/10" />
               <Leaf className="absolute top-[40%] right-[20%] w-12 h-12 text-[#c9a96e]/30" />
               <Sparkles className="absolute bottom-[40%] left-[30%] w-10 h-10 text-[#c9a96e]/20" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: DINING */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-4 font-medium">CULINARY DELIGHTS</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827]">Dining Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0 }} whileHover={{ y: -6 }}>
               <div className="bg-white shadow-sm border border-[#f0f0f0] p-10 h-full flex flex-col relative overflow-hidden group rounded-none">
                  <div className="h-1 w-full bg-[#c9a96e] absolute top-0 left-0" />
                  <UtensilsCrossed className="w-12 h-12 text-[#c9a96e] mb-6" strokeWidth={1} />
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3 font-medium">DINING EXPERIENCE</h3>
                  <h2 className="text-3xl font-serif text-[#111827] mb-4">Garden View Korean Restaurant</h2>
                  <p className="text-[#4b5563] mb-8 font-light flex-grow">Authentic Korean cuisine in a serene garden setting. Masterful chefs create extraordinary dishes using the finest ingredients.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Korean Cuisine</span>
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Garden Seating</span>
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Indoor & Outdoor</span>
                  </div>
                  <Button asChild variant="outline" className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none uppercase tracking-widest text-xs h-auto py-4 px-8 self-start transition-colors">
                     <Link href="/restaurant">View Menu</Link>
                  </Button>
               </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} whileHover={{ y: -6 }}>
               <div className="bg-white shadow-sm border border-[#f0f0f0] p-10 h-full flex flex-col relative overflow-hidden group rounded-none">
                  <div className="h-1 w-full bg-[#c9a96e] absolute top-0 left-0" />
                  <Coffee className="w-12 h-12 text-[#c9a96e] mb-6" strokeWidth={1} />
                  <h3 className="text-[#c9a96e] tracking-[0.2em] text-xs uppercase mb-3 font-medium">LOUNGE & BAR</h3>
                  <h2 className="text-3xl font-serif text-[#111827] mb-4">Skyz Lounge</h2>
                  <p className="text-[#4b5563] mb-8 font-light flex-grow">Rooftop lounge offering panoramic Kathmandu views, signature cocktails, and a perfect ambiance to unwind after a busy day.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Signature Cocktails</span>
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Panoramic Views</span>
                     <span className="px-3 py-1 bg-[#f8f8f8] text-[#4b5563] text-xs tracking-wider uppercase">Live Music</span>
                  </div>
                  <Button asChild variant="outline" className="border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white rounded-none uppercase tracking-widest text-xs h-auto py-4 px-8 self-start transition-colors">
                     <Link href="/contact">Reserve Table</Link>
                  </Button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FACILITIES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-4 font-medium">AMENITIES</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827]">Premium Facilities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
             {[
               { icon: Droplet, label: "Pool" },
               { icon: Dumbbell, label: "Gym" },
               { icon: Calendar, label: "24/7 Reception" },
               { icon: Wind, label: "Spa" },
               { icon: UtensilsCrossed, label: "Garden Restaurant" },
               { icon: Wifi, label: "Free WiFi" },
               { icon: ShieldCheck, label: "Parking" },
               { icon: Plane, label: "Airport Transfer" },
               { icon: Heart, label: "Laundry" },
               { icon: Coffee, label: "Room Service" },
               { icon: Users, label: "Business Center" },
               { icon: ShieldCheck, label: "Doctor on Call" }
             ].map((fac, i) => (
               <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} whileHover={{ y: -4 }}>
                 <div className="bg-white p-8 flex flex-col items-center justify-center text-center border border-[#f0f0f0] hover:border-[#c9a96e] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group h-full">
                    <fac.icon className="w-10 h-10 text-[#c9a96e] mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                    <span className="font-serif text-lg text-[#111827]">{fac.label}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: GUEST EXPERIENCE */}
      <section className="py-32 bg-[#f5f5f5] relative">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#111827] text-center mb-20">A Legacy of Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
             <div>
               <div className="text-5xl md:text-7xl font-serif text-[#c9a96e] mb-4">15k+</div>
               <div className="text-sm tracking-widest uppercase text-[#4b5563]">Happy Guests</div>
             </div>
             <div>
               <div className="text-5xl md:text-7xl font-serif text-[#c9a96e] mb-4">4.9★</div>
               <div className="text-sm tracking-widest uppercase text-[#4b5563]">Google Rating</div>
             </div>
             <div>
               <div className="text-5xl md:text-7xl font-serif text-[#c9a96e] mb-4">25+</div>
               <div className="text-sm tracking-widest uppercase text-[#4b5563]">Years of Hospitality</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {["Unmatched Service", "Prime Location", "Holistic Wellness"].map((prop, i) => (
                <div key={i} className="bg-white p-8 border border-[#f0f0f0] text-center">
                   <h3 className="font-serif text-xl text-[#111827]">{prop}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-4 font-medium">TESTIMONIALS</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111827]">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { text: "An absolute oasis in Thamel. The attention to detail, the serene spa, and the incredibly warm staff made our stay unforgettable.", name: "Sarah Jenkins", country: "United Kingdom" },
               { text: "The garden restaurant is a hidden gem. We enjoyed peaceful mornings with fantastic breakfast before heading into the bustling city.", name: "David Chen", country: "Singapore" },
               { text: "Exceptional luxury and comfort. The rooms are immaculate, and the location is perfect for exploring Kathmandu on foot.", name: "Elena Rossi", country: "Italy" }
             ].map((review, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="bg-white p-10 border border-[#f0f0f0] shadow-[0_4px_20px_rgb(0,0,0,0.02)] h-full flex flex-col relative">
                     <span className="absolute top-6 left-6 text-6xl font-serif text-[#c9a96e] opacity-20">"</span>
                     <div className="flex gap-1 mb-6 mt-4">
                        {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-[#c9a96e] fill-current" />)}
                     </div>
                     <p className="text-[#4b5563] font-light leading-relaxed mb-8 flex-grow">"{review.text}"</p>
                     <div>
                        <div className="font-serif text-[#111827] text-lg">{review.name}</div>
                        <div className="text-xs uppercase tracking-widest text-[#c9a96e]">{review.country}</div>
                     </div>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: GALLERY PREVIEW */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-16">A Visual Journey</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
             {[
               { type: 'icon', icon: Leaf, bg: 'bg-[#c9a96e]' },
               { type: 'text', text: 'Serenity', bg: 'bg-white' },
               { type: 'pattern', bg: 'bg-[#f0f0f0]' },
               { type: 'text', text: 'Heritage', bg: 'bg-white' },
               { type: 'icon', icon: Star, bg: 'bg-[#c9a96e]' },
               { type: 'text', text: 'Comfort', bg: 'bg-white' },
             ].map((tile, i) => (
                <div key={i} className={`aspect-square flex items-center justify-center ${tile.bg} ${tile.type==='pattern' ? 'relative overflow-hidden' : ''}`}>
                   {tile.type === 'icon' && <tile.icon className="w-16 h-16 text-white opacity-80" strokeWidth={1} />}
                   {tile.type === 'text' && <span className="font-serif text-2xl text-[#111827] italic">{tile.text}</span>}
                   {tile.type === 'pattern' && (
                      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px', opacity: 0.5 }} />
                   )}
                </div>
             ))}
          </div>

          <Button asChild variant="outline" className="border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-none uppercase tracking-widest text-xs h-auto py-4 px-12 transition-colors">
             <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* SECTION 10: LOCATION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-2 lg:order-1 h-[500px] w-full bg-[#f8f8f8] border border-[#f0f0f0] p-2">
                <iframe 
                  src="https://maps.google.com/maps?q=Thamel+Kathmandu+Nepal&output=embed" 
                  className="w-full h-full border-0 grayscale opacity-80 contrast-125"
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2">
                <h3 className="text-[#c9a96e] tracking-[0.2em] text-sm uppercase mb-4 font-medium">PRIME LOCATION</h3>
                <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mb-10">In the Heart of Thamel</h2>
                
                <div className="space-y-4">
                   {[
                     { place: "Pashupatinath Temple", dist: "15 min drive" },
                     { place: "Boudhanath Stupa", dist: "20 min drive" },
                     { place: "Thamel Shopping", dist: "2 min walk" },
                     { place: "Tribhuvan Airport", dist: "30 min drive" }
                   ].map((loc, i) => (
                      <div key={i} className="bg-white border border-[#f0f0f0] border-l-4 border-l-[#c9a96e] p-6 flex justify-between items-center">
                         <span className="font-serif text-lg text-[#111827]">{loc.place}</span>
                         <span className="text-sm uppercase tracking-widest text-[#4b5563]">{loc.dist}</span>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 11: BOOKING CTA */}
      <section className="py-32 bg-[#f8f8f8] text-center px-4">
         <div className="max-w-3xl mx-auto">
            <div className="w-24 h-px bg-[#c9a96e] mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mb-6">Begin Your Journey to Luxury</h2>
            <p className="text-[#4b5563] text-lg mb-12 font-light">Experience the perfect blend of Nepalese hospitality and premium comfort.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button asChild className="rounded-none bg-[#c9a96e] text-white hover:bg-[#a07840] px-12 py-6 h-auto tracking-widest uppercase text-xs">
                 <Link href="/contact">Book Your Stay</Link>
               </Button>
               <Button asChild variant="outline" className="rounded-none border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white px-12 py-6 h-auto tracking-widest uppercase text-xs bg-transparent">
                 <Link href="/contact">Contact Us</Link>
               </Button>
            </div>
            <div className="w-24 h-px bg-[#c9a96e] mx-auto mt-12" />
         </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#111827]">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What are the check-in and check-out times?", a: "Check-in is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in and late check-out are subject to availability." },
              { q: "Do you provide airport transfer services?", a: "Yes, we offer premium airport pickup and drop-off services. Please contact our concierge at least 24 hours prior to your arrival to arrange this." },
              { q: "Is the spa available to non-guests?", a: "Yes, our Spa & Wellness center welcomes both hotel guests and visitors. Advance booking is highly recommended." },
              { q: "Do you have parking facilities?", a: "We provide secure complimentary parking for all our guests during their stay." },
              { q: "Is breakfast included in the room rate?", a: "Yes, a complimentary lavish breakfast at our Garden Restaurant is included with all room bookings." },
              { q: "What is your cancellation policy?", a: "Free cancellation is available up to 48 hours before the arrival date. Late cancellations or no-shows will be charged for the first night." }
            ].map((faq, i) => (
               <AccordionItem key={i} value={`item-${i}`} className="border-[#f0f0f0]">
                  <AccordionTrigger className="text-[#111827] font-serif text-lg hover:text-[#c9a96e] text-left">
                     {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4b5563] leading-relaxed font-light">
                     {faq.a}
                  </AccordionContent>
               </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}