export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A clean, minimal portfolio showcasing my passion for design and development through interactive projects, smooth experiences, and creativity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "React", "Node.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "QuickXchange - Real-time Currency Converter",
      description: "Instantly convert currencies worldwide with real-time exchange rates, fast calculations, and a simple intuitive interface.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "Figma"],
      demoLink: "https://github.com/rudrapratap30/Currency-converter-react",
      codeLink: "https://github.com/rudrapratap30/Currency-converter-react"
    },
    {
      id: 3,
      title: "WeatherMate App",
      description: "Weather Mate delivers real-time weather updates for any location using powerful APIs and a clean interface..",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "API", "Tailwind"],
      demoLink: "https://rudrapratap30.github.io/WeatherMate/",
      codeLink: "https://github.com/rudrapratap30/WeatherMate?tab=readme-ov-file"
    },
    {
      id: 4,
      title: "TinDog - Tinder for Dogs",
      description: "TinDog is a responsive HTML and CSS website that connects dogs, inspired by Tinder’s playful matching concept.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["D3.js", "Python", "PostgreSQL"],
      demoLink: "https://rudrapratap30.github.io/TinDog/",
      codeLink: "https://github.com/rudrapratap30/TinDog?tab=readme-ov-file"
    }
  ];

  return (
    <section id="projects" className="section-container py-24" style={{ background: 'var(--section-bg-3)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in design and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card border border-border rounded-2xl overflow-hidden shadow-lg" data-testid={`card-project-${project.id}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      data-testid={`tech-${project.id}-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                    data-testid={`link-code-${project.id}`}
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all transform hover:scale-105" data-testid="button-view-all-projects">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
