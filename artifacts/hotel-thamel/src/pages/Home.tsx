import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, MapPin, Coffee, Wifi, Car, Users, Briefcase, ChevronRight, Wind, Droplet,
  Tv, Bath, CheckCircle, ShieldCheck, Dumbbell, Calendar, Heart, 
  Map, Plane, Stethoscope, Utensils,
  Clock
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    <div className="min-h-screen">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] flex items-center justify-center aurora-bg overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-primary tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-semibold">
              Oasis in the Heart of Kathmandu
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
              Experience Luxury, <br/>
              <span className="text-gradient-gold italic">Wellness & Comfort</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Discover unparalleled serenity at Hotel Thamel Park Spa. Combining premium hospitality with authentic Korean wellness traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="h-14 px-10 rounded-none bg-primary text-primary-foreground hover:bg-accent hover:text-white transition-all text-sm uppercase tracking-widest font-semibold border border-primary hover:border-accent">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/rooms">
                <Button variant="outline" className="h-14 px-10 rounded-none bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all text-sm uppercase tracking-widest">
                  Explore Rooms
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background to-transparent pb-10 pt-32 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              {[
                { number: "45+", label: "Premium Rooms" },
                { number: "20+", label: "Spa Services" },
                { number: "10,000+", label: "Happy Guests" },
                { number: "15+", label: "Years of Hospitality" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="glass-panel p-6 text-center border-t-primary/30 border-t-2"
                >
                  <div className="text-3xl font-serif text-primary mb-1">{stat.number}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WELCOME */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative"
            >
              <div className="w-full aspect-square md:aspect-[4/5] bg-card border border-border/50 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="w-3/4 h-3/4 border border-primary/20 rounded-full flex items-center justify-center p-8">
                  <div className="w-full h-full border border-primary/40 rounded-full flex items-center justify-center">
                     <span className="font-serif text-6xl text-primary/20">HTPS</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-card border border-border/50 glass-panel flex items-center justify-center p-6 hidden md:flex flex-col text-center z-10">
                <Star className="text-primary mb-2" size={24} />
                <span className="font-serif text-xl">5-Star</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Experience</span>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Our Philosophy</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">A Sanctuary of <span className="italic text-muted-foreground">Elegance</span> in Kathmandu</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
                Nestled in the vibrant heart of Thamel, Hotel Thamel Park Spa offers a rare combination of bustling city access and tranquil retreat. Since our inception, we have been dedicated to redefining luxury hospitality in Nepal.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                Our unique incorporation of traditional Korean wellness culture into our spa services provides an unparalleled relaxation experience, while our Garden Restaurant serves culinary masterpieces in a serene outdoor setting.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-primary hover:text-white p-0 text-lg group h-auto">
                  Discover Our Story <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Why Stay With Us</h3>
            <h2 className="text-4xl font-serif">Unmatched Amenities</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: MapPin, title: "Prime Location", desc: "Heart of Thamel, walking distance to heritage sites" },
              { icon: Wind, title: "Korean Spa", desc: "Authentic steam, sauna, and wellness therapies" },
              { icon: Coffee, title: "Garden Restaurant", desc: "Serene dining with international & local cuisine" },
              { icon: Star, title: "Modern Rooms", desc: "Premium comforts with Himalayan-inspired decor" },
              { icon: Wifi, title: "Free WiFi", desc: "Complimentary reliable connectivity throughout" },
              { icon: Plane, title: "Airport Assistance", desc: "Seamless transfers and travel concierge" },
              { icon: Users, title: "Family Friendly", desc: "Spacious suites and dedicated kids services" },
              { icon: Briefcase, title: "Business Friendly", desc: "Meeting rooms and executive amenities" }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="bg-background/50 border-border/50 hover:border-primary/50 transition-colors group h-full">
                  <CardContent className="p-8">
                    <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h4 className="text-xl font-serif mb-3">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* SECTION 4: ROOM CATEGORIES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Accommodation</h3>
              <h2 className="text-4xl font-serif">Luxurious Rooms & Suites</h2>
            </div>
            <Link href="/rooms">
              <Button variant="outline" className="border-border hover:bg-card uppercase tracking-widest text-xs h-12 px-6">
                View All Rooms
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Deluxe Room", price: "$120", desc: "Elegant retreat with modern amenities.", amenities: [Wifi, Tv, Wind, Bath] },
              { name: "Premium Deluxe Room", price: "$160", desc: "Spacious comfort with enhanced city views.", amenities: [Wifi, Coffee, ShieldCheck, Bath] },
              { name: "Family Room", price: "$220", desc: "Perfect for families, featuring interconnected spaces.", amenities: [Wifi, Tv, Coffee, Users] },
              { name: "Executive Room", price: "$280", desc: "The pinnacle of luxury with separate living areas.", amenities: [Wifi, Coffee, Wind, Star] }
            ].map((room, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-all overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-background to-primary/5 flex items-center justify-center border-b border-border/50 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="font-serif text-2xl text-white/30 tracking-wider uppercase">{room.name}</span>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif text-white">{room.name}</h3>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">From</div>
                        <div className="text-primary font-serif text-xl">{room.price} <span className="text-xs text-muted-foreground font-sans">/night</span></div>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-light mb-6 text-sm">{room.desc}</p>
                    <div className="flex items-center gap-4 mb-8">
                      {room.amenities.map((Icon, idx) => (
                        <Icon key={idx} className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-accent rounded-none uppercase tracking-widest text-xs h-12">
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: KOREAN SPA EXPERIENCE */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Wellness Sanctuary</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Authentic Korean <br/>Spa Experience</h2>
              <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                Rejuvenate your body and soul in our dedicated Korean Spa. The first of its kind in Kathmandu, offering centuries-old wellness traditions blended with modern luxury therapies.
              </p>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-10">
                {[
                  "Traditional Korean Wellness", "Sauna & Heat Therapy", 
                  "Steam Therapy", "Relaxation Area", 
                  "Massage Therapies", "Wellness Packages"
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/spa">
                <Button className="rounded-none bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs h-12 px-8">
                  Explore Spa Menu
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-background border border-border/50 aspect-square p-6 flex flex-col items-center justify-center text-center">
                <Wind className="w-10 h-10 text-primary mb-4" strokeWidth={1} />
                <h4 className="font-serif text-lg mb-2">Heat Therapy</h4>
                <p className="text-xs text-muted-foreground font-light">Purify and detoxify</p>
              </div>
              <div className="bg-background border border-border/50 aspect-square p-6 flex flex-col items-center justify-center text-center mt-8">
                <Droplet className="w-10 h-10 text-primary mb-4" strokeWidth={1} />
                <h4 className="font-serif text-lg mb-2">Steam Room</h4>
                <p className="text-xs text-muted-foreground font-light">Clear respiratory passages</p>
              </div>
              <div className="bg-background border border-border/50 aspect-square p-6 flex flex-col items-center justify-center text-center">
                <Heart className="w-10 h-10 text-primary mb-4" strokeWidth={1} />
                <h4 className="font-serif text-lg mb-2">Massage</h4>
                <p className="text-xs text-muted-foreground font-light">Deep tissue relaxation</p>
              </div>
              <div className="bg-background border border-border/50 aspect-square p-6 flex flex-col items-center justify-center text-center mt-8">
                <Star className="w-10 h-10 text-primary mb-4" strokeWidth={1} />
                <h4 className="font-serif text-lg mb-2">Relaxation</h4>
                <p className="text-xs text-muted-foreground font-light">Unwind in tranquility</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: GARDEN RESTAURANT */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Culinary Excellence</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Garden Restaurant</h2>
            <p className="text-muted-foreground font-light text-lg">
              Experience dining in an urban oasis. Our master chefs prepare exquisite dishes that blend local Nepalese flavors, authentic Korean cuisine, and international favorites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Indoor Dining", desc: "Elegant ambient setting", icon: Utensils },
              { title: "Garden Seating", desc: "Al fresco under the stars", icon: Wind },
              { title: "Korean Cuisine", desc: "Authentic imported flavors", icon: Coffee },
              { title: "Nepali & Global", desc: "Diverse culinary options", icon: Star }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-64 border border-border/50 bg-card p-8 flex flex-col items-center justify-center text-center hover:bg-card/80 hover:border-primary/50 transition-all relative overflow-hidden">
                  <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
                  <h4 className="text-xl font-serif text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/restaurant">
              <Button className="rounded-none bg-primary text-primary-foreground hover:bg-accent uppercase tracking-widest text-xs h-12 px-8">
                View Menus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOTEL FACILITIES */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Complete Experience</h3>
            <h2 className="text-4xl font-serif">Comprehensive Facilities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {[
              { icon: Droplet, label: "Pool" },
              { icon: Dumbbell, label: "Gym" },
              { icon: Users, label: "Conference Room" },
              { icon: Clock, label: "24hr Reception" },
              { icon: Wind, label: "Laundry" },
              { icon: Coffee, label: "Room Service" },
              { icon: Star, label: "Bar" },
              { icon: Briefcase, label: "Business Center" },
              { icon: Map, label: "Garden" },
              { icon: Car, label: "Parking" },
              { icon: Plane, label: "Airport Transfer" },
              { icon: Stethoscope, label: "Doctor on Call" }
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background/50 border border-border/50 p-6 flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors"
              >
                <facility.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest text-gray-400">{facility.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: GUEST TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Guest Voices</h3>
            <h2 className="text-4xl font-serif">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", country: "United Kingdom", text: "An absolute gem in Thamel. The Korean spa was exactly what we needed after our trek in the Himalayas. The level of service is impeccable.", rating: 5 },
              { name: "James W.", country: "Australia", text: "Beautifully designed rooms that offer a quiet sanctuary from the busy streets outside. The garden restaurant serves incredible food.", rating: 5 },
              { name: "Min-ji K.", country: "South Korea", text: "I was surprised to find such an authentic Korean spa in Kathmandu. The facilities are top-tier and the hospitality is truly heartwarming.", rating: 5 }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card p-8 border border-border/50 relative"
              >
                <div className="absolute -top-4 right-8 bg-background p-2 border border-border/50 rounded-full text-primary">
                  <Star className="w-4 h-4 fill-primary" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground font-light italic mb-8">"{review.text}"</p>
                <div>
                  <div className="font-serif text-lg text-white">{review.name}</div>
                  <div className="text-xs uppercase tracking-widest text-primary">{review.country}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LOCATION ADVANTAGES */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-background p-8 border border-border/50">
                <MapPin className="text-primary w-8 h-8 mb-4" />
                <h4 className="font-serif text-xl mb-2 text-white">Central Thamel</h4>
                <p className="text-sm text-muted-foreground font-light">Steps away from premier shopping and dining.</p>
              </div>
              <div className="bg-background p-8 border border-border/50 mt-8">
                <Star className="text-primary w-8 h-8 mb-4" />
                <h4 className="font-serif text-xl mb-2 text-white">Heritage Sites</h4>
                <p className="text-sm text-muted-foreground font-light">Short drive to Swayambhunath & Durbar Square.</p>
              </div>
              <div className="bg-background p-8 border border-border/50">
                <Car className="text-primary w-8 h-8 mb-4" />
                <h4 className="font-serif text-xl mb-2 text-white">Easy Transit</h4>
                <p className="text-sm text-muted-foreground font-light">Accessible taxi stand and airport shuttles.</p>
              </div>
              <div className="bg-background p-8 border border-border/50 mt-8">
                <ShieldCheck className="text-primary w-8 h-8 mb-4" />
                <h4 className="font-serif text-xl mb-2 text-white">Safe District</h4>
                <p className="text-sm text-muted-foreground font-light">Located in the most tourist-friendly area.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Location</h3>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">The Perfect Base for<br/>Your Adventures</h2>
              <p className="text-muted-foreground text-lg mb-8 font-light leading-relaxed">
                Hotel Thamel Park Spa is strategically situated to offer you the best of Kathmandu. Whether you're preparing for a Himalayan trek or exploring ancient temples, you'll find yourself at the center of it all.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs h-12 px-8">
                  View Map & Directions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10: BOOKING CTA (Gradient Bar) */}
      <section className="py-20 aurora-bg border-y border-border/50">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Ready to Experience True Luxury?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Book directly through our website to receive the best rates, complimentary upgrades when available, and exclusive spa access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-none uppercase tracking-widest text-sm h-14 px-10">
                Book Your Stay
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none uppercase tracking-widest text-sm h-14 px-10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-primary tracking-[0.2em] text-sm uppercase mb-4">Information</h3>
            <h2 className="text-4xl font-serif">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What time is check-in and check-out?", a: "Standard check-in time is 2:00 PM, and check-out is at 12:00 PM (noon). Early check-in or late check-out can be arranged subject to availability." },
              { q: "Do you provide airport transportation?", a: "Yes, we offer premium airport pickup and drop-off services. Please contact our concierge with your flight details at least 24 hours in advance." },
              { q: "Is the Korean Spa included in the room rate?", a: "Access to basic spa facilities (sauna/steam) is complimentary for Executive Suite guests. Other guests may purchase spa passes or book specific treatments." },
              { q: "Do you have vegetarian/vegan options at the restaurant?", a: "Absolutely. Our Garden Restaurant features extensive vegetarian and vegan menus, utilizing fresh, locally-sourced organic ingredients." },
              { q: "Are pets allowed at the hotel?", a: "While we love animals, to maintain the tranquil spa environment and cater to guests with allergies, we currently do not allow pets on the property." },
              { q: "Can the hotel help arrange local tours or trekking?", a: "Yes, our dedicated travel desk can assist you with booking city tours, mountain flights, and reputable trekking guides." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 12: FINAL BANNER */}
      <section className="py-32 bg-card relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto border border-primary/20 glass-panel p-12 md:p-20"
          >
            <Star className="text-primary w-12 h-12 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Your Sanctuary Awaits</h2>
            <p className="text-muted-foreground text-lg mb-10 font-light">
              Elevate your Kathmandu experience. Immerse yourself in luxury, discover Korean wellness, and create unforgettable memories at Hotel Thamel Park Spa.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-accent rounded-none uppercase tracking-widest text-sm h-14 px-12">
                Reserve Your Experience
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
