import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaArrowDown, FaDownload } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import gsap from 'gsap';
// Import your background image
import heroBg from '../assets/images/divya.png';

const Hero = () => {
  const moonRef = useRef(null);
  const profileRef = useRef(null);
  const firefliesRef = useRef([]);

  useEffect(() => {
    // Moon glow animation
    gsap.to(moonRef.current, {
      boxShadow: '0 0 80px rgba(192, 132, 252, 0.3), 0 0 160px rgba(192, 132, 252, 0.15)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Profile image float
    gsap.to(profileRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Fireflies animation
    firefliesRef.current.forEach((firefly, index) => {
      gsap.to(firefly, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-150, 50),
        opacity: gsap.utils.random(0.3, 1),
        duration: gsap.utils.random(4, 8),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      });
    });
  }, []);

 const socialIcons = [
  { icon: FaGithub, href: "https://github.com/divyaguled202", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/divya-guled-391477291/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/diu_011_?igsh=MTMzcjNkdDg0ZjEyaQ==",
    label: "Instagram",
  },
  {
    icon: FaDiscord,
    href: "https://discord.gg/sUjyFd9X",
    label: "Discord",
  },
];

  const typingWords = ['Computer Science Student', 'Web Developer', 'Tech Enthusiast'];

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1cUFXeHGDgpOO-rgwQhAS32jAcgPnbq4q/view?usp=drivesdk';
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Different for laptop and phone */}
      {/* Laptop: cover, Phone: contain */}
      <div 
        className="absolute inset-0 bg-no-repeat hidden sm:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Light Overlay for text readability - Laptop */}
      <div className="absolute inset-0 bg-[#050816]/10 hidden sm:block"></div>

      {/* Background Gradient - Laptop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/10 via-[#0a0f1f]/10 to-[#050816]/10 hidden sm:block"></div>

      {/* Background Elements - Laptop */}
      <div className="absolute inset-0 hidden sm:block">
        {/* Moon */}
        <div
          ref={moonRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] rounded-full bg-gradient-to-br from-[#C084FC]/10 to-[#8EEA84]/5 blur-3xl"
        ></div>

        {/* Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}

        {/* Fireflies */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`firefly-${i}`}
            ref={el => firefliesRef.current[i] = el}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#ded953]"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: 0.4,
              boxShadow: '0 0 10px #ded953, 0 0 20px #ded953',
              animation: `float ${Math.random() * 5 + 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Fog - Laptop */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816]/60 to-transparent hidden sm:block"></div>

      {/* ==================== PHONE LAYOUT ==================== */}
      {/* Phone: Image at top, text below */}
      <div className="block sm:hidden w-full min-h-screen flex flex-col">
        {/* Phone Image - Top with no space */}
        <div 
          className="w-full bg-no-repeat "
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '45vh',
            minHeight: '210px',
            maxHeight: '210px'
          }}
        ></div>

        {/* Phone Content - Below image */}
        <div className="flex-1 bg-[#050816] px-4 py-6 flex flex-col justify-start">
          <div className="w-full text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-['Cormorant_Garamond'] text-4xl font-bold text-white leading-tight mb-2"
            >
              Divya Guled
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-3"
            >
              <h2 className="font-['Outfit'] text-sm text-white/90">
                I'm a{' '}
                <span className="text-[#8EEA84] font-semibold inline-flex items-center">
                  <span className="typing-text">{typingWords[0]}</span>
                  <span className="typing-cursor"></span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-['Outfit'] text-white/80 text-xs max-w-full leading-relaxed mb-4"
            >
              Detail-oriented Computer Science Engineering student with a strong foundation in Python, web development, and database management. Passionate about building real-world applications and continuously learning modern technologies. Seeking internship or entry-level opportunities to grow as a software developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-4"
            >
              <button
                onClick={handleDownloadCV}
                className="px-5 py-2.5 bg-[#8EEA84] text-[#050816] font-['Inter'] font-semibold rounded-lg hover:bg-[#7dd974] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-xs"
              >
                <FaDownload size={12} />
                <span>Download CV</span>
              </button>
              <a
                href="#projects"
                className="px-5 py-2.5 border border-white/30 text-white font-['Inter'] font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-xs"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center justify-center gap-3"
            >
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#8EEA84]/30 border border-white/20 hover:border-[#8EEA84] text-white hover:text-[#8EEA84] transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==================== LAPTOP LAYOUT ==================== */}
      {/* Laptop Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-10 md:py-16 hidden sm:block">
        <div className="flex flex-col lg:flex-row items-center justify-end min-h-[70vh] lg:min-h-[75vh]">
          {/* Right Content - Always right-aligned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-2 sm:mb-3 drop-shadow-lg"
            >
              Divya Guled
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-3 sm:mb-4"
            >
              <h2 className="font-['Outfit'] text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 drop-shadow-lg">
                I'm a{' '}
                <span className="text-[#8EEA84] font-semibold inline-flex items-center">
                  <span className="typing-text">{typingWords[0]}</span>
                  <span className="typing-cursor"></span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-['Outfit'] text-white/80 text-xs sm:text-sm md:text-base max-w-full lg:max-w-xl lg:ml-auto leading-relaxed mb-4 sm:mb-6 drop-shadow-md"
            >
              Detail-oriented Computer Science Engineering student with a strong foundation in Python, web development, and database management. Passionate about building real-world applications and continuously learning modern technologies. Seeking internship or entry-level opportunities to grow as a software developer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6"
            >
              <button
                onClick={handleDownloadCV}
                className="px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-[#8EEA84] text-[#050816] font-['Inter'] font-semibold rounded-lg hover:bg-[#7dd974] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
              >
                <FaDownload size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                <span className="whitespace-nowrap">Download CV</span>
              </button>
              <a
                href="#projects"
                className="px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 border border-white/30 text-white font-['Inter'] font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4"
            >
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#8EEA84]/30 border border-white/20 hover:border-[#8EEA84] text-white hover:text-[#8EEA84] transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon size={14} className="sm:w-3.5 sm:h-3.5 md:w-[18px] md:h-[18px]" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Laptop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 sm:gap-1"
        >
          <span className="text-white/40 text-[10px] sm:text-xs font-['Outfit'] tracking-wider drop-shadow-md">Scroll</span>
          <FaArrowDown className="text-white/40 animate-bounce drop-shadow-md text-[10px] sm:text-xs md:text-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;