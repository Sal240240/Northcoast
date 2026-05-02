import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail, ArrowRight, PhoneCall, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

import logoFull from "@assets/logo-text-transparent.png";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 bg-sidebar border-b border-border text-sm text-muted-foreground">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Greater Vancouver, North Shore, Burnaby</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>info@northcoastpm.ca</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-medium text-foreground">
          <Phone className="h-4 w-4 text-primary" />
          <span>(604) 555-0192</span>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-background py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
            <img 
              src={logoFull} 
              alt="North Coast Property Maintenance - Vancouver BC" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 filter dark:invert-0 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link href="/quote" data-testid="link-nav-quote">
              <Button variant="secondary" className="font-semibold tracking-wide bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">
                Get Instant Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
              data-testid="button-theme-toggle-mobile"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-2xl font-bold transition-colors ${
                  location === link.path ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className={`text-2xl font-bold transition-colors ${
                location === "/quote" ? "text-primary" : "text-foreground"
              }`}
              data-testid="link-mobile-nav-quote"
            >
              Quote
            </Link>
          </nav>
          <div className="pt-6 border-t border-border flex flex-col gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium text-foreground">(604) 555-0192</span>
            </div>
            <Link href="/quote" className="w-full mt-4" data-testid="link-mobile-quote">
              <Button size="lg" className="w-full font-bold text-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30">Get Instant Quote</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <Link href="/">
                <img src={logoFull} alt="North Coast Property Maintenance - Vancouver BC" className="h-10 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity filter dark:invert-0 invert" />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rugged, reliable property maintenance for the Greater Vancouver area. We handle the dirty work so you don't have to.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-primary transition-colors">Lawn Care & Landscaping</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Snow Removal & Ice Control</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Pressure Washing</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Gutter Cleaning</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Property Inspections</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/quote" className="hover:text-primary transition-colors">Request a Quote</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>Vancouver, BC<br/>Serving Greater Vancouver & North Shore</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">(604) 555-0192</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>info@northcoastpm.ca</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} North Coast Property Maintenance. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Licensed & Insured</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>WCB Covered</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button — mobile only */}
      <a
        href="tel:+16045550192"
        data-testid="button-floating-call"
        className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-primary/40 hover:bg-primary/90 active:scale-95 transition-all duration-150"
        aria-label="Call North Coast Property Maintenance"
      >
        <PhoneCall className="h-5 w-5 shrink-0" />
        <span className="text-sm">Call Now</span>
      </a>
    </div>
  );
}