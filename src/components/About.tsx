import * as React from "react";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborating effectively in agile environments"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl leading-relaxed">
                I'm a passionate <strong className="text-gray-900">Full Stack Developer</strong> with a strong foundation in modern web technologies. 
                Currently working at <strong className="text-blue-600">BetaHubs</strong>, I specialize in building scalable applications 
                using cutting-edge technologies.
              </p>
              
              <p className="leading-relaxed">
                My journey in software development has equipped me with expertise in both frontend and backend technologies. 
                I thrive on creating efficient, user-friendly applications that solve real-world problems. 
                With experience in <strong className="text-gray-900">NestJS, Angular, PostgreSQL, and MongoDB</strong>, 
                I bring a comprehensive approach to full-stack development.
              </p>

              <p className="leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
                My goal is to contribute to innovative projects that make a positive impact while continuously growing as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What I Bring</h3>
            
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and collaborate with talented teams. 
              Whether it's a complex web application or an innovative startup idea, I'm ready to contribute my skills and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
