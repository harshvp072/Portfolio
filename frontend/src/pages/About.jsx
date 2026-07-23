import { GraduationCap, Award, Code2, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-pearl-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-slate mb-4">
            My <span className="relative inline-block">
              <span className="relative z-10">Journey</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-pastel-sage/50 -z-10 rounded-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Bridging the gap between software engineering and artificial intelligence.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="space-y-12">
            
            {/* Professional Summary */}
            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-3 bg-pastel-blue/20 rounded-xl mt-1 shrink-0">
                <Code2 className="w-6 h-6 text-deep-slate" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-slate mb-2">Full-Stack Java Developer</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a highly motivated fresher, I specialize in architecting robust backend systems using Java Spring Boot and pairing them with modern, responsive React interfaces. I am passionate about writing clean, maintainable code and continuously expanding my technical toolkit to solve complex real-world problems.
                </p>
              </div>
            </div>

            {/* Postgraduate Studies */}
            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-3 bg-soft-lilac/30 rounded-xl mt-1 shrink-0">
                <BookOpen className="w-6 h-6 text-deep-slate" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-slate mb-2">Master of Technology</h3>
                <p className="text-gray-700 font-semibold mb-1">Specialization in Artificial Intelligence & Machine Learning</p>
                <p className="text-sm text-pastel-blue font-bold uppercase tracking-wider mb-3">Currently Pursuing</p>
                <p className="text-gray-600 leading-relaxed">
                  Deepening my expertise in neural networks, advanced data structures, and algorithmic efficiency to build intelligent applications that go beyond standard CRUD operations.
                </p>
              </div>
            </div>

            {/* Undergraduate & Certifications */}
            <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-3 bg-pastel-sage/30 rounded-xl mt-1 shrink-0">
                <GraduationCap className="w-6 h-6 text-deep-slate" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-slate mb-2">Bachelor of Technology</h3>
                <p className="text-gray-700 font-semibold mb-4">Computer Science Engineering • RIET</p>
                
                <div className="inline-flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                  <Award className="w-5 h-5 text-deep-slate opacity-70" />
                  <span className="text-sm font-bold text-gray-600">NPTEL Certification • IIT Kharagpur</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}