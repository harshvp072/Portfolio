import { GraduationCap, Code2, BrainCircuit, Award, Terminal, Layout } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'Master of Technology (M.Tech)',
      specialization: 'Artificial Intelligence & Machine Learning',
      institution: 'Currently Pursuing',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      border: 'border-purple-500/30'
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science Engineering',
      institution: 'RIET',
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      border: 'border-blue-500/30'
    },
    {
      degree: 'NPTEL Certification',
      specialization: 'Core Computer Science',
      institution: 'IIT Kharagpur',
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      border: 'border-emerald-500/30'
    }
  ];

  const projectExperience = [
    {
      title: 'AskNova',
      tech: 'Java Spring Boot • HTML/CSS • JavaScript • Gemini API',
      description: 'An intelligent web application integrating the Gemini API to deliver dynamic, AI-driven conversational responses, seamlessly connected to a modern frontend interface.',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Study_Hive',
      tech: 'Java Spring Boot • REST APIs',
      description: 'Developed a comprehensive web application project focused on efficient backend architecture, data management, and seamless API integration.',
      icon: <Server className="w-6 h-6 text-soft-lilac" />
    },
    {
      title: 'Dentist Management System',
      tech: 'React • Node.js • Express • MongoDB',
      description: 'A custom full-stack web application built to streamline operations, data management, and patient handling for dental practices.',
      icon: <Terminal className="w-6 h-6 text-pastel-blue" />
    }
  ];

  return (
    <div className="bg-deep-slate min-h-screen relative overflow-hidden font-sans selection:bg-pastel-blue/30 selection:text-white pb-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-pastel-blue/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute top-80 -left-20 w-[400px] h-[400px] bg-soft-lilac/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-soft-lilac">Me</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            I am a highly motivated Full-Stack Java Developer and AI enthusiast. I combine strong algorithmic foundations with modern web technologies to engineer structured, efficient, and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic Background */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-pastel-blue" />
              Academic Background
            </h2>
            
            <div className="flex flex-col gap-6">
              {education.map((edu, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border-l-4 ${edu.border} border-y border-y-white/5 border-r border-r-white/5 shadow-lg hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-gray-300 font-medium mt-1">{edu.specialization}</p>
                      <p className="text-sm text-gray-500 font-bold mt-2 uppercase tracking-wider">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hands-on Experience & Projects */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
              <Layout className="w-7 h-7 text-soft-lilac" />
              Project Development Experience
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
              <div className="relative border-l-2 border-white/10 ml-4 space-y-12 pb-4">
                
                {projectExperience.map((project, index) => (
                  <div key={index} className="relative pl-10 group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[1.35rem] top-1 w-10 h-10 bg-deep-slate rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-pastel-blue group-hover:scale-110 transition-all duration-300">
                      <div className="w-2 h-2 bg-pastel-blue rounded-full group-hover:animate-ping"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pastel-blue transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-sm font-bold text-soft-lilac mb-4 uppercase tracking-wider">
                      {project.tech}
                    </h4>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Temporary icon component for the Server icon missing from lucide-react import above
function Server(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}