import * as React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Cairo University",
      location: "Egypt",
      period: "2022 - 2027",
      gpa: "3.8/4.0",
      description: "Focused on computer engineering fundamentals, software development, data structures, algorithms, and web development. Completed various projects in different programming languages and frameworks.",
      achievements: [
        "Led multiple group projects and presentations",
        "Completed capstone project in web development"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Operating Systems",
        "Data Science",
        "AI/Machine Learning"
      ]
    }
  ];

  const skills = [
    "Problem Solving",
    "Critical Thinking",
    "Team Leadership",
    "Project Management",
    "Technical Writing",
    "Research & Analysis"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Formal Education</h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <BookOpen size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                                    <span className="font-medium">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">Relevant Coursework:</h5>
                  <div className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 bg-white rounded-lg text-sm text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Skills */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic Skills Developed</h3>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-4">Core Competencies</h4>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Through my academic journey, I've developed strong foundational skills that complement my technical expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white">
                <BookOpen size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifelong Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              My education doesn't stop at formal degrees. I believe in continuous learning and staying updated 
              with the latest technologies, industry trends, and best practices. This commitment to growth drives 
              my professional development and helps me deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
