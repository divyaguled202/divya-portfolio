import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
  {
    school: 'Sanjeevan Group of Institutions, Panhala',
    degree: 'B.E. in Computer Science Engineering',
    period: '2023 - 2027',
    description: 'Currently pursuing Bachelor of Engineering in Computer Science Engineering with a CGPA of 7.14. Focused on web development, databases, and software development fundamentals.',
    achievements: [
      'CGPA: 7.14',
      'Expected Graduation: July 2027',
      'Computer Science Engineering',
      'DBATU University'
    ]
  }
];
  return (
    <section id="education" className="py-20 bg-[#050816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#101827] border border-white/5 rounded-2xl p-8 hover:border-[#8EEA84]/20 transition-all duration-300 flex flex-col items-center text-center w-full max-w-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-[#8EEA84]/10 rounded-xl">
                  <FaGraduationCap className="text-[#8EEA84] text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
                    {edu.school}
                  </h3>
                  <p className="font-['Outfit'] text-[#8EEA84] text-sm font-medium">
                    {edu.degree}
                  </p>
                  <p className="font-['Outfit'] text-gray-500 text-sm mt-1">
                    {edu.period}
                  </p>
                </div>
              </div>

              <p className="font-['Outfit'] text-gray-400 text-sm leading-relaxed mb-4">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#050816] border border-white/5 rounded-full text-xs text-gray-400 font-['Outfit']"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;