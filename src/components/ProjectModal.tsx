import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  techStack: string[];
  description: string;
  github_url: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b0f1a] border border-gray-800 rounded-3xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors z-10"
          >
            <FaTimes size={20} />
          </button>

          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-white">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-md border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
              {/* You can add more detailed info here if available in data.json */}
              <p className="text-gray-500 text-sm mt-4">
                This project focuses on solving real-world challenges using modern web technologies 
                and efficient backend architectures. It demonstrates full-stack proficiency 
                and a commitment to high-quality code and user experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-all flex-1"
              >
                <FaGithub className="mr-3" /> View Source Code
              </a>
              <button
                onClick={onClose}
                className="px-8 py-3 border border-gray-800 text-white font-bold rounded-xl hover:bg-secondary/30 transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
