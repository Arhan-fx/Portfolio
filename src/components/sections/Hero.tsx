import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="text-sky-600 dark:text-sky-400">Mohd Arhan</span>
            <br />
            <span className="text-sky-600 dark:text-sky-400">Creative</span> Developer
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I design and build exceptional digital experiences 
            that are beautiful, functional, and user-centered.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-sky-600 dark:text-sky-400 font-medium shadow-lg hover:shadow-xl transition-all border border-sky-200 dark:border-gray-700"
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <ArrowDownCircle className="w-10 h-10 text-sky-600 dark:text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};