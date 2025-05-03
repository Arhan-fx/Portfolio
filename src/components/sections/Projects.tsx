import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Object Detection System',
      description: 'This is a python based program that helps authorities to scan any object in the range.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python'],
      demoUrl: 'https://www.youtube.com/watch?v=Md9pQftQMjs',
      githubUrl: 'https://github.com/Arhan-fx/Object-Detection-',
    },
    {
      id: 2,
      title: 'First Portfolio Website',
      description: 'A custom portfolio website that I used for a long time as I believed it is perfect.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML/CSS', 'JavaScript'],
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Periodic Atom Simulator',
      description: 'This is a python only based engine which simulates the atom of periodic table.',
      image: 'https://images.pexels.com/photos/6956783/pexels-photo-6956783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python' ],
      demoUrl: 'https://www.youtube.com/watch?v=z58WUSpJ14g',
      githubUrl: 'https://github.com/Arhan-fx/PeriodicAtomSimulation',
    },
    {
      id: 4,
      title: 'David AI Budget Consultant',
      description: 'An AI that runs on GROQ API and helps the user in his finacial conditions.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Python', 'API Integration', 'HTML/CSS'],
      demoUrl: 'https://www.youtube.com/watch?v=2aNdMYbwfXc',
      githubUrl: 'https://github.com/Arhan-fx/David-AI-Consultant',
    },
  ];
  
  const filters = ['all', 'Python', 'JavaScript', 'HTML/CSS', 'API Integration'];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <div className="flex space-x-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full text-blue-600 hover:bg-white transition-colors"
                          aria-label="View demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full text-blue-600 hover:bg-white transition-colors"
                          aria-label="View code on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};