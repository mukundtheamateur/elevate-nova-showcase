import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            ElevateNova
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-border">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block text-foreground/80 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block text-foreground/80 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
