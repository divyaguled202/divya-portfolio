import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
  {
    company: 'YHills',
    position: 'Full Stack Web Development Intern',
    period: 'Jul 2024 - Oct 2024',
    description: [
      'Completed a 4-month internship focused on full stack web development',
      'Built real-world projects using HTML, CSS, JavaScript, React, Node.js, and MongoDB',
      'Learned backend integration and deployment practices',
      'Improved problem-solving and development skills through hands-on training'
    ]
  },
  {
    company: 'Self Projects',
    position: 'Frontend & Full Stack Developer',
    period: '2023 - Present',
    description: [
      'Developed multiple responsive web applications including Pet Shop and Amazon Clone',
      'Designed user-friendly UI with modern layouts and animations',
      'Implemented frontend features and backend integration using Node.js and MongoDB',
      'Focused on responsive design for mobile, tablet, and desktop devices'
    ]
  },
  {
    company: 'Hackathons & Programs',
    position: 'Participant & Contributor',
    period: '2025 - Present',
    description: [
      'Participated in national-level hackathons including MIRIT Hyderabad',
      'Contributed as GSSOC’25 Contributor and Ambassador',
      'Participated in Smart India Hackathon (Internal Round)',
      'Engaged in cloud, AI, and real-world problem-solving events'
    ]
  }
];

  return (
    <section id="experience" className="py-20 bg-[#0a0f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8EEA84] to-[#C084FC] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 rounded-full bg-[#8EEA84] border-4 border-[#050816] transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-[#8EEA84] animate-ping opacity-50"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-12 md:pl-12 text-left">
                  <div className="bg-[#101827] border border-white/5 rounded-2xl p-6 hover:border-[#8EEA84]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaBriefcase className="text-[#8EEA84] text-xl" />
                      <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
                        {exp.position}
                      </h3>
                    </div>
                    <p className="font-['Outfit'] text-[#8EEA84] text-sm mb-2">
                      {exp.company}
                    </p>
                    <p className="font-['Outfit'] text-gray-500 text-sm mb-4">
                      {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="font-['Outfit'] text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-[#8EEA84] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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