import React from 'react';
import { Code2, Database, LineChart, Table, Lightbulb, Binary } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const skills = [
  { name: 'Python', icon: Code2, category: 'Programming' },
  { name: 'MySQL', icon: Database, category: 'Database' },
  { name: 'R', icon: Binary, category: 'Programming' },
  { name: 'Statistics', icon: LineChart, category: 'Analysis' },
  { name: 'Excel', icon: Table, category: 'Tools' },
  { name: 'Power BI & Tableau', icon: Lightbulb, category: 'Visualization' },
];

export function Skills() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50" id="skills">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-900">Technical Skills</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-teal-500 to-purple-500 p-3 rounded-lg">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-teal-900">{skill.name}</h3>
                  <p className="text-teal-600">{skill.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}