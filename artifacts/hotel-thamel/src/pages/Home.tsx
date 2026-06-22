import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, MapPin, Coffee, Wifi, Users, ChevronRight, Wind, Droplet,
  Tv, Bath, ShieldCheck, Dumbbell, Calendar, Heart, 
  Plane, Utensils, Key, UtensilsCrossed, Flame, Sparkles, Leaf
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] overflow-hidden bg-gradient-to-br from-[#faf8f4] via-[#f7f4ee] to-[#efe9dd]">
        
        {/* Subtle dot pattern & Orbs */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Abstract Art Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <div className="font-serif text-primary/10" style={{ fontSize: '40vw', lineHeight: 1 }}>H</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[60%] h-[60%] border border-primary/20 rounded-full absolute" />
             <div className="w-[80%] h-[80%] border border-primary/10 rounded-full absolute" />
             <Star className="absolute top-[20%] left-[30%] text-primary/30 w-8 h-8" />
             <Leaf className="absolute bottom-[30%] right-[20%] text-primary/30 w-10 h-10" />
             <Wind className="absolute top-[50%] right-[10%] text-primary/30 w-6 h-6" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-32 left-0 right-0 z-10 px-6 md:px-14 lg:px-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-medium">THAMEL · KATHMANDU · NEPAL</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-foreground leading-[1.1] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Experience Luxury,<br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#B8860B]">Wellness & Comfort</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
               <p className="font-serif text-xl md:text-2xl text-foreground/70 italic">at Hotel Thamel Park Spa</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col md:flex-row md:items-center gap-8 mb-4">
              <p className="text-foreground/80 max-w-md text-lg font-light leading-relaxed">
                A sanctuary of luxury, wellness and culture in Kathmandu's heart.
              </p>
              <div className="flex gap-4">
                <Button asChild data-testid="hero-btn-book" className="rounded-none bg-primary text-white hover:bg-primary/90 px-8 py-6 h-auto tracking-widest uppercase text-xs">
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button asChild data-testid="hero-btn-explore" variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-6 h-auto tracking-widest uppercase text-xs bg-transparent">
                  <Link href="/rooms">Explore Rooms</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="absolute bottom-20 left-0 right-0 z-20 px-6 md:px-14 lg:px-20 hidden md:flex items-center gap-12"
        >
          {[
            { label: "Rooms", val: "45+" },
            { label: "Spa Services", val: "20+" },
            { label: "Guests", val: "10,000+" },
            { label: "Years", val: "15+" }
          ].map((s, i) => (
             <div key={i} className="flex items-center gap-6">
                <div>
                   <div className="font-serif text-2xl text-primary">{s.val}</div>
                   <div className="text-[10px] uppercase tracking-widest text-foreground/50">{s.label}</div>
                </div>
                {i < 3 && <div className="w-px h-8 bg-foreground/10" />}
             </div>
          ))}
        </motion.div>

        {/* Booking Bar */}
        <motion.div 
          initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="absolute bottom-0 left-0 right-0 z-30 bg-white border-t border-border flex flex-col md:flex-row"
        >
           {[
             { label: "Check In", icon: Calendar },
             { label: "Check Out", icon: Calendar },
             { label: "Room Type", icon: Key },
             { label: "Guests", icon: Users }
           ].map((item, i) => (
              <div key={i} className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-border hover:bg-secondary/50 cursor-pointer transition-colors" data-testid={`booking-bar-${i}`}>
                 <item.icon className="text-primary w-5 h-5" />
                 <div>
                    <div className="text-[10px] uppercase tracking-widest text-primary font-medium">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">Select</div>
                 </div>
              </div>
           ))}
           <div className="p-4 flex items-center justify-center shrink-0">
             <Button asChild data-testid="booking-bar-btn" className="w-full md:w-auto rounded-none bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs px-8 py-4 h-auto">
               <Link href="/contact">Check Availability</Link>
             </Button>
           </div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT / PHILOSOPHY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
               <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-6 font-medium">Our Philosophy</h3>
               <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                 A Sanctuary of Elegance in the Heart of Kathmandu
               </h2>
               <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                 Nestled in the vibrant heart of Thamel, Hotel Thamel Park Spa offers a rare combination of bustling city access and tranquil retreat. We redefine luxury hospitality by seamlessly blending modern comforts with authentic Nepalese warmth.
               </p>
               <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                 From our premium accommodations to our dedicated wellness spa, every detail is crafted to provide an unparalleled experience for the discerning traveler.
               </p>
               <Button asChild data-testid="about-link" variant="link" className="text-primary hover:text-primary/80 p-0 text-lg group h-auto">
                 <Link href="/about">
                   Discover Our Story <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </Link>
               </Button>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                 <span className="font-serif text-secondary/40" style={{ fontSize: '20rem', lineHeight: 0.8 }}>HTPS</span>
               </div>
               
               <div className="relative z-10 w-full max-w-md bg-secondary/80 backdrop-blur-sm p-10 border-l-4 border-primary shadow-xl">
                 <QuoteIcon className="text-primary/40 w-12 h-12 mb-6" />
                 <p className="font-serif text-xl text-foreground italic mb-6 leading-relaxed">
                   "Our vision was to create a space where the chaos of the city fades away, leaving only peace, comfort, and extraordinary service."
                 </p>
                 <div className="text-sm tracking-widest uppercase text-primary font-medium">— Management</div>
               </div>

               <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-6 pt-12">
                  {[
                    { title: "Luxury", icon: Star },
                    { title: "Wellness", icon: Heart },
                    { title: "Authenticity", icon: MapPin },
                    { title: "Hospitality", icon: Users }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <item.icon className="text-primary w-5 h-5" />
                       <span className="text-sm font-medium tracking-wider uppercase text-foreground">{item.title}</span>
                    </div>
                  ))}
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ROOM CATEGORIES */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4 font-medium">Accommodation</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Luxurious Rooms & Suites</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { name: "Deluxe Room", price: "120", desc: "Elegant retreat with modern amenities and comfort.", amenities: [Wifi, Tv, Wind, Bath] },
              { name: "Premium Deluxe", price: "160", desc: "Spacious comfort with enhanced city views.", amenities: [Wifi, Coffee, ShieldCheck, Bath] },
              { name: "Family Room", price: "220", desc: "Perfect for families, featuring interconnected spaces.", amenities: [Wifi, Tv, Coffee, Users] },
              { name: "Executive Room", price: "280", desc: "The pinnacle of luxury with separate living areas.", amenities: [Wifi, Coffee, Wind, Star] }
            ].map((room, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white border-t-4 border-t-primary border-x-0 border-b-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full rounded-none">
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-serif text-foreground mb-4">{room.name}</h3>
                    <p className="text-muted-foreground text-sm font-light mb-6 flex-grow">{room.desc}</p>
                    
                    <div className="flex gap-4 mb-8">
                      {room.amenities.map((Icon, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-end justify-between mt-auto">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">From</div>
                        <div className="font-serif text-2xl text-primary">${room.price}<span className="text-sm font-sans text-muted-foreground">/night</span></div>
                      </div>
                      <Button asChild data-testid={`room-btn-${i}`} variant="ghost" className="text-foreground hover:text-primary hover:bg-transparent p-0 uppercase tracking-widest text-xs font-medium">
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-6 font-medium">Spa & Wellness</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                Restore. Renew. Revive.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                Discover an oasis of tranquility within the city. Our premium Spa offers a holistic approach to wellness, combining ancient therapeutic traditions with modern luxury treatments.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                Let our expert therapists guide you on a journey of complete relaxation, restoring balance to your mind, body, and spirit in our state-of-the-art facilities.
              </p>

              <div className="space-y-4 mb-10">
                {["Sauna & Steam Therapy", "Relaxation Area", "Massage Therapy", "Wellness Packages", "Couples Experience"].map((service, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild data-testid="spa-btn" className="rounded-none bg-primary text-white hover:bg-primary/90 px-8 py-6 h-auto tracking-widest uppercase text-xs">
                <Link href="/spa">Discover Treatments</Link>
              </Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-7 relative h-[600px] w-full bg-gradient-to-br from-secondary to-[#fcfaf5] rounded-3xl overflow-hidden flex items-center justify-center shadow-lg border border-border/50">
               {/* Abstract Spa Art */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] border-[0.5px] border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="w-[60%] h-[60%] border-[0.5px] border-primary/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                  <div className="w-[40%] h-[40%] bg-primary/5 rounded-full" />
               </div>
               
               <Droplet className="absolute top-[30%] left-[20%] w-16 h-16 text-primary/40 animate-pulse" />
               <Wind className="absolute bottom-[20%] right-[30%] w-20 h-20 text-primary/30" />
               <Leaf className="absolute top-[40%] right-[20%] w-12 h-12 text-primary/50" />
               <Sparkles className="absolute bottom-[40%] left-[30%] w-10 h-10 text-primary/40" />
               
               <div className="relative z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                 <span className="font-serif text-primary text-2xl">SPA</span>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: GARDEN RESTAURANT */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-2 lg:order-1 relative aspect-square bg-white rounded-t-full flex items-center justify-center border border-border/50 shadow-sm">
               {/* Abstract Restaurant Art */}
               <div className="absolute inset-0 flex items-center justify-center flex-col gap-8">
                  <div className="w-[70%] h-[70%] border border-primary/20 rounded-t-full absolute top-0" />
                  <UtensilsCrossed className="w-24 h-24 text-primary/30" strokeWidth={1} />
                  <div className="flex gap-4">
                     <Coffee className="w-8 h-8 text-primary/40" />
                     <Flame className="w-8 h-8 text-primary/40" />
                  </div>
               </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2">
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-6 font-medium">Garden Restaurant</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                Flavors of the World, Soul of Nepal
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                Dine in our lush garden setting where culinary excellence meets serene ambiance. Our masterful chefs create extraordinary dishes using the finest local ingredients and international techniques.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Nepali Cuisine", "International", "Breakfast", "Garden Dining"].map((tag, i) => (
                   <span key={i} className="px-6 py-2 border border-primary/20 text-primary text-sm tracking-widest uppercase bg-white rounded-full">
                     {tag}
                   </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                 {[
                   { title: "Fine Dining", desc: "Exquisite multi-course meals", icon: Utensils },
                   { title: "Cafe & Lounge", desc: "Artisan coffee and pastries", icon: Coffee }
                 ].map((item, i) => (
                   <div key={i} className="bg-white p-6 border border-border hover:border-primary transition-colors">
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-serif text-xl text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                   </div>
                 ))}
              </div>

              <Button asChild data-testid="restaurant-btn" variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto tracking-widest uppercase text-xs">
                <Link href="/restaurant">View Menu</Link>
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 6: HOTEL FACILITIES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4 font-medium">Amenities</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Premium Facilities</h2>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {[
               { icon: Droplet, label: "Pool" },
               { icon: Dumbbell, label: "Gym" },
               { icon: Calendar, label: "24/7 Reception" },
               { icon: Wind, label: "Spa" },
               { icon: Utensils, label: "Restaurant" },
               { icon: Wifi, label: "Free WiFi" },
               { icon: ShieldCheck, label: "Parking" },
               { icon: Plane, label: "Airport Transfer" },
               { icon: Heart, label: "Laundry" },
               { icon: Coffee, label: "Room Service" },
               { icon: Users, label: "Business Center" },
               { icon: Heart, label: "Doctor on Call" }
             ].map((fac, i) => (
               <motion.div key={i} variants={fadeInUp}>
                 <div className="bg-secondary/50 p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group h-full">
                    <fac.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                    <span className="font-serif text-lg text-foreground">{fac.label}</span>
                 </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: GUEST EXPERIENCE */}
      <section className="py-32 bg-accent relative overflow-hidden">
        {/* Subtle accent background lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="w-full h-[1px] bg-primary absolute top-1/4" />
           <div className="w-full h-[1px] bg-primary absolute top-3/4" />
           <div className="w-[1px] h-full bg-primary absolute left-1/3" />
           <div className="w-[1px] h-full bg-primary absolute right-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center text-center text-white mb-20">
             <div className="w-12 h-px bg-primary mb-8" />
             <h2 className="text-4xl md:text-6xl font-serif mb-6">A Legacy of Excellence</h2>
             <p className="text-white/70 max-w-2xl text-lg font-light">Celebrating years of creating unforgettable memories and setting the standard for luxury in Kathmandu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
             <div>
               <div className="text-5xl md:text-7xl font-serif text-primary mb-4">10K+</div>
               <div className="text-sm tracking-widest uppercase text-white/60">Happy Guests</div>
             </div>
             <div>
               <div className="text-5xl md:text-7xl font-serif text-primary mb-4">4.9★</div>
               <div className="text-sm tracking-widest uppercase text-white/60">Average Rating</div>
             </div>
             <div>
               <div className="text-5xl md:text-7xl font-serif text-primary mb-4">15+</div>
               <div className="text-sm tracking-widest uppercase text-white/60">Years of Service</div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {["Unmatched Service", "Prime Location", "Holistic Wellness"].map((val, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm text-center hover:bg-white/10 transition-colors">
                   <h3 className="font-serif text-2xl text-white">{val}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4 font-medium">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "An absolute oasis in the middle of Thamel. The rooms are stunning, the service is impeccable, and the spa is not to be missed.", name: "Sarah Jenkins", country: "United Kingdom" },
              { text: "The perfect start and end to our Everest trek. Pure luxury, wonderful food, and the most accommodating staff we've ever encountered.", name: "Michael Chen", country: "Australia" },
              { text: "Five-star experience from check-in to check-out. The attention to detail here is extraordinary. Highly recommended.", name: "Elena Rossi", country: "Italy" }
            ].map((review, i) => (
               <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}>
                 <Card className="bg-white border-none shadow-md hover:shadow-xl transition-shadow p-8 h-full rounded-none">
                    <div className="text-primary text-6xl font-serif leading-none opacity-20 mb-4">"</div>
                    <div className="flex text-primary mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-foreground/80 font-serif text-lg italic mb-8 flex-grow">"{review.text}"</p>
                    <div>
                      <div className="font-medium text-foreground tracking-wide uppercase text-sm">{review.name}</div>
                      <div className="text-muted-foreground text-xs">{review.country}</div>
                    </div>
                 </Card>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: GALLERY PREVIEW (Decorative Mosaic) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">A Visual Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">Explore the essence of Hotel Thamel Park Spa through our conceptual luxury mosaic.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-16 auto-rows-[150px]">
             {[
               { type: "text", content: "Serenity", col: 2, row: 1, bg: "bg-secondary" },
               { type: "icon", icon: Wind, col: 1, row: 1, bg: "bg-primary/10" },
               { type: "icon", icon: Star, col: 1, row: 2, bg: "bg-primary text-white" },
               { type: "text", content: "Wellness", col: 2, row: 2, bg: "bg-white border border-border" },
               { type: "pattern", col: 1, row: 1, bg: "bg-secondary" },
               { type: "text", content: "Heritage", col: 2, row: 1, bg: "bg-primary/5" },
               { type: "icon", icon: Leaf, col: 1, row: 2, bg: "bg-secondary" },
               { type: "text", content: "Comfort", col: 1, row: 1, bg: "bg-primary/20" },
               { type: "pattern", col: 2, row: 2, bg: "bg-primary/10" },
               { type: "text", content: "Elegance", col: 1, row: 1, bg: "bg-white border border-border" },
               { type: "icon", icon: Coffee, col: 1, row: 1, bg: "bg-primary text-white" },
               { type: "text", content: "Kathmandu", col: 3, row: 1, bg: "bg-secondary" },
             ].map((tile, i) => (
                <div key={i} className={`flex items-center justify-center p-6 ${tile.bg}`} style={{ gridColumn: `span ${tile.col}`, gridRow: `span ${tile.row}` }}>
                   {tile.type === "text" && <span className="font-serif text-2xl">{tile.content}</span>}
                   {tile.type === "icon" && tile.icon && <tile.icon className="w-12 h-12 opacity-80" strokeWidth={1} />}
                   {tile.type === "pattern" && <div className="w-full h-full opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 10px)' }} />}
                </div>
             ))}
          </div>

          <div className="text-center">
             <Button data-testid="gallery-btn" variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-white px-10 py-6 h-auto tracking-widest uppercase text-xs">
                View Full Gallery
             </Button>
          </div>
        </div>
      </section>

      {/* SECTION 10: LOCATION */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
               <div className="aspect-square md:aspect-[4/3] w-full bg-white p-2 border border-border shadow-sm">
                  <iframe 
                    title="Location Map"
                    src="https://maps.google.com/maps?q=Thamel+Kathmandu+Nepal&output=embed" 
                    className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
               </div>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
               <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-6 font-medium">Prime Location</h3>
               <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-10">In the Heart of Thamel</h2>
               
               <div className="space-y-6">
                 {[
                   { title: "Pashupatinath Temple", dist: "15 min drive", icon: MapPin },
                   { title: "Boudhanath Stupa", dist: "20 min drive", icon: MapPin },
                   { title: "Thamel Shopping", dist: "2 min walk", icon: MapPin },
                   { title: "Tribhuvan Airport", dist: "30 min drive", icon: Plane }
                 ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-6 bg-white p-6 border border-border/50 hover:border-primary/30 transition-colors">
                       <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                         <loc.icon className="text-primary w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-serif text-lg text-foreground">{loc.title}</h4>
                         <span className="text-sm text-primary tracking-widest uppercase">{loc.dist}</span>
                       </div>
                    </div>
                 ))}
               </div>
             </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 11: BOOKING CTA */}
      <section className="py-32 bg-accent relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,172,12,0.15)_0%,transparent_60%)]" />
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Begin Your Journey to Luxury</h2>
            <p className="text-white/80 text-xl font-light max-w-2xl mx-auto mb-12">Experience the perfect blend of Nepalese hospitality and premium wellness.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild data-testid="cta-btn-book" className="w-full sm:w-auto rounded-none bg-primary text-white hover:bg-primary/90 px-10 py-6 h-auto tracking-widest uppercase text-sm">
                <Link href="/contact">Book Your Stay</Link>
              </Button>
              <Button asChild data-testid="cta-btn-contact" variant="outline" className="w-full sm:w-auto rounded-none border-white text-white hover:bg-white hover:text-accent px-10 py-6 h-auto tracking-widest uppercase text-sm bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
         </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4 font-medium">Information</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
             {[
               { q: "What are the check-in and check-out times?", a: "Check-in is from 2:00 PM, and check-out is until 12:00 PM (noon). Early check-in and late check-out are subject to availability." },
               { q: "Is access to the Spa included in the room rate?", a: "Access to the general spa facilities (sauna, steam) is included for Premium Deluxe and above. Treatments and massages are charged separately." },
               { q: "Do you provide airport transfer services?", a: "Yes, we provide luxury airport transfers. Please contact our concierge at least 24 hours prior to your arrival to arrange this service." },
               { q: "What is your pet policy?", a: "While we love animals, to maintain the serene environment and accommodate guests with allergies, pets are not permitted on the property." },
               { q: "What is the cancellation policy?", a: "Cancellations made 48 hours prior to arrival are fully refundable. Late cancellations or no-shows will be charged for the first night." },
               { q: "Is parking available at the hotel?", a: "Yes, we offer complimentary secure valet parking for all our registered guests." }
             ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-secondary/30 border border-border px-6">
                  <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary hover:no-underline text-left py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base font-light">
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

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
