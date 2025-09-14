import * as React from "react";
import { Calendar, MapPin, Building2, Github, ExternalLink } from "lucide-react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "BetaHubs",
      location: "Remote",
      period: "August 2025 - Present",
      type: "Full-time",
      description: "Currently developing scalable web applications using modern technologies including NestJS, Angular, PostgreSQL, and MongoDB. Contributing to innovative projects and collaborating with cross-functional teams.",
      technologies: ["NestJS", "Angular", "PostgreSQL", "MongoDB", "TypeScript", "Docker"],
      achievements: [
        "Built and maintained full-stack applications serving thousands of users",
        "Implemented efficient database designs and API architectures",
        "Collaborated with product teams to deliver user-centric solutions"
      ],
      githubLink: null,
      externalLink: null,
    },
    {
      title: "Full Stack Developer Intern",
      company: "LuckyONE",
      location: "Sheik Zayed, Egypt",
      period: "July 2025 - Present",
      type: "Full-time",
      description: "Collaborate with the technical team to enhance Lucky One backend microservices and integrate new services with the mobile application via secure, maintainable, and scalable RESTful APIs.",
      technologies: ["NestJS", "REST APIs", "Microservices", "TypeScript"],
      achievements: [
        "Enhanced backend microservices for improved scalability",
        "Integrated new services with mobile app via RESTful APIs",
        "Ensured secure and maintainable API development"
      ],
      githubLink: null,
      externalLink: null,
    },
    {
      title: "Full Stack Developer",
      company: "FREELANCE",
      location: "Remote",
      period: "March 2025 - April 2025",
      type: "Contract",
      description: "Developed a full-stack solution for a U.S. client's web application focusing on AI integration for crypto prediction.",
      technologies: ["Python", "FastAPI", "AI Integration", "ReactJS"],
      achievements: [
        "Integrated an AI crypto prediction model achieving 85% accuracy",
        "Reduced API response times by 25%",
        "Served 500+ daily users with seamless frontend integration"
      ],
      githubLink: "https://github.com/MoBahgat010/Crypto",
      externalLink: null,
    },
    {
      title: "Front End Developer",
      company: "FREELANCE",
      location: "Remote",
      period: "August 2024 - November 2024",
      type: "Contract",
      description: "Architected and launched a high-performance e-commerce platform for an Emirati institute's Dreambook Bookstore.",
      technologies: ["ReactJS", "Redux Toolkit", "Bootstrap5"],
      achievements: [
        "Cut page load times by 30% enhancing user engagement",
        "Drove a 20% rise in monthly book trading among 1,000+ active users"
      ],
      githubLink: "https://github.com/MoBahgat010/dreambook-bookstore",
      externalLink: null,
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            My professional journey in software development, building innovative solutions and growing expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:scale-105">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-2">
                        <Calendar size={16} />
                        {exp.period}
                        <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">{exp.type}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center justify-between text-gray-600 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Building2 size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {exp.githubLink && (
                            <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="flex text-[#000] items-center gap-1 text-blue-600 hover:text-blue-800">
                              <Github className="scale-[1.3]" size={16} />
                            </a>
                          )}
                          {exp.externalLink && (
                            <a href={exp.externalLink} target="_blank" rel="noopener noreferrer" className="flex text-[#000] items-center gap-1 text-blue-600 hover:text-blue-800">
                              <ExternalLink className="scale-[1.3]" size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              With experience in software development, I've focused on building complex, scalable applications. 
              My journey has taken me through various technologies and frameworks, always with a focus on 
              delivering high-quality solutions and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};