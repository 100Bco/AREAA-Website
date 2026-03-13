import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Membership", path: "/membership" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Contact", path: "/contact" },
];

const pageTitles: Record<string, string> = {
  "/": "AREAA Greater Austin | Home",
  "/about": "About Us | AREAA Greater Austin",
  "/events": "Events | AREAA Greater Austin",
  "/membership": "Membership | AREAA Greater Austin",
  "/sponsors": "Sponsors | AREAA Greater Austin",
  "/contact": "Contact | AREAA Greater Austin",
};

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "AREAA Greater Austin";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 sm:px-6 lg:px-8 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@areaaaustin.org" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@areaaaustin.org
            </a>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Greater Austin, TX
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="AREAA Greater Austin" className="h-[84px] w-auto" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-widest transition-colors hover:text-areaa",
                    location.pathname === link.path ? "text-areaa" : "text-slate-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="px-8 py-6 text-xs">
                <Link to="/membership">Join Now</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-red-50 text-areaa"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link to="/membership" onClick={() => setIsMobileMenuOpen(false)}>Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 md:py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center mb-6">
                <img src="/logo.png" alt="AREAA Greater Austin" className="h-[84px] w-auto brightness-0 invert" />
              </Link>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
                Dedicated to promoting sustainable homeownership opportunities in Asian American communities in Greater Austin.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" strokeWidth={1.5} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" strokeWidth={1.5} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" strokeWidth={1.5} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-4 text-sm font-light">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/membership" className="hover:text-white transition-colors">Membership</Link></li>
                <li><Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Resources</h3>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="https://areaa.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National AREAA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">State of Asia America Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Member Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Policy & Advocacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-white text-lg mb-6 tracking-wide">Contact Us</h3>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-areaa shrink-0" strokeWidth={1.5} />
                  <span>Greater Austin, Texas</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-areaa shrink-0" strokeWidth={1.5} />
                  <a href="mailto:info@areaaaustin.org" className="hover:text-white transition-colors">info@areaaaustin.org</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} AREAA Greater Austin. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
