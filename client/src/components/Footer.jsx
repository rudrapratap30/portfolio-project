export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="section-container py-12" style={{ background: 'linear-gradient(135deg, hsl(222, 84%, 5%) 0%, hsl(270, 40%, 15%) 100%)', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm opacity-80" data-testid="text-copyright">
              © {currentYear} Rudra Pratap Singh Tomar. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                data-testid={`link-footer-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
