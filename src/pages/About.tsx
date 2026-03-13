import { motion } from "framer-motion";
import { Users, Target, History, Globe, TrendingUp, Linkedin, Mail, Building2 } from "lucide-react";

const stats = [
  { value: "19,000+", label: "Members Nationwide" },
  { value: "70+", label: "Local Chapters" },
  { value: "9", label: "Ethnicities Represented" },
];

const executiveCommittee = [
  {
    name: "DANIEL CHEN",
    role: "2026 Vice President",
    image: "/Daniel.png"
  },
  {
    name: "THUY DO",
    role: "2026 Treasurer",
    image: null
  },
  {
    name: "DENISE VINCENT DOOD",
    role: "2026 Chapter President",
    image: "/Denise.jpg"
  },
  {
    name: "FRANCES KELLEY OZAKI",
    role: "Secretary",
    image: null
  }
];

const boardOfDirectors = [
  {
    name: "LORI GOTO",
    role: "2025 President",
    image: "/Lori.png"
  },
  {
    name: "MIGUEL BENAVIDES",
    role: "Sponsorship",
    image: "/Miguel.png"
  },
  {
    name: "MICHAEL PALUCHA",
    role: "Education & Commercial Chair",
    image: null
  },
  {
    name: "CHRISTINA MCQUAGE",
    role: "Events Chair",
    image: null
  }
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-950 text-white h-[480px] md:h-[520px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10">
          <img
            src="/Image1.jpg"
            alt="About Hero"
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
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-tight">Championing AAPI Communities in Real Estate</h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              AREAA Greater Austin is a local chapter of the Asian Real Estate Association of America — the leading voice for AAPI real estate professionals and homebuyers across the nation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-8 tracking-tight">Who We Are</h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  Founded in 2003, the <span className="font-semibold text-slate-900">Asian Real Estate Association of America (AREAA)</span> is a nonprofit professional trade organization dedicated to promoting sustainable homeownership opportunities in Asian American and Pacific Islander (AAPI) communities.
                </p>
                <p className="text-base text-slate-500 leading-relaxed font-light">
                  AREAA creates a powerful national voice for housing and real estate professionals that serve this dynamic market — advocating for policies that remove barriers, expand access, and empower AAPI communities to build generational wealth through homeownership.
                </p>
                <p className="text-base text-slate-500 leading-relaxed font-light">
                  The <span className="font-semibold text-slate-900">Greater Austin chapter</span> brings this mission to Central Texas, connecting local professionals through education, networking, community events, and advocacy that reflects the vibrancy of Austin's growing AAPI population.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 sm:gap-x-20 gap-y-10 py-10 border-t border-slate-100">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-3xl font-sans font-bold text-areaa mb-2">{stat.value}</div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">
                      {stat.label.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[48px] overflow-hidden shadow-2xl"
            >
              <img
                src="/Image 5.jpg"
                alt="AREAA Greater Austin Members"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What AREAA Does */}
      <section className="py-32 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">What AREAA Greater Austin Does</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Policy Advocacy",
                desc: "We advocate at local, state, and national levels for housing policies that reduce barriers to homeownership for AAPI communities — working with government officials, industry partners, and community leaders."
              },
              {
                icon: Users,
                title: "Professional Networking",
                desc: "We host networking mixers, galas, workshops, and community events that bring together Austin's top real estate professionals — building relationships that drive careers and close deals."
              },
              {
                icon: TrendingUp,
                title: "Education & Training",
                desc: "From home-buying workshops to commercial real estate forums, we provide educational programming that equips members and the community with the knowledge to succeed."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-areaa mb-8 group-hover:bg-areaa group-hover:text-white transition-colors">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light line-clamp-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">Chapter Leadership</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Meet the dedicated real estate professionals guiding the AREAA Greater Austin chapter.
            </p>
          </div>

          <div className="space-y-24">
            {/* Executive Committee */}
            <div>
              <h3 className="font-serif text-4xl font-bold text-slate-800 mb-16 text-center lg:text-left">Executive Committee</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {executiveCommittee.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-48 h-48 mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 flex items-center justify-center">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <Users size={64} className="text-slate-400 opacity-20" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-areaa font-bold text-sm tracking-widest mb-1">{member.name}</h4>
                      <p className="text-slate-600 text-[13px] font-medium">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Board of Directors */}
            <div>
              <h3 className="font-serif text-4xl font-bold text-slate-800 mb-16 text-center lg:text-left">Board of Directors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {boardOfDirectors.map((member, index) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative w-48 h-48 mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 flex items-center justify-center">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <Users size={64} className="text-slate-400 opacity-20" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-areaa font-bold text-sm tracking-widest mb-1">{member.name}</h4>
                      <p className="text-slate-600 text-[13px] font-medium">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

