import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovators Inc",
      position: "Senior Android Developer",
      period: "2021 - Present",
      description: "Led the development of multiple successful apps with over 1M+ downloads. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture"]
    },
    {
      company: "Mobile Solutions Ltd",
      position: "Android Developer",
      period: "2019 - 2021",
      description: "Developed and maintained multiple Android applications. Improved app performance by 40% through optimization techniques.",
      technologies: ["Java", "Kotlin", "RxJava", "Room DB"]
    },
    {
      company: "StartUp Mobile",
      position: "Junior Android Developer",
      period: "2018 - 2019",
      description: "Contributed to the development of innovative mobile applications. Collaborated with cross-functional teams.",
      technologies: ["Java", "SQLite", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute left-0 mt-1">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div className="ml-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-indigo-600 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;