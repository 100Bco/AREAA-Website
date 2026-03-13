import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Building, Award, ChevronRight, ChevronLeft, MapPin, BookOpen, Megaphone, Globe, Tag } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const detailedBenefits = [
  {
    title: "Networking Opportunities",
    description: "Connect with thousands of real estate professionals across the country.",
    icon: Users
  },
  {
    title: "Educational Resources",
    description: "Access to exclusive webinars, training sessions, and industry reports.",
    icon: BookOpen
  },
  {
    title: "Advocacy & Voice",
    description: "Be part of a unified voice advocating for AAPI homeownership rights.",
    icon: Megaphone
  },
  {
    title: "Global Reach",
    description: "Participate in global summits and connect with international investors.",
    icon: Globe
  },
  {
    title: "Exclusive Discounts",
    description: "Enjoy member-only discounts on events, certifications, and partner services.",
    icon: Tag
  },
  {
    title: "Leadership Development",
    description: "Opportunities to serve on local boards and national committees.",
    icon: Award
  }
];

const galleryImages = [
  "https://picsum.photos/seed/gal1/800/600",
  "https://picsum.photos/seed/gal2/600/800",
  "https://picsum.photos/seed/gal3/800/800",
  "https://picsum.photos/seed/gal4/1200/600",
  "https://picsum.photos/seed/gal5/600/600",
  "https://picsum.photos/seed/gal6/800/1000",
];

const memberLogos = [
  "/Gold-Comparion logo.png",
  "/Gold-Madison logo.png",
  "/Silver-AustinTiles logo.png",
  "/Silver-Conventus logo.jpg",
  "/Silver-Frost logo.png",
  "/Silver-SouthStarBank logo.png",
  "/Silver-Stewart logo.png",
  "/Silver-UnlockMLS logo.png",
  "/Silver-WellsFargo logo.png",
];

const upcomingEvents = [
  {
    id: 1,
    title: "AREAA Austin Spring Mixer",
    date: "April 15, 2026",
    time: "5:30 PM - 8:00 PM",
    location: "The Domain, Austin TX",
    image: "https://picsum.photos/seed/mixer/600/400",
  },
  {
    id: 2,
    title: "State of Asia America Report Briefing",
    date: "May 10, 2026",
    time: "11:30 AM - 1:30 PM",
    location: "Austin Board of Realtors",
    image: "https://picsum.photos/seed/report/600/400",
  },
  {
    id: 3,
    title: "Global Luxury Real Estate Summit",
    date: "June 22, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Fairmont Austin",
    image: "https://picsum.photos/seed/luxury/600/400",
  },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Modify 1.jpg"
            alt="Austin Skyline"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-areaa"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">The Voice of Real Estate</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1] [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
              Empowering Asian American <span className="text-areaa italic">Real Estate</span> Professionals
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
              Join the Greater Austin chapter of AREAA. We are dedicated to promoting sustainable homeownership opportunities in AAPI communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/membership">
                  Become a Member
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white/40 hover:bg-white hover:text-black">
                <Link to="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Member Logos Marquee */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Trusted by our esteemed sponsors and partners
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap items-center w-max">
            {[...memberLogos, ...memberLogos].map((logo, index) => (
              <div key={index} className="mx-12 flex-none w-48 h-24 relative transition-all duration-300 hover:scale-105">
                <img
                  src={logo}
                  alt={`Member Logo ${index}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
              Why Join AREAA Greater Austin?
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              We provide a platform for real estate professionals to connect, learn, and advocate for the AAPI community in Central Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {detailedBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6 border-t border-slate-100 hover:border-areaa transition-colors group"
              >
                <div className="mb-4 text-areaa">
                  <benefit.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                Upcoming Events
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                Join us at our upcoming networking mixers, educational seminars, and community outreach programs.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex text-areaa hover:text-areaa-dark hover:bg-transparent mt-6 md:mt-0 text-xs font-bold tracking-widest uppercase">
              <Link to="/events" className="flex items-center">
                View Calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-areaa shadow-sm">
                    {event.date.split(' ')[0]} {event.date.split(' ')[1].replace(',', '')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 group-hover:text-areaa transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-xs font-medium text-areaa">
                      <Calendar className="w-4 h-4 mr-3 shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-xs font-light text-slate-500">
                      <MapPin className="w-4 h-4 mr-3 shrink-0" />
                      {event.location}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors h-12 uppercase tracking-widest text-xs font-bold">
                    <Link to={`/events/${event.id}`}>Register Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" className="w-full text-areaa border-areaa hover:bg-areaa hover:text-white h-12 text-xs font-bold tracking-widest uppercase">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-left max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                Event Gallery
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                Take a look back at some of our most memorable moments and community gatherings.
              </p>
            </div>
            <div className="hidden md:flex gap-4 mt-6 md:mt-0">
              <button onClick={() => scroll('left')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors bg-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scroll('right')} className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors bg-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="relative -mx-4 sm:mx-0">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 snap-x snap-mandatory px-4 sm:px-0 pb-8 hide-scrollbar"
            >
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[85vw] sm:w-[320px] lg:w-[380px] shrink-0 snap-center rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={img}
                    alt={`Event Gallery ${index + 1}`}
                    className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="w-full sm:w-auto text-areaa border-areaa hover:bg-areaa hover:text-white h-12 px-8 uppercase tracking-widest text-xs font-bold">
              <Link to="/events">See All Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1500"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4 tracking-tight leading-tight">Ready to elevate your real estate career?</h2>
          <p className="text-base md:text-lg text-slate-300 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
            Join AREAA Greater Austin today and become part of a national network of over 19,000 real estate professionals.
          </p>
          <Button asChild size="lg" className="h-12 px-10 uppercase tracking-widest text-xs font-bold">
            <Link to="/membership">Join AREAA Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
