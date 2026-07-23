import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Layout } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-pearl-bg pt-16 sm:pt-24 lg:pt-32 pb-16 min-h-screen">
      
      {/* Soft Pastel Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue via-pearl-bg to-pastel-sage blur-3xl rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 pointer-events-none animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-sage/30 border border-pastel-sage/50 text-deep-slate text-sm font-medium mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-sage opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pastel-sage brightness-90"></span>
          </span>
          Actively Seeking Full-Time Roles
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-deep-slate tracking-tight mb-6">
          Architecting robust <span className="relative inline-block">
            <span className="relative z-10">systems.</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-pastel-blue/40 -z-10 rounded-sm"></span>
          </span><br />
          Integrating intelligent <span className="relative inline-block">
            <span className="relative z-10">solutions.</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-pastel-sage/50 -z-10 rounded-sm"></span>
          </span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto mb-10 font-medium">
          I am a Full-Stack Developer specializing in MERN and Java Spring Boot, with a strong focus on Artificial Intelligence and Machine Learning. Ready to bring clean code and dynamic problem-solving to your engineering team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 bg-deep-slate text-pearl-bg px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 hover:shadow-xl hover:shadow-pastel-blue/30 hover:-translate-y-1 transition-all duration-300"
          >
            View My Work <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-deep-slate border-2 border-pastel-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pastel-blue/20 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Core Competencies Tech Stack visual */}
        <div className="mt-24 pt-10 border-t border-gray-200/60">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Core Technical Competencies</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-70">
            <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-deep-slate transition-colors">
              <Layout className="w-8 h-8 text-pastel-blue brightness-90" />
              <span className="font-medium">Full-Stack Web</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-deep-slate transition-colors">
              <Code2 className="w-8 h-8 text-pastel-sage brightness-95" />
              <span className="font-medium">Java & Python</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-deep-slate transition-colors">
              <Cpu className="w-8 h-8 text-soft-lilac brightness-90" />
              <span className="font-medium">AI / Machine Learning</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}