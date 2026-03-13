import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Compact Hero */}
      <div className="bg-slate-950 text-white h-[280px] md:h-[320px] flex items-center relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-900/10">
          <img
            src="/Modify 2.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black_20%,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-3 tracking-tight leading-tight">Get in Touch</h1>
            <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Have questions about membership, events, or sponsorship? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Compact Contact Form & Info */}
      <section className="bg-white py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">How can we help?</h2>
                <p className="text-base text-slate-500 leading-relaxed font-light">
                  Whether you're looking to join our chapter, sponsor an event, or just want to learn more about our mission, our team is here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-slate-50 rounded-[16px] flex items-center justify-center text-slate-400 group-hover:bg-areaa group-hover:text-white transition-colors duration-500 shrink-0 border border-slate-100">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">Mailing Address</h3>
                    <p className="text-slate-500 font-light leading-snug text-sm">
                      AREAA Greater Austin<br />
                      1234 Real Estate Blvd, Suite 100<br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-slate-50 rounded-[16px] flex items-center justify-center text-slate-400 group-hover:bg-areaa group-hover:text-white transition-colors duration-500 shrink-0 border border-slate-100">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 font-light text-sm">
                      <a href="mailto:info@areaaaustin.org" className="hover:text-areaa transition-colors">info@areaaaustin.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-slate-50 rounded-[16px] flex items-center justify-center text-slate-400 group-hover:bg-areaa group-hover:text-white transition-colors duration-500 shrink-0 border border-slate-100">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-500 font-light text-sm">
                      <a href="tel:+15125550198" className="hover:text-areaa transition-colors">(512) 555-0198</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 p-8 md:p-10 rounded-[32px] border border-slate-100"
            >
              <h2 className="font-serif text-2xl font-medium text-slate-900 mb-6 tracking-tight">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-bold">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2.5 bg-white border border-transparent focus:ring-1 focus:ring-areaa focus:border-areaa outline-none transition-all rounded-xl font-light text-sm shadow-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-bold">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2.5 bg-white border border-transparent focus:ring-1 focus:ring-areaa focus:border-areaa outline-none transition-all rounded-xl font-light text-sm shadow-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-bold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 bg-white border border-transparent focus:ring-1 focus:ring-areaa focus:border-areaa outline-none transition-all rounded-xl font-light text-sm shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-bold">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2.5 bg-white border border-transparent focus:ring-1 focus:ring-areaa focus:border-areaa outline-none transition-all rounded-xl font-light text-sm appearance-none shadow-sm"
                  >
                    <option>General Inquiry</option>
                    <option>Membership</option>
                    <option>Events</option>
                    <option>Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-500 mb-1.5 uppercase tracking-wider text-[10px] font-bold">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2.5 bg-white border border-transparent focus:ring-1 focus:ring-areaa focus:border-areaa outline-none transition-all resize-none rounded-xl font-light text-sm shadow-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-12 bg-slate-900 hover:bg-areaa mt-4 rounded-xl text-xs tracking-widest uppercase font-bold text-white shadow-lg shadow-areaa/20 hover:shadow-areaa/40 transition-all">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
