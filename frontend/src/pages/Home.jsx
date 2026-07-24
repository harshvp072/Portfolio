import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Layout, Server, Sparkles, Database, BrainCircuit, Terminal } from 'lucide-react';

export default function Home() {
  // Upgraded for Dark Mode: Vibrant neon accents and translucent backgrounds
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6 text-blue-400" />,
      bgIcon: 'bg-blue-500/20',
      hoverBorder: 'hover:border-blue-500',
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs']
    },
    {
      title: 'AI & Machine Learning',
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      bgIcon: 'bg-purple-500/20',
      hoverBorder: 'hover:border-purple-500',
      skills: ['Python', 'Neural Networks', 'NLP', 'Data Preprocessing', 'Machine Learning Models']
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-emerald-400" />,
      bgIcon: 'bg-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500',
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design']
    },
    {
      title: 'Core Fundamentals',
      icon: <Code2 className="w-6 h-6 text-gray-400" />,
      bgIcon: 'bg-gray-500/20',
      hoverBorder: 'hover:border-gray-500',
      skills: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'System Design']
    },
    {
      title: 'Databases & Storage',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      bgIcon: 'bg-cyan-500/20',
      hoverBorder: 'hover:border-cyan-500',
      skills: ['MongoDB', 'SQL', 'Database Modeling', 'NoSQL']
    },
    {
      title: 'Tools & Workflows',
      icon: <Terminal className="w-6 h-6 text-orange-400" />,
      bgIcon: 'bg-orange-500/20',
      hoverBorder: 'hover:border-orange-500',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Command Line', 'Debugging']
    }
  ];

  return (
    // The entire page is now bg-deep-slate
    <div className="bg-deep-slate min-h-screen relative overflow-hidden font-sans selection:bg-pastel-blue/30 selection:text-white">
      
      {/* GLOBAL DARK MODE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
      
      {/* SECTION 1: THE MIDNIGHT HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-pastel-blue/10 blur-[120px] rounded-full animate-float"></div>
          <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-soft-lilac/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center w-full z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full">
            
            {/* Left Side: High Contrast Text & CTA */}
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start z-20 mt-8 lg:mt-0 w-full max-w-2xl">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-8 shadow-sm backdrop-blur-md cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                Actively Seeking Full-Time Roles
              </div>

              {/* Glowing Gradient Name */}
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight mb-4 leading-tight drop-shadow-lg">
                Hi, I'm <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue via-soft-lilac to-pastel-sage">
                  Harsh Vardhan
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 font-bold mb-6">
                Full-Stack Developer & AI Specialist
              </h2>

              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-sm lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none">
                I specialize in architecting robust MERN and Java Spring Boot systems, integrated with intelligent, data-driven solutions. Ready to bring clean code to your engineering team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full lg:w-auto mb-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-pastel-blue text-deep-slate px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:shadow-xl hover:shadow-pastel-blue/20 hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </div>

              {/* Dark Mode Quick Stats */}
              <div className="hidden lg:flex items-center gap-8 pt-8 border-t border-white/10 w-full opacity-90">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">M.Tech</span>
                  <span className="text-sm font-bold text-gray-400">AI & Machine Learning</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">3+</span>
                  <span className="text-sm font-bold text-gray-400">Full-Stack Projects</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex gap-3">
                  <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"><Code2 className="w-5 h-5 text-gray-400"/></div>
                  <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"><Server className="w-5 h-5 text-gray-400"/></div>
                  <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10"><BrainCircuit className="w-5 h-5 text-gray-400"/></div>
                </div>
              </div>

            </div>

            {/* Right Side: Profile Photo Container */}
            <div className="flex-1 flex justify-center lg:justify-end z-20 w-full">
              <div className="relative group lg:mr-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-pastel-blue via-soft-lilac to-pastel-sage rounded-[3rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
                
                <div className="relative bg-deep-slate p-3 rounded-[3rem] shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500 border border-white/10">
                  <div className="w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] rounded-[2.5rem] overflow-hidden bg-gray-900 flex items-center justify-center">
                    <img 
                      src="/logo.jpeg" 
                      alt="Harsh Vardhan Pandey" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Code2 className="w-8 h-8 text-pastel-blue" />
                </div>
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 animate-float" style={{ animationDelay: '1.5s' }}>
                  <BrainCircuit className="w-8 h-8 text-soft-lilac" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: VIBRANT SKILLS MATRIX (Dark Mode Cards) */}
      <section className="pb-24 pt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Technical Expertise</h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">A comprehensive breakdown of my current tech stack and core competencies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 shadow-sm hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-3 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer ${category.hoverBorder}`}
              >
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className={`p-3 ${category.bgIcon} rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold rounded-lg group-hover:border-white/30 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Focus Areas (Dark Mode Cards) */}
      <section className="py-20 relative z-10 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-pastel-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Core Focus Areas</h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto">Bridging the gap between complex backend architecture and modern user interfaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-500 group cursor-pointer hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-blue-500/20">
                <Server className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend Architecture</h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                Designing scalable RESTful APIs and microservices using Java Spring Boot and Node.js. Focused on secure, optimized database management.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-500 group cursor-pointer hover:border-purple-500/50">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-purple-500/20">
                <Cpu className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                Integrating Python-based artificial intelligence engines, natural language processing, and data-driven models into functional full-stack web applications.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-500 group cursor-pointer hover:border-emerald-500/50">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-emerald-500/20">
                <Layout className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Frontend</h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                Building responsive, interactive, and highly optimized user interfaces using React, Tailwind CSS, and state management techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 4: The "Why Hire Me" Highlight (Perfect blend) */}
      {/* SECTION 4: The "Why Hire Me" Highlight (Truly seamless) */}
<section className="py-24 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[400px] bg-pastel-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sparkles className="w-10 h-10 text-soft-lilac mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            A fresh perspective driven by academic rigor.
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed mb-10">
            As a postgraduate specializing in AI/ML with hands-on full-stack development experience, I don't just write code to complete a task. I engineer efficient, structured solutions backed by a deep understanding of core computer science fundamentals, data structures, and algorithmic logic.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 bg-pastel-sage text-deep-slate px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-pastel-sage/10"
          >
            Read My Full Story
          </Link>
        </div>
      </section>

    </div>
  );
}