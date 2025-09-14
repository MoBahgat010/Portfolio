import * as React from "react";
import SpotifyCloneImage from "../assets/spotify.png"
import { ExternalLink, Github } from "lucide-react";

export const Projects: React.FC = () => {
  const projects = [
    // {
    //   title: "Enterprise Web Application",
    //   description: "A comprehensive full-stack application built for BetaHubs, featuring user management, real-time data processing, and advanced analytics dashboard.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    //   technologies: ["NestJS", "Angular", "PostgreSQL", "TypeScript", "Docker"],
    //   category: "Full Stack",
    //   features: [
    //     "Real-time data synchronization",
    //     "Advanced user authentication",
    //     "Responsive dashboard design",
    //     "RESTful API architecture"
    //   ],
    //   status: "Development"
    // },
    {
      title: "E-commerce Platform API",
      description: "A scalable e-commerce solution with inventory management, payment processing, and order tracking capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["Express.js", "MongoDB", "Stripe API", "Google Auth", "GitHub Auth"],
      category: "Backend",
      status: "Completed",
      githubLink: "https://github.com/MoBahgat010/E-Commerce-Node-API",
      externalLink: null
    },
    {
      title: "Zengebary",
      description: "High-performance image processing and computer vision system using OpenCV for enhanced color detection and real-time object tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "OpenCV", "YOLO", "CSRT Tracker", "KCF Tracker"],
      category: "Computer Vision",
      status: "Completed",
      githubLink: "https://github.com/ZengebaryRobot",
      externalLink: null
    },
    {
      title: "Search Engine",
      description: "High-performance web search engine incorporating web crawler, indexer, ranker, query processor, and phrase searcher with multithreading optimization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["Java", "Spring Boot", "Multithreading", "SQLite"],
      category: "Backend",
      status: "Completed",
      githubLink: "https://github.com/shady-2004/Seekr",
      externalLink: null
    },
    {
      title: "YOMAC",
      description: "Scalable e-learning platform featuring a Django backend with multithreaded real-time chat system hosted on Azure and a responsive frontend on Vercel.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "Django REST Framework", "PostgreSQL", "WebSocket", "Azure", "Vercel"],
      category: "Full Stack",
      status: "Completed",
      githubLink: "https://github.com/MoBahgat010/YOMAC",
      externalLink: null
    },
    {
      title: "E-commerce Platform API",
      description: "A scalable e-commerce solution with inventory management, payment processing, and order tracking capabilities.",
      image: "data:image/jpeg;base64,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",
      technologies: ["Django REST Framework", "MongoDB", "Redis", "Websockets"],
      category: "Backend",
      status: "Completed",
      githubLink: "https://github.com/MoBahgat010/E-Commerse-Django-API",
      externalLink: null
    },
    {
      title: "Spotify Clone",
      description: "Feature-rich clone of Spotify replicating core functionalities like playlist management, music player, and artist profiles using Redux Toolkit for optimized state management.",
      image: SpotifyCloneImage,
      technologies: ["ReactJS", "Redux Toolkit", "Tailwind CSS"],
      category: "Frontend",
      status: "Completed",
      githubLink: "https://github.com/MoBahgat010/E-Commerce-Node-API",
      externalLink: "https://spotify-clone-pearl-nine.vercel.app/"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800";
      case "Development":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex text-black items-center gap-1 text-blue-600 hover:text-blue-800">
                        <Github className="scale-[1.3]" size={16} />
                      </a>
                    )}
                    {project.externalLink && (
                      <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="flex text-black items-center gap-1 text-blue-600 hover:text-blue-800">
                        <ExternalLink className="scale-[1.3]" size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  {/* <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
