import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import data from '../data/data.json';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <div className="h-1.5 w-20 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#0b0f1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-accent/30 transition-all flex flex-col group cursor-pointer"
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-secondary/50 text-accent text-[10px] font-bold uppercase tracking-wider rounded-md border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-gray-500 font-bold self-center">+{project.techStack.length - 3} more</span>
                  )}
                </div>
              </div>
              
              <div className="px-8 py-4 bg-[#1a1f2e]/50 flex justify-between items-center border-t border-gray-800">
                <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                  <FaGithub className="mr-2" /> Code
                </div>
                <span className="text-accent text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
