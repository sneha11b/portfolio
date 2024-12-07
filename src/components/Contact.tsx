import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:sneha.bhunia@example.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/snehabhunia', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/snehabhunia', label: 'GitHub' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-600 to-purple-700 text-white" id="contact">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <link.icon className="w-8 h-8" />
                </div>
                <span className="block mt-2 text-sm opacity-80">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}