import * as React from "react";
import { Code2, Database, Globe, Wrench, Users, Lightbulb } from "lucide-react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Angular", level: 80 },
        { name: "React", level: 95 },
        { name: "TypeScript", level: 97 },
        { name: "JavaScript", level: 97 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 96 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "NestJS", level: 96 },
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 96 },
        { name: "REST APIs", level: 98 },
        { name: "GraphQL", level: 82 },
        { name: "Microservices", level: 87 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 92 },
        { name: "Microsoft SQL Server", level: 92 },
        { name: "MongoDB", level: 91 },
        { name: "Redis", level: 85 },
        { name: "Database Design", level: 87 },
        { name: "Query Optimization", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Azure", level: 40 },
        { name: "CI/CD", level: 27 },
        { name: "Jest/Testing", level: 33 },
        { name: "Postman", level: 90 }
      ]
    }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Analytical thinking and creative solution development"
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-5 h-5" />,
      description: "Effective communication and teamwork in agile environments"
    },
    {
      title: "Adaptability",
      icon: <Globe className="w-5 h-5" />,
      description: "Quick learning and adaptation to new technologies"
    },
    {
      title: "Leadership",
      icon: <Code2 className="w-5 h-5" />,
      description: "Mentoring junior developers and leading technical initiatives"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{category.title}</h4>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                                                                                                                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Soft Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{skill.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
              I believe in staying current with the latest technologies and best practices. 
              My skill set continues to evolve as I explore new frameworks, tools, and methodologies 
              to deliver better solutions and stay ahead in the rapidly changing tech landscape.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-200 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-200 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
