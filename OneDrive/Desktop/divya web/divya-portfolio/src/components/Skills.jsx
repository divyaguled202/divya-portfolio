import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaDocker,
  FaAws,
  FaDatabase,
  FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiGraphql
} from 'react-icons/si';
import { GiButterfly } from 'react-icons/gi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: FaGit, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Database', icon: FaDatabase, color: '#4479A1' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-[#8EEA84]/5 rounded-full blur-3xl"></div>
      
      {/* Decorative butterflies */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse">
        <GiButterfly className="text-[#8EEA84] text-3xl sm:text-4xl" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse delay-300">
        <GiButterfly className="text-[#C084FC] text-3xl sm:text-4xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            My Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
          <GiButterfly className="text-[#8EEA84] text-2xl sm:text-3xl mx-auto mt-3 sm:mt-4 opacity-50 animate-pulse" />
          <p className="font-['Outfit'] text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#101827]/50 border border-white/5 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-[#8EEA84]/20 transition-all duration-300"
            >
              <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className=" rounded-xl p-3 sm:p-4 text-center border border-white/35 hover:border-[#8EEA84]/60 hover:border-2 transition-all duration-300 cursor-pointer group"
                    >
                      <Icon
                        className="text-2xl sm:text-3xl mx-auto mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-[#8EEA84] group-hover:fill-current"
                        style={{ color: skill.color }}
                      />
                      <div className="font-['Outfit'] text-[10px] sm:text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;