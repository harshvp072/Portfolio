import { Code, FolderGit2, Server, BrainCircuit, Users } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AskNova',
      description: 'An intelligent web application integrating the Gemini API to deliver dynamic, AI-driven conversational responses, seamlessly connected to a modern frontend interface.',
      techStack: ['Java Spring Boot', 'HTML/CSS', 'JavaScript', 'Gemini API'],
      icon: <BrainCircuit className="w-7 h-7 text-purple-400" />,
      borderHover: 'hover:border-purple-500/50',
      glowHover: 'group-hover:shadow-purple-500/20',
      github: 'https://github.com/harshvp072/AskNova' // Add your AskNova repo link here!
    },
    {
      title: 'Study_Hive',
      description: 'A comprehensive web application focused on efficient backend architecture, robust data management, and seamless RESTful API integration for an optimized user experience.',
      techStack: ['Java Spring Boot', 'REST APIs', 'Database Modeling', 'Backend Architecture'],
      icon: <Server className="w-7 h-7 text-blue-400" />,
      borderHover: 'hover:border-blue-500/50',
      glowHover: 'group-hover:shadow-blue-500/20',
      github: 'https://github.com/harshvp072/Study-Hive'
    },
    {
      title: 'Dentist Management System',
      description: 'A custom full-stack web application built to streamline operations, data management, and patient handling for dental practices.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: <Users className="w-7 h-7 text-emerald-400" />,
      borderHover: 'hover:border-emerald-500/50',
      glowHover: 'group-hover:shadow-emerald-500/20',
      github: 'https://github.com/harshvp072/detist-project'
    }
  ];

  return (
    <div className="bg-deep-slate min-h-screen relative overflow-hidden font-sans selection:bg-pastel-blue/30 selection:text-white pb-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-pastel-blue/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-soft-lilac/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-soft-lilac">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical architecture, machine learning integrations, and collaborative engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full ${project.borderHover} ${project.glowHover}`}
            >
              
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="View Source Code">
                    <Code className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider rounded-lg group-hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
        
        {/* Call to Action for GitHub */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <FolderGit2 className="w-12 h-12 text-pastel-blue mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Want to see more code?</h3>
            <p className="text-gray-400 font-medium mb-6 max-w-md">
              Check out my GitHub for a deeper dive into my repositories, algorithm practice, and ongoing developments.
            </p>
            <a 
              href="https://github.com/harshvp072/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white text-deep-slate px-8 py-3 rounded-full font-bold hover:bg-pastel-blue hover:text-deep-slate transition-colors shadow-lg"
            >
              <Code className="w-5 h-5" />
              View Source Code Profile
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}