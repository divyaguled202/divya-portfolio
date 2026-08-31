import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';
import petShopImg from '../assets/images/pet.png';
import amazonImg from '../assets/images/amazon.png';
import campusImg from '../assets/images/campusconnect.png';
import gradeSystemImg from '../assets/images/grade.png';
import  portfolioImg from '../assets/images/portfolio.png';
const Projects = () => {
  const projects = [
  {
    title: 'Pet Shop Website',
    description: 'A responsive pet shop website with product listing, category filtering, and detailed product pages using local storage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/divyaguled202',
    demo: 'https://petwebsite-lake.vercel.app/',
    image: petShopImg
  },
  {
    title: 'Amazon Clone',
    description: 'Frontend clone of Amazon with product layout, cart UI, and responsive design built using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/divyaguled202',
    demo: 'https://amazon-clone-2gj2jh4ku-divya-8b20.vercel.app/',
    image: amazonImg
  },
  {
     title: 'CampusConnect Platform',
    description: 'A student platform for managing activities, communication, and campus workflows with a simple and user-friendly interface.',
    tech: ['React', 'Firebase', 'JavaScript'],
    github: 'https://github.com/divyaguled202',
    demo: 'https://compus-connect-seven.vercel.app/',
    image: campusImg
  },
  {
  title: 'Student Grade System',
  description: 'A modern dashboard to calculate student grades, track performance, and generate professional report cards.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  github: 'https://github.com/divyaguled202/student-grade-system',
  demo: 'https://student-grade-system-pearl.vercel.app/',
  image: gradeSystemImg
},
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with animations, responsive design, and modern UI built using React and Tailwind.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/divyaguled202',
    demo: 'https://divya-portfolio-six-beta.vercel.app/',
    image: portfolioImg
  }
  
];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#050816] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C084FC]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8EEA84]/5 rounded-full blur-3xl"></div>

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
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
          <GiButterfly className="text-[#8EEA84] text-2xl sm:text-3xl mx-auto mt-3 sm:mt-4 opacity-50 animate-pulse" />
          <p className="font-['Outfit'] text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A selection of projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-[#101827] border border-white/5 rounded-2xl overflow-hidden hover:border-[#8EEA84]/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-44 md:h-48 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover"
/>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#8EEA84] hover:text-[#050816] transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#8EEA84] hover:text-[#050816] transition-all duration-300 transform hover:scale-110"
                  >
                    <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="font-['Outfit'] text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#050816] border border-white/5 rounded-full text-[10px] sm:text-xs text-gray-400 font-['Outfit']"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8EEA84]/10 text-[#8EEA84] border border-[#8EEA84]/20 rounded-lg hover:bg-[#8EEA84] hover:text-[#050816] transition-all duration-300 font-['Inter'] text-[10px] sm:text-sm font-semibold"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 font-['Inter'] text-[10px] sm:text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;