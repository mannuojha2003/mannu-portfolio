import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-mono mb-4">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {data.personal.name}
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            {data.personal.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-white font-bold rounded-lg hover:border-accent hover:text-accent transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#1a1f2e] px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 text-xs font-mono text-gray-500">zsh — mannu@portfolio</div>
            </div>
            <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-base leading-relaxed">
              <div className="flex">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-accent mr-2">~</span>
                <span className="text-white">whoami</span>
              </div>
              <div className="text-gray-400 mb-4">
                {data.personal.overview.split('.')[0]}.
              </div>

              <div className="flex">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-accent mr-2">~</span>
                <span className="text-white">ls skills/</span>
              </div>
              <div className="text-gray-400 mb-4">
                {data.skills.Languages.join(', ')} ...
              </div>

              <div className="flex">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-accent mr-2">~</span>
                <span className="text-white">cd projects/</span>
              </div>
              <div className="flex">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-accent mr-2">projects</span>
                <span className="text-white ml-2 animate-pulse">|</span>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg -z-10 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
