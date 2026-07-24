import { Mail, MapPin, Code, Briefcase, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-deep-slate min-h-screen relative overflow-hidden font-sans selection:bg-pastel-blue/30 selection:text-white pb-24">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-pastel-blue/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-soft-lilac/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-blue to-soft-lilac">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you have a full-time opportunity, a technical question, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            
            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-pastel-blue/50 hover:bg-white/10 transition-all duration-300 group flex items-center gap-6">
              <div className="p-4 bg-pastel-blue/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-pastel-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:harshpandey1957@gmail.com" className="text-lg font-bold text-gray-300 hover:text-white transition-colors">
                  harshpandey1957@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-soft-lilac/50 hover:bg-white/10 transition-all duration-300 group flex items-center gap-6">
              <div className="p-4 bg-soft-lilac/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-soft-lilac" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-lg font-bold text-gray-300">
                  Faridabad, Haryana, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Connect Professionally</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/harshvp072/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:bg-pastel-blue/20 hover:border-pastel-blue hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-pastel-blue/20 transition-all duration-300"
                  title="GitHub"
                >
                  <Code className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:bg-pastel-sage/20 hover:border-pastel-sage hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-pastel-sage/20 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Briefcase className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue transition-all"
                    />
                  </div>
                  
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-400 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Full-Stack Developer Opportunity"
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-400 ml-1">Message</label>
                  <textarea 
                    id="message"
                    rows="5"
                    placeholder="Hi Harsh, I'd like to discuss a role..."
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="mt-4 flex items-center justify-center gap-2 bg-pastel-blue text-deep-slate font-bold text-lg py-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-pastel-blue/20 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto md:px-12"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}