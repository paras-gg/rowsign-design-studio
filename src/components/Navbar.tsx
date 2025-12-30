import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/#produk" },
    { name: "Tentang", href: "/#tentang" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.replace("/", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Rowsign</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                location.pathname === link.href
                  ? "text-primary after:w-full"
                  : "text-foreground/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 animate-pulse-glow"
          >
            <a
              href="https://wa.me/6282154945903?text=Saya%20ingin%20membeli%20produk%20Rowsign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beli Sekarang
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium py-2 transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-2"
          >
            <a
              href="https://wa.me/6282154945903?text=Saya%20ingin%20membeli%20produk%20Rowsign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beli Sekarang
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;