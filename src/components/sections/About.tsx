import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-sky-600 dark:text-sky-400">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-72 sm:h-96 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-600 dark:bg-sky-500 rounded-xl -z-10" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Mohd Arhan
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Mohd Arhan, a 16-year-old creator from Prayagraj, India. I am passionate about technology and design, and I love pushing boundaries to create innovative and exciting projects. Whether it's programming complex systems, designing in Blender, or crafting interactive web pages, I thrive on solving problems and bringing ideas to life. I'm always learning and exploring new tools and technologies to enhance my skillset and contribute to impactful projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Prayagraj, India</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Age</h4>
                  <p className="text-gray-600 dark:text-gray-400">16 Years</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">High School Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};