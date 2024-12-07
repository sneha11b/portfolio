import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-purple-700 text-white min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <BarChart2 className="w-20 h-20 mb-8" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sneha Bhunia
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 text-teal-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Data Analyst
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-2xl text-teal-50 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Transforming complex data into actionable insights with 2 years of experience
            in Python, MySQL, and advanced analytics tools. Specializing in predictive modeling
            and data visualization.
          </motion.p>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-teal-200" />
      </motion.div>
    </header>
  );
}