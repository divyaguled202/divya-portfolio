import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaCode, 
  FaAward, 
  FaProjectDiagram, 
  FaHeart,
  FaStar,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';
import gsap from 'gsap';
// Import your local image
import profileImage from '../assets/images/about.png';

const About = () => {
  const statsRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);
  const butterflyRefs = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((stat, index) => {
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });
  }, []);

  // Fly butterflies away and return after 5 seconds
  useEffect(() => {
    if (isHovered) {
      // Fly away
      butterflyRefs.current.forEach((butterfly, index) => {
        if (butterfly) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 80 + Math.random() * 120;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const rotation = Math.random() * 720 - 360;
          
          gsap.to(butterfly, {
            x: x,
            y: y,
            rotation: rotation,
            scale: 1.5 + Math.random() * 0.5,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.05,
          });
        }
      });

      // Return after 5 seconds
      const timer = setTimeout(() => {
        butterflyRefs.current.forEach((butterfly) => {
          if (butterfly) {
            gsap.to(butterfly, {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 0.7,
              duration: 1.2,
              ease: 'back.out(1.7)',
            });
          }
        });
        setIsHovered(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const stats = [
    { icon: FaCode, value: '3+', label: 'Years of Learning' },
    { icon: FaProjectDiagram, value: '15+', label: 'Projects Built' },
    { icon: FaUserGraduate, value: '10+', label: 'Collaborations' },
    { icon: FaAward, value: '5', label: 'Achievements' },
  ];

  const qualities = [
    { icon: FaHeart, text: 'Passionate about technology', color: '#FF6B6B' },
    { icon: FaStar, text: 'Always learning new things', color: '#FECA57' },
    { icon: FaRocket, text: 'Building real-world solutions', color: '#48DBFB' },
    { icon: FaLightbulb, text: 'Creative problem solver', color: '#FF9FF3' },
  ];

  // Butterfly positions - exactly on the border
  const butterflyPositions = [
  // Top edge
  { top: '-8%', left: '50%', transform: 'translateX(-50%)' },
  { top: '-6%', left: '33%' },
  { top: '-6%', left: '67%' },
  
  // Bottom edge
  { bottom: '-8%', left: '50%', transform: 'translateX(-50%)' },
  { bottom: '-5%', left: '15%' },
  { bottom: '-5%', left: '85%' },
  { bottom: '-6%', left: '67%' },
  
  // Left edge
  { left: '-8%', top: '50%', transform: 'translateY(-50%)' },
  { left: '-5%', top: '20%' },
  { left: '-5%', top: '80%' },
  { left: '-6%', top: '60%' },
  
  // Right edge
  { right: '-8%', top: '50%', transform: 'translateY(-50%)' },
  { right: '-5%', top: '20%' },
  { right: '-6%', top: '40%' },
  { right: '-6%', top: '60%' },
  
  // Corners
  { top: '-3%', left: '3%' },
  { top: '-3%', right: '3%' },
  { bottom: '-3%', right: '3%' },
];

  const butterflyColors = ['#8EEA84', '#C084FC', '#FF6B6B', '#FECA57', '#48DBFB', '#FF9FF3', '#FFD93D', '#6BCB77', '#FF4757', '#2ED573', '#FF9FF3', '#48DBFB'];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#050816] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C084FC]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8EEA84]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Left - Image with Butterfly Border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:w-auto"
          >
            <div 
              className="relative max-w-sm mx-auto lg:mx-0"
              onMouseEnter={() => {
                if (!isHovered) setIsHovered(true);
              }}
              onTouchStart={() => {
                if (!isHovered) setIsHovered(true);
              }}
            >
              {/* Glow behind image */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#8EEA84]/20 to-[#C084FC]/20 rounded-2xl blur-xl"></div>
              
              {/* Butterflies on border - Accurate positions */}
              {butterflyPositions.map((pos, index) => {
                const color = butterflyColors[index % butterflyColors.length];
                return (
                  <div
                    key={index}
                    ref={el => butterflyRefs.current[index] = el}
                    className="absolute z-20"
                    style={{
                      top: pos.top || 'auto',
                      bottom: pos.bottom || 'auto',
                      left: pos.left || 'auto',
                      right: pos.right || 'auto',
                      transform: pos.transform || 'none',
                      opacity: 0.7,
                    }}
                  >
                    <GiButterfly
                      className="text-2xl sm:text-3xl"
                      style={{
                        color: color,
                        filter: `drop-shadow(0 0 10px ${color}60)`,
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                );
              })}

              {/* Image Container */}
              <div className="relative bg-[#101827] rounded-2xl overflow-hidden border-2 border-[#8EEA84]/20 p-2 sm:p-3 md:p-4">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                  <img 
                    src={profileImage}
                    alt="Divya Guled - Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 sm:space-y-8 w-full"
          >
            {/* Introduction */}
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-white font-semibold mb-3">
                Hello, I'm Divya 👋
              </h3>
              <p className="font-['Outfit'] text-gray-300 leading-relaxed text-sm sm:text-base">
                A passionate Computer Science Engineering student who loves turning ideas into reality through code. I believe in the power of technology to solve real-world problems and make a difference.
              </p>
            </div>

            {/* My Journey */}
            <div className="bg-[#101827]/50 border border-white/5 rounded-xl p-4 sm:p-5 hover:border-[#8EEA84]/20 transition-all duration-300">
              <h4 className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-[#8EEA84] font-semibold mb-2">
                My Journey
              </h4>
              <p className="font-['Outfit'] text-gray-400 leading-relaxed text-sm sm:text-base">
                From writing my first line of code to building full-stack applications, I've been on an exciting journey of continuous learning. I specialize in Python, web development, and database management, always exploring new technologies to expand my skills.
              </p>
            </div>

            {/* What Drives Me */}
            <div>
              <h4 className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-[#C084FC] font-semibold mb-3">
                What Drives Me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-[#101827] border border-white/5 rounded-xl p-3 sm:p-4 hover:border-[#C084FC]/30 transition-all duration-300 group"
                    >
                      <Icon className="text-xl sm:text-2xl flex-shrink-0" style={{ color: item.color }} />
                      <span className="font-['Outfit'] text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* My Goal */}
            <div className="bg-gradient-to-r from-[#8EEA84]/10 to-[#C084FC]/10 border border-white/5 rounded-xl p-4 sm:p-5">
              <h4 className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white font-semibold mb-2">
                My Goal
              </h4>
              <p className="font-['Outfit'] text-gray-400 leading-relaxed text-sm sm:text-base">
                To secure an internship or entry-level position where I can contribute my skills, learn from experienced professionals, and grow as a software developer while building impactful solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;