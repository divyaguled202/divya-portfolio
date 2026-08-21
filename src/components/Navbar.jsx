import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [butterflies, setButterflies] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createButterflyBurst = () => {
    const rect = logoRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsAnimating(true);

    const newButterflies = [];
    const colors = ['#8EEA84', '#C084FC', '#FF6B6B', '#FECA57', '#48DBFB', '#FF9FF3', '#FFD93D', '#6BCB77', '#FF4757', '#2ED573'];
    
    const heartPoints = [];
    
    for (let i = 0; i < 80; i++) {
      const t = (i / 80) * Math.PI * 2;
      const scale = 22;
      const x = 16 * Math.pow(Math.sin(t), 3) * scale;
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * scale;
      heartPoints.push({ x, y });
    }
    
    for (let i = 0; i < 120; i++) {
      const t = Math.random() * Math.PI * 2;
      const scale = 22;
      const baseX = 16 * Math.pow(Math.sin(t), 3) * scale;
      const baseY = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * scale;
      
      const innerScale = 0.2 + Math.random() * 0.7;
      const x = baseX * innerScale;
      const y = baseY * innerScale;
      
      const randomOffset = 2 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      heartPoints.push({ 
        x: x + Math.cos(angle) * randomOffset, 
        y: y + Math.sin(angle) * randomOffset 
      });
    }

    for (let i = 0; i < 200; i++) {
      const startAngle = Math.random() * Math.PI * 2;
      const startDistance = 20 + Math.random() * 80;
      const startX = Math.cos(startAngle) * startDistance;
      const startY = Math.sin(startAngle) * startDistance;
      
      const heartIndex = Math.floor(Math.random() * heartPoints.length);
      const targetX = heartPoints[heartIndex].x;
      const targetY = heartPoints[heartIndex].y;
      
      const midAngle = Math.random() * Math.PI * 2;
      const midDistance = 150 + Math.random() * 350;
      const midX = Math.cos(midAngle) * midDistance;
      const midY = Math.sin(midAngle) * midDistance;
      
      const size = 10 + Math.random() * 14;
      const rotation = Math.random() * 360;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = 2 + Math.random() * 1.5;
      const duration = 7 + Math.random() * 1;

      newButterflies.push({
        id: Date.now() + i,
        startX,
        startY,
        targetX,
        targetY,
        midX,
        midY,
        size,
        rotation,
        color,
        delay,
        duration,
        scale: 0.4 + Math.random() * 0.4,
        wingSpeed: 0.6 + Math.random() * 0.8,
        heartIndex,
      });
    }

    setButterflies(newButterflies);

    setTimeout(() => {
      setButterflies([]);
      setIsAnimating(false);
    }, 11000);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      createButterflyBurst();
    }, 50);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <>
      {/* Butterfly Container - Full Screen */}
      <div className="fixed inset-0 pointer-events-none z-[999] w-screen h-screen overflow-hidden">
        {butterflies.map((butterfly) => (
          <div
            key={butterfly.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `butterflyFlyToHeart ${butterfly.duration}s cubic-bezier(0.25, 0.8, 0.35, 1) forwards`,
              animationDelay: `${butterfly.delay}s`,
              opacity: 0,
              '--start-x': `${butterfly.startX}px`,
              '--start-y': `${butterfly.startY}px`,
              '--mid-x': `${butterfly.midX}px`,
              '--mid-y': `${butterfly.midY}px`,
              '--target-x': `${butterfly.targetX}px`,
              '--target-y': `${butterfly.targetY}px`,
              '--scale': butterfly.scale,
            }}
          >
            <GiButterfly
              style={{
                fontSize: `${butterfly.size}px`,
                color: butterfly.color,
                transform: `rotate(${butterfly.rotation}deg)`,
                filter: 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 50px currentColor)',
                animation: `butterflyWingHeart ${butterfly.wingSpeed}s ease-in-out infinite`,
                animationDelay: `${butterfly.delay}s`,
              }}
            />
          </div>
        ))}
      </div>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050816]/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with Butterfly Icon */}
            <a 
              ref={logoRef}
              href="#home" 
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                  isAnimating ? 'bg-[#C084FC]/40 scale-150' : 'bg-[#8EEA84]/20 group-hover:bg-[#C084FC]/20'
                }`}></div>
                <GiButterfly className={`text-2xl sm:text-3xl transition-all duration-500 transform ${
                  isAnimating ? 'text-[#C084FC] scale-110 rotate-12' : 'text-[#8EEA84] group-hover:text-[#C084FC] group-hover:scale-110 group-hover:rotate-12'
                }`} />
              </div>
              <span className={`font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                isAnimating ? 'text-[#C084FC]' : 'text-white group-hover:text-[#8EEA84]'
              }`}>
                HOME
              </span>
            </a>

            {/* Desktop Menu with Flying Butterfly on Hover */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#8EEA84] font-['Outfit'] text-xs lg:text-sm tracking-wide transition-all duration-300 relative group"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <span className="relative inline-block transition-all duration-300 group-hover:translate-y-[-2px]">
                    {link.name}
                  </span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8EEA84] to-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
                  {/* Flying Butterfly on hover */}
                  <GiButterfly 
                    className="absolute -top-8 right-0 text-[#8EEA84] opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm"
                    style={{
                      filter: 'drop-shadow(0 0 15px #8EEA84)',
                      animation: 'butterflyFly 2s ease-in-out infinite',
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button with Butterfly Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none relative group"
              aria-label="Toggle menu"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isOpen ? 'filter blur-xl bg-[#C084FC]/50 scale-150' : ' filter blur-lg bg-[#8EEA84]/50 scale-100'
                }`}></div>
                <GiButterfly 
                  className={`relative z-5 text-5xl transition-all duration-500 rounded-full ${
                    isOpen ? 'text-[#C084FC] rotate-180 scale-110' : 'text-[#8EEA84] rotate-0 scale-100'
                  } group-hover:scale-110`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 backdrop-blur-lg  bg-opacity-50 shadow-2xl transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
          style={{
            top: '100%',
          }}
        >
    
          
          <div className="flex flex-col px-4 py-2 space-y-1   bg-gradient-to-r from-[#0000]/55 to-[#0000]/55 backdrop-blur-lg border-t border-white/5 rounded-b-2xl">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={` bold text-white  hover:text-[#8EEA84] font-['cormorant']  bg-gradient-to-r from-[#8EEA84]/15 to-[#C084FC]/45 rounded-tl-2xl rounded-br-2xl text-base tracking-wide transition-all duration-300 py-2.5 border-b  last:border-0 relative group overflow-hidden ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <span className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    {/* Flying Butterfly on mobile hover */}
                    <GiButterfly 
                      className="text-[#8EEA84] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12" 
                      size={14}
                      style={{
                        animation: 'butterflyFly 2s ease-in-out infinite',
                      }}
                    />
                    {link.name}
                  </span>
                  <GiButterfly 
                    className="text-[#8EEA84] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4" 
                    size={14}
                    style={{
                      animation: 'butterflyFly 2s ease-in-out infinite',
                    }}
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8EEA84]/5 to-[#C084FC]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes butterflyFly {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-8px) rotate(10deg) scale(1.1);
          }
          50% {
            transform: translateY(0px) rotate(-5deg) scale(0.9);
          }
          75% {
            transform: translateY(-5px) rotate(8deg) scale(1.05);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
        }

        @keyframes butterflyFlyToHeart {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
          }
          15% {
            opacity: 1;
            transform: translate(calc(-50% + var(--start-x)), calc(-50% + var(--start-y))) scale(calc(0.6 * var(--scale))) rotate(45deg);
          }
          40% {
            opacity: 1;
            transform: translate(calc(-50% + var(--mid-x)), calc(-50% + var(--mid-y))) scale(calc(1 * var(--scale))) rotate(180deg);
          }
          70% {
            opacity: 1;
            transform: translate(calc(-50% + var(--target-x) * 0.5), calc(-50% + var(--target-y) * 0.5)) scale(calc(0.9 * var(--scale))) rotate(300deg);
          }
          90% {
            opacity: 1;
            transform: translate(calc(-50% + var(--target-x)), calc(-50% + var(--target-y))) scale(calc(1.1 * var(--scale))) rotate(360deg);
          }
          100% {
            opacity: 1;
            transform: translate(calc(-50% + var(--target-x)), calc(-50% + var(--target-y))) scale(calc(1.2 * var(--scale))) rotate(380deg);
          }
        }
        
        @keyframes butterflyWingHeart {
          0%, 100% {
            transform: rotate(var(--rotation)) scale(1) skewX(0deg);
          }
          25% {
            transform: rotate(calc(var(--rotation) + 20deg)) scale(1.25) skewX(6deg);
          }
          50% {
            transform: rotate(calc(var(--rotation) - 8deg)) scale(0.85) skewX(-6deg);
          }
          75% {
            transform: rotate(calc(var(--rotation) + 12deg)) scale(1.1) skewX(4deg);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;