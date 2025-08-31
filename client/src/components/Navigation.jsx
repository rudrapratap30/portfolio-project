import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-foreground">
            र
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-home">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-about">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-projects">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-contact">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button 
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#hero" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-mobile-home">
              Home
            </a>
            <a href="#about" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-mobile-about">
              About
            </a>
            <a href="#projects" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-mobile-projects">
              Projects
            </a>
            <a href="#contact" className="block py-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-mobile-contact">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
