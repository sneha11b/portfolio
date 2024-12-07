import React from 'react';
import { Globe, Car, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const projects = [
  {
    title: 'Real-Time Language Translation Tool',
    description: 'Developed an AI-powered translation system using Python and deep learning, achieving 95% accuracy across 10 languages.',
    icon: Globe,
    tech: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    title: 'Autonomous Vehicle Data Analysis',
    description: 'Analyzed sensor data from self-driving cars to optimize decision-making algorithms and improve safety metrics by 40%.',
    icon: Car,
    tech: ['R', 'Computer Vision', 'Statistical Analysis'],
  },
  {
    title: 'Consumer Behavior Analytics',
    description: 'Created predictive models for customer purchasing patterns, increasing conversion rates by 25% through targeted recommendations.',
    icon: Users,
    tech: ['Python', 'MySQL', 'Machine Learning'],
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Featured Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-teal-50 to-purple-50 p-8 rounded-xl shadow-lg"
            >
              <div className="bg-gradient-to-br from-teal-500 to-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <project.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-900">{project.title}</h3>
              <p className="text-teal-700 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white text-teal-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}