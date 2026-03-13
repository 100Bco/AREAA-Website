import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowUpRight, BookOpen, Users, Megaphone, Globe, Tag, Award } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const stats = [
  { value: "19,000", suffix: "+", label: "Members Nationwide" },
  { value: "70", suffix: "+", label: "Local Chapters" },
  { value: "2", suffix: "", label: "National Conferences / Year" },
  { value: "Founded 2003", suffix: "", label: "Over 20 Years of Advocacy" },
];

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

const benefits = [
  "Professional Development: Build connections with top professionals in real estate, banking, and mortgage.",
  "National Events: Opportunities at Global & Luxury Summit, National Convention, Policy Summit, and Leadership Summit.",
  "Local Chapter Events: Build a community of like-minded professionals in your local area.",
  "Discounts on Cell Phone Bills & Car Insurance",
  "Webinars & Trainings: Stay on top of training with information directly from regulators and industry.",
  "Research & Reports: Benefit from the latest research and data on AAPI borrower and homebuying trends.",
  "Discounted pricing to all AREAA events",
  "26% off hotel stays via EC Purchasing",
  "Identity Theft Protection discounts",
];

// Single plan details used directly in the layout
const planDetails = {
  name: "Standard Membership",
  price: "$120",
  duration: "/ year",
  description: "For real estate professionals, lenders, and affiliates.",
};

export default function Membership() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-slate-950 text-white h-[85vh] min-h-[600px] flex items-end relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Modify 4.jpg"
            alt="Membership"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-areaa text-sm font-bold uppercase tracking-[0.2em] mb-6">Join AREAA</p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-[1.1] [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
              Elevate Your Career.<br />Strengthen Your Community.
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
              Join over 19,000 real estate professionals making real impact for AAPI communities across the nation.
            </p>
            <Button asChild size="lg" className="w-auto">
              <a href="https://areaa.org/join" target="_blank" rel="noopener noreferrer">
                Join AREAA Now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-sans text-3xl md:text-4xl font-bold text-areaa tracking-tight mb-2">
                  {stat.value}<span className="text-areaa">{stat.suffix}</span>
                </p>
                <p className="text-sm text-slate-500 font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Membership Benefits</h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              As an AREAA member, you gain access to a wealth of resources designed to help you succeed in the real estate industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {detailedBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 hover:shadow-xl transition-all duration-700 group"
              >
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-areaa mb-6 group-hover:bg-areaa group-hover:text-white transition-colors duration-500">
                  <benefit.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Unified Layout */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left side: Price & Info */}
            <div className="p-10 lg:p-16 lg:w-1/3 bg-slate-900 text-white flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 tracking-tight">{planDetails.name}</h2>
              <p className="text-slate-300 mb-10 font-light leading-relaxed">{planDetails.description}</p>
              
              <div className="flex items-baseline mb-10">
                <span className="text-6xl md:text-7xl font-sans font-bold tracking-tight text-white">{planDetails.price}</span>
                <span className="text-lg text-slate-400 ml-2 font-light tracking-wide">{planDetails.duration}</span>
              </div>
              
              <Button asChild size="lg" className="w-full h-16 uppercase tracking-widest text-[11px] font-bold rounded-2xl bg-areaa hover:bg-areaa/90 text-white mt-auto">
                <a href="https://areaa.org/join" target="_blank" rel="noopener noreferrer">
                  Join Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right side: Benefits List */}
            <div className="p-10 lg:p-16 lg:w-2/3">
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-8 border-b border-slate-100 pb-4">Membership Includes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {benefits.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-areaa mr-4 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-600 font-light leading-relaxed text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
