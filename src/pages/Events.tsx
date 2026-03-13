import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const galleryImages = [
  "https://picsum.photos/seed/gal1/800/600",
  "https://picsum.photos/seed/gal2/600/800",
  "https://picsum.photos/seed/gal3/800/800",
  "https://picsum.photos/seed/gal4/1200/600",
  "https://picsum.photos/seed/gal5/600/600",
  "https://picsum.photos/seed/gal6/800/1000",
];

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Crawfish Boil and Build 2026",
    date: "March 25, 2026 at 11:00 PM",
    location: "LT Commercial Group",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=800&auto=format&fit=crop",
    description: "BACK BY POPULAR DEMAND! Join AREAA Greater Austin for our beloved Annual Crawfish Boil and Build! This is one of our most popular community events of the year — great food, great company, and great networking. Come hungry and ready to connect with Austin's top real estate professionals in a fun...",
    type: "NETWORKING",
    featured: true
  },
  {
    id: 2,
    title: "Spring Networking Mixer 2026",
    date: "April 16, 2026 at 1:30 AM",
    location: "The Domain, Austin, TX",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    description: "Join us for our premier spring networking event bringing together Austin's top Asian real estate professionals, investors, and community leaders. Connect, share insights, and build lasting relationships over cocktails and light bites at a stunning downtown venue.",
    type: "NETWORKING",
    featured: true
  },
  {
    id: 3,
    title: "Home Buying Workshop: Navigating the Austin Market",
    date: "May 10, 2026 at 5:00 PM",
    location: "Austin Central Library",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    description: "An educational workshop designed to help Asian American homebuyers navigate Austin's competitive real estate market. Topics include financing options, market trends, neighborhood insights, and the advantages of working with an AREAA professional.",
    type: "EDUCATION",
    featured: true
  },
  {
    id: 4,
    title: "AREAA Greater Austin Annual Gala 2026",
    date: "June 8, 2026 at 1:00 AM",
    location: "JW Marriott Austin",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
    description: "Our most prestigious event of the year! The Annual Gala celebrates the achievements of our members and the growth of the Asian American real estate community in Greater Austin. An evening of elegance, dinner, awards, and live entertainment.",
    type: "GALA",
    featured: true
  },
];

export default function Events() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("upcoming");

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-950 text-white h-[480px] md:h-[520px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10">
          <img
            src="/Modify 3.jpg"
            alt="Austin Events"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_20%,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-tight">Events<br />Calendar</h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              Stay connected and grow your business by attending our upcoming events, seminars, and networking mixers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 border-b border-slate-100 pb-8">
              <div className="bg-slate-50 p-1.5 rounded-2xl flex border border-slate-100">
                <button 
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-8 py-3 rounded-xl transition-all uppercase tracking-widest text-[10px] font-bold ${activeTab === 'upcoming' ? 'bg-white text-areaa shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Upcoming Events
                </button>
                <button 
                  onClick={() => setActiveTab("past")}
                  className={`px-8 py-3 rounded-xl transition-all uppercase tracking-widest text-[10px] font-bold ${activeTab === 'past' ? 'bg-white text-areaa shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Past Highlights
                </button>
              </div>
              
              <div className="flex items-center text-slate-400 group cursor-default">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                   {activeTab === 'upcoming' ? upcomingEvents.length : "Gallery"} Items
                </p>
              </div>
            </div>

            {activeTab === 'upcoming' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-areaa shadow-sm">
                        {event.date.split(' ')[0]} {event.date.split(' ')[1].replace(',', '')}
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-areaa transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center text-xs font-medium text-areaa">
                          <Calendar className="w-4 h-4 mr-3 shrink-0" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-xs font-light text-slate-500">
                          <MapPin className="w-4 h-4 mr-3 shrink-0" />
                          {event.location}
                        </div>
                      </div>
                      <Button asChild variant="outline" className="w-full h-14 border-slate-200 text-slate-900 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all rounded-2xl uppercase tracking-widest text-[10px] font-bold">
                        <Link to={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                 <p className="text-slate-400 font-light">See our gallery below for past event highlights.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <div className="bg-slate-50 py-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-left max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">Event Gallery</h2>
              <p className="text-lg text-slate-500 font-light">
                Take a look back at some of our most memorable moments, networking mixers, and community gatherings.
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="w-[85vw] sm:w-[320px] lg:w-[380px] shrink-0 snap-center rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <img
                    src={img}
                    alt={`Event Gallery ${index + 1}`}
                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="w-full sm:w-auto text-areaa border-areaa hover:bg-areaa hover:text-white">
              See All Photos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
