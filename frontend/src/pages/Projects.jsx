import { ExternalLink, Code, Folder } from 'lucide-react';

export default function Projects() {
  // Array of your actual projects to map through
  const projectData = [
    {
      id: 1,
      title: 'Smart Habit Tracker & Study Logger',
      description: 'An intelligent tracking application utilizing a microservices architecture. Integrated a Python artificial intelligence engine for natural language processing with a robust backend.',
      techStack: ['Python', 'Java Spring Boot', 'AI Engine', 'React'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Study_Hive',
      description: 'A comprehensive academic web application. Designed and implemented the complete backend architecture to handle user data and educational resources efficiently.',
      techStack: ['Java Spring Boot', 'RESTful APIs', 'Database Design'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Wishlist Integration',
      description: 'Collaborated with a team of 5 developers in an agile environment at Acciojob to architect and build a scalable wishlist feature for an active e-commerce platform.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Git/GitHub'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-slate mb-4">
            Featured <span className="relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-blue/50 -z-10 rounded-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            A showcase of my technical builds, highlighting full-stack architecture, backend logic, and AI integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-pastel-blue/20 hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              {/* Icon & Title */}
              <div className="w-14 h-14 bg-pastel-sage/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pastel-sage group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                <Folder className="w-7 h-7 text-deep-slate transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-deep-slate mb-3">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 mb-6 line-clamp-4">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-pearl-bg border border-gray-200 text-deep-slate text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-deep-slate transition-colors"
                >
                  <Code className="w-4 h-4" /> Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-deep-slate transition-colors ml-auto"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}