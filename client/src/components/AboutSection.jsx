
export default function AboutSection() {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 
    'Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'MongoDB'
  ];

  return (
    <section id="about" className="section-container py-24" style={{ background: 'var(--section-bg-2)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a passionate designer and developer with 2+ years of experience creating digital experiences that blend beautiful design with functional code. I believe in clean, minimal design and seamless user interactions that leave a lasting impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I’m not designing or coding, I love exploring art, staying active through fitness, traveling to new places, and experimenting with the latest design tools and frameworks.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="skill-tag px-4 py-2 bg-card border border-border rounded-full text-sm font-medium cursor-pointer"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="/images/myPhoto.svg" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
                data-testid="img-profile"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-teal-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
