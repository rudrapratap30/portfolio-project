export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="section-container min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="floating-animation inline-block mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-sky-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg animate-glow">
              <span>र</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
            Rudra Pratap Singh Tomar
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-8 animate-slide-up font-medium">
            Designer & Developer
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto animate-slide-up">
            Crafting beautiful digital experiences with thoughtful design and clean code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all transform hover:scale-105" data-testid="button-download-resume">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
