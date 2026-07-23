import { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connects to the Node.js backend
      const response = await axios.post('http://localhost:5000/api/messages', formData);
      
      if (response.status === 201) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' }); // Clear form
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error.response?.data?.message || 'Something went wrong. Please try again later.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-pearl-bg py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-deep-slate mb-4">
            Let's <span className="relative inline-block">
              <span className="relative z-10">Connect</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-soft-lilac -z-10 rounded-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Whether you have a role to fill or a project to discuss, my inbox is open.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
          
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-pastel-sage/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-deep-slate mb-2">Message Sent!</h3>
              <p className="text-gray-500">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-semibold text-gray-500 hover:text-deep-slate underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-deep-slate">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-deep-slate">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-deep-slate">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all"
                  placeholder="Tech Solutions Inc."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-deep-slate">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pastel-blue focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-deep-slate text-pearl-bg py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'loading' ? (
                  <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}