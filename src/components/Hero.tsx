import * as React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Mohamed</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bahgat
              </span>
            </h1>

            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Passionate about creating innovative web solutions with modern technologies. 
                Currently building amazing products at BetaHubs.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["NestJS", "Angular", "PostgreSQL", "MongoDB", "TypeScript", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center items-center mt-12">
              <a
                href="https://github.com/MoBahgat010"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="http://www.linkedin.com/in/mohamed-bego"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mbahgat503@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
      </div>
    </section>
  );
};
