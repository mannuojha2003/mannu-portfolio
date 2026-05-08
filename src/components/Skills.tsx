import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaTerminal 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import data from '../data/data.json';

const iconMap: { [key: string]: any } = {
  Python: <FaPython />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  ReactJS: <FaReact />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  'Tailwind CSS': <SiTailwindcss />,
  Git: <FaGitAlt />,
  'VS Code': <FaTerminal />,
};

const Skills: React.FC = () => {
  const allSkills = [
    ...data.skills.Languages,
    ...data.skills.FrameworksTools,
    ...data.skills.DeveloperTools
  ];

  return (
    <section id="skills" className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
          <div className="h-1.5 w-20 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary/20 border border-gray-800 rounded-2xl hover:border-accent/50 hover:bg-secondary/40 transition-all group text-center"
            >
              <div className="text-4xl text-gray-400 group-hover:text-accent transition-colors mb-4 flex justify-center">
                {iconMap[skill] || <FaTerminal />}
              </div>
              <p className="text-sm font-medium text-gray-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
