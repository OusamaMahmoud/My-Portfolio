import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fitness Tracker Pro",
      description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
      tech: ["Kotlin", "MVVM", "Room DB", "WorkManager"],
      playStore: "#",
      github: "#"
    },
    {
      title: "Smart Home Controller",
      description: "IoT-enabled home automation app with real-time device control and energy monitoring.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      tech: ["Kotlin", "Clean Architecture", "Bluetooth LE", "Firebase"],
      playStore: "#",
      github: "#"
    },
    {
      title: "Crypto Portfolio",
      description: "Cryptocurrency portfolio tracker with real-time price updates and analytics.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
      tech: ["Kotlin", "Coroutines", "Retrofit", "MPAndroidChart"],
      playStore: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.playStore}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Play Store
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;