import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work & <span className="text-accent">Education</span></h2>
          <div className="h-1.5 w-20 bg-accent rounded-full" />
        </div>

        <div className="max-w-4xl">
          {/* Internship */}
          <div className="mb-16">
            <h3 className="text-accent font-mono mb-8 uppercase tracking-[0.2em] text-sm">Professional Experience</h3>
            {data.internships.map((job) => (
              <motion.div
                key={job.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_#38bdf8]" />
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">{job.organization}</h4>
                  <span className="text-sm font-mono text-gray-500">{job.duration}</span>
                </div>
                <h5 className="text-accent text-sm mb-4">{job.role}</h5>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-accent font-mono mb-8 uppercase tracking-[0.2em] text-sm">Education</h3>
            {data.education.map((edu) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l border-gray-800 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600" />
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{edu.institution}</h4>
                  <span className="text-sm font-mono text-gray-500">{edu.duration}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <p className="text-gray-300">{edu.degree}</p>
                   <p className="text-accent font-bold">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
