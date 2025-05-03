import React from 'react';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML', level: 60 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Blender', level: 85 },
  ];
  
  const tools = [
    'VS Code',
    'Git',
    'GitHub',
    'Blender',
    'Python IDLE',
    'Eclipse',
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-sky-600 dark:text-sky-400">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sky-600 dark:bg-sky-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Tools & Software
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
                Soft Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {['Problem Solving', 'Creativity', 'Quick Learning', 'Adaptability'].map((skill) => (
                  <div 
                    key={skill}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};