import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const sponsors = [
  {
    tier: "Gold",
    companies: [
      { name: "Comparion", logo: "/Gold-Comparion logo.png" },
      { name: "Madison", logo: "/Gold-Madison logo.png" },
    ],
  },
  {
    tier: "Silver",
    companies: [
      { name: "Austin Tiles", logo: "/Silver-AustinTiles logo.png" },
      { name: "Conventus", logo: "/Silver-Conventus logo.jpg" },
      { name: "Frost", logo: "/Silver-Frost logo.png" },
      { name: "SouthStar Bank", logo: "/Silver-SouthStarBank logo.png" },
      { name: "Stewart", logo: "/Silver-Stewart logo.png" },
      { name: "Unlock MLS", logo: "/Silver-UnlockMLS logo.png" },
      { name: "Wells Fargo", logo: "/Silver-WellsFargo logo.png" },
    ],
  },
];

export default function Sponsors() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-950 text-white h-[400px] md:h-[520px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10">
          <img
            src="/Modify 5.jpg"
            alt="Sponsors"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_20%,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-3xl md:text-7xl font-medium mb-4 md:mb-6 tracking-tight leading-tight">Our<br />Sponsors</h1>
            <p className="text-base md:text-xl text-slate-300 font-light leading-relaxed">
              We are grateful for the generous support of our partners who make our mission possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sponsors List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white">
        <div className="space-y-10 md:space-y-14">
          {sponsors.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-center mb-6 md:mb-8">
                <h2 className="font-serif text-2xl md:text-4xl font-medium text-slate-900 mb-3 tracking-tight">
                  {tier.tier} Sponsors
                </h2>
                <div className="w-10 h-1 bg-areaa mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {tier.companies.map((company, i) => (
                  <div key={i} className="flex items-center justify-center w-28 h-14 md:w-40 md:h-20">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-slate-950 py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1556761175-5973bc0f350d?q=80" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-areaa mx-auto mb-10">
              <Handshake size={32} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-6xl font-medium text-white mb-6 md:mb-8 tracking-tight leading-tight">Partner With Us</h2>
            <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Partner with AREAA Greater Austin to reach a diverse and growing network of over 19,000 real estate professionals and consumers.
            </p>
            <Button asChild size="lg" className="h-14 px-10 uppercase tracking-widest text-xs font-bold rounded-xl shadow-lg shadow-areaa/20 hover:shadow-areaa/40 transition-all">
              <a href="#">
                View Sponsorship Packages
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
